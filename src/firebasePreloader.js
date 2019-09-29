import firebase from 'firebase/app'

var firebaseImages = {}
var firebaseCollections = {}

//preloads all images used on website
//MAKE SURE THE VALUES FOR THE IMAGE NAMES IN FIREBASE'S DATABASE MATCH EXACTLY W/ IMAGE NAME IN STORAGE (CAUSE CASE SENSITIVE)
const preloadFirebaseData = (database) => {
    const storageRef = firebase.storage().ref()
    const imagesFolder = storageRef.child('images')

    var promise = new Promise((resolve, reject) => {
        var collections2Load = {
            images: { ready: false, total: 0, counter: 0 },
            gameDivs: { ready: false, total: 2, counter: 0 } // in the case of regular collections the total is the count for any sub collections that require a seperate query
        }

        const setDownloadLink = (key, value) => {
            imagesFolder.child(value).getDownloadURL().then((url) => {
                firebaseImages[key.toLowerCase()] = url

                var imageDum = new Image();

                imageDum.onload = function () {
                    collections2Load['images']['counter']++

                    if (collections2Load['images']['counter'] === collections2Load['images']['total']) {
                        collections2Load['images']['ready'] = true;
                        checkCompletion()
                    }
                }

                imageDum.src = url
            }).catch(function (error) {
                console.log(error)

                collections2Load['images']['counter']++

                if (collections2Load['images']['counter'] === collections2Load['images']['total']) {
                    collections2Load['images']['ready'] = true;
                    checkCompletion()
                }
            });
        }

        // preload in images ------------------------------------

        database.collection('images').get().then(snapshot => {
            const docs = []

            snapshot.forEach((doc) => {
                const data = doc.data()

                collections2Load['images']['total'] += Object.keys(data).length;

                docs.push(data)
            })

            for (var i = 0; i < docs.length; i++) {
                for (var obj in docs[i]) {
                    setDownloadLink(obj, docs[i][obj])
                }
            }
        })

        // preload in other wanted collections ------------------------------------

        // ------------------------- GameDivs -------------------------------------
        // pretty sloppy code for preloading nested collections but whatchu gonna do
        database.collection('GameDivs').get().then((snapshot) => {
            snapshot.forEach((doc) => {
                firebaseCollections['gamedivs'] = {}
                firebaseCollections['gamedivs'][doc.id] = doc.data()

                // preload any sub collections -------------------------------------------------------

                database.collection('GameDivs/' + doc.id + '/summary').get().then(snapshot2 => {
                    snapshot2.forEach(doc2 => {
                        firebaseCollections['gamedivs'][doc.id]['summary'] = doc2.data()
                    })

                    collections2Load['gameDivs']['counter']++

                    if (collections2Load['gameDivs']['counter'] === collections2Load['gameDivs']['total']) {
                        collections2Load['gameDivs']['ready'] = true
                        checkCompletion()
                    }
                })

                database.collection('GameDivs/' + doc.id + '/supplementalMaterials').get().then(snapshot2 => {
                    firebaseCollections['gamedivs'][doc.id]['supplementalMaterials'] = []

                    snapshot2.forEach(doc2 => {
                        firebaseCollections['gamedivs'][doc.id]['supplementalMaterials'].push(doc2.data())
                    })

                    collections2Load['gameDivs']['counter']++

                    if (collections2Load['gameDivs']['counter'] === collections2Load['gameDivs']['total']) {
                        collections2Load['gameDivs']['ready'] = true
                        checkCompletion()
                    }
                })
            })
        })

        // check to see if all images and wanted collections are cached-----------

        const checkCompletion = () => {
            const collections = Object.values(collections2Load);

            for (var i = 0; i < collections.length; i++) {
                if (collections[i]['ready'] === false) {
                    return
                }
            }

            resolve()
        }
    })

    return promise
}

const getImage = (imageKey) => {
    return firebaseImages[imageKey.toLowerCase()]
}

const getCollection = (collectionKey) => {
    return firebaseCollections[collectionKey.toLowerCase()]
}

export default preloadFirebaseData
export { getImage }
export { getCollection }
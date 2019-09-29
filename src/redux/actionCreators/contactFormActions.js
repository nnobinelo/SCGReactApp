import firebase from 'firebase/app'

export const sendForm = (form) => {
    return (dispatch) => {
        firebase.firestore().collection('contactForms').add(form)
            .then(() => {
                dispatch({ type: 'SEND_SUCCESS', contactForm: form })
            }).catch((error)=>
                {dispatch({type:'SEND_FAILURE', error})})
    }
}

export default sendForm
import smoothscroll from 'smoothscroll-polyfill';
 
smoothscroll.polyfill();

const InitializeScrollTriggers = () => {
    window.addEventListener('scroll', () => {
        const pageYOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0

        if (pageYOffset >= 50) {
            document.getElementById('navbarAnim').classList.remove('shrinkNav')
            document.getElementById('navbarAnim').classList.add('growNav')
        }
        else if (pageYOffset < 50) {
            document.getElementById('navbarAnim').classList.remove('growNav')
            document.getElementById('navbarAnim').classList.add('shrinkNav')
        }

        if (pageYOffset >= 460) {
            document.getElementById('scrollButton').classList.remove('hideScrollButton')
            document.getElementById('scrollButton').classList.add('showScrollButton')
        }
        else if (pageYOffset < 460) {
            document.getElementById('scrollButton').classList.remove('showScrollButton')
            document.getElementById('scrollButton').classList.add('hideScrollButton')
        }
    });
}

export default InitializeScrollTriggers
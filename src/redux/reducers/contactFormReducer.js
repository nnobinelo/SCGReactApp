const initState = {
    contactForms: []
}

const contactFormReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SEND_SUCCESS':
            console.log('message sent successfully :) , form:', action.contactForm)
            return state

        case 'SEND_FAILURE':
            console.log('message did not send :( , error:', action.error)
            return state
        default:
            return state
    }
}

export default contactFormReducer
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const nodeMailer = require('nodemailer')
const gmailEmail = functions.config().gmail.email
const gmailPass = functions.config().gmail.password
const mailTransport = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
        user: gmailEmail,
        pass: gmailPass
    }
})

async function sendFormAsEmail(form,context) {
    const emailOptions = {
        from: `Firebase of ${gmailEmail}`,
        to: gmailEmail,
        subject: `${form.firstName} ${form.lastName} (Email: ${form.email}) sent a message from SCG website`,
        text: `Contact form sent at ${context.timestamp} , message:\n\n${form.message}`
    }

    await mailTransport.sendMail(emailOptions)

    return null
}

exports.sendContactForm = functions.firestore
    .document('contactForms/{contactForm}')
    .onCreate((snapshot, context) => {
        const form = snapshot.data()

        return sendFormAsEmail(form,context)
    })

//Format: (month-day-year/hour:min:sec), Ex: 12-04-2018/21:39:59
exports.getTime = functions.https.onRequest((request,response)=>{
    time = new Date()
    response.send(`${time.getMonth()+1}-${time.getDate()}-${time.getFullYear()}/${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`)
})
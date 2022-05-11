



const nodemailer = require('nodemailer')


export default function sendEmail( req, res ) {
    const transporter = nodemailer.createTransport({
        host: 'localhost',
        port: '587',
        auth: {
            user: process.env.USERMAIL,
            pass: process.env.PASSMAIL,
        }

    })
    
}
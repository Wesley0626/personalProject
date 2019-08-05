

let nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: false,
  port: 25,
  auth: {
    user: 'wesley062688@gmail.com',
    pass: '$teddy001'
  },
  tls: {
    rejectUnautohorized: false
  }
})
let HelperOptions = {
  from: '"Wesley Walker" <wesley062688@gmail.com',
  to: 'wesley062688@gmail.com', 
  subject: 'Reset Password',
  text: "Reset your email here!:"
}
transporter.sendMail(HelperOptions, (error, info) => {
  if(error){
    console.log(error)
  }
  console.log("The message was sent")
  console.log(info)
})
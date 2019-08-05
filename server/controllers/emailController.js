const nodemailer = require('nodemailer')

const {EMAIL, PASSWORD} = process.env

module.exports = {
  sendEmail: async(req, res) => {
    const {email} = req.body

    try{
      let transporter =  nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: EMAIL, 
          pass: PASSWORD
        }
      })
      let info = await transporter.sendMail({
        from: `'Wesley Walker' <${EMAIL}>`,
        to: `${email}`,
        subject: "Password Reset",
        text: "Click the link below to reset your password. If you did not send this request, please disregard this email",
        html: `<p>Click the link below to reset your password. If you did not send this request, please disregard this email</p>
        <p>Reset password <a href="http://localhost:3000/#/password/reset">here!</a></p>`
      }, (err, res) => {
        if(err){
          console.log('err', err)
        } else {
          console.log('res', res)
          res.status(200).send(info)
        }
      })
    } catch(err) {
      console.log(err)
      res.sendStatus(500)
    }
  }
}
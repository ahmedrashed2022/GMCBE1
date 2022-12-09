var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ahmed.rashed12323@gmail.com',
    pass: 'zjzyhjmysflcarwk'
  }
});

var mailOptions = {
  from: 'ahmed.rashed12323@gmail.com',
  to: 'mohandesomar@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
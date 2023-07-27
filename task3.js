const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
  service: 'GMAIL',
  auth: {
    user: 'pavandemo19@gmail.com',
    pass: 'lecepugpxekxqmso'
  }
});


const mailOptions = {
  from: 'pavandemo19@gmail.com', 
  to: 'pavanadabala8@gmail.com',
  subject: '21A25A6101',
  text: 'This is 21a25a6101(A.pavan)  sending email'
};


transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log('Error sending email:', error);
  } else {
    console.log('Email sent successfully:', info.response);
  }
});

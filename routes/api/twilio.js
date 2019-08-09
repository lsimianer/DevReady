// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'ACb060d6b654650fa3d37607dede656cbe';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Thank you for using ReadyDev we will get your test results shortly!',
     from: '+15017122661',
     mediaUrl: ['https://c1.staticflickr.com/3/2899/14341091933_1e92e62d12_b.jpg'],
     to: '+15558675310'
   })
  .then(message => console.log(message.sid));

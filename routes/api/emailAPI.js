// //yarn add nylasnpm 
// // curl -X GET https://{GsgQRcTVSe4JbxaiSj7Od8QXdZVNHr}:@api.nylas.com/account
// //enter above in terminal to connect to nylas
// const Nylas = require('nylas');

// Nylas.config({
//     appId: dqniklck8ucu9z7v48byphk10,
//     appSecret: 9eh1mfywo5j328bgmozfzgei3,
//   });
//   //token below in parenthesis
// const nylas = Nylas.with(GsgQRcTVSe4JbxaiSj7Od8QXdZVNHr);

// const draft = nylas.drafts.build({
//     subject: 'With Love, from Nylas',
//     to: [{ name: 'My Nylas Friend', email: 'swag@nylas.com' }],
//     body: 'This email was sent using the Nylas email API. Visit https://nylas.com for details.'
// });

// // Send the draft
// draft.send().then(message => {
//     console.log(`${message.id} was sent`);
// });

//email api for nylas console logged unti figured out
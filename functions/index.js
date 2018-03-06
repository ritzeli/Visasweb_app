const functions = require('firebase-functions');
//const http = require('requestify');
const cors = require('cors')({ origin: true });
const apiai = require('apiai');
const express = require('express');
const admin = require('firebase-admin');
const app = express();
// init chat translator
const request = new require('request-promise');
const _ = require('lodash');
const utf8 = new require('utf8');
// initialize_app
admin.initializeApp(functions.config().firebase);
// Automatically allow cross-origin requests
app.get('/chatbot', (request, response) => {
  cors(request, response, () => {
   const app = apiai(functions.config().apiai.key);
    const message = request.query.message;
   const User_id = request.query.User_id;

    let request2= app.textRequest(message, {
     sessionId: User_id
    });

   request2.on('response', (r) => {
     console.log(r);
      return response.status(200).json({
       message_test:r
      })
    });
    request2.on('error', (error) => {
      console.log(error);
    });
   request2.end();
  });
});
app.get('/chat', function (req, res) {
  res.send('Hello from chat2')
});

exports.visasweb = functions.https.onRequest(app);

exports.visaswebchat = functions.firestore
  .document('RoomsT/{RoomTId}/{MessagesTCollectionId}/{MessageTId}').onWrite((event) => {
    const snapshot = event.data;
    let  out_lang = event.data.data().out_lang;
    let  in_lang = event.data.data().in_lang;
    const LANGUAGES = [out_lang];
    const promises = [];
    console.log(snapshot);
    let RoomTId = event.params.RoomTId;
    let MessagesTCollectionId = event.params.MessagesTCollectionId;
    let MessageTId = event.params.MessageTId;

    _.each(LANGUAGES, (lang) => {
      promises.push(createTranslationPromise(lang, in_lang ,snapshot,RoomTId, MessagesTCollectionId , MessageTId));
    });
    return Promise.all(promises);

  });


function createTranslateUrl( in_lang ,lang, text) {
  return `https://www.googleapis.com/language/translate/v2?key=AIzaSyBny-n0KcNBngkin5Q6SUVRlAatGYmK_BE&source=${in_lang}&target=${lang}&q=${text}`;
}

function createTranslationPromise(lang,in_lang ,snapshot,RoomTId, MessagesTCollectionId , MessageTId) {
  const text = utf8.encode(snapshot.data().message);
  let translation = '';

  return request(createTranslateUrl(in_lang ,lang, text), {resolveWithFullResponse: true}).then(
    response => {
      if (response.statusCode === 200) {
        const resData = JSON.parse(response.body).data;
        console.log(resData);
        translation = resData.translations[0].translatedText;
        const db = admin.firestore();
        const userRef = db.collection('RoomsT/'+ RoomTId + '/' + MessagesTCollectionId).doc(MessageTId);
        return userRef.update({send_message:translation}).then((res) => {
          console.log(res);
        })
      }
      else throw response.body;
    });
}


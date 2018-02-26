const functions = require('firebase-functions');
const http = require('requestify');
const cors = require('cors')({ origin: true });
const apiai = require('apiai');

exports.chatbot = functions.https.onRequest((request, response) => {
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

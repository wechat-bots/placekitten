/* send me two numbers
   get a random cat from placekitten
 */

var util = require('util');

exports = module.exports = function createplacekitten() {
  function placekitten(req, res, next) {
    var message = req.weixin;
    var content;

    if (message.MsgType === 'text') {
      content = message.Content;
    }

    var pattern = /(\d+)(?:\D+)(\d+)/;
    var result = pattern.exec(content);

    if (result) {
      var width = result[1];
      var height = result[2];
      res.reply([
        {
          title: width + 'x' + height,
          description: 'random picture from placekitten',
          picurl: util.format('http://placekitten.com/%d/%d', width, height),
          url: 'http://placekitten.com'
        }
      ]);
    } else {
      next();
    }
  }
  placekitten.help = 'type two number for a random kitten';
  return placekitten;
};

export default function belvo(req,res) {

var belvo = require('belvo').default;
var client = new belvo(process.env.CLIENT_ID, process.env.SECRET_ID, process.env.ENVIRONMENT_NAME );

return client.connect()
  .then(function () {
      return client.widgetToken.create()
      .then((response) => { res.json(response); })
      .catch((error) => {
        res.status(500).send({
          message: error.message
        });
      });
});

}
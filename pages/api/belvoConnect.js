export default function belvo(req,res) {

var belvo = require('belvo').default;
var client = new belvo( /* ClientId */ '3f9f5b25-7b96-478b-8ff9-7129e1ffc4e7', /* SecretId */ 'YQDOuSNUnQ0ehD_-lq2Y*#AHa9O3PPDVb1xGItkoG_g9NTf29lebuObvd*@lRd66',/* Environment */ 'development' );

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
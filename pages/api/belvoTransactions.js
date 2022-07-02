export default async(req,res) => {

var belvo = require('belvo').default;
var client = new belvo( /* ClientId */ '3f9f5b25-7b96-478b-8ff9-7129e1ffc4e7', /* SecretId */ 'YQDOuSNUnQ0ehD_-lq2Y*#AHa9O3PPDVb1xGItkoG_g9NTf29lebuObvd*@lRd66',/* Environment */ 'development' );

return client.connect()
  .then(async() => {
    // Filtrando resultados para ter transações entre um período de tempo
      await client.transactions.list({ filters: { page:'next', link: 'cd9e1b62-339a-45b9-b36f-b33554673f00', value_date__range: "2022-04-01,2022-06-27"} })
      .then((response) => {
        console.log(response)
        res.json(response);
      })
      .catch(function (error) { 
        res.status(500).send({
          message: error.message
        });
      });
  
  });
}




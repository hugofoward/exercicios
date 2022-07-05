export default async(req,res) => {

var belvo = require('belvo').default;
var client = new belvo( /* ClientId */ '3f9f5b25-7b96-478b-8ff9-7129e1ffc4e7', /* SecretId */ 'YQDOuSNUnQ0ehD_-lq2Y*#AHa9O3PPDVb1xGItkoG_g9NTf29lebuObvd*@lRd66',/* Environment */ 'development' );
const transacoes = []
// OFX - head 
transacoes.push('OFXHEADER:100 DATA:OFXSGML VERSION:102 SECURITY:NONE ENCODING:USASCII CHARSET:1252 COMPRESSION:NONE OLDFILEUID:NONE NEWFILEUID:NONE <OFX><SIGNONMSGSRSV1><SONRS><STATUS><CODE></CODE><SEVERITY>INFO</SEVERITY></STATUS><DTSERVER></DTSERVER><LANGUAGE>POR</LANGUAGE><FI><ORG></ORG><FID></FID></FI></SONRS></SIGNONMSGSRSV1><BANKMSGSRSV1><STMTTRNRS><TRNUID></TRNUID><STATUS><CODE></CODE><SEVERITY>INFO</SEVERITY></STATUS><STMTRS><CURDEF>BRL</CURDEF><BANKACCTFROM><BANKID></BANKID><BRANCHID></BRANCHID><ACCTID></ACCTID><ACCTTYPE></ACCTTYPE></BANKACCTFROM><BANKTRANLIST><DTSTART></DTSTART><DTEND></DTEND>')
return client.connect()
  .then(async() => {
    // Filtrando resultados para ter transações entre um período de tempo
      await client.transactions.list({ filters: { page: 1, link: '7bffbc3f-c0b1-493a-b527-9d0775555fc4', value_date__range: "2022-04-01,2022-06-27"} })
      .then((response) => {

        // OFX - transactions
        response.map(tr => {
          // Converte o tipo de transaction da nomenclatura do Json para o formato OFX.
          transacoes.push(`<STMTTRN><TRNTYPE></TRNTYPE><DTPOSTED>${tr.value_date.replaceAll('-','')}</DTPOSTED><TRNAMT>${tr.type == 'OUTFLOW' ? tr.amount *-1 : tr.amount }</TRNAMT><FITID></FITID><CHECKNUM>077</CHECKNUM><REFNUM></REFNUM><MEMO>${tr.description.trim()}</MEMO></STMTTRN>`)
        })

        // OFX - footer
        transacoes.push('</BANKTRANLIST><LEDGERBAL><BALAMT></BALAMT><DTASOF></DTASOF></LEDGERBAL></STMTRS></STMTTRNRS></BANKMSGSRSV1></OFX>')
     
        // sendOFX(transacoes)

        // console.log(transacoes)
        res.json(transacoes);
      })
      .catch(function (error) { 
        res.status(500).send({
          message: error.message
        });
      });


  
  });
}


// async function sendOFX(transacoes) {
//     return fetch('https://exercicios-two.vercel.app/api/belvoTransactions/', { method: 'POST', body: transacoes})
//     .then((res) => {
//       res.json().then((response) => { console.log(response) })
//     })
//     // .then((data) => {data})
//     .catch(error => console.error('Error:', error))
// }
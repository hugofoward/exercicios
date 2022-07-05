export default async(req,res) => {

var belvo = require('belvo').default;
var client = new belvo(process.env.CLIENT_ID, process.env.SECRET_ID, process.env.ENVIRONMENT_NAME );
const transacoes = []
// OFX - head 
transacoes.push('OFXHEADER:100\nDATA:OFXSGML\nVERSION:102\nSECURITY:NONE\nENCODING:USASCII\nCHARSET:1252\nCOMPRESSION:NONE\nOLDFILEUID:NONE\nNEWFILEUID:NONE\n<OFX><SIGNONMSGSRSV1><SONRS><STATUS><CODE></CODE><SEVERITY>INFO</SEVERITY></STATUS><DTSERVER></DTSERVER><LANGUAGE>POR</LANGUAGE><FI><ORG></ORG><FID></FID></FI></SONRS></SIGNONMSGSRSV1><BANKMSGSRSV1><STMTTRNRS><TRNUID></TRNUID><STATUS><CODE></CODE><SEVERITY>INFO</SEVERITY></STATUS><STMTRS><CURDEF>BRL</CURDEF><BANKACCTFROM><BANKID></BANKID><BRANCHID></BRANCHID><ACCTID></ACCTID><ACCTTYPE></ACCTTYPE></BANKACCTFROM><BANKTRANLIST><DTSTART></DTSTART><DTEND></DTEND>')
return client.connect()
  .then(async() => {
    // Filtrando resultados para ter transações entre um período de tempo
      // await client.transactions.list({ filters: { page: 1, link: '7bffbc3f-c0b1-493a-b527-9d0775555fc4', value_date__range: "2022-04-01,2022-06-27"} })
      await client.transactions.list({ filters: { page: 1, link: '0a9d8435-d29e-4e6a-9609-1c849680366b', value_date__range: "2022-04-01,2022-06-27"} })
      .then((response) => {
        console.log(response)
        // OFX - transactions
        response.map(tr => {
          // Converte o tipo de transaction da nomenclatura do Json para o formato OFX.
          transacoes.push(`<STMTTRN><TRNTYPE></TRNTYPE><DTPOSTED>${tr.value_date.replaceAll('-','')}</DTPOSTED><TRNAMT>${tr.type == 'OUTFLOW' ? tr.amount *-1 : tr.amount }</TRNAMT><FITID></FITID><CHECKNUM>077</CHECKNUM><REFNUM></REFNUM><MEMO>${tr.description.trim()}</MEMO></STMTTRN>`)
        })

        // OFX - footer
        transacoes.push('</BANKTRANLIST><LEDGERBAL><BALAMT></BALAMT><DTASOF></DTASOF></LEDGERBAL></STMTRS></STMTTRNRS></BANKMSGSRSV1></OFX>')
     
        // sendOFX(transacoes)
        // console.log(transacoes)
        // Return Array like text for convert OFX in client.
        res.json(transacoes.toString().replaceAll(',',''));
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
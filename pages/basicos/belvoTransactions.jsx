export default function App() {
  return (
    // 'cd9e1b62-339a-45b9-b36f-b33554673f00'
      <button onClick={()=> getTransactions()}>Recuperar Transações</button>
  );
}

async function getTransactions() {
    return fetch('https://exercicios-two.vercel.app/api/belvoTransactions/', { method: 'GET' })
    .then((res) => {
      res.json().then((response) => { console.log(response) })
    })
    // .then((data) => {data})
    .catch(error => console.error('Error:', error))
}


// async function getAccounts(linkId) {
//   // Make sure to change /get-access-token to point to your server-side.
//         return fetch('http://localhost:3000/api/belvoAccounts', {
//           method: 'POST',
//           link_id: linkId
//       }) 
//       .then(response => {
//         console.log(response.json())
//       })
//       .then((data) => data)
//       .catch(error => console.error('Error:', error))
//   }
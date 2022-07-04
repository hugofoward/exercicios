import { useEffect } from "react";

export default function App() {
  useScript('https://cdn.belvo.io/belvo-widget-1-stable.js');
  return ( <div id="belvo" /> );
}

function useScript(src) {
  useEffect(
      () => {
        // Criar script
        const node = document.createElement('script');
        node.src = src;
        node.type = 'text/javascript';
        node.async = true;
        node.onload = createWidget
        // Adiciona o script ao body
        document.body.appendChild(node);
      },
      [src] // apenas executa quando o src é alterado.
  )
}

async function createWidget() {
    function getAccessToken() { 
        return fetch('https://exercicios-two.vercel.app/api/belvoConnect', {
                method: 'GET'
            }) 
            .then(response => response.json())
            .then((data) => data)
            .catch(error => console.error('Error:', error))
    }
    const callback = () => {}
    const successCallbackFunction = (link, institution) => {
        // associar o link e a instituição com um usuário registrado na base de dados da aplicação.
        console.log(link)
        console.log(institution)
    }
    
    const onExitCallbackFunction = (data) => {
        // Do something with the exit data.
    }
    const onEventCallbackFunction = (data) => {
        // Do something with the exit data.
    }
    const config = {
        // Configuração inicial
        external_id: "iiiii",
        locale: 'pt',
        country_codes: ['BR'],
        institution_types: ['retail', 'business', 'fiscal', 'gig'],
        callback: (link, institution) => successCallbackFunction(link, institution),
        onExit: (data) => onExitCallbackFunction(),
        onEvent: (data) => onEventCallbackFunction()
    }
    const { access } = await getAccessToken();
    window.belvoSDK.createWidget(access, config).build()
}

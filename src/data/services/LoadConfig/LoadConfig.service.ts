export const LoadData = async () => {


function extrairDominio(url: string) {
  let dominio = url.replace(/(^\w+:|^)\/\//, ''); // Remove http:// ou https://
  dominio = dominio.replace(/^www\./, '');       // Remove www.
  dominio = dominio.split('/')[0];                // Remove caminho e parâmetros
  return dominio;
}




  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getToken = async () => {
    const clientId = 'techfood-web';
    const clientSecret = 'web123';
    const tokenUrl = 'https://oauth-puro.herokuapp.com/oauth/token'; // Substitua pela URL do seu provedor de token
  
    const credentials = btoa(`${clientId}:${clientSecret}`);
    
    try {
      const response = await fetch(tokenUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Basic ${credentials}`
        },
        body: 'grant_type=client_credentials'
      });
  
      if (!response.ok) {
        throw new Error('Failed to obtain token');
      }
  
      const data = await response.json();
      return data.access_token;
    } catch (err) {
      console.error('Error getting token:', err);
    }
  };



  try {
    const token = await getToken();

    //const token = "";

    if (!token) {
      throw new Error('No token obtained');
    }

    // Exemplo de uso com a URL da página atual
const urlAtual = window.location.href; // Obtém a URL da página atual
const dominioAtual = extrairDominio(urlAtual);
console.log("Domínio atual extraído:", dominioAtual);
    //const res = await fetch("./config.json", {
    const res = await fetch("https://app.pedtech.com.br/v1/pedtech/getByDominio/"+dominioAtual, {  // substitua pela URL da API
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const AppData = await res.json();
    return AppData;
  } catch (err) {
        document.body.innerHTML = `
      <div style="text-align: center; padding: 50px; background-color: #f4f4f4; color: #333; height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center;">
        <h1 style="font-size: 6rem; font-weight: bold; margin: 0; color: #ff4a4a;">404</h1>
        <p style="font-size: 2rem; margin: 20px 0;">Página não encontrada</p>
        <p style="font-size: 1.2rem; color: #777; max-width: 600px; margin: 0 auto;">
          Desculpe, a página que você está tentando acessar não existe ou ocorreu um erro ao carregar os dados.
        </p>
      </div>
    `;
    console.log("Erros ao Carregar os Dados: " + err);
  }




};






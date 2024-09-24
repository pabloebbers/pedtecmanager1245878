import { DataType } from "../../@types/Data/Data.type";

export const LoadData = async (): Promise<DataType | undefined> => {
  const mostrarTelaCarregamento = (mensagem: string) => {
    const modal = document.createElement('div');
    modal.id = 'carregamento';
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100vw';
    modal.style.height = '100vh';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    modal.style.color = '#fff';
    modal.style.display = 'flex';
    modal.style.flexDirection = 'column';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.zIndex = '1000';

    modal.innerHTML = `
      <div class="spinner" style="border: 6px solid #f3f3f3; border-top: 6px solid #3498db; border-radius: 50%; width: 50px; height: 50px; animation: spin 1s linear infinite;"></div>
      <h1 style="font-size: 2rem; font-weight: bold; margin-top: 20px;">${mensagem}</h1>
      <style>
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      </style>
    `;

    document.body.appendChild(modal);
  };

  const ocultarTelaCarregamento = () => {
    const carregamento = document.getElementById('carregamento');
    if (carregamento) {
      carregamento.remove();
    }
  };

  const extrairDominio = (url: string) => {
    let dominio = url.replace(/(^\w+:|^)\/\//, '');
    dominio = dominio.replace(/^www\./, '');

    const partesUrl = dominio.split('/');
    const dominioPrincipal = partesUrl[0];

    const caminhoAposBarra = partesUrl.length > 1 && partesUrl[1] ? partesUrl.slice(1).join('/') : '';
    let resultado = caminhoAposBarra ? caminhoAposBarra : dominioPrincipal;

    resultado = resultado.replace(/\/$/, '');
    return resultado;
  };

  const getToken = async () => {
    const clientId = 'techfood-web';
    const clientSecret = 'web123';
    const tokenUrl = 'https://oauth-puro.herokuapp.com/oauth/token';

    const credentials = btoa(`${clientId}:${clientSecret}`);

    try {
      const response = await fetch(tokenUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Basic ${credentials}`,
        },
        body: 'grant_type=client_credentials',
      });

      if (!response.ok) {
        throw new Error('Failed to obtain token');
      }

      const data = await response.json();
      return data.access_token;
    } catch (err) {
      console.error('Error getting token:', err);
      throw new Error('Token error');
    }
  };

  const esperar = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const carregarDados = async (tentativa: number = 1): Promise<DataType | undefined> => {
    let res: Response | undefined;
    try {
      const token = await getToken();
      if (!token) {
        throw new Error('No token obtained');
      }

      const urlAtual = window.location.href;
      let dominioAtual = extrairDominio(urlAtual);

       //dominioAtual = 'pedtech.vercel.app';

      res = await fetch('https://api.pedtech.com.br/v1/pedtech/getByDominio/' + dominioAtual, {
      //res = await fetch('http://localhost:3020/v1/pedtech/getByDominio/' + dominioAtual, {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        if (res.status === 401 || res.status === 404) {
          mostrarErro401();
          return undefined;
        } else {
          throw new Error(`Erro no servidor: ${res.status}`);
        }
      }

      const AppData: DataType = await res.json();
      ocultarTelaCarregamento();

      if (AppData && AppData.HeaderColors.titulo) {
        document.title = AppData.HeaderColors.titulo;
      }

if (AppData && AppData.HeaderColors.favicon) {
  // Atualizar o favicon
  const faviconLink: HTMLLinkElement | null = document.querySelector("link[rel~='icon']");
  if (faviconLink) {
    faviconLink.href = AppData.HeaderColors.favicon; // Use a variável corretamente sem aspas
  } else {
    const newFaviconLink = document.createElement("link");
    newFaviconLink.rel = "icon";
    newFaviconLink.href = AppData.HeaderColors.favicon; // Caminho para o novo favicon
    document.head.appendChild(newFaviconLink);
  }
}

      
const adicionarScriptAoHead = (codigo: string) => {
  // Extrai o conteúdo entre as tags <script>
  const match = codigo.match(/<script>([\s\S]*?)<\/script>/);
  if (match && match[1]) {
    const scriptContent = match[1]; // Captura apenas o conteúdo
    const scriptElement = document.createElement('script');
    scriptElement.textContent = scriptContent; // Adiciona o conteúdo ao script
    document.head.appendChild(scriptElement); // Adiciona ao head
  }
};

// Exemplo de uso
if (AppData.SocialInfos.FacebookTag) {
  adicionarScriptAoHead(AppData.SocialInfos.FacebookTag);
}

if (AppData.SocialInfos.GoogleTag) {
  adicionarScriptAoHead(AppData.SocialInfos.GoogleTag);
}


      return AppData;
    } catch (err) {
      console.error(`Erro ao carregar os dados (tentativa ${tentativa}): `, err);

      if (res) {
        console.log(`Código de erro: ${res.status}`);
        mostrarErroCustom(res.status.toString());
      } else {
        mostrarErroCustom("500");
      }

      if (tentativa < 2) {
        ocultarTelaCarregamento();
        mostrarTelaCarregamento("Tentando carregar site novamente...");
        await esperar(3000);
        return carregarDados(tentativa + 1);
      } else {
        console.log(err);
        return undefined;
      }
    }
  };

  const mostrarErro401 = () => {
    document.body.innerHTML = `
      <div style="text-align: center; padding: 50px; background-color: #f4f4f4; color: #333; height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center;">
        <h1 style="font-size: 6rem; font-weight: bold; margin: 0; color: #ff4a4a;">401</h1>
        <p style="font-size: 2rem; margin: 20px 0;">Página não encontrada</p>
        <p style="font-size: 1.2rem; color: #777; max-width: 600px; margin: 0 auto;">
          Desculpe, a página que você está tentando acessar não existe ou ocorreu um erro ao carregar os dados.
        </p>
      </div>
    `;
  };

  const mostrarErroCustom = (erro: string) => {
    if (!erro) {
      erro = "500";
    }
    document.body.innerHTML = `
      <div style="text-align: center; padding: 50px; background-color: #f4f4f4; color: #333; height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center;">
        <h1 style="font-size: 6rem; font-weight: bold; margin: 0; color: #ff4a4a;">${erro}</h1>
        <p style="font-size: 2rem; margin: 20px 0;">Erro ao carregar página</p>
        <p style="font-size: 1.2rem; color: #777; max-width: 600px; margin: 0 auto;">
          Desculpe, a página que você está tentando acessar não existe ou ocorreu um erro ao carregar os dados.
        </p>
      </div>
    `;
  };

  mostrarTelaCarregamento("Carregando site...");

  return carregarDados();
};

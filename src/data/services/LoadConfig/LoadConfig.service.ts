import { DataType } from "../../@types/Data/Data.type";

export const LoadData = async (): Promise<DataType | undefined> => {
  const extrairDominio = (url: string) => {
    let dominio = url.replace(/(^\w+:|^)\/\//, '');
    dominio = dominio.replace(/^www\./, '');

    const partesUrl = dominio.split('/');
    const dominioPrincipal = partesUrl[0];
    const caminhoAposBarra = partesUrl.length > 1 && partesUrl[1] ? partesUrl.slice(1).join('/') : '';

    const resultado = caminhoAposBarra ? caminhoAposBarra : dominioPrincipal;
    return resultado.replace(/\/$/, '');
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

      if (!response.ok) throw new Error('Failed to obtain token');

      const data = await response.json();
      return data.access_token;
    } catch (err) {
      console.error('Erro ao obter token:', err);
      return undefined;
    }
  };

  const carregarDados = async (): Promise<DataType | undefined> => {
    try {
      const token = await getToken();
      if (!token) return undefined;

      const dominioAtual = extrairDominio(window.location.href);
      const res = await fetch(`https://api.pedtech.com.br/v1/pedtech/getByDominio/${dominioAtual}`, {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        console.warn(`Erro ao carregar dados: ${res.status}`);
        return undefined;
      }

      const AppData: DataType = await res.json();

      // Atualizar título e favicon se existirem
      if (AppData?.HeaderColors?.titulo) {
        document.title = AppData.HeaderColors.titulo;
      }

      if (AppData?.HeaderColors?.favicon) {
        const faviconLink: HTMLLinkElement | null = document.querySelector("link[rel~='icon']");
        if (faviconLink) {
          faviconLink.href = AppData.HeaderColors.favicon;
        } else {
          const newFaviconLink = document.createElement("link");
          newFaviconLink.rel = "icon";
          newFaviconLink.href = AppData.HeaderColors.favicon;
          document.head.appendChild(newFaviconLink);
        }
      }

      // Inserir tags de script se existirem
      const adicionarScriptAoHead = (codigo: string) => {
        const match = codigo.match(/<script>([\s\S]*?)<\/script>/);
        if (match?.[1]) {
          const scriptElement = document.createElement('script');
          scriptElement.textContent = match[1];
          document.head.appendChild(scriptElement);
        }
      };

      if (AppData.SocialInfos.FacebookTag) {
        adicionarScriptAoHead(AppData.SocialInfos.FacebookTag);
      }

      if (AppData.SocialInfos.GoogleTag) {
        adicionarScriptAoHead(AppData.SocialInfos.GoogleTag);
      }

      return AppData;
    } catch (err) {
      console.error("Erro inesperado ao carregar os dados:", err);
      return undefined;
    }
  };

  return carregarDados();
};

/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from "react";
import Header from "../ui/partials/Header/Header";
import Footer from "../ui/partials/Footer/Footer";
import Divider from "../ui/components/Divider";
import { PageProps } from "../data/@types/Page/Page.type";
import FirstSection from "./partials/FirstSection/FirstSection";

const Link1 = (props: PageProps) => {
  const adicionarScriptAoHead = (codigo: string) => {
    const match = codigo.match(/<script>([\s\S]*?)<\/script>/);
    if (match && match[1]) {
      const scriptContent = match[1];
      const scriptElement = document.createElement('script');
      scriptElement.textContent = scriptContent;
      document.head.appendChild(scriptElement);
    }
  };

  // Adicionando os scripts ao head
  if (props.FacebookTag) adicionarScriptAoHead(props.FacebookTag);
  if (props.GoogleTag) adicionarScriptAoHead(props.GoogleTag);
  if (props.FacebookTagSection2) adicionarScriptAoHead(props.FacebookTagSection2);
  if (props.GoogleTagSection2) adicionarScriptAoHead(props.GoogleTagSection2);

  useEffect(() => {
    const redirectUrl = props.SecondSectionButtonHref; // URL padrão se ButtonHref for undefined

    console.log("Redirecionando para:", redirectUrl); // Log para verificar a URL

    if (redirectUrl) {
      const timer = setTimeout(() => {
        window.location.href = redirectUrl;
      }, 5000); // 5000 ms = 5 seconds

      return () => clearTimeout(timer); // Limpa o timer se o componente for desmontado
    }
  }, [props.SecondSectionButtonHref]);

  return (
    <>

      <Header
        HeaderbgColorOnScroll={props.HeaderbgColorOnScroll}
        HeaderLinksColorOnScroll={props.HeaderLinksColorOnScroll}
        HeaderLinks={props.HeaderLinks}
        HeaderLinkColor={props.HeaderLinkColor}
        logo={props.logo}
        favicon={props.favicon}
        titulo={props.titulo}
        divider={props.divider}
      />
      <main>
      <FirstSection
          FirstSectionBackground={props.FirstSectionBackground}
          FirstSectionTitleColor={props.FirstSectionTitleColor}
          FirstSectionTextColor={props.FirstSectionTextColor}
          FirstSectionTitle={"Em breve você será redirecionado"}
          FirstSectionButtonTextColor={props.FirstSectionButtonTextColor}
          FirstSectionButtonColor={""}
        />

        <Divider className="divider-class" color={props.divider} />
      </main>

      <Divider className="divider-class" color={props.divider} />

      <Footer
        FooterAdress={props.FooterAdress}
        FooterBackground={props.FooterBackground}
        FooterEmail={props.FooterEmail}
        FooterHorario={props.FooterHorario}
        FooterMapsSrc={props.FooterMapsSrc}
        FooterPhone={props.FooterPhone}
        FooterTextColors={props.FooterTextColors}
        FooterFacebookActive={props.FooterFacebookActive}
        FooterInstagramActive={props.FooterInstagramActive}
        FooterTechsappActive={props.FooterTechsappActive}
        FooterTelefoneActive={props.FooterTelefoneActive}
        FooterTwitterActive={props.FooterTwitterActive}
        FooterWhatsappActive={props.FooterWhatsappActive}
        FooterYoutubeActive={props.FooterYoutubeActive}
        Footercolor={props.Footercolor}
        FooterFacebookUser={props.FooterFacebookUser}
        FooterInstagramUser={props.FooterInstagramUser}
        FooterTechsappLink={props.FooterTechsappLink}
        FooterTelefoneNumber={props.FooterTelefoneNumber}
        FooterTwitterUser={props.FooterTwitterUser}
        FooterWhatsappNumber={props.FooterWhatsappNumber}
        FooterYoutubeUser={props.FooterYoutubeUser}
      />
    </>
  );
};

export default Link1;

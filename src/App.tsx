import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importar Router, Routes e Route
import { useDataFetch } from "./data/hooks/DataFetch/useDataFetch";
import Home from "./pages"; // Certifique-se de que o caminho esteja correto
import GlobalStyle from "./ui/styles/global";
import "bootstrap/dist/css/bootstrap.min.css";
import Link1 from "./ui/Link1"; // Importe seu componente para /link1
import Link2 from "./ui/Link2";
import Link3 from "./ui/Link3";


const App = () => {
  const data = useDataFetch();

  useEffect(() => {
    if (data && data.HeaderColors) {
      console.log('Setting CSS variables:', data.HeaderColors);

      document.documentElement.style.setProperty("--fonteMenu", data.HeaderColors.Font1);
      document.documentElement.style.setProperty("--fonteTitulo", data.HeaderColors.Font2);
      document.documentElement.style.setProperty("--fonteTexto", data.HeaderColors.Font3);

      console.log('CSS variables set:', {
        fonteMenu: document.documentElement.style.getPropertyValue("--fonteMenu"),
        fonteTitulo: document.documentElement.style.getPropertyValue("--fonteTitulo"),
        fonteTexto: document.documentElement.style.getPropertyValue("--fonteTexto"),
      });
    }
  }, [data]);

  return (

      
    <Router>
      
      <GlobalStyle />
      {data && (
        <Routes>
          <Route 
            path="/" 
            element={
              <Home
                HeaderLinks={data.HeaderLinks}
                HeaderLinkColor={data.HeaderColors.HeaderLinkColor}
                HeaderbgColorOnScroll={data.HeaderColors.HeaderbgColorOnScroll}
                HeaderLinksColorOnScroll={data.HeaderColors.HeaderLinksColorOnScroll}
                logo={data.HeaderColors.logo}
                favicon={data.HeaderColors.favicon}
                titulo={data.HeaderColors.titulo}
                divider={data.HeaderColors.divider}
                FirstSectionBackground={data.FirstSectionColors.FirstSectionBackground}
                FirstSectionTitleColor={data.FirstSectionColors.FirstSectionTitleColor}
                FirstSectionTextColor={data.FirstSectionColors.FirstSectionTextColor}
                FirstSectionTitle={data.FirstSectionContents.FirstSectionTitle}
                FirstSectionHasImageOrVideo={data.FirstSectionContents.FirstSectionHasImageOrVideo}
                FirstSectionText={data.FirstSectionContents.FirstSectionText}
                FirstSectionYoutubeLink={data.FirstSectionContents.FirstSectionYoutubeLink}
                FirstSectionImageSrc={data.FirstSectionContents.FirstSectionImageSrc}
                FirstSectionButtonHref={data.FirstSectionContents.FirstSectionButtonHref}
                FirstSectionButtonTxt={data.FirstSectionContents.FirstSectionButtonTxt}
                FirstSectionButtonColor={data.FirstSectionColors.FirstSectionButtonColor}
                FirstSectionButtonTextColor={data.FirstSectionColors.FirstSectionButtonTextColor}
                color={data.SocialInfos.color}
                WhatsappActive={data.SocialInfos.WhatsappActive}
                WhatsappNumber={data.SocialInfos.WhatsappNumber}
                InstagramActive={data.SocialInfos.InstagramActive}
                InstagramUser={data.SocialInfos.InstagramUser}
                FacebookActive={data.SocialInfos.FacebookActive}
                FacebookUser={data.SocialInfos.FacebookUser}
                TechsappActive={data.SocialInfos.TechsappActive}
                TechsappLink={data.SocialInfos.TechsappLink}
                TelefoneActive={data.SocialInfos.TelefoneActive}
                TelefoneNumber={data.SocialInfos.TelefoneNumber}
                TwitterActive={data.SocialInfos.TwitterActive}
                TwitterUser={data.SocialInfos.TwitterUser}
                YoutubeActive={data.SocialInfos.YoutubeActive}
                YoutubeUser={data.SocialInfos.YoutubeUser}
                GoogleTag={data.SocialInfos.GoogleTag}
                FacebookTag={data.SocialInfos.FacebookTag}
                GoogleTagSection1={data.SocialInfos.GoogleTagSection1}
                FacebookTagSection1={data.SocialInfos.FacebookTagSection1}
                GoogleTagSection2={data.SocialInfos.GoogleTagSection2}
                FacebookTagSection2={data.SocialInfos.FacebookTagSection2}
                GoogleTagSection3={data.SocialInfos.GoogleTagSection3}
                FacebookTagSection3={data.SocialInfos.FacebookTagSection3}
                SecondSectionBackground={data.SecondSectionColors.SecondSectionBackground}
                SecondSectionHasImageOrVideo={data.SecondSectionContents.SecondSectionHasImageOrVideo}
                SecondSectionImageSrc={data.SecondSectionContents.SecondSectionImageSrc}
                SecondSectionYoutubeLink={data.SecondSectionContents.SecondSectionYoutubeLink}
                SecondSectionTitle={data.SecondSectionContents.SecondSectionTitle}
                SecondSectionText={data.SecondSectionContents.SecondSectionText}
                SecondSectionTitleColor={data.SecondSectionColors.SecondSectionTitleColor}
                SecondSectionTextColor={data.SecondSectionColors.SecondSectionTextColor}
                SecondSectionButtonTxt={data.SecondSectionContents.SecondSectionButtonTxt}
                SecondSectionButtonHref={data.SecondSectionContents.SecondSectionButtonHref}
                SecondSectionButtonColor={data.SecondSectionColors.SecondSectionButtonColor}
                SecondSectionButtonTextColor={data.SecondSectionColors.SecondSectionButtonTextColor}
                ThirdSectionBackground={data.ThirdSectionColors.ThirdSectionBackground}
                ThirdSectionTitle={data.ThirdSectionContent.ThirdSectionTitle}
                ThirdSectionHasImageOrVideo={data.ThirdSectionContent.ThirdSectionHasImageOrVideo}
                ThirdSectionImageSrc={data.ThirdSectionContent.ThirdSectionImageSrc}
                ThirdSectionYoutubeLink={data.ThirdSectionContent.ThirdSectionYoutubeLink}
                ThirdSectionText={data.ThirdSectionContent.ThirdSectionText}
                ThirdSectionTextColor={data.ThirdSectionColors.ThirdSectionTextColor}
                ThirdSectionTitleColor={data.ThirdSectionColors.ThirdSectionTitleColor}
                ThirdSectionButtonTxt={data.ThirdSectionContent.ThirdSectionButtonTxt}
                ThirdSectionButtonHref={data.ThirdSectionContent.ThirdSectionButtonHref}
                ThirdSectionButtonColor={data.ThirdSectionColors.ThirdSectionButtonColor}
                ThirdSectionButtonTextColor={data.ThirdSectionColors.ThirdSectionButtonTextColor}
                FooterAdress={data.FooterContent.FooterAdress}
                FooterBackground={data.FooterColors.FooterBackground}
                FooterEmail={data.FooterContent.FooterEmail}
                FooterHorario={data.FooterContent.FooterHorario}
                FooterMapsSrc={data.FooterContent.FooterMapsSrc}
                FooterPhone={data.FooterContent.FooterPhone}
                FooterTextColors={data.FooterColors.FooterTextColors}
                FooterFacebookActive={data.LinksFooter.FooterFacebookActive}
                FooterInstagramActive={data.LinksFooter.FooterInstagramActive}
                FooterTechsappActive={data.LinksFooter.FooterTechsappActive}
                FooterTelefoneActive={data.LinksFooter.FooterTelefoneActive}
                FooterTwitterActive={data.LinksFooter.FooterTwitterActive}
                FooterWhatsappActive={data.LinksFooter.FooterWhatsappActive}
                FooterYoutubeActive={data.LinksFooter.FooterYoutubeActive}
                Footercolor={data.LinksFooter.Footercolor}
                FooterFacebookUser={data.LinksFooter.FooterFacebookUser}
                FooterInstagramUser={data.LinksFooter.FooterInstagramUser}
                FooterTechsappLink={data.LinksFooter.FooterTechsappLink}
                FooterTelefoneNumber={data.LinksFooter.FooterTelefoneNumber}
                FooterTwitterUser={data.LinksFooter.FooterTwitterUser}
                FooterWhatsappNumber={data.LinksFooter.FooterWhatsappNumber}
                FooterYoutubeUser={data.LinksFooter.FooterYoutubeUser}
              />
            }
          />
          <Route path="/link1" element={ <Link1
                                     HeaderLinks={data.HeaderLinks}
                                     HeaderLinkColor={data.HeaderColors.HeaderLinkColor}
                                     HeaderbgColorOnScroll={data.HeaderColors.HeaderbgColorOnScroll}
                                     HeaderLinksColorOnScroll={data.HeaderColors.HeaderLinksColorOnScroll}
                                     logo={data.HeaderColors.logo}
                                     favicon={data.HeaderColors.favicon}
                                     titulo={data.HeaderColors.titulo}
                                     divider={data.HeaderColors.divider}
                                     FirstSectionBackground={data.FirstSectionColors.FirstSectionBackground}
                                     FirstSectionTitleColor={data.FirstSectionColors.FirstSectionTitleColor}
                                     FirstSectionTextColor={data.FirstSectionColors.FirstSectionTextColor}
                                     FirstSectionTitle={data.FirstSectionContents.FirstSectionTitle}
                                     FirstSectionHasImageOrVideo={data.FirstSectionContents.FirstSectionHasImageOrVideo}
                                     FirstSectionText={data.FirstSectionContents.FirstSectionText}
                                     FirstSectionYoutubeLink={data.FirstSectionContents.FirstSectionYoutubeLink}
                                     FirstSectionImageSrc={data.FirstSectionContents.FirstSectionImageSrc}
                                     FirstSectionButtonHref={data.FirstSectionContents.FirstSectionButtonHref}
                                     FirstSectionButtonTxt={data.FirstSectionContents.FirstSectionButtonTxt}
                                     FirstSectionButtonColor={data.FirstSectionColors.FirstSectionButtonColor}
                                     FirstSectionButtonTextColor={data.FirstSectionColors.FirstSectionButtonTextColor}
                                     color={data.SocialInfos.color}
                                     WhatsappActive={data.SocialInfos.WhatsappActive}
                                     WhatsappNumber={data.SocialInfos.WhatsappNumber}
                                     InstagramActive={data.SocialInfos.InstagramActive}
                                     InstagramUser={data.SocialInfos.InstagramUser}
                                     FacebookActive={data.SocialInfos.FacebookActive}
                                     FacebookUser={data.SocialInfos.FacebookUser}
                                     TechsappActive={data.SocialInfos.TechsappActive}
                                     TechsappLink={data.SocialInfos.TechsappLink}
                                     TelefoneActive={data.SocialInfos.TelefoneActive}
                                     TelefoneNumber={data.SocialInfos.TelefoneNumber}
                                     TwitterActive={data.SocialInfos.TwitterActive}
                                     TwitterUser={data.SocialInfos.TwitterUser}
                                     YoutubeActive={data.SocialInfos.YoutubeActive}
                                     YoutubeUser={data.SocialInfos.YoutubeUser}
                                     GoogleTag={data.SocialInfos.GoogleTag}
                                     FacebookTag={data.SocialInfos.FacebookTag}
                                     GoogleTagSection1={data.SocialInfos.GoogleTagSection1}
                                     FacebookTagSection1={data.SocialInfos.FacebookTagSection1}
                                     GoogleTagSection2={data.SocialInfos.GoogleTagSection2}
                                     FacebookTagSection2={data.SocialInfos.FacebookTagSection2}
                                     GoogleTagSection3={data.SocialInfos.GoogleTagSection3}
                                     FacebookTagSection3={data.SocialInfos.FacebookTagSection3}
                                     SecondSectionBackground={data.SecondSectionColors.SecondSectionBackground}
                                     SecondSectionHasImageOrVideo={data.SecondSectionContents.SecondSectionHasImageOrVideo}
                                     SecondSectionImageSrc={data.SecondSectionContents.SecondSectionImageSrc}
                                     SecondSectionYoutubeLink={data.SecondSectionContents.SecondSectionYoutubeLink}
                                     SecondSectionTitle={data.SecondSectionContents.SecondSectionTitle}
                                     SecondSectionText={data.SecondSectionContents.SecondSectionText}
                                     SecondSectionTitleColor={data.SecondSectionColors.SecondSectionTitleColor}
                                     SecondSectionTextColor={data.SecondSectionColors.SecondSectionTextColor}
                                     SecondSectionButtonTxt={data.SecondSectionContents.SecondSectionButtonTxt}
                                     SecondSectionButtonHref={data.SecondSectionContents.SecondSectionButtonHref}
                                     SecondSectionButtonColor={data.SecondSectionColors.SecondSectionButtonColor}
                                     SecondSectionButtonTextColor={data.SecondSectionColors.SecondSectionButtonTextColor}
                                     ThirdSectionBackground={data.ThirdSectionColors.ThirdSectionBackground}
                                     ThirdSectionTitle={data.ThirdSectionContent.ThirdSectionTitle}
                                     ThirdSectionHasImageOrVideo={data.ThirdSectionContent.ThirdSectionHasImageOrVideo}
                                     ThirdSectionImageSrc={data.ThirdSectionContent.ThirdSectionImageSrc}
                                     ThirdSectionYoutubeLink={data.ThirdSectionContent.ThirdSectionYoutubeLink}
                                     ThirdSectionText={data.ThirdSectionContent.ThirdSectionText}
                                     ThirdSectionTextColor={data.ThirdSectionColors.ThirdSectionTextColor}
                                     ThirdSectionTitleColor={data.ThirdSectionColors.ThirdSectionTitleColor}
                                     ThirdSectionButtonTxt={data.ThirdSectionContent.ThirdSectionButtonTxt}
                                     ThirdSectionButtonHref={data.ThirdSectionContent.ThirdSectionButtonHref}
                                     ThirdSectionButtonColor={data.ThirdSectionColors.ThirdSectionButtonColor}
                                     ThirdSectionButtonTextColor={data.ThirdSectionColors.ThirdSectionButtonTextColor}
                                     FooterAdress={data.FooterContent.FooterAdress}
                                     FooterBackground={data.FooterColors.FooterBackground}
                                     FooterEmail={data.FooterContent.FooterEmail}
                                     FooterHorario={data.FooterContent.FooterHorario}
                                     FooterMapsSrc={data.FooterContent.FooterMapsSrc}
                                     FooterPhone={data.FooterContent.FooterPhone}
                                     FooterTextColors={data.FooterColors.FooterTextColors}
                                     FooterFacebookActive={data.LinksFooter.FooterFacebookActive}
                                     FooterInstagramActive={data.LinksFooter.FooterInstagramActive}
                                     FooterTechsappActive={data.LinksFooter.FooterTechsappActive}
                                     FooterTelefoneActive={data.LinksFooter.FooterTelefoneActive}
                                     FooterTwitterActive={data.LinksFooter.FooterTwitterActive}
                                     FooterWhatsappActive={data.LinksFooter.FooterWhatsappActive}
                                     FooterYoutubeActive={data.LinksFooter.FooterYoutubeActive}
                                     Footercolor={data.LinksFooter.Footercolor}
                                     FooterFacebookUser={data.LinksFooter.FooterFacebookUser}
                                     FooterInstagramUser={data.LinksFooter.FooterInstagramUser}
                                     FooterTechsappLink={data.LinksFooter.FooterTechsappLink}
                                     FooterTelefoneNumber={data.LinksFooter.FooterTelefoneNumber}
                                     FooterTwitterUser={data.LinksFooter.FooterTwitterUser}
                                     FooterWhatsappNumber={data.LinksFooter.FooterWhatsappNumber}
                                     FooterYoutubeUser={data.LinksFooter.FooterYoutubeUser}/>
} /> 

<Route path="/link2" element={ <Link2
                                     HeaderLinks={data.HeaderLinks}
                                     HeaderLinkColor={data.HeaderColors.HeaderLinkColor}
                                     HeaderbgColorOnScroll={data.HeaderColors.HeaderbgColorOnScroll}
                                     HeaderLinksColorOnScroll={data.HeaderColors.HeaderLinksColorOnScroll}
                                     logo={data.HeaderColors.logo}
                                     favicon={data.HeaderColors.favicon}
                                     titulo={data.HeaderColors.titulo}
                                     divider={data.HeaderColors.divider}
                                     FirstSectionBackground={data.FirstSectionColors.FirstSectionBackground}
                                     FirstSectionTitleColor={data.FirstSectionColors.FirstSectionTitleColor}
                                     FirstSectionTextColor={data.FirstSectionColors.FirstSectionTextColor}
                                     FirstSectionTitle={data.FirstSectionContents.FirstSectionTitle}
                                     FirstSectionHasImageOrVideo={data.FirstSectionContents.FirstSectionHasImageOrVideo}
                                     FirstSectionText={data.FirstSectionContents.FirstSectionText}
                                     FirstSectionYoutubeLink={data.FirstSectionContents.FirstSectionYoutubeLink}
                                     FirstSectionImageSrc={data.FirstSectionContents.FirstSectionImageSrc}
                                     FirstSectionButtonHref={data.FirstSectionContents.FirstSectionButtonHref}
                                     FirstSectionButtonTxt={data.FirstSectionContents.FirstSectionButtonTxt}
                                     FirstSectionButtonColor={data.FirstSectionColors.FirstSectionButtonColor}
                                     FirstSectionButtonTextColor={data.FirstSectionColors.FirstSectionButtonTextColor}
                                     color={data.SocialInfos.color}
                                     WhatsappActive={data.SocialInfos.WhatsappActive}
                                     WhatsappNumber={data.SocialInfos.WhatsappNumber}
                                     InstagramActive={data.SocialInfos.InstagramActive}
                                     InstagramUser={data.SocialInfos.InstagramUser}
                                     FacebookActive={data.SocialInfos.FacebookActive}
                                     FacebookUser={data.SocialInfos.FacebookUser}
                                     TechsappActive={data.SocialInfos.TechsappActive}
                                     TechsappLink={data.SocialInfos.TechsappLink}
                                     TelefoneActive={data.SocialInfos.TelefoneActive}
                                     TelefoneNumber={data.SocialInfos.TelefoneNumber}
                                     TwitterActive={data.SocialInfos.TwitterActive}
                                     TwitterUser={data.SocialInfos.TwitterUser}
                                     YoutubeActive={data.SocialInfos.YoutubeActive}
                                     YoutubeUser={data.SocialInfos.YoutubeUser}
                                     GoogleTag={data.SocialInfos.GoogleTag}
                                     FacebookTag={data.SocialInfos.FacebookTag}
                                     GoogleTagSection1={data.SocialInfos.GoogleTagSection1}
                                     FacebookTagSection1={data.SocialInfos.FacebookTagSection1}
                                     GoogleTagSection2={data.SocialInfos.GoogleTagSection2}
                                     FacebookTagSection2={data.SocialInfos.FacebookTagSection2}
                                     GoogleTagSection3={data.SocialInfos.GoogleTagSection3}
                                     FacebookTagSection3={data.SocialInfos.FacebookTagSection3}
                                     SecondSectionBackground={data.SecondSectionColors.SecondSectionBackground}
                                     SecondSectionHasImageOrVideo={data.SecondSectionContents.SecondSectionHasImageOrVideo}
                                     SecondSectionImageSrc={data.SecondSectionContents.SecondSectionImageSrc}
                                     SecondSectionYoutubeLink={data.SecondSectionContents.SecondSectionYoutubeLink}
                                     SecondSectionTitle={data.SecondSectionContents.SecondSectionTitle}
                                     SecondSectionText={data.SecondSectionContents.SecondSectionText}
                                     SecondSectionTitleColor={data.SecondSectionColors.SecondSectionTitleColor}
                                     SecondSectionTextColor={data.SecondSectionColors.SecondSectionTextColor}
                                     SecondSectionButtonTxt={data.SecondSectionContents.SecondSectionButtonTxt}
                                     SecondSectionButtonHref={data.SecondSectionContents.SecondSectionButtonHref}
                                     SecondSectionButtonColor={data.SecondSectionColors.SecondSectionButtonColor}
                                     SecondSectionButtonTextColor={data.SecondSectionColors.SecondSectionButtonTextColor}
                                     ThirdSectionBackground={data.ThirdSectionColors.ThirdSectionBackground}
                                     ThirdSectionTitle={data.ThirdSectionContent.ThirdSectionTitle}
                                     ThirdSectionHasImageOrVideo={data.ThirdSectionContent.ThirdSectionHasImageOrVideo}
                                     ThirdSectionImageSrc={data.ThirdSectionContent.ThirdSectionImageSrc}
                                     ThirdSectionYoutubeLink={data.ThirdSectionContent.ThirdSectionYoutubeLink}
                                     ThirdSectionText={data.ThirdSectionContent.ThirdSectionText}
                                     ThirdSectionTextColor={data.ThirdSectionColors.ThirdSectionTextColor}
                                     ThirdSectionTitleColor={data.ThirdSectionColors.ThirdSectionTitleColor}
                                     ThirdSectionButtonTxt={data.ThirdSectionContent.ThirdSectionButtonTxt}
                                     ThirdSectionButtonHref={data.ThirdSectionContent.ThirdSectionButtonHref}
                                     ThirdSectionButtonColor={data.ThirdSectionColors.ThirdSectionButtonColor}
                                     ThirdSectionButtonTextColor={data.ThirdSectionColors.ThirdSectionButtonTextColor}
                                     FooterAdress={data.FooterContent.FooterAdress}
                                     FooterBackground={data.FooterColors.FooterBackground}
                                     FooterEmail={data.FooterContent.FooterEmail}
                                     FooterHorario={data.FooterContent.FooterHorario}
                                     FooterMapsSrc={data.FooterContent.FooterMapsSrc}
                                     FooterPhone={data.FooterContent.FooterPhone}
                                     FooterTextColors={data.FooterColors.FooterTextColors}
                                     FooterFacebookActive={data.LinksFooter.FooterFacebookActive}
                                     FooterInstagramActive={data.LinksFooter.FooterInstagramActive}
                                     FooterTechsappActive={data.LinksFooter.FooterTechsappActive}
                                     FooterTelefoneActive={data.LinksFooter.FooterTelefoneActive}
                                     FooterTwitterActive={data.LinksFooter.FooterTwitterActive}
                                     FooterWhatsappActive={data.LinksFooter.FooterWhatsappActive}
                                     FooterYoutubeActive={data.LinksFooter.FooterYoutubeActive}
                                     Footercolor={data.LinksFooter.Footercolor}
                                     FooterFacebookUser={data.LinksFooter.FooterFacebookUser}
                                     FooterInstagramUser={data.LinksFooter.FooterInstagramUser}
                                     FooterTechsappLink={data.LinksFooter.FooterTechsappLink}
                                     FooterTelefoneNumber={data.LinksFooter.FooterTelefoneNumber}
                                     FooterTwitterUser={data.LinksFooter.FooterTwitterUser}
                                     FooterWhatsappNumber={data.LinksFooter.FooterWhatsappNumber}
                                     FooterYoutubeUser={data.LinksFooter.FooterYoutubeUser}/>
} /> 


<Route path="/link3" element={ <Link3
                                     HeaderLinks={data.HeaderLinks}
                                     HeaderLinkColor={data.HeaderColors.HeaderLinkColor}
                                     HeaderbgColorOnScroll={data.HeaderColors.HeaderbgColorOnScroll}
                                     HeaderLinksColorOnScroll={data.HeaderColors.HeaderLinksColorOnScroll}
                                     logo={data.HeaderColors.logo}
                                     favicon={data.HeaderColors.favicon}
                                     titulo={data.HeaderColors.titulo}
                                     divider={data.HeaderColors.divider}
                                     FirstSectionBackground={data.FirstSectionColors.FirstSectionBackground}
                                     FirstSectionTitleColor={data.FirstSectionColors.FirstSectionTitleColor}
                                     FirstSectionTextColor={data.FirstSectionColors.FirstSectionTextColor}
                                     FirstSectionTitle={data.FirstSectionContents.FirstSectionTitle}
                                     FirstSectionHasImageOrVideo={data.FirstSectionContents.FirstSectionHasImageOrVideo}
                                     FirstSectionText={data.FirstSectionContents.FirstSectionText}
                                     FirstSectionYoutubeLink={data.FirstSectionContents.FirstSectionYoutubeLink}
                                     FirstSectionImageSrc={data.FirstSectionContents.FirstSectionImageSrc}
                                     FirstSectionButtonHref={data.FirstSectionContents.FirstSectionButtonHref}
                                     FirstSectionButtonTxt={data.FirstSectionContents.FirstSectionButtonTxt}
                                     FirstSectionButtonColor={data.FirstSectionColors.FirstSectionButtonColor}
                                     FirstSectionButtonTextColor={data.FirstSectionColors.FirstSectionButtonTextColor}
                                     color={data.SocialInfos.color}
                                     WhatsappActive={data.SocialInfos.WhatsappActive}
                                     WhatsappNumber={data.SocialInfos.WhatsappNumber}
                                     InstagramActive={data.SocialInfos.InstagramActive}
                                     InstagramUser={data.SocialInfos.InstagramUser}
                                     FacebookActive={data.SocialInfos.FacebookActive}
                                     FacebookUser={data.SocialInfos.FacebookUser}
                                     TechsappActive={data.SocialInfos.TechsappActive}
                                     TechsappLink={data.SocialInfos.TechsappLink}
                                     TelefoneActive={data.SocialInfos.TelefoneActive}
                                     TelefoneNumber={data.SocialInfos.TelefoneNumber}
                                     TwitterActive={data.SocialInfos.TwitterActive}
                                     TwitterUser={data.SocialInfos.TwitterUser}
                                     YoutubeActive={data.SocialInfos.YoutubeActive}
                                     YoutubeUser={data.SocialInfos.YoutubeUser}
                                     GoogleTag={data.SocialInfos.GoogleTag}
                                     FacebookTag={data.SocialInfos.FacebookTag}
                                     GoogleTagSection1={data.SocialInfos.GoogleTagSection1}
                                     FacebookTagSection1={data.SocialInfos.FacebookTagSection1}
                                     GoogleTagSection2={data.SocialInfos.GoogleTagSection2}
                                     FacebookTagSection2={data.SocialInfos.FacebookTagSection2}
                                     GoogleTagSection3={data.SocialInfos.GoogleTagSection3}
                                     FacebookTagSection3={data.SocialInfos.FacebookTagSection3}
                                     SecondSectionBackground={data.SecondSectionColors.SecondSectionBackground}
                                     SecondSectionHasImageOrVideo={data.SecondSectionContents.SecondSectionHasImageOrVideo}
                                     SecondSectionImageSrc={data.SecondSectionContents.SecondSectionImageSrc}
                                     SecondSectionYoutubeLink={data.SecondSectionContents.SecondSectionYoutubeLink}
                                     SecondSectionTitle={data.SecondSectionContents.SecondSectionTitle}
                                     SecondSectionText={data.SecondSectionContents.SecondSectionText}
                                     SecondSectionTitleColor={data.SecondSectionColors.SecondSectionTitleColor}
                                     SecondSectionTextColor={data.SecondSectionColors.SecondSectionTextColor}
                                     SecondSectionButtonTxt={data.SecondSectionContents.SecondSectionButtonTxt}
                                     SecondSectionButtonHref={data.SecondSectionContents.SecondSectionButtonHref}
                                     SecondSectionButtonColor={data.SecondSectionColors.SecondSectionButtonColor}
                                     SecondSectionButtonTextColor={data.SecondSectionColors.SecondSectionButtonTextColor}
                                     ThirdSectionBackground={data.ThirdSectionColors.ThirdSectionBackground}
                                     ThirdSectionTitle={data.ThirdSectionContent.ThirdSectionTitle}
                                     ThirdSectionHasImageOrVideo={data.ThirdSectionContent.ThirdSectionHasImageOrVideo}
                                     ThirdSectionImageSrc={data.ThirdSectionContent.ThirdSectionImageSrc}
                                     ThirdSectionYoutubeLink={data.ThirdSectionContent.ThirdSectionYoutubeLink}
                                     ThirdSectionText={data.ThirdSectionContent.ThirdSectionText}
                                     ThirdSectionTextColor={data.ThirdSectionColors.ThirdSectionTextColor}
                                     ThirdSectionTitleColor={data.ThirdSectionColors.ThirdSectionTitleColor}
                                     ThirdSectionButtonTxt={data.ThirdSectionContent.ThirdSectionButtonTxt}
                                     ThirdSectionButtonHref={data.ThirdSectionContent.ThirdSectionButtonHref}
                                     ThirdSectionButtonColor={data.ThirdSectionColors.ThirdSectionButtonColor}
                                     ThirdSectionButtonTextColor={data.ThirdSectionColors.ThirdSectionButtonTextColor}
                                     FooterAdress={data.FooterContent.FooterAdress}
                                     FooterBackground={data.FooterColors.FooterBackground}
                                     FooterEmail={data.FooterContent.FooterEmail}
                                     FooterHorario={data.FooterContent.FooterHorario}
                                     FooterMapsSrc={data.FooterContent.FooterMapsSrc}
                                     FooterPhone={data.FooterContent.FooterPhone}
                                     FooterTextColors={data.FooterColors.FooterTextColors}
                                     FooterFacebookActive={data.LinksFooter.FooterFacebookActive}
                                     FooterInstagramActive={data.LinksFooter.FooterInstagramActive}
                                     FooterTechsappActive={data.LinksFooter.FooterTechsappActive}
                                     FooterTelefoneActive={data.LinksFooter.FooterTelefoneActive}
                                     FooterTwitterActive={data.LinksFooter.FooterTwitterActive}
                                     FooterWhatsappActive={data.LinksFooter.FooterWhatsappActive}
                                     FooterYoutubeActive={data.LinksFooter.FooterYoutubeActive}
                                     Footercolor={data.LinksFooter.Footercolor}
                                     FooterFacebookUser={data.LinksFooter.FooterFacebookUser}
                                     FooterInstagramUser={data.LinksFooter.FooterInstagramUser}
                                     FooterTechsappLink={data.LinksFooter.FooterTechsappLink}
                                     FooterTelefoneNumber={data.LinksFooter.FooterTelefoneNumber}
                                     FooterTwitterUser={data.LinksFooter.FooterTwitterUser}
                                     FooterWhatsappNumber={data.LinksFooter.FooterWhatsappNumber}
                                     FooterYoutubeUser={data.LinksFooter.FooterYoutubeUser}/>
} /> 

            
            {/* Rota para Link1 */}


        </Routes>
      )}
    </Router>
  );
};

export default App;

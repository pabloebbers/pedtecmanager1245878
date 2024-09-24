import Header from "../ui/partials/Header/Header";
import FirstSection from "../ui/partials/FirstSection/FirstSection";
import SecondSection from "../ui/partials/SecondSection/SecondSection";
import Footer from "../ui/partials/Footer/Footer";
import { PageProps } from "../data/@types/Page/Page.type";
import ThirdSection from "../ui/partials/ThirdSection/ThirdSection";
import Divider from "../ui/components/Divider";

const Home = (props: PageProps) => {
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
        divider={props.divider}      />
      <main>
        <FirstSection
          FirstSectionBackground={props.FirstSectionBackground}
          FirstSectionTitleColor={props.FirstSectionTitleColor}
          FirstSectionTextColor={props.FirstSectionTextColor}
          FirstSectionTitle={props.FirstSectionTitle}
          FirstSectionText={props.FirstSectionText}
          FirstSectionHasImageOrVideo={props.FirstSectionHasImageOrVideo}
          FirstSectionYoutubeLink={props.FirstSectionYoutubeLink}
          FirstSectionImageSrc={props.FirstSectionImageSrc}
          FirstSectionButtonHref={props.FirstSectionButtonHref}
          FirstSectionButtonTxt={props.FirstSectionButtonTxt}
          FirstSectionButtonColor={props.FirstSectionButtonColor}
          FirstSectionButtonTextColor={props.FirstSectionButtonTextColor}
          color={props.color}
          WhatsappActive={props.WhatsappActive}
          WhatsappNumber={props.WhatsappNumber}
          InstagramActive={props.InstagramActive}
          InstagramUser={props.InstagramUser}
          FacebookActive={props.FacebookActive}
          FacebookUser={props.FacebookUser}
          TechsappActive={props.TechsappActive}
          TechsappLink={props.TechsappLink}
          TelefoneActive={props.TelefoneActive}
          TelefoneNumber={props.TelefoneNumber}
          TwitterActive={props.TwitterActive}
          TwitterUser={props.TwitterUser}
          YoutubeActive={props.YoutubeActive}
          YoutubeUser={props.YoutubeUser}
        />

<Divider className="divider-class" color={props.divider} />

        <SecondSection
          SecondSectionBackground={props.SecondSectionBackground}
          SecondSectionHasImageOrVideo={props.SecondSectionHasImageOrVideo}
          SecondSectionImageSrc={props.SecondSectionImageSrc}
          SecondSectionYoutubeLink={props.SecondSectionYoutubeLink}
          SecondSectionTitle={props.SecondSectionTitle}
          SecondSectionText={props.SecondSectionText}
          SecondSectionTitleColor={props.SecondSectionTitleColor}
          SecondSectionTextColor={props.SecondSectionTextColor}
          SecondSectionButtonTxt={props.SecondSectionButtonTxt}
          SecondSectionButtonColor={props.SecondSectionButtonColor}
          SecondSectionButtonHref={props.SecondSectionButtonHref}
          SecondSectionButtonTextColor={props.SecondSectionButtonTextColor}
        />

<Divider className="divider-class" color={props.divider} />

        <ThirdSection
          ThirdSectionBackground={props.ThirdSectionBackground}
          ThirdSectionTitle={props.ThirdSectionTitle}
          ThirdSectionHasImageOrVideo={props.ThirdSectionHasImageOrVideo}
          ThirdSectionImageSrc={props.ThirdSectionImageSrc}
          ThirdSectionYoutubeLink={props.ThirdSectionYoutubeLink}
          ThirdSectionText={props.ThirdSectionText}
          ThirdSectionTextColor={props.ThirdSectionTextColor}
          ThirdSectionTitleColor={props.ThirdSectionTitleColor}
          ThirdSectionButtonTxt={props.ThirdSectionButtonTxt}
          ThirdSectionButtonHref={props.ThirdSectionButtonHref}
          ThirdSectionButtonColor={props.ThirdSectionButtonColor}
          ThirdSectionButtonTextColor={props.ThirdSectionButtonTextColor}
        />
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

export default Home;

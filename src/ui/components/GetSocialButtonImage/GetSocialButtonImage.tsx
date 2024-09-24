import WhatsappBranco from "../../assets/SocialMediaButtons/WhatsApp-branco.png";
import WhatsappPreto from "../../assets/SocialMediaButtons/WhatsApp-preto.png";
import WhatsappAzul from "../../assets/SocialMediaButtons/WhatsApp-azul.png";
import InstagramBranco from "../../assets/SocialMediaButtons/Instagram-branco.png";
import InstagramPreto from "../../assets/SocialMediaButtons/Instagram-preto.png";
import InstagramAzul from "../../assets/SocialMediaButtons/Instagram-azul.png";
import FacebookBranco from "../../assets/SocialMediaButtons/Facebook-branco.png";
import FacebookPreto from "../../assets/SocialMediaButtons/Facebook-preto.png";
import FacebookAzul from "../../assets/SocialMediaButtons/Facebook-azul.png";
import YoutubeBranco from "../../assets/SocialMediaButtons/YouTube-branco.png";
import YoutubePreto from "../../assets/SocialMediaButtons/YouTube-preto.png";
import YoutubeAzul from "../../assets/SocialMediaButtons/YouTube-azul.png";
import TechsappBranco from "../../assets/SocialMediaButtons/TechsApp-branco.png";
import TechsappPreto from "../../assets/SocialMediaButtons/TechsApp-preto.png";
import TechsappAzul from "../../assets/SocialMediaButtons/TechsApp-azul.png";
import TwitterBranco from "../../assets/SocialMediaButtons/Twitter-branco.png";
import TwitterPreto from "../../assets/SocialMediaButtons/Twitter-preto.png";
import TwitterAzul from "../../assets/SocialMediaButtons/Twitter-azul.png";
import TelefoneBranco from "../../assets/SocialMediaButtons/Telefone-branco.png";
import TelefonePreto from "../../assets/SocialMediaButtons/Telefone-preto.png";
import TelefoneAzul from "../../assets/SocialMediaButtons/Telefone-azul.png";

export const getSocialButtonImage = (
  color: "branco" | "preto" | "azul",
  socialType:
    | "Whatsapp"
    | "Instagram"
    | "Facebook"
    | "Youtube"
    | "TechsApp"
    | "Twitter"
    | "Telefone"
) => {
  const socialButtonImages = {
    branco: {
      Whatsapp: WhatsappBranco,
      Instagram: InstagramBranco,
      Facebook: FacebookBranco,
      Youtube: YoutubeBranco,
      TechsApp: TechsappBranco,
      Twitter: TwitterBranco,
      Telefone: TelefoneBranco,
    },
    preto: {
      Whatsapp: WhatsappPreto,
      Instagram: InstagramPreto,
      Facebook: FacebookPreto,
      Youtube: YoutubePreto,
      TechsApp: TechsappPreto,
      Twitter: TwitterPreto,
      Telefone: TelefonePreto,
    },
    azul: {
      Whatsapp: WhatsappAzul,
      Instagram: InstagramAzul,
      Facebook: FacebookAzul,
      Youtube: YoutubeAzul,
      TechsApp: TechsappAzul,
      Twitter: TwitterAzul,
      Telefone: TelefoneAzul,
    },
  };

  return socialButtonImages[color][socialType];
};

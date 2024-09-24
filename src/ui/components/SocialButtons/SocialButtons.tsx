import { transformNumberInWhatassapLink } from "../../../data/services/ConvertLink/ConvertWhatsappLink.service";
import { transformInstagramUserInLink } from "../../../data/services/ConvertLink/ConvertInstagramLink.service";
import { tranformFacebookUserInLink } from "../../../data/services/ConvertLink/ConvertFacebook.service";
import { transformYoutubeUserInLink } from "../../../data/services/ConvertLink/ConvertYoutubeLink.service";
import { transformTwitterUserInLink } from "../../../data/services/ConvertLink/ConvertTwitterLink.service";
import { SocialInfosType } from "../../../data/@types/SocialInfos/SocialInfos.type";
import { getSocialButtonImage } from "../GetSocialButtonImage/GetSocialButtonImage";
import { SocialButtonContainer } from "../../styles/SocialButton/SocialButton.style";

const SocialButtons = (props: SocialInfosType) => {
  return (
    <SocialButtonContainer>
      {props.WhatsappActive && (
        <a
          href={transformNumberInWhatassapLink(props.WhatsappNumber)}
          target="_blank"
        >
          <img src={getSocialButtonImage(props.color, "Whatsapp")} alt="Whatsapp Button" />
        </a>
      )}
      {props.InstagramActive && (
        <a
          href={transformInstagramUserInLink(props.InstagramUser)}
          target="_blank"
        >
          <img src={getSocialButtonImage(props.color, "Instagram")} alt="Instagram Button" />
        </a>
      )}
      {props.FacebookActive && (
        <a
          href={tranformFacebookUserInLink(props.FacebookUser)}
          target="_blank"
        >
          <img src={getSocialButtonImage(props.color, "Facebook")} alt="Facebook Button" />
        </a>
      )}
      {props.YoutubeActive && (
        <a href={transformYoutubeUserInLink(props.YoutubeUser)} target="_blank">
          <img src={getSocialButtonImage(props.color, "Youtube")} alt="Youtube Button" />
        </a>
      )}
      {props.TechsappActive && (
        <a href={props.TechsappLink} target="_blank">
          <img src={getSocialButtonImage(props.color, "TechsApp")} alt="Techsapp Button" />
        </a>
      )}
      {props.TwitterActive && (
        <a href={transformTwitterUserInLink(props.TwitterUser)} target="_blank">
          <img src={getSocialButtonImage(props.color, "Twitter")} alt="Twitter Button" />
        </a>
      )}
      {props.TelefoneActive && (
        <a href={`tel:+55${props.TelefoneNumber}`} target="_blank">
          <img src={getSocialButtonImage(props.color, "Telefone")} alt="Telefone Button" />
        </a>
      )}
    </SocialButtonContainer>
  );
};

export default SocialButtons;

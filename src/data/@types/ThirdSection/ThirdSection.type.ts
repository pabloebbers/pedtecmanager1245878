<<<<<<< HEAD
import { ButtonProps } from "../Button/Button.type";
import { SocialInfosType } from "../SocialInfos/SocialInfos.type";

export interface ThirdSectionProps extends ThirdSectionContent, ThirdSectionColors, Partial<ButtonProps>, Partial<SocialInfosType> {}
=======
export interface ThirdSectionProps extends ThirdSectionContent, ThirdSectionColors {}
>>>>>>> b3aa649c6754ecaeeaf62c41fc84a58551560920

export type ThirdSectionContent = {
  ThirdSectionTitle: string;
  ThirdSectionText: string;
<<<<<<< HEAD
  ThirdSectionHasImageOrVideo?: "image" | "video";
=======
  ThirdSectionHasImageOrVideo: "image" | "video";
>>>>>>> b3aa649c6754ecaeeaf62c41fc84a58551560920
  ThirdSectionImageSrc: string;
  ThirdSectionYoutubeLink: string
  ThirdSectionButtonTxt: string;
  ThirdSectionButtonHref: string
};

export type ThirdSectionColors = {
    ThirdSectionBackground: string;
    ThirdSectionTitleColor: string;
    ThirdSectionTextColor: string;
    ThirdSectionButtonColor: string;
    ThirdSectionButtonTextColor: string;
}
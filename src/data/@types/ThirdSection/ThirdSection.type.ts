import { ButtonProps } from "../Button/Button.type";
import { SocialInfosType } from "../SocialInfos/SocialInfos.type";

export interface ThirdSectionProps extends ThirdSectionContent, ThirdSectionColors, Partial<ButtonProps>, Partial<SocialInfosType> {}

export type ThirdSectionContent = {
  ThirdSectionTitle: string;
  ThirdSectionText: string;
  ThirdSectionHasImageOrVideo?: "image" | "video";
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
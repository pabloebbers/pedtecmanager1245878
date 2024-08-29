import { SocialInfosType } from "../SocialInfos/SocialInfos.type";
import { ButtonProps } from "../Button/Button.type";

export interface FirstSectionProps
  extends FirstSectionColorsType,
  Partial<FirstSectionContentsType>, Partial<ButtonProps>, Partial<SocialInfosType> {}

export type FirstSectionColorsType = {
  FirstSectionBackground: string;
  FirstSectionTitleColor: string;
  FirstSectionTextColor: string;
  FirstSectionButtonColor: string;
  FirstSectionButtonTextColor: string; 
};

export type FirstSectionContentsType = {
  FirstSectionTitle: string;
  FirstSectionText: string;
  FirstSectionYoutubeLink: string;
  FirstSectionImageSrc: string;
  FirstSectionHasImageOrVideo?: "image" | "video";
  FirstSectionButtonHref: string;
  FirstSectionButtonTxt: string;
};

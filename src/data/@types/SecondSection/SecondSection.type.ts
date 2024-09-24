<<<<<<< HEAD
import { ButtonProps } from "../Button/Button.type";
import { SocialInfosType } from "../SocialInfos/SocialInfos.type";

export interface SecondSectionProps extends SecondSectionColorsType, SecondSectionContentsType, Partial<ButtonProps>, Partial<SocialInfosType> {}

=======
export interface SecondSectionProps extends SecondSectionColorsType, SecondSectionContentsType {}
>>>>>>> b3aa649c6754ecaeeaf62c41fc84a58551560920

export type SecondSectionColorsType = {
  SecondSectionBackground: string;
  SecondSectionTitleColor: string;
  SecondSectionTextColor: string;
  SecondSectionButtonColor: string;
  SecondSectionButtonTextColor: string;
};

export type SecondSectionContentsType = {
<<<<<<< HEAD
  SecondSectionHasImageOrVideo?: "image" | "video";
=======
  SecondSectionHasImageOrVideo: "image" | "video";
>>>>>>> b3aa649c6754ecaeeaf62c41fc84a58551560920
  SecondSectionImageSrc: string;
  SecondSectionYoutubeLink: string;
  SecondSectionTitle: string;
  SecondSectionText: string;
  SecondSectionButtonTxt: string;
  SecondSectionButtonHref: string;
};

export interface SecondSectionProps extends SecondSectionColorsType, SecondSectionContentsType {}

export type SecondSectionColorsType = {
  SecondSectionBackground: string;
  SecondSectionTitleColor: string;
  SecondSectionTextColor: string;
  SecondSectionButtonColor: string;
  SecondSectionButtonTextColor: string;
};

export type SecondSectionContentsType = {
  SecondSectionHasImageOrVideo: "image" | "video";
  SecondSectionImageSrc: string;
  SecondSectionYoutubeLink: string;
  SecondSectionTitle: string;
  SecondSectionText: string;
  SecondSectionButtonTxt: string;
  SecondSectionButtonHref: string;
};

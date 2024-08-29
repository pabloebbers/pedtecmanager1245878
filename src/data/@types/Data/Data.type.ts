import {
  FirstSectionColorsType,
  FirstSectionContentsType,
} from "../FirstSection/FirstSection.type";
import { FooterColors, FooterContent, LinksFooter } from "../Footer/Footer.type";
import { HeaderColorsType, HeaderProps } from "../Header/Header.type";
import { SecondSectionColorsType, SecondSectionContentsType } from "../SecondSection/SecondSection.type";
import { SocialInfosType } from "../SocialInfos/SocialInfos.type";
import { ThirdSectionColors, ThirdSectionContent } from "../ThirdSection/ThirdSection.type";

export interface DataType extends Partial<HeaderProps> {
  HeaderColors: HeaderColorsType;
  FirstSectionColors: FirstSectionColorsType;
  FirstSectionContents: FirstSectionContentsType;
  SocialInfos: SocialInfosType;
  SecondSectionColors: SecondSectionColorsType;
  SecondSectionContents: SecondSectionContentsType;
  ThirdSectionContent: ThirdSectionContent;
  ThirdSectionColors: ThirdSectionColors;
  FooterColors: FooterColors;
  FooterContent: FooterContent;
  LinksFooter: LinksFooter;
}

import { SecondSectionProps } from "../SecondSection/SecondSection.type";
import { FirstSectionProps } from "../FirstSection/FirstSection.type";
import { HeaderProps } from "../Header/Header.type";
import { ThirdSectionProps } from "../ThirdSection/ThirdSection.type";
import { FooterProps } from "../Footer/Footer.type";

export interface PageProps extends HeaderProps, FirstSectionProps, SecondSectionProps, ThirdSectionProps, FooterProps {}

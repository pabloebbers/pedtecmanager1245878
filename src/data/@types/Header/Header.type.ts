import { LinkTypes } from "../Link/Link.type";

export type HeaderProps = {
  HeaderLinks: LinkTypes[] | undefined;
  scrolled?: boolean;
  HeaderbgColorOnScroll: string;
  HeaderLinksColorOnScroll: string;
  HeaderLinkColor: string;
  logo: string,
  favicon: string,
  titulo: string,
  divider: string;
};

export type HeaderColorsType = {
  HeaderbgColorOnScroll: string;
  HeaderLinksColorOnScroll: string;
  HeaderLinkColor: string;
  Font1: string,
  Font2: string,
  Font3: string,
  titulo: string,

  logo: string,
  favicon: string,
  divider: string;
};

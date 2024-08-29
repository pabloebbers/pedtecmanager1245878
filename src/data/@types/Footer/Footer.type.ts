export interface FooterProps extends FooterContent, FooterColors, LinksFooter {}

export type FooterContent = {
  FooterHorario: string;
  FooterEmail: string;
  FooterAdress: string;
  FooterPhone: string;
  FooterMapsSrc: string;
};

export type FooterColors = {
  FooterTextColors: string;
  FooterBackground: string;
};

export type LinksFooter = {
  Footercolor: "branco" | "preto" | "azul";
  FooterWhatsappActive: boolean | undefined;
  FooterWhatsappNumber?: string;
  FooterInstagramActive: boolean | undefined;
  FooterInstagramUser?: string | undefined;
  FooterFacebookActive: boolean | undefined;
  FooterFacebookUser?: string | undefined;
  FooterYoutubeActive: boolean | undefined;
  FooterYoutubeUser?: string | undefined;
  FooterTechsappActive: boolean | undefined;
  FooterTechsappLink?: string | undefined;
  FooterTwitterActive: boolean | undefined;
  FooterTwitterUser?: string | undefined;
  FooterTelefoneActive: boolean | undefined;
  FooterTelefoneNumber?: string | undefined;
};

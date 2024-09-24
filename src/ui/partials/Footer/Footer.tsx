import { Col, Container, Row } from "react-bootstrap";
import { FooterContainer } from "../../styles/Footer/Footer.styles";
import SocialButtons from "../../components/SocialButtons/SocialButtons";
import { FooterProps } from "../../../data/@types/Footer/Footer.type";

const Footer = (props: FooterProps) => {
  return (
    <FooterContainer
<<<<<<< HEAD
      id="footer"
=======
>>>>>>> b3aa649c6754ecaeeaf62c41fc84a58551560920
      FooterBackground={props.FooterBackground}
      FooterTextColors={props.FooterTextColors}
    >
      <Container>
        <Row>
          <Col xs={12} md={6} xl={4}>
            <h3>Informações</h3>
            <div>
              <p>Atendimento: {props.FooterHorario}</p>
              <p>{props.FooterEmail}</p>
              <p>{props.FooterAdress}</p>
              <p>Telefone: {props.FooterPhone}</p>
            </div>
          </Col>
          <Col xs={12} md={6} xl={4}>
            <h3>Localização</h3>
            <iframe
              src={props.FooterMapsSrc}
              width="80%"
              height="auto"
              style={{ border: "none" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
          <Col xs={12} md={6} xl={4}>
<<<<<<< HEAD
            <h3>Links</h3>
=======
            <h3>Link</h3>
>>>>>>> b3aa649c6754ecaeeaf62c41fc84a58551560920
            <SocialButtons
              FacebookActive={props.FooterFacebookActive}
              InstagramActive={props.FooterInstagramActive}
              TechsappActive={props.FooterTechsappActive}
              TelefoneActive={props.FooterTelefoneActive}
              TwitterActive={props.FooterTwitterActive}
              WhatsappActive={props.FooterWhatsappActive}
              YoutubeActive={props.FooterYoutubeActive}
              color={props.Footercolor}
              FacebookUser={props.FooterFacebookUser}
              InstagramUser={props.FooterInstagramUser}
              TechsappLink={props.FooterTechsappLink}
              TelefoneNumber={props.FooterTelefoneNumber}
              TwitterUser={props.FooterTwitterUser}
              WhatsappNumber={props.FooterWhatsappNumber}
              YoutubeUser={props.FooterYoutubeUser}
            />
          </Col>
          <hr />
          <Col
            xs={12}
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <p>Copyright © 2022 PedTech.</p>.
          </Col>
        </Row>
      </Container>
    </FooterContainer>
  );
};

export default Footer;

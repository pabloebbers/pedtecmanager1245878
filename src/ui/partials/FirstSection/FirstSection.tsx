import { Col, Container, Row } from "react-bootstrap";
import { FirstSectionContainer } from "../../styles/FirstSection/FirstSection.styles";
import { FirstSectionProps } from "../../../data/@types/FirstSection/FirstSection.type";
import { FaWhatsapp } from "react-icons/fa";
import RenderYoutubeVideoOrImage from "../../components/RenderYoutubeVideoOrImage/RenderYoutubeVideoOrImage";
import Button from "../../components/Button/Button";
import SocialButtons from "../../components/SocialButtons/SocialButtons";

const FirstSection = (props: FirstSectionProps) => {
  console.log(props);
  return (
    <FirstSectionContainer
      FirstSectionTitleColor={props.FirstSectionTitleColor}
      FirstSectionTextColor={props.FirstSectionTextColor}
      FirstSectionBackground={props.FirstSectionBackground}
      id="firstsection"
    >
      <Container fluid>
        <Row className="align-items-center justify-content-center">
          <Col xs={12} md={6} className="text-center">
            <h1 className="mb-3 titulo">{props.FirstSectionTitle}</h1>
            
            <p className="mb-3" dangerouslySetInnerHTML={{ __html: props.FirstSectionText || '' }} />
            <div className="d-flex align-items-center justify-content-center w-100 mb-4">
              {props.color && (
                <SocialButtons
                  color={props.color}
                  WhatsappActive={props.WhatsappActive}
                  WhatsappNumber={props.WhatsappNumber}
                  InstagramActive={props.InstagramActive}
                  InstagramUser={props.InstagramUser}
                  FacebookActive={props.FacebookActive}
                  FacebookUser={props.FacebookUser}
                  TechsappActive={props.TechsappActive}
                  TechsappLink={props.TechsappLink}
                  TelefoneActive={props.TelefoneActive}
                  TelefoneNumber={props.TelefoneNumber}
                  TwitterActive={props.TwitterActive}
                  TwitterUser={props.TwitterUser}
                  YoutubeActive={props.YoutubeActive}
                  YoutubeUser={props.YoutubeUser}
                />
              )}
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="d-flex flex-column justify-content-center">
              {props.FirstSectionHasImageOrVideo && (
                <RenderYoutubeVideoOrImage
                  type={props.FirstSectionHasImageOrVideo}
                  imageSrc={props.FirstSectionImageSrc}
                  youtubeLink={props.FirstSectionYoutubeLink}
                />
              )}
            {props.FirstSectionButtonTxt && (
            <Button
              buttonTxt={props.FirstSectionButtonTxt}
              ButtonBackground={props.FirstSectionButtonColor}
              ButtonHref={props.FirstSectionButtonHref}
              ButtonTextColor={props.FirstSectionButtonTextColor}
            />
            )}
            </div>
          </Col>
        </Row>
      </Container>
    </FirstSectionContainer>
  );
};

export default FirstSection;
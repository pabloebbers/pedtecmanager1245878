import { Col, Container, Row } from "react-bootstrap";
import { FirstSectionContainer } from "../../styles/FirstSection/FirstSection.styles";
import { FirstSectionProps } from "../../../data/@types/FirstSection/FirstSection.type";
import RenderYoutubeVideoOrImage from "../../components/RenderYoutubeVideoOrImage/RenderYoutubeVideoOrImage";
import Button from "../../components/Button/Button";
import SocialButtons from "../../components/SocialButtons/SocialButtons";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";

const FirstSection = (props: FirstSectionProps) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/link1", {
      state: {
        href: props.FirstSectionButtonHref,
        FacebookTagSection1: props.FacebookTagSection1,
        GoogleTagSection1: props.GoogleTagSection1,
      },
    });
  };

  return (
    <FirstSectionContainer
      FirstSectionTitleColor={props.FirstSectionTitleColor}
      FirstSectionTextColor={props.FirstSectionTextColor}
      FirstSectionBackground={props.FirstSectionBackground}
      FirstSectionButtonColor={props.FirstSectionButtonColor}
      FirstSectionButtonTextColor={props.FirstSectionButtonTextColor}
      id="firstsection"
=======

const FirstSection = (props: FirstSectionProps) => {
  console.log(props);
  return (
    <FirstSectionContainer
    FirstSectionTitleColor={props.FirstSectionTitleColor}
    FirstSectionTextColor={props.FirstSectionTextColor}
    FirstSectionBackground={props.FirstSectionBackground}
    FirstSectionButtonColor={props.FirstSectionButtonColor}         // Adicionando essa linha
    FirstSectionButtonTextColor={props.FirstSectionButtonTextColor} // Adicionando essa linha
    id="firstsection"
>>>>>>> b3aa649c6754ecaeeaf62c41fc84a58551560920
    >
      <Container fluid>
        <Row className="align-items-center justify-content-center">
          <Col xs={12} md={6} className="text-center">
            <h1 className="mb-3 titulo">{props.FirstSectionTitle}</h1>
<<<<<<< HEAD

            <p className="mb-3" dangerouslySetInnerHTML={{ __html: props.FirstSectionText || "" }} />

            {props.FirstSectionButtonTxt && (
              <Button
                buttonTxt={props.FirstSectionButtonTxt}
                ButtonBackground={props.FirstSectionButtonColor}
                ButtonTextColor={props.FirstSectionButtonTextColor}
                onClick={handleButtonClick}
              />
            )}

=======
            
            <p className="mb-3" dangerouslySetInnerHTML={{ __html: props.FirstSectionText || '' }} />
>>>>>>> b3aa649c6754ecaeeaf62c41fc84a58551560920
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
<<<<<<< HEAD
                  YoutubeUser={props.YoutubeUser} 
                  
                  GoogleTag={props.GoogleTag} 
                  FacebookTag={props.FacebookTag} 
                  GoogleTagSection1={props.GoogleTagSection1} 
                  FacebookTagSection1={props.FacebookTagSection1} 
                  GoogleTagSection2={props.GoogleTagSection2} 
                  FacebookTagSection2={props.FacebookTagSection2} 
                  GoogleTagSection3={props.GoogleTagSection3} 
                  FacebookTagSection3={props.FacebookTagSection3}                />
=======
                  YoutubeUser={props.YoutubeUser}
                />
>>>>>>> b3aa649c6754ecaeeaf62c41fc84a58551560920
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
<<<<<<< HEAD
=======
            {props.FirstSectionButtonTxt && (
            <Button
              buttonTxt={props.FirstSectionButtonTxt}
              ButtonBackground={props.FirstSectionButtonColor}
              ButtonHref={props.FirstSectionButtonHref}
              ButtonTextColor={props.FirstSectionButtonTextColor}
            />
            )}
>>>>>>> b3aa649c6754ecaeeaf62c41fc84a58551560920
            </div>
          </Col>
        </Row>
      </Container>
    </FirstSectionContainer>
  );
};

<<<<<<< HEAD
export default FirstSection;
=======
export default FirstSection;
>>>>>>> b3aa649c6754ecaeeaf62c41fc84a58551560920

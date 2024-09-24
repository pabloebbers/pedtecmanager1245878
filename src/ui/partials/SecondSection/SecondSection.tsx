import { SecondSectionProps } from "../../../data/@types/SecondSection/SecondSection.type";
import RenderYoutubeVideoOrImage from "../../components/RenderYoutubeVideoOrImage/RenderYoutubeVideoOrImage";
import { Col, Container, Row } from "react-bootstrap";
import { SecondSectionContainer } from "../../styles/SecondSection/SecondSection.styles";
import Button from "../../components/Button/Button";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";

const SecondSection = (props: SecondSectionProps) => {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/link2", {
      state: {
        href: props.SecondSectionButtonHref,
        FacebookTagSection2: props.FacebookTagSection2,
        GoogleTagSection2: props.GoogleTagSection2,
      },
    });
  };

=======

const SecondSection = (props: SecondSectionProps) => {
>>>>>>> b3aa649c6754ecaeeaf62c41fc84a58551560920
  if (!props.SecondSectionTitle) {
    return null;
  }
  
  return (
    <SecondSectionContainer
      SecondSectionBackground={props.SecondSectionBackground}
      SecondSectionTitleColor={props.SecondSectionTitleColor}
      SecondSectionTextColor={props.SecondSectionTextColor}
      id="secondsection"
    >
      <Container>
        <Row>
          <Col sm={12} xl={6}>
            {props.SecondSectionHasImageOrVideo && (
              <RenderYoutubeVideoOrImage
                type={props.SecondSectionHasImageOrVideo}
                imageSrc={props.SecondSectionImageSrc}
                youtubeLink={props.SecondSectionYoutubeLink}
              />
            )}
          </Col>
          <Col
            sm={12}
            xl={6}
            className="d-flex flex-column align-items-center justify-content-center"
          >
            <h2 className="titulo" >{props.SecondSectionTitle}</h2>
            <p dangerouslySetInnerHTML={{ __html: props.SecondSectionText }} />
<<<<<<< HEAD


=======
>>>>>>> b3aa649c6754ecaeeaf62c41fc84a58551560920
            {props.SecondSectionButtonTxt && (
            <Button
              buttonTxt={props.SecondSectionButtonTxt}
              ButtonBackground={props.SecondSectionButtonColor}
<<<<<<< HEAD
              ButtonTextColor={props.SecondSectionButtonTextColor}
              onClick={handleButtonClick}
            />
            )}

=======
              ButtonHref={props.SecondSectionButtonHref}
              ButtonTextColor={props.SecondSectionButtonTextColor}
            />
            )}
>>>>>>> b3aa649c6754ecaeeaf62c41fc84a58551560920
          </Col>
        </Row>
      </Container>
    </SecondSectionContainer>
  );
};

export default SecondSection;

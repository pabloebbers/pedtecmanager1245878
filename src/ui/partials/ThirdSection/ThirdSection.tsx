import { Col, Container, Row } from "react-bootstrap";
import { ThirdSectionContainer } from "../../styles/ThirdSection/ThirdSection.style";
import { ThirdSectionProps } from "../../../data/@types/ThirdSection/ThirdSection.type";
import RenderYoutubeVideoOrImage from "../../components/RenderYoutubeVideoOrImage/RenderYoutubeVideoOrImage";
import Button from "../../components/Button/Button";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";

const ThirdSection = (props: ThirdSectionProps) => {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/link3", {
      state: {
        href: props.ThirdSectionButtonHref,
        FacebookTagSection3: props.FacebookTagSection3,
        GoogleTagSection3: props.GoogleTagSection3,
      },
    });
  };

=======

const ThirdSection = (props: ThirdSectionProps) => {

>>>>>>> b3aa649c6754ecaeeaf62c41fc84a58551560920
  if (!props.ThirdSectionTitle) {
    return null;
  }

  return (
    <ThirdSectionContainer
      ThirdSectionBackground={props.ThirdSectionBackground}
      ThirdSectionTitleColor={props.ThirdSectionTitleColor}
      ThirdSectionTextColor={props.ThirdSectionTextColor}
      id="thirdsection"
    >
      <Container>
        <Row>
          <Col
            xs={12}
            lg={6}
            className="d-flex flex-column align-items-center justify-content-center "
          >
            <h2 className="titulo">{props.ThirdSectionTitle}</h2>
            <p dangerouslySetInnerHTML={{ __html: props.ThirdSectionText }} />
            {props.ThirdSectionButtonTxt && (
            <Button 
            buttonTxt={props.ThirdSectionButtonTxt}
            ButtonBackground={props.ThirdSectionButtonColor}
            ButtonTextColor={props.ThirdSectionButtonTextColor}
<<<<<<< HEAD
            onClick={handleButtonClick}
=======
            ButtonHref={props.ThirdSectionButtonHref}
>>>>>>> b3aa649c6754ecaeeaf62c41fc84a58551560920
            />
            )}
          </Col>
          <Col xs={12} lg={6}>
            {props.ThirdSectionHasImageOrVideo && (
              <RenderYoutubeVideoOrImage
                type={props.ThirdSectionHasImageOrVideo}
                imageSrc={props.ThirdSectionImageSrc}
                youtubeLink={props.ThirdSectionYoutubeLink}
              />
            )}
          </Col>
        </Row>
      </Container>
    </ThirdSectionContainer>
  );
};

export default ThirdSection;

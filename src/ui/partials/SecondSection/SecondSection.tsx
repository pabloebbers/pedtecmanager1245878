import { SecondSectionProps } from "../../../data/@types/SecondSection/SecondSection.type";
import RenderYoutubeVideoOrImage from "../../components/RenderYoutubeVideoOrImage/RenderYoutubeVideoOrImage";
import { Col, Container, Row } from "react-bootstrap";
import { SecondSectionContainer } from "../../styles/SecondSection/SecondSection.styles";
import Button from "../../components/Button/Button";

const SecondSection = (props: SecondSectionProps) => {
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
            {props.SecondSectionButtonTxt && (
            <Button
              buttonTxt={props.SecondSectionButtonTxt}
              ButtonBackground={props.SecondSectionButtonColor}
              ButtonHref={props.SecondSectionButtonHref}
              ButtonTextColor={props.SecondSectionButtonTextColor}
            />
            )}
          </Col>
        </Row>
      </Container>
    </SecondSectionContainer>
  );
};

export default SecondSection;

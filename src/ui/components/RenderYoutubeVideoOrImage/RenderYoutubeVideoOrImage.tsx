import YoutubeVideo from "../../components/youtubeVideo/youtubeVideo";

interface RenderYoutubeVideoOrImageProps {
  type: "image" | "video";
  imageSrc?: string;
  youtubeLink?: string;
}

const RenderYoutubeVideoOrImage = ({
  type,
  imageSrc,
  youtubeLink,
}: RenderYoutubeVideoOrImageProps) => {
  if (type === "image" && imageSrc) {
    return <img src={imageSrc} alt="Imagem" className="img-fluid" />;
  } else if (type === "video" && youtubeLink) {
    return <YoutubeVideo YoutubeVideoLink={youtubeLink} />;
  } else {
    return null;
  }
};

export default RenderYoutubeVideoOrImage;

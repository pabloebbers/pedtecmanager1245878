import { useState } from "react";
import { YoutubeVideoProps } from "../../../data/@types/YoutubeVideo/YoutubeVideo.type";
import {
  convertToEmbedLink,
  extractVideoCode,
} from "../../../data/services/ConvertLink/convertToEmbedLink.service";
import { VideoContainer } from "../../styles/YoutubeVideo/YoutubeVideo.style";
import { FaPlay } from "react-icons/fa";

const YoutubeVideo = (props: YoutubeVideoProps) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [autoplayEnabled, setAutoplayEnabled] = useState(false);
  const YoutubeLink = convertToEmbedLink(props.YoutubeVideoLink);
  const videoCode = extractVideoCode(props.YoutubeVideoLink);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoCode}/hqdefault.jpg`;

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  const handleThumbnailClick = () => {
    setVideoLoaded(true);
    setAutoplayEnabled(true);
  };

  return (
    <VideoContainer className="embed-responsive embed-responsive-16by9">
      {!videoLoaded && (
        <div
          onClick={handleThumbnailClick}
          style={{
            cursor: "pointer",
            position: "relative",
          }}
        >
          <img src={thumbnailUrl} alt="Video thumbnail" />
          <FaPlay
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "4em",
              color: "red",
            }}
          />
        </div>
      )}
      {videoLoaded && (
        <iframe
          className="embed-responsive-item"
          src={`${YoutubeLink}/${autoplayEnabled ? "&autoplay=1" : ""}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          onLoad={handleVideoLoad}
        ></iframe>
      )}
    </VideoContainer>
  );
};

export default YoutubeVideo;

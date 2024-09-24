export const transformYoutubeUserInLink = (YoutubeUser: string | undefined) => {
  if (YoutubeUser) {
    return `https://www.youtube.com/@${YoutubeUser}`;
  } else {
    return "";
  }
};

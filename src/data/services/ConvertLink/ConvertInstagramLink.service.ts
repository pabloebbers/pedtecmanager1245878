export const transformInstagramUserInLink = (
  InstagramUser: string | undefined
) => {
  if (InstagramUser) {
    return `https://www.instagram.com/${InstagramUser}`;
  } else {
    return "";
  }
};

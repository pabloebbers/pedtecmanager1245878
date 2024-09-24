export const tranformFacebookUserInLink = (
  FacebookUser: string | undefined
) => {
  if (FacebookUser) {
    return `https://www.facebook.com/${FacebookUser}`;
  } else {
    return "";
  }
};

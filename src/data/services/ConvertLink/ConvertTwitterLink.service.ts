export const transformTwitterUserInLink = (TwitterUser: string | undefined) => {
  if (TwitterUser) {
    return `https://twitter.com/${TwitterUser}`;
  } else {
    return "";
  }
};

export const convertToEmbedLink = (link: string): string => {
  if (link.includes("/embed/")) {
    return link;
  } else {
    const videoCode = extractVideoCode(link);
    return `https://www.youtube.com/embed/${videoCode}`;
  }
};

export const extractVideoCode = (link: string): string => {
  const url = new URL(link);
  const searchParams = new URLSearchParams(url.search);
  return searchParams.get("v") || url.pathname.split("/").pop() || "";
};

export const transformNumberInWhatassapLink = (
  WhatsappNumber: string | undefined
) => {
  if (WhatsappNumber) {
    return `https://api.whatsapp.com/send?phone=55${WhatsappNumber}`;
  } else {
    return "";
  }
};

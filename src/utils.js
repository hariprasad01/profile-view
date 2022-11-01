export const formatDocumentResponse = (response) => {
  return { ...response.data(), id: response.id };
}

const monthArray = ["January", "February", "March", "April", "May", "June", "July",
  "August", "September", "October", "November", "December"];

export const getFormattedDateString = () => {
  const dateObj = new Date();
  const month = dateObj.getUTCMonth(); //months from 1-12
  const day = dateObj.getUTCDate();
  const year = dateObj.getUTCFullYear();
  return `${monthArray[month]} ${day}, ${year}`;
}
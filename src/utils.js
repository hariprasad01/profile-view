export const formatDocumentResponse = (response) => {
  return {...response.data(), id: response.id};
} 
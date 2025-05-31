import { useEffect, useState } from 'react';
import MyDocument from './MyDocument';

const PdfContainer = ({ data }) => {
  const [imageBase64, setImageBase64] = useState(null);
  const [imageError, setImageError] = useState(false);

  const fetchImageAsBase64 = async (imagePath) => {
    try {
      const response = await fetch(imagePath);
      if (!response.ok) throw new Error('Failed to fetch image');

      const blob = await response.blob();

      return await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          console.log('Base64 loaded:', reader.result); 
          resolve(reader.result);
        };
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
    } catch (error) {
      setImageError(true);
      return null;
    }
  };

  useEffect(() => {
    const load = async () => {
      if (!data?.image) {
        setImageError(true);
        return;
      }

      const imagePath = data.image.includes('-png')
        ? data.image.replace('-png', '.png')
        : data.image;

      const imageUrl = `${import.meta.env.VITE_API_IMAGE_BASE_URL}/${imagePath}`;
      console.log('🌐 Image URL:', imageUrl); 

      const base64 = await fetchImageAsBase64(imageUrl);
      console.log('✅ Fetched Base64:', base64); 
      setImageBase64(base64);
    };

    load();
  }, [data?.image]);

  // Show loading until imageBase64 is ready or error occurs
  if (!imageBase64 && !imageError) {
    return <p>Loading PDF content...</p>;
  }

  return (
    <MyDocument
      data={data}
      imageBase64={imageBase64}
      imageError={imageError}
    />
  );
};

export default PdfContainer;

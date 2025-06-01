import { useEffect, useState } from 'react';
import MyDocument from './MyDocument';

const PdfContainer = ({ data }) => {
  const [imageBase64, setImageBase64] = useState(null);
  const [imageError, setImageError] = useState(false);

  const imageUrl = `${import.meta.env.VITE_API_IMAGE_BASE_URL}/${data?.image}`;

  useEffect(() => {
    const convertToBase64 = async () => {
      try {
        const response = await fetch(imageUrl, {
          mode: 'cors' // ✅ Important for cross-origin requests
        });

        if (!response.ok) throw new Error('Failed to fetch image');

        const blob = await response.blob();
        const reader = new FileReader();

        reader.onloadend = () => {
          setImageBase64(reader.result); // Base64 string
        };

        reader.onerror = () => {
          setImageError(true);
        };

        reader.readAsDataURL(blob);
      } catch (error) {
        console.error('Image load error:', error);
        setImageError(true);
      }
    };

    if (imageUrl) {
      convertToBase64();
    }
  }, [imageUrl]);

  return (
    <MyDocument
      data={data}
      imageBase64={imageBase64}
      imageError={imageError}
    />
  );
};

export default PdfContainer;

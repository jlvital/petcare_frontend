import React, { useState, useEffect } from 'react';
import { Box, Button, CircularProgress } from '@mui/material';
import axios from 'axios';

const UploadImageField = ({ folder = 'PetCare', onUpload, existingUrl, onImageSelect }) => {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState('');

  useEffect(() => {
    setUploadedUrl(existingUrl || '');
  }, [existingUrl]);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      onImageSelect?.(file);
    }
  };

  const handleUpload = async () => {
    if (!image) return;

    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'PetCare');
    data.append('folder', folder);

    setUploading(true);
    try {
      const res = await axios.post('https://api.cloudinary.com/v1_1/dcnshxts9/image/upload', data);
      const url = res.data.secure_url;
      setUploadedUrl(url);
      onUpload?.(url);
      setImage(null); // Limpia la imagen seleccionada
    } catch {
      alert('Error al subir imagen');
    } finally {
      setUploading(false);
    }
  };

  return (
    <Box className="flex flex-col items-center gap-2 mt-2">
      <input
        type="file"
        id="image-upload"
        accept="image/*"
        onChange={handleChange}
        style={{ display: 'none' }}
      />

      <Box className="flex flex-row gap-2 items-center justify-center">
        <label htmlFor="image-upload">
          <Button
            component="span"
            variant="contained"
            size="small"
            disabled={uploading}
          >
            {uploading
              ? <CircularProgress size={20} />
              : uploadedUrl ? 'Cambiar imagen' : 'Subir imagen'}
          </Button>
        </label>

        {image && (
          <Button
            onClick={handleUpload}
            variant="outlined"
            size="small"
            color="primary"
          >
            Confirmar subida
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default UploadImageField;
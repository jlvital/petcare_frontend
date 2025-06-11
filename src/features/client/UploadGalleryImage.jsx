import React, { useState } from 'react';
import { Box, Button, Typography, CircularProgress } from '@mui/material';
import axios from 'axios';


const UploadGalleryImage = () => {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState('');

  const handleChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!image) return;

    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'petcare_gallery'); // el que creaste en Cloudinary

    setUploading(true);
    try {
      const res = await axios.post('https://api.cloudinary.com/v1_1/dcnshxts9/image/upload', data);
      setUploadedUrl(res.data.secure_url);
    } catch (err) {
      alert('❌ Error al subir imagen');
    } finally {
      setUploading(false);
    }
  };

  return (
    <Box sx={{ textAlign: 'center', mt: 5 }}>
      <Typography variant="h6">Sube la foto de tu mascota 🐾</Typography>
      <input type="file" onChange={handleChange} />
      <Button onClick={handleUpload} variant="contained" sx={{ mt: 2 }} disabled={uploading}>
        {uploading ? <CircularProgress size={20} /> : 'Subir'}
      </Button>

      {uploadedUrl && (
        <Box mt={3}>
          <Typography variant="body2">✅ Imagen subida correctamente:</Typography>
          <img src={uploadedUrl} alt="mascota" style={{ maxWidth: '100%', marginTop: 10, borderRadius: 8 }} />
        </Box>
      )}
    </Box>
  );
};

export default UploadGalleryImage;

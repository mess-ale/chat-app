import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { useTheme } from '@emotion/react';
import { Box, IconButton } from '@mui/material';
import { Image, File } from 'phosphor-react';
import React, { useState, useRef } from 'react';

const ImageFile = () => {
  const [imagePreview, setImagePreview] = useState('');
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const imageDataUrl = e.target.result;
      setImagePreview(imageDataUrl);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div>
      <input
        type="file"
        onChange={handleImageUpload}
        accept="image/*"
        style={{ display: 'none' }}
        ref={fileInputRef}
      />
      <IconButton onClick={handleButtonClick}>
        <Image size={32} />
      </IconButton>
      {imagePreview && <img src={imagePreview} alt="Preview" />}
    </div>
  );
};

const Files = () => {
  const [imagePreview, setImagePreview] = useState('');
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const imageDataUrl = e.target.result;
      setImagePreview(imageDataUrl);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div>
      <input
        type="file"
        onChange={handleImageUpload}
        style={{ display: 'none' }}
        ref={fileInputRef}
      />
      <IconButton onClick={handleButtonClick}>
        <File size={32} />
      </IconButton>
      {imagePreview && <img src={imagePreview} alt="Preview" />}
    </div>
  );
};

const Emoji = () => {
  const theme = useTheme();
  return (
    <Box sx={{
      zIndex: 10,
      position: "fixed",
      bottom: 140,
    }}>
      <Picker theme={theme.palette.mode} data={data} onEmojiSelect={console.log} />
    </Box>
  )
}

export { Emoji, ImageFile, Files };
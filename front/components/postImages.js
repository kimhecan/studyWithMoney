import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { PlusOutlined } from '@ant-design/icons';
import ImagesZoom from './ImageZoom';

const PostImages = ({ images }) => {
  const [showImagesZoom, setShowImagesZoom] = useState(false);

  const onZoom = useCallback(() => {
    setShowImagesZoom(true);
  }, []);

  const onClose = useCallback(() => {
    setShowImagesZoom(false);
  }, []);

  if (images.length === 1) {
    return (
      <>
        <img role="presentation" style={{ width: '100%', height: '500px', overflow: 'hidden' }} src={`http://localhost:3065/${images[0].src}`} alt={images[0].src} onClick={onZoom} />
        {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
      </>
    );
  }

  if (images.length === 2) {
    return (
      <>
        <img role="presentation" style={{ width: '49.5%', display: 'inline-block' }} src={`http://localhost:3065/${images[0].src}`} alt={images[0].src} onClick={onZoom} />
        <p style={{ width: '1%', display: 'inline-block' }} />
        <img role="presentation" style={{ width: '49.5%', display: 'inline-block' }} src={`http://localhost:3065/${images[1].src}`} alt={images[1].src} onClick={onZoom} />
        {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
      </>
    );
  }
  if (images.length === 3) {
    return (
      <>
        <div>
          <div style={{ marginBottom: '3px', height: '300px', overflow: 'hidden' }}>
            <img role="presentation" style={{ maxWidth: '100%', display: 'inline-block' }} src={`http://localhost:3065/${images[0].src}`} alt={images[0].src} onClick={onZoom} />
          </div>
          <div style={{ height: '300px', overflow: 'hidden' }}>
            <img role="presentation" style={{ width: '49.7%', display: 'inline-block' }} src={`http://localhost:3065/${images[1].src}`} alt={images[1].src} onClick={onZoom} />
            <p style={{ width: '0.6%', display: 'inline-block' }} />
            <img role="presentation" style={{ width: '49.7%', display: 'inline-block' }} src={`http://localhost:3065/${images[2].src}`} alt={images[2].src} onClick={onZoom} />
          </div>
        </div>
        {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
      </>
    );
  }
  if (images.length === 4) {
    return (
      <>
        <div>
          <div style={{ marginBottom: '3px', height: '300px', overflow: 'hidden' }}>
            <img role="presentation" style={{ width: '49.7%', display: 'inline-block' }} src={`http://localhost:3065/${images[0].src}`} alt={images[0].src} onClick={onZoom} />
            <p style={{ width: '0.6%', display: 'inline-block' }} />
            <img role="presentation" style={{ width: '49.7%', display: 'inline-block' }} src={`http://localhost:3065/${images[1].src}`} alt={images[1].src} onClick={onZoom} />
          </div>
          <div style={{ height: '300px', overflow: 'hidden' }}>
            <img role="presentation" style={{ width: '49.7%', display: 'inline-block' }} src={`http://localhost:3065/${images[2].src}`} alt={images[2].src} onClick={onZoom} />
            <p style={{ width: '0.6%', display: 'inline-block' }} />
            <img role="presentation" style={{ width: '49.7%', display: 'inline-block' }} src={`http://localhost:3065/${images[3].src}`} alt={images[3].src} onClick={onZoom} />
          </div>
        </div>
        {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
      </>
    );
  }

  return (
    <>
      <div>
        <div style={{ marginBottom: '3px', height: '300px', overflow: 'hidden' }}>
          <img role="presentation" style={{ width: '49.7%', display: 'inline-block' }} src={`http://localhost:3065/${images[0].src}`} alt={images[0].src} onClick={onZoom} />
          <p style={{ width: '0.6%', display: 'inline-block' }} />
          <img role="presentation" style={{ width: '49.7%', display: 'inline-block' }} src={`http://localhost:3065/${images[1].src}`} alt={images[1].src} onClick={onZoom} />
        </div>
        <div style={{ height: '300px', overflow: 'hidden' }}>
          <img role="presentation" style={{ width: '49.7%', display: 'inline-block' }} src={`http://localhost:3065/${images[2].src}`} alt={images[2].src} onClick={onZoom} />
          <p style={{ width: '0.6%', display: 'inline-block' }} />
          <img role="presentation" style={{ width: '49.7%', display: 'inline-block' }} src={`http://localhost:3065/${images[3].src}`} alt={images[3].src} onClick={onZoom} />
        </div>
      </div>
      <div role="presentation" style={{ display: 'inline-block', width: '50%', textAlign: 'center', verticalAlign: 'middle' }} onClick={onZoom}>
        <PlusOutlined />
        <br />
        {images.length - 1}
        개의 사진 더보기
      </div>
      {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
    </>
  );
};

PostImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostImages;

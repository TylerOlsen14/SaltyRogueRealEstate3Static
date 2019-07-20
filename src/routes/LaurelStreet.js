import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Gallery,
  GalleryImage
} from 'react-gesture-gallery'
import images from '../components/LaurelStreetImages'
import Layout from '../components/Layout'


function LaurelStreet() {
  const [index, setIndex] = React.useState(0)
  return (
    <Layout>
      <Gallery
        style={{
          width: '90vw',
          height: '90vh',
          background: 'black',
          margin: 'auto'
        }}
        index={index}
        onRequestChange={i => {
          setIndex(i)
        }}
      >
        {images.map(img => (
          <GalleryImage
            src={img.src}
            key={img.src}
            objectFit="contain"
          />
        ))}
      </Gallery>
    </Layout>
  )
}

export default LaurelStreet
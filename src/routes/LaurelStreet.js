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
          width: '100vw',
          background: 'black'
        }}
        index={index}
        onRequestChange={i => {
          setIndex(i)
        }}
      >
        {images.map(image => (
          <GalleryImage
            src={image}
            objectFit="contain"
          />
        ))}
      </Gallery>
    </Layout>
  )
}

export default LaurelStreet
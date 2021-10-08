import React, { useState } from 'react'
import './PlantswapContainer.css'
import { Container, StylesProvider, Typography } from '@material-ui/core'

function PlantswapContainer() {
  return (
    <StylesProvider injectFirst>
      <Container
        className="root-create-pet"
        style={{ minHeight: '70vh', paddingBottom: '3rem' }}
      >
        <div>
          <Typography className="title" color="textPrimary" gutterBottom>
            Plant swap Container
            add here  create swap and swap list
          </Typography>
        </div>
      </Container>
    </StylesProvider>
  )
}

export default PlantswapContainer

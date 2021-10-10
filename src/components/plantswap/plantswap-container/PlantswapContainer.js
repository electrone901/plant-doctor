import React, { useState } from 'react'
import './PlantswapContainer.css'
import { Container, StylesProvider, Typography } from '@material-ui/core'
import CreateSwap from '../create-swap/CreateSwap'
import SwapList from '../swap-list/SwapList'

function PlantswapContainer({ account, contractData }) {
  console.log(
    '🚀 ~ file: PlantswapContainer.js ~ line 7 ~ PlantswapContainer ~ account',
    account,
    contractData,
  )
  return (
    <StylesProvider injectFirst>
      <Container
        style={{ minHeight: '70vh', paddingBottom: '3rem' }}
      >
        <CreateSwap account={account} contractData={contractData} />
        <SwapList account={account} contractData={contractData} />
      </Container>
    </StylesProvider>
  )
}

export default PlantswapContainer

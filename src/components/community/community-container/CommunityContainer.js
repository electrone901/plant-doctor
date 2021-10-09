import React, { useState } from 'react'
import { Container, StylesProvider, Typography } from '@material-ui/core'

import './CommunityContainer.css'
import RegisterCommunity from '../register-community/RegisterCommunity'
import CommunityList from '../community-list/CommunityList'

function CommunityContainer({ account, contractData }) {
  return (
    <StylesProvider injectFirst>
      <Container
        className="root-community"
        style={{ minHeight: '70vh', paddingBottom: '3rem' }}
      >
        <div>
          <Typography className="title" color="textPrimary" gutterBottom>
            Community Container add here Register Community and Community list
          </Typography>
        </div>

        <RegisterCommunity account={account} contractData={contractData} />

        <CommunityList />
      </Container>
    </StylesProvider>
  )
}

export default CommunityContainer

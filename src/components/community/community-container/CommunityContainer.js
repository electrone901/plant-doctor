import React, { useState } from 'react'
import { Container, StylesProvider, Typography } from '@material-ui/core'
import RegisterCommunity from '../register-community/RegisterCommunity'
import CommunityList from '../community-list/CommunityList'
import './CommunityContainer.css'
import BasicTabs from './BasicTabs'

function CommunityContainer({ account, contractData }) {
  return (
    <StylesProvider injectFirst>
      <Container
        className="root-community"
        style={{ minHeight: '70vh', paddingBottom: '3rem' }}
      >
        <BasicTabs  account={account} contractData={contractData}/>

        {/* <RegisterCommunity account={account} contractData={contractData} />

        <CommunityList account={account} contractData={contractData} /> */}
      </Container>
    </StylesProvider>
  )
}

export default CommunityContainer

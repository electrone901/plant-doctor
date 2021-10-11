import React from 'react'
import { Link } from 'react-router-dom'
import './PageCommunity.css'
import {
  Container,
  StylesProvider,
  Typography,
  Button,
  ImageListItem,
} from '@material-ui/core'

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import community1 from '../../../images/communities/0.jpeg'
import PetGallery from '../../home-container/gallery/PetGallery'

function PageCommunity() {
  return (
    <StylesProvider injectFirst>
      <Container
        className="page-community"
        style={{ minHeight: '70vh', paddingBottom: '1rem' }}
      >
        <div>
          {/* Grid  */}
          <Box sx={{ width: '100%' }}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={6}>
                <Typography className="title" color="textPrimary" gutterBottom>
                  The West Side Community Garden
                </Typography>
                <ImageListItem
                  style={{ height: '300px', width: '450px', listStyle: 'none' }}
                >
                  <img src={community1} alt="community" />
                </ImageListItem>
              </Grid>

              <Grid p xs={6} className="grid-rigth-side">
                <div className="page-wallet-address">
                  <Typography color="textPrimary" gutterBottom>
                    <b> WalletAddress:</b>
                    0x83a8bA10cbc13a5Cd827d020693920cc4a7C1103
                  </Typography>
                  <br />
                  <Button variant="contained" color="primary">
                    Send A Tip
                  </Button>
                  <br />
                  <br />

                  <Button variant="contained" color="primary" component={Link} to="/donate">
                    Donate NFT
                  </Button>

                  <div className="page-metadata">
                    <Typography variant="body2" color="text.secondary">
                      <b> Description:</b>
                      The West Side Community Garden is one of the best hidden
                      gems in Upper West Side. With many flowers, plants, and
                      trees make this community garden a beautiful and peaceful
                      place.
                    </Typography>
                    <br />

                    <Typography variant="body2" color="text.secondary">
                      <b> Address:</b>123 W 89th St, New York, NY 10024
                    </Typography>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Box>
        </div>

        <br />
        <br />
        <Typography className="subtitle" color="textPrimary" gutterBottom>
          The West Side Community Garden NFTs
        </Typography>

        <PetGallery />
      </Container>
    </StylesProvider>
  )
}

export default PageCommunity

import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import PhotoCamera from '@material-ui/icons/PhotoCamera'
import './CommunityList.css'
import {
  TextField,
  Container,
  StylesProvider,
  Typography,
  Button,
  IconButton,
  MenuItem,
} from '@material-ui/core'
import { NFTStorage, File } from 'nft.storage'
import { createRef } from 'react'
import { apiKey } from '../../../APIKEYS'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import community1 from '../../../images/communities/0.jpeg'

function CommunityList() {
  // Add variables

  const createData = (image, name, location, description) => {
    return { image, name, location, description }
  }

  const rows = [
    createData(
      'https://raw.githubusercontent.com/electrone901/plant-doctor/main/src/images/communities/0.jpeg',
      'The West Side Community Garden',
      '123 W 89th St, New York, NY 10024',
      'One of the best hidden gems in Upper West Side. Beautiful and Peaceful place.',
    ),
    createData(
      'https://raw.githubusercontent.com/electrone901/plant-doctor/main/src/images/communities/1.jpeg',
      'River Side Community Garden',
      '123 W 89th St, New York, NY 10024',
      'One of the best hidden gems in Upper West Side. Beautiful and Peaceful place.',
    ),
    createData(
      'https://raw.githubusercontent.com/electrone901/plant-doctor/main/src/images/communities/0.jpeg',
      'The West Side Community Garden',
      '123 W 89th St, New York, NY 10024',
      'One of the best hidden gems in Upper West Side. Beautiful and Peaceful place.',
    ),
    createData(
      'https://raw.githubusercontent.com/electrone901/plant-doctor/main/src/images/communities/0.jpeg',
      'The West Side Community Garden',
      '123 W 89th St, New York, NY 10024',
      'One of the best hidden gems in Upper West Side. Beautiful and Peaceful place.',
    ),
    createData(
      'https://raw.githubusercontent.com/electrone901/plant-doctor/main/src/images/communities/1.jpeg',
      'River Side Community Garden',
      '123 W 89th St, New York, NY 10024',
      'One of the best hidden gems in Upper West Side. Beautiful and Peaceful place.',
    ),
    createData(
      'https://raw.githubusercontent.com/electrone901/plant-doctor/main/src/images/communities/0.jpeg',
      'The West Side Community Garden',
      '123 W 89th St, New York, NY 10024',
      'One of the best hidden gems in Upper West Side. Beautiful and Peaceful place.',
    ),
  ]

  return (
    <StylesProvider injectFirst>
      <div>
        <Typography className="title" color="textPrimary" gutterBottom>
          Community List
        </Typography>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead></TableHead>
          <TableBody>
            {rows.map((row, idx) => (
              <TableRow
                key={idx}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <img
                    src={row.image}
                    className="community-img"
                    alt="community"
                  />
                </TableCell>
                <TableCell align="left">
                  <Typography
                    className="subtitle"
                    color="textPrimary"
                    gutterBottom
                  >
                    {row.name}
                  </Typography>
                </TableCell>
                <TableCell align="left">{row.location}</TableCell>
                <TableCell align="left">{row.description}</TableCell>
                <TableCell align="left">
                  <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to="/page-community"
                  >
                    Visit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </StylesProvider>
  )
}

export default CommunityList

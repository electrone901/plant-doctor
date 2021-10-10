import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import PhotoCamera from '@material-ui/icons/PhotoCamera'
import './SwapList.css'
import {
  TextField,
  Container,
  StylesProvider,
  Typography,
  Button,
  IconButton,
  MenuItem,
  Grid,
  ImageListItem,
  ImageListItemBar,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
} from '@material-ui/core'
import Avatar from '@mui/material/Avatar'
import { red } from '@mui/material/colors'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import MoreVertIcon from '@mui/icons-material/MoreVert'

import { Link } from 'react-router-dom'
import { NFTStorage, File } from 'nft.storage'
import { createRef } from 'react'
import { PLANTSWAP } from '../../../PLANTSWAPAPIKEYS'
import CircularStatic from '../../commons/CircularProgressWithLabel'

function SwapList({ account, contractData }) {
  // Add variables
  const history = useHistory()
  // const [image, setImage] = useState('')
  // const petTypeRef = createRef()
  // const [petName, setPetName] = useState('')
  const [loading, setLoading] = useState(false)
  // const [ownerName, setOwnerName] = useState('')
  // const [imageName, setImageName] = useState('')
  // const [imageType, setImageType] = useState('')
  // const [petType, setPetType] = useState('')
  const [swapsData, setSwapsData] = useState([])

  useEffect(() => {
    const loadSwapList = async () => {
      try {
        setLoading(true)
        let cids = await fetch('https://api.nft.storage', {
          headers: {
            Authorization: `Bearer ${PLANTSWAP}`,
            'Content-Type': 'application/json',
          },
        })
        cids = await cids.json()
        console.log(' cids', cids)
        const temp = []
        for (let cid of cids.value) {
          if (cid?.cid) {
            let data = await fetch(
              `https://ipfs.io/ipfs/${cid.cid}/metadata.json`,
            )
            data = await data.json()
            const getImage = (ipfsURL) => {
              if (!ipfsURL) return
              ipfsURL = ipfsURL.split('://')
              return 'https://ipfs.io/ipfs/' + ipfsURL[1]
            }
            data.image = await getImage(data.image)

            console.log(' data', data)
            data.cid = cid.cid
            data.created = cid.created
            temp.push(data)
          }
        }
        setSwapsData(temp)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    loadSwapList()
  }, [])
  console.log('swapsData', swapsData)

  return (
    <div style={{ minHeight: '70vh', paddingBottom: '3rem' }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          className="card-header-swap"
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 1, 2021"
        />
        <CardMedia
          component="img"
          height="194"
          image="https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1172&q=80"
          alt="Paella dish"
        />
        <CardContent>
          <Typography
            variant="body2"
            color="text.secondary"
            className="card-header-swap"
          >
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <Button
            variant="contained"
            size="small"
            component={Link}
            // to={`/pet-details/${pet.cid}`}
            className="swap-msg-btn"
          >
            Send message
          </Button>
        </CardActions>
      </Card>

      {/* Add pet's Data */}
      {loading ? (
        <CircularStatic />
      ) : (
        // description: "test4, 0xC4a3819d366b9373cF3b865eb0BFacb69F805283"
        // image: "https://ipfs.io/ipfs/bafybeicz5ad6wfszraoe2z3r573eqviqnpzzjrzheylo5lxorptjoldlli/22.png"
        // name: "Plant to Plant"

        <div>
          <Grid container spacing={24}>
            {swapsData.length ? (
              swapsData.map((swap, index) => (

<Grid item md={3}>
                <Card sx={{ maxWidth: 245 }}>
                  <CardHeader
                    className="card-header-swap"
                    avatar={
                      <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 1, 2021"
                  />
                  <CardMedia
                    component="img"
                    height="194"
                    image="https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1172&q=80"
                    alt="Paella dish"
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="card-header-swap"
                    >
                      This impressive paella is a perfect party dish and a fun
                      meal to cook together with your guests. Add 1 cup of
                      frozen peas along with the mussels, if you like.
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                    <Button
                      variant="contained"
                      size="small"
                      component={Link}
                      // to={`/pet-details/${pet.cid}`}
                      className="swap-msg-btn"
                    >
                      Send message
                    </Button>
                  </CardActions>
                </Card>


                </Grid >
              ))
            ) : (
              <h2>No PlantSwaps Yet...</h2>
            )}
          </Grid>
        </div>
      )}
    </div>
  )
}

export default SwapList

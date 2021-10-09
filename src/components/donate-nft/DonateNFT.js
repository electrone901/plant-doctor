import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import PhotoCamera from '@material-ui/icons/PhotoCamera'
import './DonateNFT.css'
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
import { apiKey } from '../../APIKEYS'
import { apiKeyport } from '../../components/APIKEYPORT'

function DonateNFT() {
  // Add variables
  const history = useHistory()
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')
  const [mintAddress, setMintAddress] = useState('')
  const petTypeRef = createRef()
  const [loading, setLoading] = useState(false)
  const [ownerName, setOwnerName] = useState('')
  const [imageName, setImageName] = useState('')
  const [imageType, setImageType] = useState('')
  const [petType, setPetType] = useState('')

  const handleImage = (event) => {
    setImage(event.target.files[0])
    console.log('description, mintAd', description, mintAddress)

    console.log(' image', event.target.files[0])
    const form = new FormData()
    form.append('file', event.target.files[0])

    const options = {
      method: 'POST',
      body: form,
      headers: {
        Authorization: apiKeyport,
      },
    }

    fetch(
      'https://api.nftport.xyz/easy_mint?' +
        new URLSearchParams({
          chain: 'polygon',
          name: 'XYZ-Lets go',
          description: 'XYZ It works!!',
          mint_to_address: '0x5Df598c222C4A7e8e4AB9f347dcBd924B6458382',
          msg: 'This is an NFT',
        }),
      options,
    )
      .then(function (response) {
        return response.json()
      })
      .then(function (responseJson) {
        console.log(responseJson)
      })
  }

  const handleInputChange = async (event) => {
    setImageName(event.target.files[0].name)
    setDescription(event.target.value)
    setMintAddress(event.target.value)

    // try {
    //   setLoading(true)
    //   const client = new NFTStorage({ token: apiKey })
    //   const metadata = await client.store({
    //     name: petName,
    //     description: `${ownerName}, ${petType}`,
    //     image: new File([image], imageName, { type: imageType }),
    //   })
    //   if (metadata) {
    //     history.push('/')
    //   }
    // } catch (error) {
    //   console.log(error)
    //   setLoading(false)
    // }
  }

  const mintNFTPort = async (image) => {
    console.log(' image', image)
    const form = new FormData()
    form.append('file', image)

    const options = {
      method: 'POST',
      body: form,
      headers: {
        Authorization: apiKeyport,
      },
    }

    fetch(
      'https://api.nftport.xyz/easy_mint?' +
        new URLSearchParams({
          chain: 'polygon',
          name: 'XYZ-Lets go',
          description: 'XYZ It works!!',
          mint_to_address: '0x463Eeb088b094D2CeEec50d186A36DdC80c05870',
          msg: 'This is an NFT',
        }),
      options,
    )
      .then(function (response) {
        return response.json()
      })
      .then(function (responseJson) {
        console.log(responseJson)
      })
  }

  return (
    <StylesProvider injectFirst>
      <Container
        className="root-create-pet"
        style={{ minHeight: '70vh', paddingBottom: '3rem' }}
      >
        DonateNFT
        <div>
          <Typography className="title" color="textPrimary" gutterBottom>
            Add a photo of your plant
          </Typography>

          {/* Add Form */}
          {image ? (
            <img
              src={URL.createObjectURL(image)}
              alt="pet"
              className="img-preview"
            />
          ) : (
            ''
          )}
          <div className="form-container">
            <form className="form" noValidate autoComplete="off">
              <input
                accept="image/*"
                className="input"
                id="icon-button-photo"
                defaultValue={image}
                onChange={handleImage}
                type="file"
              />
              <label htmlFor="icon-button-photo">
                <IconButton color="primary" component="span">
                  <PhotoCamera />
                </IconButton>
              </label>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Plant's name"
                variant="outlined"
                className="text-field"
                defaultValue={imageName}
                onChange={(e) => setImageName(e.target.value)}
              />
              <TextField
                fullWidth
                id="outlined-basic"
                label="Short description"
                variant="outlined"
                className="text-field"
                defaultValue={description}
                onChange={(e) => setDescription(e.target.value)}
              />

              <TextField
                fullWidth
                id="outlined-basic"
                label="Sent to wallet address "
                variant="outlined"
                className="text-field"
                defaultValue={mintAddress}
                onChange={(e) => setMintAddress(e.target.value)}
              />

              <Button
                size="large"
                variant="contained"
                color="primary"
                onClick={mintNFTPort}
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </StylesProvider>
  )
}

export default DonateNFT

import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import PhotoCamera from '@material-ui/icons/PhotoCamera'
import './RegisterCommunity.css'
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

function RegisterCommunity() {
  // Add variables
  const history = useHistory()
  const [image, setImage] = useState('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [PhysicalAddress, setPhysicalAddress] = useState('')
  const [walletAddress, setWalletAddress] = useState('')
  const [imageName, setImageName] = useState('')
  const [imageType, setImageType] = useState('')
  const [loading, setLoading] = useState(false)

  const handleImage = (event) => {
    setImage(event.target.files[0])
    setImageName(event.target.files[0].name)
    setImageType(event.target.files[0].type)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      // setLoading(true)
      // const client = new NFTStorage({ token: apiKey })
      // const metadata = await client.store({
      //   name: petName,
      //   description: `${ownerName}, ${petType}`,
      //   image: new File([image], imageName, { type: imageType }),
      // })
      // if (metadata) {
      //   history.push('/')
      // }
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  return (
    <StylesProvider injectFirst>
      <Container
        className="root-create-pet"
        style={{ minHeight: '70vh', paddingBottom: '3rem' }}
      >
        <div>
          <Typography className="title" color="textPrimary" gutterBottom>
            Register Your Garden Community
          </Typography>

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
              {/* Community image */}
              <p className="image-label">Community image</p>
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
              {/* Community image */}

              <TextField
                fullWidth
                id="outlined-basic"
                label="Name"
                variant="outlined"
                className="text-field"
                defaultValue={name}
                onChange={(e) => setName(e.target.value)}
              />

              <TextField
                fullWidth
                id="outlined-basic"
                label="Short Description"
                variant="outlined"
                className="text-field"
                defaultValue={description}
                onChange={(e) => setDescription(e.target.value)}
              />

              <TextField
                fullWidth
                id="outlined-basic"
                label="Physical Address"
                variant="outlined"
                className="text-field"
                defaultValue={PhysicalAddress}
                onChange={(e) => setPhysicalAddress(e.target.value)}
              />

              <TextField
                fullWidth
                id="outlined-basic"
                label="Digital Wallet Address"
                variant="outlined"
                className="text-field"
                defaultValue={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
              />


              <Button
                size="large"
                variant="contained"
                color="primary"
                onClick={handleSubmit}
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

export default RegisterCommunity

import React, { useState, useEffect } from 'react'
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

import { providers } from 'ethers'
import { init } from '@textile/eth-storage'

function RegisterCommunity({ account, contractData }) {
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

  const [communities, setCommunities] = useState([])
  const [communityCount, setCommunityCount] = useState(0)

  useEffect(() => {
    const loadCommunity = async () => {
      try {
        // pass the cid
        const cid = 'QmTFaLUesrjbQLKxNszz2DWZ33N9YuGBSVCLpwXnvyiumz'

        let fileData = await fetch(`https://ipfs.io/ipfs/${cid}`)

        console.log('1 🚀 ', fileData)
        const yourData = await fileData.json()
        console.log('2', yourData)

        //  make API call

        // setPetsData(temp)
        // setLoading(false)
      } catch (error) {
        console.log(error)
        // setLoading(false)
      }
    }
    loadCommunity()
  }, [])

  const handleImage = (event) => {
    setImage(event.target.files[0])
    setImageName(event.target.files[0].name)
    setImageType(event.target.files[0].type)
  }

  const getList = async (event) => {
    event.preventDefault()
    if (contractData) {
      // gets communityCount from chain
      const count = await contractData.methods.count().call()
      setCommunityCount(count)

      // gets community data
      const temp = []
      for (let i = 0; i < communityCount; i++) {
        const community = await contractData.methods.communityList(i + 1).call()
        temp.push(community)
      }
      setCommunities(temp)
      console.log('com', communities)
    }
  }

  const getCommunityByHash = async (event) => {
    event.preventDefault()
    // needs work
    if (contractData) {
      // get community list from the contract
      const getCommunityById = await contractData.methods.communityList(
        0x1f8a67061ec8d676a60ff20fedc9226eddc3b81a21808e5dfc42bfc684740557,
      )
      console.log('communityList', getCommunityById)

      // get community list from the contract

      // const taskCount = await contract.methods.taskCount().call();
      const count = await contractData.methods.count().call()
      setCommunityCount(count)

      const temp = []
      for (let i = 0; i < communityCount; i++) {
        const community = await contractData.methods.communityList(i + 1).call()
        temp.push(community)
      }
      setCommunities(temp)
      console.log('com', communities)
    }
  }

  const saveToTextile = async () => {
    try {
      // connects to ethereum & web3
      await window.ethereum.enable()
      const provider = new providers.Web3Provider(window.ethereum)
      const wallet = provider.getSigner()
      const storage = await init(wallet)

      // creates a file to save data
      const communityImage = new Blob([image], { type: 'text/plain' })
      const file = new File([communityImage], 'community.txt', {
        type: 'text/plain',
        lastModified: new Date().getTime(),
      })

      await storage.addDeposit()
      const { id, cid } = await storage.store(file)
      let formattedCid = cid['/']

      console.log('after', formattedCid)

      return formattedCid
    } catch (err) {
      console.error(err)
    }
  }

  const saveToChain = async (event) => {
    event.preventDefault()
    const imageFromTextile = await saveToTextile()

    try {
      // save image to textil, get the imageURL then save imgURL and data to chain using the contract
      const registerCommunityResponse = await contractData.methods
        .registerCommunity(
          imageFromTextile,
          name,
          description,
          PhysicalAddress,
          walletAddress,
        )
        .send({ from: account })
      console.log(' registerCommunityResponse', registerCommunityResponse)

      // setCodeHash(registerCommunityResponse)
      // const storage = await init(account)
      // first i need to save it to textile then save it to the chain then get it
      // const imageURL1 = 'QmfTszDpe7niQYpP5DYMYtkCKZUuP33HVWJEVK3ikzvyY8',
      //   communityName1 = 'Test community',
      //   description1 = 'This is wonderful',
      //   physicalAddress1 = '123 west street NY NY 10024l',
      //   walletAddress1 = '0x83a8bA10cbc13a5Cd827d020693920cc4a7C1103'
      // Call contract to register community
      // const registerCommunityResponse = await contractData.methods
      //   .registerCommunity(
      //     imageURL1,
      //     communityName1,
      //     description1,
      //     physicalAddress1,
      //     walletAddress1,
      //   )
      //   .send({ from: account })
      // console.log(' registerCommunityResponse', registerCommunityResponse)
      // // setCodeHash(registerCommunityResponse)
    } catch (err) {
      console.error(err)
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
                onClick={saveToChain}
              >
                Submit
              </Button>
            </form>
          </div>
          <Button
            size="large"
            variant="contained"
            color="primary"
            onClick={saveToTextile}
          >
            getList
          </Button>
        </div>
      </Container>
    </StylesProvider>
  )
}

export default RegisterCommunity
import '../styles/globals.css'
import Layout from '../comps/Layout'
import Head from 'next/head'
import React from 'react'
import jsonData from "../data.json"

export const myContext = React.createContext()

function MyApp({ Component, pageProps }) {

  const [checkInDate, setCheckInDate] = React.useState("")
  const [checkOutDate, setCheckOutDate] = React.useState("")
  const [daysNumber, setDaysNumber] = React.useState()
  const [signUpCompShowed, setSignUpCompShowed] = React.useState(false)
  const [bedRoomsNumber, setBedRoomsNumber] = React.useState(0)
  const [bedsNumber, setBedsNumber] = React.useState(0)
  const [filterClicked, setFilterClicked] = React.useState(false)
  const [signedUp, setSignedUp] = React.useState(false)
  const [favouriteHouses, setFavouriteHouses] = React.useState()

  const x = {checkInDate, setCheckInDate, checkOutDate, setCheckOutDate, daysNumber, setDaysNumber,
            signUpCompShowed, setSignUpCompShowed, bedRoomsNumber, setBedRoomsNumber,
            bedsNumber, setBedsNumber,
            filterClicked, setFilterClicked,
            signedUp, setSignedUp,
            favouriteHouses,setFavouriteHouses
          }

  return (
    <myContext.Provider value={x}>
    <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
      
    </myContext.Provider>
  )
}

export default MyApp

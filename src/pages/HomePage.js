import React from 'react'

import Clients from '../parts/Clients'
import Footer from '../parts/Footer'
import Header from '../parts/Header'
import Hero from '../parts/Hero'
import BrowseRoom from '../parts/HomePage/BrowseRoom'
import JustArrived from '../parts/HomePage/JustArrived'
import SiteMap from '../parts/SiteMap'

export default function HomePage() {
  return (
    <>
    {/* theme = "white" in Header */}
    <Header theme="white" position="absolute"></Header>
    <Hero></Hero>
    <BrowseRoom></BrowseRoom>
    <JustArrived></JustArrived>
    <Clients></Clients>
    <SiteMap></SiteMap>
    <Footer></Footer>
    </>
  )
}

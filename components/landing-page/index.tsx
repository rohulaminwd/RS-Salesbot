import React from "react"

import Bento from "./Bento"
import CallToAction from "./CallToAction"
import Hero from "./Hero"
import Integrations from "./Integrations"
import Footer from "./ui/Footer"
import NavBar from "./ui/NavBar"

const LandingPage = ({ session }: any) => {
  return (
    <div className="grid min-h-screen ">
      <div className="">
        <NavBar session={session} />
        <Hero session={session} />
        <Bento />
        {/* <CaseStudies />
          <RichText />
          <Showcase /> */}
        <Integrations />
        <CallToAction />
        <Footer />
      </div>
    </div>
  )
}

export default LandingPage

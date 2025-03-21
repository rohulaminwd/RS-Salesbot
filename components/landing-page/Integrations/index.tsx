import React from "react"
import Image from "next/image"

import AnimatedContent from "./AnimatedContent"
import background from "./background.jpg"
import StarBackground from "./StarBackground"

const Integrations = (): JSX.Element => {
  return (
    <div className="relative my-20 overflow-hidden py-10">
      <Image
        src={background}
        alt=""
        fill
        className="object-cover"
        quality={90}
      />
      <StarBackground />

      <div className="relative mx-auto max-w-6xl px-4 py-8 text-white ">
        <h2 className="mx-auto max-w-2xl text-balance text-center text-5xl font-medium ">
          Integrations RS-Salsbot.
        </h2>

        <div className="mx-auto mt-6 max-w-md text-balance text-center text-slate-300">
          The integrations your team needs to be productive at scale with no
          impact on your burn rate.
        </div>

        <AnimatedContent />
      </div>
    </div>
  )
}

export default Integrations

"use client"

import ButtonLink from "../ui/ButtonLink"
import PlainLogo from "./PlainLogo"

const CallToAction = (): JSX.Element => {
  return (
    <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-center px-4 py-5 text-center font-medium">
      <div className="glow absolute -z-10 mx-auto aspect-square w-full max-w-sm rounded-full bg-blue-500/50 blur-[160px] filter" />

      <div className="glass-container mx-auto w-[130px] rounded-lg bg-gradient-to-b from-slate-800 to-slate-900 p-4 md:rounded-xl">
        <PlainLogo />
      </div>

      <div className="mt-8 text-balance  text-center text-5xl text-white">
        <p>Start building for free</p>
      </div>

      <ButtonLink className="mt-6">Get Started</ButtonLink>
    </div>
  )
}

export default CallToAction

"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion"

import ButtonLink from "../ui/ButtonLink"
import StarGrid from "../ui/StarGrid"

const Hero = ({ session }: any) => {
  const container = useRef(null)
  const prefersReducedMotion = usePrefersReducedMotion()
  gsap.registerPlugin(useGSAP)

  useGSAP(
    () => {
      if (prefersReducedMotion) {
        gsap.set(
          ".hero__heading, .hero__body, .hero__button, .hero__image, .hero__glow",
          { opacity: 1 }
        )
        return
      }

      const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } })

      tl.fromTo(
        ".hero__heading",
        { scale: 0.5 },
        { scale: 1, opacity: 1, duration: 1.4 }
      )

      tl.fromTo(
        ".hero__body",
        { y: 20 },
        { y: 0, opacity: 1, duration: 1.2 },
        "-=0.6"
      )

      tl.fromTo(
        ".hero__button",
        { scale: 1.5 },
        { scale: 1, opacity: 1, duration: 1.3 },
        "-=0.8"
      )
      tl.fromTo(
        ".hero__image",
        { y: 100 },
        { y: 0, opacity: 1, duration: 1.3 },
        "+=0.3"
      )
      tl.fromTo(
        ".hero__glow",
        { scale: 0.5 },
        { scale: 1, opacity: 1, duration: 1.8 },
        "-=1"
      )
    },
    { scope: container }
  )

  return (
    <div className="mx-auto max-w-6xl px-4 ">
      <div className="relative mt-8 text-center" ref={container}>
        <StarGrid />

        <h1 className="hero__heading text-balance text-5xl font-medium opacity-0 md:text-[66px]">
          RedShop Virtual Shopping Assistant
        </h1>

        <div className="hero__body mx-auto mt-6 max-w-md text-balance text-slate-300 opacity-0">
          RedBot: Your AI-powered shopping assistant designed to enhance your
          RedShop experience.
        </div>

        <Link href={session ? "/dashboard" : "/getstart"}>
          <ButtonLink className="hero__button mt-8 px-6 text-[16px] opacity-0">
            Get Started
          </ButtonLink>
        </Link>

        <div className="hero__image glass-container mt-16 w-fit opacity-0">
          <div className="hero__glow absolute inset-0 -z-10 bg-blue-500/30 opacity-0 blur-2xl filter" />
          <img
            src=" https://images.prismic.io/glisten-ai/ZeipqXUurf2G3K36_hero-image-squoosh.jpg?auto=format,compress&fit=max&w=3840"
            // width={5616}
            // height={3744}
            alt="image"
            className="rounded-lg"
            // priority
          />
        </div>
      </div>
    </div>
  )
}

export default Hero

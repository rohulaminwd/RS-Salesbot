"use client"

import React, { useRef } from "react"
import { useGSAP } from "@gsap/react"
import clsx from "clsx"
import gsap from "gsap"
import {
  FaCloudflare,
  FaDigitalOcean,
  FaFigma,
  FaFly,
  FaGithub,
  FaNpm,
} from "react-icons/fa6"

import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion"

import StylizedLogoMark from "./StylizedLogoMark"

export default function AnimatedContent() {
  const container = useRef(null)
  const prefersReducedMotion = usePrefersReducedMotion()
  gsap.registerPlugin(useGSAP)

  const icons = {
    digitalocean: <FaDigitalOcean />,
    cloudflare: <FaCloudflare />,
    npm: <FaNpm />,
    github: <FaGithub />,
    figma: <FaFigma />,
    fly: <FaFly />,
  }

  const demoItems = [
    { icon: "digitalocean" },
    { icon: "cloudflare" },
    { icon: "npm" },
    { icon: "github" },
    { icon: "figma" },
    { icon: "fly" },
  ]

  useGSAP(
    () => {
      const tl = gsap.timeline({
        repeat: -1,
        defaults: { ease: "power2.inOut" },
      })

      tl.to(".pulsing-logo", {
        keyframes: [
          {
            filter: "brightness(2)",
            opacity: 1,
            duration: 0.4,
            ease: "power2.in",
          },
          {
            filter: "brightness(1)",
            opacity: 0.7,
            duration: 0.9,
          },
        ],
      })

      tl.to(
        ".signal-line",
        {
          keyframes: [
            { backgroundPosition: "0% 0%" },
            {
              backgroundPosition: "100% 100%",
              stagger: { from: "center", each: 0.3 },
              duration: 1,
            },
          ],
        },
        "-=1.4"
      )

      tl.to(
        ".pulsing-icon",
        {
          keyframes: [
            {
              opacity: 1,
              stagger: {
                from: "center",
                each: 0.3,
              },
              duration: 1,
            },
            {
              opacity: 0.4,
              duration: 1,
              stagger: {
                from: "center",
                each: 0.3,
              },
            },
          ],
        },
        "-=2"
      )
    },
    { scope: container }
  )

  return (
    <div
      className="flex flex-col items-center justify-center pt-20 md:flex-row"
      ref={container}
    >
      {demoItems.map((item, index) => (
        <React.Fragment key={index}>
          {index === Math.floor(demoItems.length / 2) && (
            <>
              <StylizedLogoMark />
              <div className="signal-line rotate-180 bg-gradient-to-t" />
            </>
          )}
          <div className="pulsing-icon flex aspect-square shrink-0 items-center justify-center rounded-full border border-blue-50/30 bg-blue-50/25 p-3 text-3xl text-blue-100 opacity-40 md:text-4xl lg:text-5xl">
            {item.icon && icons[item.icon as keyof typeof icons]}
          </div>
          {index !== demoItems.length - 1 && (
            <div
              className={clsx(
                "signal-line",
                index >= Math.floor(demoItems.length / 2)
                  ? "rotate-180"
                  : "rotate-0"
              )}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

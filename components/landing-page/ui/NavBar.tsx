"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import clsx from "clsx"
import { MdClose, MdMenu } from "react-icons/md"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { SubmitButton } from "@/components/submit-button"

import ButtonLink from "../ui/ButtonLink"
import WordMark from "../ui/WordMark"

const NavBar = ({ session }: any) => {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="md-:py-6 px-4 py-4" aria-label="Main">
      <div className="mx-auto flex max-w-6xl flex-col justify-between py-2 font-medium text-white md:flex-row md:items-center">
        <div className="flex items-center justify-between">
          <Link href="/" className="z-50" onClick={() => setOpen(false)}>
            <WordMark />
            {/* <span className="sr-only">RS-SalesBot.ai Home Page</span> */}
          </Link>
          <button
            type="button"
            className="block p-2 text-3xl text-white md:hidden"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <MdMenu />
            <span className="sr-only">Open menu</span>
          </button>
        </div>
        {/* Mobile Nav */}
        <div
          className={clsx(
            "ga-4 fixed bottom-0 left-0 right-0 top-0 z-40 flex flex-col items-end bg-[#070815] pr-4 pt-14 transition-transform duration-300 ease-in-out motion-reduce:transition-none md:hidden",
            open ? "translate-x-0" : "translate-x-[100%]"
          )}
        >
          <button
            type="button"
            className="fixed right-4 top-4 mb-4 block p-2 text-3xl text-white md:hidden"
            aria-expanded={open}
            onClick={() => setOpen(false)}
          >
            <MdClose />
            <span className="sr-only">Close menu</span>
          </button>

          <div className="grid justify-items-end gap-8">
            {/* {settings.data.navigation.map((item) => {
              if (item.cta_button) {
                return (
                  <ButtonLink
                    key={item.label}
                    field={item.link}
                    onClick={() => setOpen(false)}
                    aria-current={
                      pathname.includes(asLink(item.link) as string)
                        ? "page"
                        : undefined
                    }
                  >
                    {item.label}
                  </ButtonLink>
                );
              }
              return (
                <PrismicNextLink
                  key={item.label}
                  className="block px-3 text-3xl first:mt-8"
                  field={item.link}
                  onClick={() => setOpen(false)}
                  aria-current={
                    pathname.includes(asLink(item.link) as string)
                      ? "page"
                      : undefined
                  }
                >
                  {item.label}
                </PrismicNextLink>
              );
            })} */}
          </div>
        </div>

        {/* Desktop Nav */}
        <ul className=" hidden gap-6 md:flex">
          {session ? (
            <a
              href="/api/auth/logout"
              className={cn(buttonVariants({ variant: "ghost" }), "")}
            >
              Logout
            </a>
          ) : (
            <div className="">
              <a
                className={cn(buttonVariants({ variant: "ghost" }), "")}
                href="/api/auth/login"
              >
                Log in
              </a>
            </div>
          )}
          <Link href={session ? "/dashboard" : "/getstart"}>
            <ButtonLink>Get Started</ButtonLink>
          </Link>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar

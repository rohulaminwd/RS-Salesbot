import Link from "next/link"

import WordMark from "../ui/WordMark"

export default async function Footer() {
  return (
    <footer className="mt-6 flex flex-col items-center justify-between gap-6 border-t border-slate-600 px-8 py-8 md:flex-row">
      <Link href="/">
        <WordMark />
        <span className="sr-only">Glisten.ai Home Page</span>
      </Link>
      <nav aria-label="Footer">
        <ul className="flex gap-6">
          {/* <li>
            <Link href="/pricing">Pricing</Link>
          </li> */}
          <li>
            <Link href="/terms">Get Started</Link>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

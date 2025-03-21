import { appClient } from "@/lib/auth0"
import LandingPage from "@/components/landing-page"

export default async function Home() {
  const session = await appClient.getSession()

  return (
    <body
      style={{ background: "#070815" }}
      className="gird  !bg-[#070815] !text-white"
    >
      <LandingPage session={JSON.parse(JSON.stringify(session))} />
    </body>
  )
}

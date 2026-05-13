import type { Metadata } from "next";
import AboutPage from "../components/About"
import Features from "../components/Features"
import Hero2 from "../components/hero2"
import About from "./about"
import Helpdesk from "./helpdesk"
import WhoAreWe from "./whoAreWe"

export const metadata: Metadata = {
  title: "About Us | MyCoreOffice",
  description: "Learn more about MyCoreOffice, our mission to support entrepreneurs with professional office spaces, and our nationwide network of business solutions.",
};

const page = () => {
  return (
  <>
  <WhoAreWe/>
  <About/>
  <Features/>
  <AboutPage/>
  <Helpdesk/>
  <Hero2/>
  </>
  )
}

export default page
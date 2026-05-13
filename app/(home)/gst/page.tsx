import type { Metadata } from "next";
import Helpdesk from "../About-Us/helpdesk"
import { GST } from "../components/gst"
import About from "./about"
import FAQSection from "./faq"
import Genesis from "./genesis"
import Hero from "./hero"

export const metadata: Metadata = {
  title: "Virtual Office for GST Registration | MyCoreOffice",
  description: "Get a professional business address for GST registration across India. Law-compliant documentation, prime locations, and affordable pricing with MyCoreOffice.",
};

const page = () => {
  return (
    <>
    <Hero/>
    <GST/>
    <Genesis/>
    <About/>
    <FAQSection/>
    <Helpdesk/>
    </>
  )
}

export default page
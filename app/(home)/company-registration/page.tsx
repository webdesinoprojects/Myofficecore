import type { Metadata } from "next";
import Helpdesk from "../About-Us/helpdesk"
import { PvtCompanyBenefits } from "./benefits"
import { DocumentsRequired } from "./documents"
import Hero from "./hero"
import { Process } from "./process"

export const metadata: Metadata = {
  title: "Office Space for Company Registration | MyCoreOffice",
  description: "Register your Private Limited company with a professional office address. Fast documentation, lowest prices, and 100% legal compliance for your business setup.",
};

const page = () => {
  return (
    <>
    <Hero/>
    <PvtCompanyBenefits/>
    <Process/>
    <DocumentsRequired/>
    <Helpdesk/>
    </>
  )
}

export default page
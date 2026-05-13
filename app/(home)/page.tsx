import type { Metadata } from "next";
import Hero from './components/Hero'

export const metadata: Metadata = {
  title: "MyCoreOffice | Premium Virtual Offices & GST Registration Across India",
  description: "Establish your business with MyCoreOffice. We provide professional virtual office addresses for GST registration and company formation in 100+ locations nationwide.",
};
import AboutPage from './components/About'
import Features from './components/Features'
import ProductsPage from './components/virtual-offices'
import FAQSection from './components/FAQ'
import Objective from './components/Objective'
import { domAnimation, LazyMotion } from "framer-motion";
import Reviews from './components/Reviews'
import { GST } from './components/gst'
import ServicesSection from './components/services'
import GetStarted from './components/GetStarted'
import VirtualOfficeBenefits from './components/benefits'
import AddOnServices from './components/Addon'
import { OurBenefits } from './components/OurBenefits'
import { Process } from './company-registration/process'
import { DocumentsRequired } from './company-registration/documents'
import Helpdesk from './About-Us/helpdesk'
import ContactUs from './Contact/contactform'
const page = () => {
  return (
    <>
      <LazyMotion features={domAnimation}>
        <Hero />
        <AboutPage />
        <Features />
        <GST/>
        <ServicesSection/>
        <VirtualOfficeBenefits/>
        <GetStarted/>
        <ProductsPage limit={8} />
        <Process/>
        <DocumentsRequired/>
        <Helpdesk/>
        <Objective />
        <OurBenefits/>
        <FAQSection />
        <Reviews/>
        <AddOnServices/>
        {/* <Hero2 /> */}
        <ContactUs/>
      </LazyMotion>
    </>
  )
}

export default page

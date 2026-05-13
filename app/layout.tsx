
import type { Metadata } from "next";
import "./globals.css"
import Script from "next/script";
import Navbar from "@/components/Navbar";
import { SmoothScrollerProvider } from "@/components/SmoothScroll";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/lib/ThemeContext";
import SiteBackground from "@/components/SiteBackground";
import {
  dmSans,
  inter,
  jetbrainsMono,
  manrope,
  montserrat,
  outfit,
  playfair,
  sora,
  spaceGrotesk,
} from "@/lib/fontS";

export const metadata: Metadata = {
   title:{
    default: "MyCoreOffice – Virtual Office & Business Address Across India"
,
template:" %s "  },
  description:
    "MyCoreOffice provides virtual office services, GST registration addresses, business addresses, mail handling, and office solutions across all Indian states and cities.",
  keywords: [
"MyCoreOffice",
"MyCoreOffice Virtual Office",
"MyCoreOffice GST Registration",
"My Core Office",
"My Core Office Virtual Office",
   "virtual office",
    "virtual office in india",
    "virtual office for gst",
    "virtual office address",
    "business address service",
    "virtual office provider india",
    "cheap virtual office india",
    "virtual office for startups",
    "virtual office for companies",
    "gst registration address",


    "virtual office in delhi",
    "virtual office in mumbai",
    "virtual office in bengaluru",
    "virtual office in chennai",
    "virtual office in hyderabad",
    "virtual office in kolkata",
    "virtual office in pune",
    "virtual office in gurgaon",
    "virtual office in noida",


    "virtual office in andhra pradesh",
    "virtual office in arunachal pradesh",
    "virtual office in assam",
    "virtual office in bihar",
    "virtual office in chhattisgarh",
    "virtual office in goa",
    "virtual office in gujarat",
    "virtual office in haryana",
    "virtual office in himachal pradesh",
    "virtual office in jharkhand",
    "virtual office in karnataka",
    "virtual office in kerala",
    "virtual office in madhya pradesh",
    "virtual office in maharashtra",
    "virtual office in manipur",
    "virtual office in meghalaya",
    "virtual office in mizoram",
    "virtual office in nagaland",
    "virtual office in odisha",
    "virtual office in punjab",
    "virtual office in rajasthan",
    "virtual office in sikkim",
    "virtual office in tamil nadu",
    "virtual office in telangana",
    "virtual office in tripura",
    "virtual office in uttar pradesh",
    "virtual office in uttarakhand",
    "virtual office in west bengal",

    
    "virtual office in delhi ncr",
    "virtual office in chandigarh",
    "virtual office in jammu and kashmir",
    "virtual office in ladakh",
    "virtual office in puducherry",
    "virtual office in andaman and nicobar",
    "virtual office in dadra and nagar haveli",
    "virtual office in daman and diu",
    "virtual office in lakshadweep",


    "gst address without office",
    "business registration address",
    "mail handling service india",
    "office address for gst filing",
    "company registration address india",
    "virtual business address india",
    "coworking virtual office",
    "legal business address india"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${manrope.variable} ${montserrat.variable} ${spaceGrotesk.variable} ${sora.variable} ${outfit.variable} ${dmSans.variable} ${playfair.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      >
       <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18035036782"
          strategy="afterInteractive"
        />

        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18035036782');
          `}
        </Script>
        <ThemeProvider>
        <SiteBackground />
        <SmoothScrollerProvider>
        <Navbar/>
        {children}
        <Footer/>
        </SmoothScrollerProvider>
        </ThemeProvider>

      </body>
      
    </html>
  );
}

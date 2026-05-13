// components/genesis.tsx
"use client";

import Image from "next/image";
export default function Genesis() {
  return (
    <section className=" ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-end">
         
          {/* Left side content */}
          <div className="space-y-8">
            <div className="space-y-6">
          
              
              <h2 className="text-3xl  bg-linear-to-r from-cyan-200 via-blue-400 to-blue-400  text-transparent bg-clip-text">
             <span className="text-black">Top GST Registration</span> Consultant
              </h2>
            </div>

            <div className="prose prose-lg text-gray-600 space-y-6 leading-relaxed text-justify">
<p>
In today’s rapidly evolving business environment, <strong>GST compliance in India</strong> has become essential for businesses of all sizes. For companies operating in <strong>Noida</strong>, including startups, SMEs, and large enterprises, managing GST regulations can be challenging without expert support. This is where a professional <strong>GST Registration Consultant in Noida</strong> plays an important role by simplifying the process of GST registration, compliance, return filing, and audit preparation. With the help of experienced consultants, businesses can ensure accurate documentation, timely GST return filing, and adherence to the latest tax regulations while focusing on their core operations. <strong>MyCoreOffice</strong> offers reliable <strong>GST registration and GST audit consulting services</strong> for businesses in Noida and across India. From assisting with new GST registrations to ensuring ongoing compliance, managing return filings, and preparing businesses for GST audits, our expert team provides end-to-end support for a smooth and hassle-free experience. Whether you are launching a new venture or looking for professional GST compliance assistance, MyCoreOffice helps businesses stay compliant, organized, and confident in today’s competitive market.
</p>
     
            </div>

         
          </div>

          {/* Right side image */}
           <div className="flex justify-center lg:justify-end">
            <div className="relative md:h-[450px]">
              <Image height={80} width={80}
                src="/gst.webp"
                alt="GST Services"
                className="w-full max-w-md lg:max-w-lg xl:max-w-xl rounded-md shadow-2xl "
              />
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-emerald-100 rounded-full opacity-60 blur-2xl"></div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-blue-100 rounded-full opacity-60 blur-2xl"></div>
              
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
 

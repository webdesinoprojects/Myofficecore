"use client";

import Image from "next/image";

import { toast, Toaster } from "react-hot-toast";
import { Loader2 } from "lucide-react";
 
import * as motion from "framer-motion"

import {
  ShieldCheck,
  FileClock,
  BadgeIndianRupee,
  MapPin,
  Wifi,
  Coffee, MessageCircle
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useState } from "react";

type EnquiryData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function About() {


  const [loading, setLoading] = useState(false);
  const submitEnquiry = async () => {
    if (!data.name || !data.phone) {
      toast.error("Name and phone are required");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("/api/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        // try to read error message if your API returns JSON errors
        let msg = "Failed";
        try {
          const data = await res.json();
          msg = data?.error || data?.message || msg;
          toast.error(msg);
        } catch { }
        throw new Error(msg);
      }



      toast.success("Enquiry sent successfully");
      setOpen(false);
      setLoading(false)
      setData({
        name: "",
        email: "",
        phone: "",
        message: "I am interested in your office space services.",
      });

    } catch {
      toast.error("Something went wrong. Try again.");
    }
  };

  const [open, setOpen] = useState(false);
  const [data, setData] = useState<EnquiryData>({
    name: "",
    email: "",
    phone: "",
    message: "I am interested in your office space services.",
  });

  const openEnquiry = (preset: string) => {
    setData((prev) => ({
      ...prev,
      message: preset,
    }));
    setOpen(true);
  };

  const sendWhatsapp = () => {
    const text = `Hey I am ${data.name}, I want to enquire abt office space.`;
    window.open(
      `https://wa.me/+919990720722?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <motion.motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false }}
      className={`max-w-7xl mx-auto px-6 pt-20  `}>
      <Toaster position="top-right" />

      {/* PRODUCT 1 */}
      <ProductBlock
        title="Top GST Registration Services"
        id="gst"
        link="gst"
        price=""
        description="Whatever the future brings, we’re able to handle that too. So when you need to scale up, cross borders or make the move to hybrid working we're here to support you every step of the way."
        question="If your needs change, we’re flexible"
        image="/HP_1.webp"
        icons={[
          { icon: FileClock, text: "Fastest Documentation" },
          { icon: BadgeIndianRupee, text: "Lowest Price Guaranteed" },
          { icon: ShieldCheck, text: "100% Law Compliant" },
          { icon: MapPin, text: "Professional Address" },
        ]}
        onEnquiry={() =>
          openEnquiry("I want to enquire about Virtual Offices")
        }
      />

      {/* PRODUCT 2 */}
      <ProductBlock
        reverse
        title="OFFICE FOR COMPANY REGISTRATION"
        id="virtualoffice"
        link="company/#pro"
        price="Starting from Just Rs. 899/- Per Month"
        description="We provide professional office spaces for Company registration at prime location across pan India at affordable prices."
        question="Do you need office space for Company registration?"
        image="/office4.webp"
        icons={[
          { icon: FileClock, text: "Fastest Documentation" },
          { icon: BadgeIndianRupee, text: "Lowest Price Guaranteed" },
          { icon: ShieldCheck, text: "100% Law Compliant" },
          { icon: MapPin, text: "Professional Address" },
        ]}
        onEnquiry={() =>
          openEnquiry("I want to enquire about Office for Company Registration.")
        }
      />

      {/* PRODUCT 3 */}
      <ProductBlock
        title="Co-working Spaces"
        link="coworking"
        id="coworking"
        description="We provide professional co-working spaces for your business at prime location across pan India at affordable prices."
        question="Do you need co-working space for your business?"
        image="/office2.webp"
        icons={[
          { icon: Wifi, text: "High Speed Internet" },
          { icon: BadgeIndianRupee, text: "Lowest Price Guaranteed" },
          { icon: Coffee, text: "Complimentary Tea/Coffee" },
          { icon: MapPin, text: "Professional Address" },
        ]}
        onEnquiry={() =>
          openEnquiry("I want to enquire about Co-working Spaces.")
        }
      />

      {/* ENQUIRY TOAST */}
 
        {open && (
          <motion.motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center"
          >
            <motion.motion.div
              initial={{ y: 40 }}
              animate={{ y: 0 }}
              className="bg-white rounded-md shadow-xl p-6 w-full max-w-md"
            >
              <h1 className="text-xl font-semibold mb-4 text-black">Send Enquiry</h1>

              <div className="space-y-3 text-black">
                <input
                  placeholder="Name"
                  className="w-full border border-gray-400 px-4 py-2 rounded-sm"
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                />
                <input
                  placeholder="Email"
                  type="email"
                  className="w-full border border-gray-400 px-4 py-2 rounded-md"
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}

                />
                <input
                  placeholder="Phone" minLength={10} maxLength={10}
                  className="w-full border border-gray-400 px-4 py-2 rounded-md"
                  value={data.phone}
                  onChange={(e) => setData({ ...data, phone: e.target.value })}
                />
                <textarea maxLength={50} minLength={5}
                  className="w-full border border-gray-400 px-4 py-2 rounded-md"
                  rows={2}
                  value={data.message}
                  onChange={(e) =>
                    setData({ ...data, message: e.target.value })
                  }
                />
              </div>

              <div className="mt-5 flex gap-3">
                <button
                  className="flex-1 cursor-pointer bg-black text-white flex gap-2 place-items-center place-content-center  py-2 rounded-md text-sm"
                  onClick={submitEnquiry}

                >
                  {loading && <Loader2 className="h-4 w-4 animate-spin" />}Send Enquiry
                </button>

                <button
                  className="flex-1 flex gap-2 place-items-center place-content-center bg-green-500 text-white  hover:bg-green-700 cursor-pointer py-2  rounded-md text-sm"
                  onClick={sendWhatsapp}
                >
                  WhatsApp  <MessageCircle className="h-4 w-5" />
                </button>


              </div>
              <button
                className="flex-1 w-full mt-1 border py-2 rounded-md border-gray-400 text-black"
                onClick={() => setOpen(false)}
              >
                Close
              </button>
            </motion.motion.div>
          </motion.motion.div>
        )}
    

    </motion.motion.div>
  );
}

/* PRODUCT BLOCK */
type ProductBlockProps = {
  title: string;
  description: string;
  question: string;
  image: string;
  id: string;
  icons: { icon: LucideIcon; text: string }[];
  reverse?: boolean;
  onEnquiry: () => void;
  price?: string;
  link?: string;
};

function ProductBlock({
  title,
  description,
  question,
  image,
  id,
  icons,
  reverse,
  onEnquiry,
}: ProductBlockProps) {
  return (
    <div
      className="grid md:grid-cols-2 gap-10 items-center mb-20"
      id={id}
    >
      <div className={reverse ? "md:order-2" : ""}>
        <h2 className="text-3xl  text-black text-center md:text-start">{title}</h2>

        <p className="mt-4 text-gray-600 text-center md:text-justify">{question}</p>
        <p className="mt-3 text-gray-600 text-justify">{description}</p>

        <div className="grid grid-cols-2 gap-4 mt-6">
          {icons.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <item.icon className="w-5 h-5 text-sky-900" />
              <span className="text-sm text-black">{item.text}</span>
            </div>
          ))}
        </div>
        <div className="flex gap-5 ">
          <button
            onClick={onEnquiry}
            className="mt-8 cursor-pointer bg-black text-white px-6 py-3 rounded-md text-sm"
          >
            Send Enquiry
          </button>

        </div>
      </div>

      <div className={reverse ? "md:order-1" : ""}>
        <Image
          src={`${image}`}
          alt={title}
          fetchPriority="high"
          loading="lazy"
          width={600}
          height={300}
          className="rounded-md object-cover"
        />
      </div>
    </div>
  );
}

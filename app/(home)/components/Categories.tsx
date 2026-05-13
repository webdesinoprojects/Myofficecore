import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/SectionReveal";

type Product = {
  id: number;
  name: string;
  image: string;
  link: string;
};

const Products: Product[] = [
  { id: 1, name: "Virtual Offices", image: "/locations/delhi.jpg", link: "/#virtual-office" },
  { id: 2, name: "Coworking Space", image: "/locations/noida.jpg", link: "/coworking-space" },
  { id: 3, name: "Meeting Rooms", image: "/locations/mumbai.jpg", link: "/Contact" },
];

const Categories = () => {
  return (
    <section className="relative bg-slate-50 py-20" id="browse">
      <div className="section-shell">
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <h1 className="section-title text-4xl md:text-5xl">Browse By Categories</h1>
          <p className="max-w-xl text-sm leading-7 text-slate-600">
            Choose the setup that matches your current business requirement.
          </p>
        </div>

        <Stagger className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {Products.map((product) => (
            <StaggerItem key={product.id} className="group bento-card bg-slate-950 text-white">
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  fetchPriority="high"
                  loading="lazy"
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />
                <Link
                  href={product.link}
                  className="absolute bottom-4 left-4 right-4 hidden items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-950 opacity-0 transition group-hover:opacity-100 md:flex"
                >
                  Browse
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="p-6">
                <h1 className="font-display text-xl font-bold">{product.name}</h1>
                <p className="mt-3 text-sm leading-7 text-white/70">
                  Premium virtual office with excellent connectivity and modern amenities.
                </p>

                <Link href={product.link} className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-white py-3 text-sm font-bold text-slate-950 md:hidden">
                  Browse
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
};

export default Categories;

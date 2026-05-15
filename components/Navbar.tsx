"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronDown,
  Instagram,
  Linkedin,
  Menu,
  X,
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/About-Us" },
  { name: "Virtual Offices", href: "/#virtual-office" },
  {
    name: "Services",
    dropdown: [
      { name: "GST", href: "/gst" },
      { name: "Company Registration", href: "/company-registration" },
      { name: "Office Space", href: "/office-space" },
      { name: "Coworking Space", href: "/coworking-space" },
      { name: "Business Services", href: "/business-services" },
    ],
  },
  { name: "Contact", href: "/Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileDropdown(null);
  };

  const isActive = (href: string) => {
    if (href === "/#virtual-office") return false;
    return pathname === href;
  };

  return (
    <nav
      className={`top-0 z-50 w-full px-3 py-3 ${
        isHomePage ? "fixed" : "sticky"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-[1.25rem] border border-[var(--border)] bg-[var(--bg-surface)]/80 px-3 py-2 shadow-[0_18px_70px_var(--card-shadow)] backdrop-blur-2xl md:px-5">
        <Link href="/" className="flex items-center gap-3 rounded-full">
          <Image
            src="/logo2.jpeg"
            alt="MyCoreOffice"
            width={180}
            height={80}
            priority
            className="h-14 w-auto rounded-lg object-contain"
          />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) =>
            item.dropdown ? (
              <li key={item.name} className="group relative">
                <button className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold text-[var(--fg)] transition hover:bg-[var(--bg-elevated)] hover:text-[var(--brand)]">
                  {item.name}
                  <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                </button>

                <div className="invisible absolute left-0 top-full w-64 translate-y-3 rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] p-2 opacity-0 shadow-2xl shadow-[var(--card-shadow)] transition-all duration-200 group-hover:visible group-hover:translate-y-2 group-hover:opacity-100">
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      onClick={closeMobileMenu}
                      className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-[var(--fg)] transition hover:bg-[var(--bg-elevated)] hover:text-[var(--brand)]"
                    >
                      {sub.name}
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  ))}
                </div>
              </li>
            ) : (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    isActive(item.href)
                      ? "bg-[var(--fg)] text-[var(--bg)] shadow-lg"
                      : "text-[var(--fg)] hover:bg-[var(--bg-elevated)] hover:text-[var(--brand)]"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            )
          )}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="https://linkedin.com"
            target="_blank"
            aria-label="Linkedin"
            className="grid h-10 w-10 place-items-center rounded-full border border-[var(--border)] text-[var(--fg)] transition hover:border-[var(--brand)] hover:bg-[var(--bg-elevated)]"
          >
            <Linkedin className="h-4 w-4" />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            aria-label="Instagram"
            className="grid h-10 w-10 place-items-center rounded-full border border-[var(--border)] text-[var(--fg)] transition hover:border-[var(--brand)] hover:bg-[var(--bg-elevated)]"
          >
            <Instagram className="h-4 w-4" />
          </Link>
          <div className="ml-1 border-l border-[var(--border)] pl-3">
            <ThemeToggle />
          </div>
        </div>

        <button
          type="button"
          aria-label="menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-full border border-[var(--border)] bg-[var(--bg-surface)] text-[var(--fg)] shadow-sm lg:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -14, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -14, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-2 max-w-7xl rounded-[1.25rem] border border-[var(--border)] bg-[var(--bg-surface)]/95 p-3 shadow-2xl backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) =>
                item.dropdown ? (
                  <div key={item.name}>
                    <button
                      type="button"
                      aria-label="menu"
                      onClick={() =>
                        setMobileDropdown(
                          mobileDropdown === item.name ? null : item.name
                        )
                      }
                      className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-bold text-[var(--fg)] hover:bg-[var(--bg-elevated)]"
                    >
                      {item.name}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          mobileDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {mobileDropdown === item.name && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden pl-3"
                        >
                          {item.dropdown.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              onClick={closeMobileMenu}
                              className="flex items-center justify-between rounded-lg px-4 py-3 text-sm font-semibold text-[var(--fg-muted)] hover:bg-[var(--bg-elevated)] hover:text-[var(--brand)]"
                            >
                              {sub.name}
                              <ArrowUpRight className="h-4 w-4" />
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={`rounded-lg px-4 py-3 text-sm font-bold transition ${
                      isActive(item.href)
                        ? "bg-[var(--fg)] text-[var(--bg)]"
                        : "text-[var(--fg)] hover:bg-[var(--bg-elevated)] hover:text-[var(--brand)]"
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              )}

              <div className="mt-2 flex gap-2 border-t border-[var(--border)] pt-3">
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  aria-label="Linkedin"
                  className="grid h-10 flex-1 place-items-center rounded-lg border border-[var(--border)] text-[var(--fg)] transition hover:border-[var(--brand)] hover:bg-[var(--bg-elevated)]"
                >
                  <Linkedin className="h-4 w-4" />
                </Link>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  aria-label="Instagram"
                  className="grid h-10 flex-1 place-items-center rounded-lg border border-[var(--border)] text-[var(--fg)] transition hover:border-[var(--brand)] hover:bg-[var(--bg-elevated)]"
                >
                  <Instagram className="h-4 w-4" />
                </Link>
                <div className="flex h-10 flex-1 items-center justify-center rounded-lg border border-[var(--border)]">
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

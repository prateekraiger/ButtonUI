import React from "react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

interface FooterProps {
  logo: React.ReactNode
  brandName: string
  socialLinks: Array<{
    icon: React.ReactNode
    href: string
    label: string
  }>
  mainLinks: Array<{
    href: string
    label: string
  }>
  legalLinks: Array<{
    href: string
    label: string
  }>
  copyright: {
    text: string
    license?: string
  }
}

export function Footer({
  logo,
  brandName,
  socialLinks,
  mainLinks,
  legalLinks,
  copyright,
}: FooterProps) {
  return (
    <footer className="py-12 bg-[#0A0A0A]/90 backdrop-blur-xl border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex flex-col gap-4">
            <Link
              to="/"
              className="flex items-center gap-x-2 hover:opacity-80 transition-opacity"
              aria-label={brandName}
            >
              {logo}
              <span className="font-bold text-xl tracking-tight">{brandName}</span>
            </Link>
            <div className="text-sm text-zinc-500">
              <div>{copyright.text}</div>
              {copyright.license && <div>{copyright.license}</div>}
            </div>
          </div>

          <div className="flex flex-col md:items-end gap-6">
            <div className="flex items-center gap-6">
              <nav>
                <ul className="flex items-center gap-6">
                  {mainLinks.map((link, i) => (
                    <li key={i}>
                      <Link
                        to={link.href}
                        className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="h-4 w-px bg-white/10 hidden md:block" />
              <ul className="flex items-center gap-3">
                {socialLinks.map((link, i) => (
                  <li key={i}>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="h-10 w-10 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-zinc-400 hover:text-white"
                      asChild
                    >
                      <a href={link.href} target="_blank" rel="noreferrer" aria-label={link.label}>
                        {link.icon}
                      </a>
                    </Button>
                  </li>
                ))}
              </ul>
            </div>

            <ul className="flex items-center gap-6">
              {legalLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

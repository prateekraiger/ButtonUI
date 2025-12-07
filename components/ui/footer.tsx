import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface FooterProps {
  logo: React.ReactNode;
  brandName: string;
  socialLinks: Array<{
    icon: React.ReactNode;
    href: string;
    label: string;
  }>;
  mainLinks: Array<{
    href: string;
    label: string;
  }>;
  legalLinks: Array<{
    href: string;
    label: string;
  }>;
  copyright: {
    text: string;
    license?: string;
  };
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
    <footer className="border-t border-white/10 bg-[#0A0A0A]/90 py-12 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div className="flex flex-col gap-4">
            <Link
              to="/"
              className="flex items-center gap-x-2 transition-opacity hover:opacity-80"
              aria-label={brandName}
            >
              {logo}
              <span className="text-xl font-bold tracking-tight">
                {brandName}
              </span>
            </Link>
            <div className="text-sm text-zinc-500">
              <div>{copyright.text}</div>
              {copyright.license && <div>{copyright.license}</div>}
            </div>
          </div>

          <div className="flex flex-col gap-6 md:items-end">
            <div className="flex items-center gap-6">
              <nav>
                <ul className="flex items-center gap-6">
                  {mainLinks.map((link, i) => (
                    <li key={i}>
                      <Link
                        to={link.href}
                        className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="hidden h-4 w-px bg-white/10 md:block" />
              <ul className="flex items-center gap-3">
                {socialLinks.map((link, i) => (
                  <li key={i}>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="h-10 w-10 rounded-full border border-white/10 bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white"
                      asChild
                    >
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={link.label}
                      >
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
                    className="text-xs text-zinc-600 transition-colors hover:text-zinc-400"
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
  );
}

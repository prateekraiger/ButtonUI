import React from "react";
import { Github, Twitter, Linkedin } from "lucide-react";
import { Logo } from "./Logo";
import { Footer as UiFooter } from "./ui/footer";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <UiFooter
      logo={<Logo size={32} />}
      brandName="ButtonUI"
      socialLinks={[
        {
          icon: <Github className="h-5 w-5" />,
          href: "https://github.com/prateekraiger",
          label: "GitHub",
        },
        {
          icon: <Twitter className="h-5 w-5" />,
          href: "https://x.com/mrpratik753",
          label: "Twitter",
        },
        {
          icon: <Linkedin className="h-5 w-5" />,
          href: "https://www.linkedin.com/in/pratik-r1104/",
          label: "LinkedIn",
        },
      ]}
      mainLinks={[
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
      ]}
      legalLinks={[
        { href: "#", label: "Open Source" },
        { href: "#", label: "Apache-2.0 license" },
      ]}
      copyright={{
        text: `© ${currentYear} ButtonUI`,
        license: "Made by @prateekraiger",
      }}
    />
  );
};

export default Footer;

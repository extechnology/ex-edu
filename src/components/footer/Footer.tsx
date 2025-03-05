"use client";
import { FloatingDock } from "../ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandWhatsapp,
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandX,
  IconBrandPinterest,
} from "@tabler/icons-react";

function Footer() {
  const links = [
    {
      title: "WhatsApp",
      icon: (
        <IconBrandWhatsapp className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Facebook",
      icon: (
        <IconBrandFacebook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Linkedin",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Pinterest",
      icon: (
        <IconBrandPinterest className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];
  return (
    <div className="bg-[#FAF9F6] dark:bg-slate-900 py-5 md:py-7 border-t border-gray-300 dark:border-gray-700">
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center space-y-3 md:space-y-0">
        <div className="content-center">
          <h1 className="text-gray-500 text-center ">© ExEdu</h1>
        </div>
        <div>
          <FloatingDock mobileClassName="hidden" items={links} />
        </div>
        <div className="text-gray-400 flex gap-5 justify-center content-center items-center">
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
        </div>
      </div>
      <div>
        <FloatingDock desktopClassName="md:hidden" items={links} />
      </div>
    </div>
  );
}
export default Footer;

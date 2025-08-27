"use client";

import { TopNavbarWrapper } from "@/app/farcaster/components/top-navbar-wrapper";
import { FloatingDock } from "@/components/ui/floating-dock";
import { IconBrandGithub, IconBrandX, IconExchange, IconHome, IconNewSection, IconTerminal2 } from "@tabler/icons-react";
import Image from "next/image";

export const topNavHeight = "calc(4rem + 1px)";

export function TopNavbar() {
  const topNavItems = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
      href: "/farcaster",
    },
    {
      title: "Products",
      icon: <IconTerminal2 className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
      href: "/farcaster/about",
    },
    {
      title: "Components",
      icon: <IconNewSection className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
      href: "/farcaster/profile",
    },
    {
      title: "LiFi Bridge",
      icon: (
        <Image
          src="/lifi-icon-1024x1024.png"
          alt="Lifi Logo"
          width={20}
          height={20}
          className="w-5 h-5"
        />
      ),
      href: "/",
    },
    {
      title: "Changelog",
      icon: <IconExchange className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: "Twitter",
      icon: <IconBrandX className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
      href: "#",
    },
  ];

  return (
    <TopNavbarWrapper>
      <div className="flex h-full w-full items-center justify-center">
        <FloatingDock 
          items={topNavItems} 
          desktopClassName="translate-y-0"
          mobileClassName="translate-y-0"
        />
      </div>
    </TopNavbarWrapper>
  );
}

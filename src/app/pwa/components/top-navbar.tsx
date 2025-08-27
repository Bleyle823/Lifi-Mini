"use client";

import { TopNavbarWrapper } from "@/app/pwa/components/top-navbar-wrapper";
import { FloatingDock } from "@/components/ui/floating-dock";
import { IconBrandGithub, IconBrandX, IconExchange, IconHome, IconNewSection, IconTerminal2 } from "@tabler/icons-react";

export const topNavHeight = "calc(4rem + 1px)";

export function PwaTopNavbar() {
  const topNavItems = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
      href: "/pwa",
    },
    {
      title: "Products",
      icon: <IconTerminal2 className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
      href: "/pwa/about",
    },
    {
      title: "Components",
      icon: <IconNewSection className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
      href: "/pwa/profile",
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

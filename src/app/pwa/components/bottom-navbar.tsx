"use client";

import { BottomNavbarWrapper } from "@/app/pwa/components/bottom-navbar-wrapper";
import { FloatingDock } from "@/components/ui/floating-dock";
import { CircleUser, HomeIcon, InfoIcon } from "lucide-react";

const navRoutes = [
  "/pwa",
  "/pwa/about",
  "/pwa/profile",
] as const;

type NavRoutes = (typeof navRoutes)[number];

const navSetup: Record<
  NavRoutes,
  {
    name: string;
    isActive: string[];
    icon: React.ReactNode;
  }
> = {
  "/pwa": {
    name: "Home",
    isActive: ["/pwa"],
    icon: <HomeIcon className="size-6" />,
  },
  "/pwa/about": {
    name: "About",
    isActive: ["/pwa/about"],
    icon: <InfoIcon className="size-6" />,
  },
  "/pwa/profile": {
    name: "Profile",
    isActive: ["/pwa/profile"],
    icon: <CircleUser className="size-6" />,
  },
} as const;

export const bottomNavHeight = "calc(4rem + 1px)";

export function PwaBottomNavbar() {
  const items = navRoutes.map((route) => ({
    title: navSetup[route].name,
    href: route,
    icon: (
      <div className="h-full w-full text-neutral-600 dark:text-neutral-300 flex items-center justify-center">
        {navSetup[route].icon}
      </div>
    ),
  }));

  return (
    <BottomNavbarWrapper>
      <div className="flex h-full w-full items-center justify-center">
        <FloatingDock items={items} />
      </div>
    </BottomNavbarWrapper>
  );
}

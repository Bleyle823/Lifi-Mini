"use client";

import { BottomNavbarWrapper } from "@/app/farcaster/components/bottom-navbar-wrapper";
import { FloatingDock } from "@/components/ui/floating-dock";
import { CircleUser, HomeIcon, InfoIcon } from "lucide-react";

const navRoutes = [
  "/farcaster",
  "/farcaster/about",
  "/farcaster/profile",
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
  "/farcaster": {
    name: "Home",
    isActive: ["/farcaster"],
    icon: <HomeIcon className="size-6" />,
  },
  "/farcaster/about": {
    name: "About",
    isActive: ["/farcaster/about"],
    icon: <InfoIcon className="size-6" />,
  },
  "/farcaster/profile": {
    name: "Profile",
    isActive: ["/farcaster/profile"],
    icon: <CircleUser className="size-6" />,
  },
} as const;

export const bottomNavHeight = "calc(4rem + 1px)";

export function BottomNavbar() {
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

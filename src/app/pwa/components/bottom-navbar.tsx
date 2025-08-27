"use client";

import { BottomNavbarWrapper } from "@/app/pwa/components/bottom-navbar-wrapper";
import { cn } from "@/lib/utils";
import { CircleUser, HomeIcon, InfoIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

  return (
    <BottomNavbarWrapper>
      <nav className="max-w-global flex h-full w-full items-center justify-evenly bg-white/95 backdrop-blur-sm border-t border-gray-100">
        {navRoutes.map((route, index) => {
          const activeRoutes = navSetup[route].isActive;

          const isActive = activeRoutes.includes(pathname);

          return (
            <Link
              key={`bottom-navbar-link-${route}-${index}`}
              href={route}
              className={cn(
                "group flex h-full flex-1 flex-col items-center justify-center overflow-hidden transition-all duration-200 ease-in-out rounded-lg mx-1 my-2",
                "hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 hover:scale-105 hover:shadow-sm",
                isActive 
                  ? "bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 shadow-sm" 
                  : "text-gray-600 hover:text-purple-600"
              )}
            >
              <div className={cn(
                "transition-transform duration-200 ease-in-out",
                "group-hover:scale-110",
                isActive && "scale-110"
              )}>
                {navSetup[route].icon}
              </div>
              <div className={cn(
                "text-xs font-medium mt-1 transition-all duration-200",
                isActive && "font-semibold"
              )}>
                {navSetup[route].name}
              </div>
            </Link>
          );
        })}
      </nav>
    </BottomNavbarWrapper>
  );
}

"use client";

import { TopNavbarWrapper } from "@/app/pwa/components/top-navbar-wrapper";
import { ThemeAwareLogo } from "@/components/ThemeAwareLogo";

export const topNavHeight = "calc(4rem + 1px)";

export function PwaTopNavbar() {
  return (
    <TopNavbarWrapper>
      <div className="max-w-global z-50 flex h-full w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <ThemeAwareLogo
            width={100}
            height={24}
            className="h-6"
            alt="LiFi Logo"
          />
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600 dark:text-gray-300">Cross-chain</span>
        </div>
      </div>
    </TopNavbarWrapper>
  );
}

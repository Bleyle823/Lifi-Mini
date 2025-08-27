"use client";

import { TopNavbarWrapper } from "@/app/farcaster/components/top-navbar-wrapper";
import Image from "next/image";

export const topNavHeight = "calc(4rem + 1px)";

export function TopNavbar() {
  return (
    <TopNavbarWrapper>
      <div className="max-w-global z-50 flex h-full w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/lifi-icon-1024x1024.png"
            alt="Lifi Logo"
            width={24}
            height={24}
            className="w-6 h-6"
          />
          <span className="text-lg font-semibold text-gray-900">LiFi Bridge</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">Cross-chain</span>
        </div>
      </div>
    </TopNavbarWrapper>
  );
}

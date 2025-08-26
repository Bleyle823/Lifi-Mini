"use client";

import { TopNavbarWrapper } from "@/app/farcaster/components/top-navbar-wrapper";

export const topNavHeight = "calc(4rem + 1px)";

export function TopNavbar() {
  return (
    <TopNavbarWrapper>
      <div className="max-w-global z-50 flex h-full w-full items-center justify-between">
        <div className="flex items-center">
          <span className="text-lg font-semibold text-gray-900">LiFi Bridge</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">Cross-chain</span>
        </div>
      </div>
    </TopNavbarWrapper>
  );
}

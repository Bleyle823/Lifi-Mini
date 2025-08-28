"use client";

import { ThemeProvider } from "@/providers/theme-provider";
import { FarcasterProvider } from "@/providers/farcaster-provider";
import { MiniKitProvider } from "@coinbase/onchainkit/minikit";
import { base } from "wagmi/chains";

export function FarcasterProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MiniKitProvider
      apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY}
      chain={base}
      config={{
        appearance: {
          mode: "auto",
          theme: "mini-app-theme",
          name: process.env.NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME,
          logo: process.env.NEXT_PUBLIC_ICON_URL,
        },
      }}
    >
      <FarcasterProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </FarcasterProvider>
    </MiniKitProvider>
  );
}

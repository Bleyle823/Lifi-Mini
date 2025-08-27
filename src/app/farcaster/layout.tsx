import { FarcasterProviders } from "@/app/farcaster/providers";
import { getBaseUrl } from "@/lib/constants";
import "@/styles/globals.css";

import { type Metadata, type Viewport } from "next";

const appUrl = getBaseUrl();

const frame = {
  version: "next",
  imageUrl: `${appUrl}/lifi-hero-1200x630.png`,
  button: {
    title: "Start",
    action: {
      type: "launch_frame",
      url: `${appUrl}/farcaster`,
      name: "LiFi Bridge - Cross-Chain Token Bridge",
    },
  },
};

const stringifiedFrame = JSON.stringify(frame);

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
  userScalable: false,
};

export const metadata: Metadata = {
  title: "LiFi Bridge - Cross-Chain Token Bridge",
  description: "Bridge tokens across multiple blockchains with LiFi's advanced routing technology. Fast, secure, and cost-effective cross-chain transfers.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  appleWebApp: {
    capable: true,
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "mobile-web-app-capable": "yes",
    "fc:frame": stringifiedFrame,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className="overscroll-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      suppressHydrationWarning
    >
      <body className="overscroll-none">
        <FarcasterProviders>{children}</FarcasterProviders>
      </body>
    </html>
  );
}

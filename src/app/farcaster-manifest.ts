import { getBaseUrl } from "@/lib/constants";
import { type domainManifestSchema } from "@farcaster/frame-sdk";
import { type z } from "zod";

type Manifest = z.input<typeof domainManifestSchema> & {
  baseBuilder?: {
    allowedAddresses: string[];
  };
};

const appUrl = getBaseUrl();

// Docs
// https://miniapps.farcaster.xyz/docs/guides/publishing#host-a-manifest-file
export const farcasterManifest: Manifest = {
  accountAssociation: {
    header: "eyJmaWQiOjY3NDc5MiwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDdENjI4NDE4NjEyNzU0OWUxODgzRjMwMUM0MjU5MTBGMzYxOUUyNTQifQ",
    payload: "eyJkb21haW4iOiJsaWZpLW1pbmkudmVyY2VsLmFwcCJ9",
    signature: "MHhhYjZkODUwOTQ5NDYxN2Y2ZTA5ZTdlNDYzZGRjMGFmNjczMTllYjYxNTdmODA5MzI1ZjdjNjljMzVhOWY5ZmEyMWM5ZjkyNDhhODk0NTUzMzMzMTEyNTUzMzg3YjA1NzI1Mzk0NmJkMGNhNjA4YjFhODhkNDQ2N2UzNjI2NDFkYzFj"
  },
  frame: {
    version: "1",
    name: "LiFi Bridge",
    homeUrl: `${appUrl}/farcaster`,
    iconUrl: `${appUrl}/icon-512x512.png`,
    splashImageUrl: `https://imgur.com/a/uTdFyRO`,
    splashBackgroundColor: "#0F172A",
    // webhookUrl: "https://api.example.com/webhook/farcaster",
    subtitle: "Cross-chain bridge",
    description:
      "Bridge tokens across multiple blockchains with LiFi's advanced routing technology. Fast, secure, and cost-effective cross-chain transfers.",
    screenshotUrls: [
      `${appUrl}/screenshots/Screenshot-1.png`,
      `${appUrl}/screenshots/Screenshot-2.png`,
      `${appUrl}/screenshots/Screenshot-3.png`,
    ],
    primaryCategory: "finance",
    tags: ["defi", "bridge", "cross-chain", "ethereum", "blockchain"],
    heroImageUrl: `${appUrl}/lifi-hero-1200x630.png`,
    tagline: "Bridge tokens across chains",
    ogTitle: "LiFi Bridge - Cross-Chain",
    ogDescription:
      "Fast and secure cross-chain token transfers powered by LiFi's advanced routing technology.",
    ogImageUrl: `${appUrl}/lifi-hero-1200x630.png`,
    noindex: false,
    requiredCapabilities: [
      "wallet.getEthereumProvider",
      "actions.ready",
      "actions.openUrl",
      "actions.close",
      "actions.setPrimaryButton",
      "actions.addMiniApp",
      "actions.signIn",
      "actions.viewCast",
      "actions.viewProfile",
      "actions.composeCast",
      "actions.viewToken",
      "actions.sendToken",
      "actions.swapToken",
      "haptics.impactOccurred",
      "haptics.notificationOccurred",
      "haptics.selectionChanged",
      "back",
    ],
    // castShareUrl
  },
  baseBuilder: {
    allowedAddresses: ["0x662AE3664Cb961DEb5f94bBA2FDC06c138A6D887"]
  }
};



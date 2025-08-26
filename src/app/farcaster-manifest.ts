import { getBaseUrl } from "@/lib/constants";
import { type domainManifestSchema } from "@farcaster/frame-sdk";
import { type z } from "zod";

type Manifest = z.input<typeof domainManifestSchema>;

const appUrl = getBaseUrl();

// Docs
// https://miniapps.farcaster.xyz/docs/guides/publishing#host-a-manifest-file
export const farcasterManifest: Manifest = {
  accountAssociation: {
    header:
      "eyJmaWQiOjI5MjE5NCwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDcyNTU0QTIyNEI0Qjc1Njk2OTdBYWQ1ZUE1YmQ1NzM5ZDAxQzliYzMifQ",
    payload: "eyJkb21haW4iOiJ0ZW1wbGF0ZS5nYWlhcy54eXoifQ",
    signature:
      "MHg0N2YwYzJlZDQ3ZTMwODZiMGVmYjk3ZmQwYWM5NGQxZjk3Mjg4NDg0NTc3MjY4Yjg4Yzk4MjAyODlmMTI4MjkzMGZiNmExYTdhN2IxYWJlMmQxMzNjMDE1YTQ0Y2FkNWU5M2NiNmRiNmZhYzFjNDcyNjI5NDAwZTk5YmExODNiNjFi",
  },
  frame: {
    version: "1",
    name: "LiFi Bridge",
    homeUrl: `${appUrl}/farcaster`,
    iconUrl: `${appUrl}/icon-512x512.png`,
    splashImageUrl: `${appUrl}/splash-image-200x200.png`,
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
    tags: ["defi", "bridge", "cross-chain", "tokens", "lifi", "ethereum", "blockchain"],
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
};

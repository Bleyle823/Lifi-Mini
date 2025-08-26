import { NextResponse } from "next/server";
import { farcasterManifest as baseManifest } from "@/app/farcaster-manifest";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  const manifest = {
    ...baseManifest,
    accountAssociation: {
      header:
        process.env.FARCASTER_ACCOUNT_ASSOCIATION_HEADER ??
        baseManifest.accountAssociation.header,
      payload:
        process.env.FARCASTER_ACCOUNT_ASSOCIATION_PAYLOAD ??
        baseManifest.accountAssociation.payload,
      signature:
        process.env.FARCASTER_ACCOUNT_ASSOCIATION_SIGNATURE ??
        baseManifest.accountAssociation.signature,
    },
  };

  return NextResponse.json(manifest, {
    headers: {
      "Cache-Control": "no-store, max-age=0",
    },
  });
}



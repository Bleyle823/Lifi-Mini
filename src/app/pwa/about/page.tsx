import { PwaSafeArea } from "@/app/pwa/components/safe-area";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Link from "next/link";

export default function Page() {
  return (
    <PwaSafeArea {...{ topNavHeight: "52px" }}>
      <FloatingNav />
      <main className="flex gap-4 pt-1">
        About
        <Link href="/pwa">Go Home</Link>
      </main>
    </PwaSafeArea>
  );
}

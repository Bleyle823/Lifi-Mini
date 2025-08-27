import { PwaSafeArea } from "@/app/pwa/components/safe-area";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Link from "next/link";

export default function Page() {
  return (
    <PwaSafeArea {...{ topNavHeight: "calc(6rem + 1px)" }}>
      <FloatingNav />
      <main className="flex gap-4">
        About
        <Link href="/pwa">Go Home</Link>
      </main>
    </PwaSafeArea>
  );
}

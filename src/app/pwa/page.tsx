import { PwaBottomNavbar, bottomNavHeight } from "@/app/pwa/components/bottom-navbar";
import { PwaSafeArea } from "@/app/pwa/components/safe-area";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Widget } from "@/components/Widget";
import { WidgetEvents } from "@/components/WidgetEvents";

export default function HomePage() {
  return (
    <PwaSafeArea {...{ topNavHeight: "calc(6rem + 1px)", bottomNavHeight }}>
      <FloatingNav />
      <WidgetEvents />
      <main className="flex-1 p-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-6 text-center">LiFi Bridge</h1>
          <Widget />
        </div>
      </main>
      <PwaBottomNavbar />
    </PwaSafeArea>
  );
}

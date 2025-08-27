import { PwaBottomNavbar, bottomNavHeight } from "@/app/pwa/components/bottom-navbar";
import { PwaSafeArea } from "@/app/pwa/components/safe-area";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Widget } from "@/components/Widget";
import { WidgetEvents } from "@/components/WidgetEvents";

export default function HomePage() {
  return (
    <PwaSafeArea {...{ topNavHeight: "52px", bottomNavHeight }}>
      <FloatingNav />
      <WidgetEvents />
      <main className="flex-1 px-4 pt-1 pb-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-6 text-center">LiFi Bridge</h1>
          <Widget />
        </div>
      </main>
      <PwaBottomNavbar />
    </PwaSafeArea>
  );
}

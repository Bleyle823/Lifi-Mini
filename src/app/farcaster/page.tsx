import {
  BottomNavbar,
  bottomNavHeight,
} from "@/app/farcaster/components/bottom-navbar";
import { SafeArea } from "@/app/farcaster/components/safe-area";
import { TopNavbar, topNavHeight } from "@/app/farcaster/components/top-navbar";
import { Widget } from "@/components/Widget";
import { WidgetEvents } from "@/components/WidgetEvents";

export default function HomePage() {
  return (
    <SafeArea {...{ topNavHeight, bottomNavHeight }}>
      <TopNavbar />
      <main className="flex-1 overflow-auto">
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-4 text-center text-gray-900">
              LiFi Bridge
            </h1>
            <p className="text-base text-gray-600 mb-6 text-center">
              Cross-chain bridge for seamless token transfers
            </p>
            
            {/* Debug info */}
            <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Debug:</strong> Farcaster mini app loaded successfully. 
                LiFi Widget should appear below.
              </p>
            </div>
            
            <WidgetEvents />
            <Widget />
            
            {/* Fallback content if widget fails */}
            <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg text-center">
              <p className="text-gray-600">
                If the LiFi Widget doesn&apos;t appear above, please refresh the page or check your connection.
              </p>
            </div>
          </div>
        </div>
      </main>
      <BottomNavbar />
    </SafeArea>
  );
}

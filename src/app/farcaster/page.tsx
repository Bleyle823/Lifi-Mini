import {
  BottomNavbar,
  bottomNavHeight,
} from "@/app/farcaster/components/bottom-navbar";
import { SafeArea } from "@/app/farcaster/components/safe-area";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Widget } from "@/components/Widget";
import { WidgetEvents } from "@/components/WidgetEvents";
// import Image from "next/image";

export default function HomePage() {


  return (
    <SafeArea {...{ topNavHeight: "52px", bottomNavHeight }}>
      <FloatingNav />
      <main className="flex-1 overflow-auto">
        <div className="container mx-auto px-4 pt-1 pb-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              {/* <Image
                src="/lifi-icon-1024x1024.png"
                alt="Lifi Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              /> */}
              {/* <h1 className="text-2xl font-bold text-gray-900">
                LiFi Bridge
              </h1> */}
            </div>
            {/* <p className="text-base text-gray-600 mb-6 text-center">
              Cross-chain bridge for seamless token transfers
            </p> */}
            
            {/* Debug info */}
            {/* <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Debug:</strong> Farcaster mini app loaded successfully. 
                LiFi Widget should appear below.
              </p>
            </div> */}
            
            <WidgetEvents />
            <Widget />
            
            {/* Demo page link */}
            <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg text-center">
              <p className="text-gray-600 mb-3">
                If the LiFi Widget doesn&apos;t appear above, please refresh the page or check your connection.
              </p>
              <a 
                href="/demo" 
                className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Try OnchainKit Demo
              </a>
            </div>
          </div>
        </div>
      </main>
      <BottomNavbar />
    </SafeArea>
  );
}

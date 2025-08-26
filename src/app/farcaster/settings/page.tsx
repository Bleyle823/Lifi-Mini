import {
  BottomNavbar,
  bottomNavHeight,
} from "@/app/farcaster/components/bottom-navbar";
import { SafeArea } from "@/app/farcaster/components/safe-area";
import { TopNavbar, topNavHeight } from "@/app/farcaster/components/top-navbar";
import Link from "next/link";

export default function Page() {
  return (
    <SafeArea {...{ topNavHeight, bottomNavHeight }}>
      <TopNavbar />
      <main className="flex-1 overflow-auto">
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold mb-6 text-center text-gray-900">
              Bridge Settings
            </h1>
            
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Bridge Preferences</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">Auto-route optimization</p>
                      <p className="text-sm text-gray-600">Automatically find the best bridge routes</p>
                    </div>
                    <div className="w-12 h-6 bg-blue-600 rounded-full relative">
                      <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">Slippage tolerance</p>
                      <p className="text-sm text-gray-600">Set maximum acceptable slippage</p>
                    </div>
                    <select className="px-3 py-1 border border-gray-300 rounded-md text-sm">
                      <option>0.5%</option>
                      <option>1.0%</option>
                      <option>2.0%</option>
                    </select>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">Gas optimization</p>
                      <p className="text-sm text-gray-600">Optimize gas fees for transactions</p>
                    </div>
                    <div className="w-12 h-6 bg-blue-600 rounded-full relative">
                      <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Network Settings</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-900">Ethereum</span>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-900">Polygon</span>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-900">Arbitrum</span>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-900">Optimism</span>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Link 
                href="/farcaster" 
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                ← Back to Bridge
              </Link>
            </div>
          </div>
        </div>
      </main>
      <BottomNavbar />
    </SafeArea>
  );
}

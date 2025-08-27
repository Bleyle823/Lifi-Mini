import { SafeArea } from "@/app/farcaster/components/safe-area";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Link from "next/link";

export default function Page() {


  return (
    <SafeArea {...{ topNavHeight: "calc(6rem + 1px)" }}>
      <FloatingNav />
      <main className="flex-1 overflow-auto">
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold mb-6 text-center text-gray-900">
              Bridge Profile
            </h1>
            
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 space-y-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl text-blue-600">🌉</span>
                </div>
                <h2 className="text-xl font-semibold text-gray-900">LiFi Bridge User</h2>
                <p className="text-gray-600">Cross-chain bridge enthusiast</p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Bridge Statistics</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-600">0</div>
                    <div className="text-sm text-gray-600">Bridges Completed</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-green-600">$0</div>
                    <div className="text-sm text-gray-600">Total Volume</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
                <div className="text-center py-8 text-gray-500">
                  <p>No recent bridge activity</p>
                  <p className="text-sm mt-2">Start bridging tokens to see your history here</p>
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
    </SafeArea>
  );
}

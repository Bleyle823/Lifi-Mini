import { SafeArea } from "@/app/farcaster/components/safe-area";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome, IconExchange, IconTerminal2, IconNewSection, IconBrandGithub, IconBrandX } from "@tabler/icons-react";
import Link from "next/link";

export default function Page() {
  const navItems = [
    {
      name: "Home",
      link: "/farcaster",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Bridge",
      link: "/farcaster/about",
      icon: <IconExchange className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Products",
      link: "/farcaster/profile",
      icon: <IconTerminal2 className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Components",
      link: "/farcaster/settings",
      icon: <IconNewSection className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "GitHub",
      link: "https://github.com/lifinance",
      icon: <IconBrandGithub className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Twitter",
      link: "https://twitter.com/lifiprotocol",
      icon: <IconBrandX className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];

  return (
    <SafeArea {...{ topNavHeight: "calc(6rem + 1px)" }}>
      <FloatingNav navItems={navItems} />
      <main className="flex-1 overflow-auto">
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold mb-6 text-center text-gray-900">
              About LiFi Bridge
            </h1>
            
            <div className="space-y-4 text-gray-700">
              <p>
                LiFi Bridge is a powerful cross-chain bridge that enables seamless token transfers 
                across multiple blockchains. Built on LiFi&apos;s advanced routing technology, it provides 
                fast, secure, and cost-effective cross-chain transfers.
              </p>
              
              <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                Key Features
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Multi-chain support for major blockchains</li>
                <li>Advanced routing for optimal transfer paths</li>
                <li>Secure smart contract infrastructure</li>
                <li>Real-time transaction monitoring</li>
                <li>User-friendly interface</li>
              </ul>
              
              <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                How It Works
              </h2>
              <p>
                Our bridge uses sophisticated algorithms to find the most efficient routes for your 
                cross-chain transfers. It automatically selects the best bridges and DEXs to ensure 
                you get the best rates and fastest execution times.
              </p>
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

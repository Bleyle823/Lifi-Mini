"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import { Button } from "@/components/DemoComponents";
import { Icon } from "@/components/DemoComponents";
import { Home } from "@/components/DemoComponents";
import { Features } from "@/components/DemoComponents";
import { Widget } from "@/components/Widget";
import { ClientOnly } from "@/components/ClientOnly";

function DemoPageContent() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  return <DemoPageInner />;
}

function DemoPageInner() {
  // Dynamic imports to avoid SSR issues
  const [MiniKitComponents, setMiniKitComponents] = useState<any>(null);

  useEffect(() => {
    const loadComponents = async () => {
      try {
        const { useMiniKit, useAddFrame, useOpenUrl } = await import("@coinbase/onchainkit/minikit");
        const {
          Name,
          Identity,
          Address,
          Avatar,
          EthBalance,
        } = await import("@coinbase/onchainkit/identity");
        const {
          ConnectWallet,
          Wallet,
          WalletDropdown,
          WalletDropdownDisconnect,
        } = await import("@coinbase/onchainkit/wallet");

        setMiniKitComponents({
          useMiniKit,
          useAddFrame,
          useOpenUrl,
          Name,
          Identity,
          Address,
          Avatar,
          EthBalance,
          ConnectWallet,
          Wallet,
          WalletDropdown,
          WalletDropdownDisconnect,
        });
      } catch (error) {
        console.error("Failed to load MiniKit components:", error);
      }
    };

    loadComponents();
  }, []);

  if (!MiniKitComponents) {
    return <div className="flex justify-center items-center min-h-screen">Loading MiniKit...</div>;
  }

  return <DemoPageCore {...MiniKitComponents} />;
}

function DemoPageCore({
  useMiniKit,
  useAddFrame,
  useOpenUrl,
  Name,
  Identity,
  Address,
  Avatar,
  EthBalance,
  ConnectWallet,
  Wallet,
  WalletDropdown,
  WalletDropdownDisconnect,
}: any) {
  const { setFrameReady, isFrameReady, context } = useMiniKit();
  const [frameAdded, setFrameAdded] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  const addFrame = useAddFrame();
  const openUrl = useOpenUrl();

  useEffect(() => {
    if (!isFrameReady) {
      setFrameReady();
    }
  }, [setFrameReady, isFrameReady]);

  const handleAddFrame = useCallback(async () => {
    const frameAdded = await addFrame();
    setFrameAdded(Boolean(frameAdded));
  }, [addFrame]);

  const saveFrameButton = useMemo(() => {
    if (context && !context.client.added) {
      return (
        <Button
          variant="ghost"
          size="sm"
          onClick={handleAddFrame}
          className="text-[var(--app-accent)] p-4"
          icon={<Icon name="plus" size="sm" />}
        >
          Save Frame
        </Button>
      );
    }

    if (frameAdded) {
      return (
        <div className="flex items-center space-x-1 text-sm font-medium text-[#0052FF] animate-fade-out">
          <Icon name="check" size="sm" className="text-[#0052FF]" />
          <span>Saved</span>
        </div>
      );
    }

    return null;
  }, [context, frameAdded, handleAddFrame]);

  return (
    <div className="flex flex-col min-h-screen font-sans text-[var(--app-foreground)] mini-app-theme from-[var(--app-background)] to-[var(--app-gray)]">
      <div className="w-full max-w-md mx-auto px-4 py-3">
        <header className="flex justify-between items-center mb-3 h-11">
          <div>
            <div className="flex items-center space-x-2">
              <Wallet className="z-10">
                <ConnectWallet>
                  <Name className="text-inherit" />
                </ConnectWallet>
                <WalletDropdown>
                  <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
                    <Avatar />
                    <Name />
                    <Address />
                    <EthBalance />
                  </Identity>
                  <WalletDropdownDisconnect />
                </WalletDropdown>
              </Wallet>
            </div>
          </div>
          <div>{saveFrameButton}</div>
        </header>

        <main className="flex-1">
          {activeTab === "home" && <Home setActiveTab={setActiveTab} />}
          {activeTab === "features" && <Features setActiveTab={setActiveTab} />}
          {activeTab === "lifi" && (
            <div className="space-y-6 animate-fade-in">
              <div className="bg-[var(--app-card-bg)] backdrop-blur-md rounded-xl shadow-lg border border-[var(--app-card-border)] overflow-hidden transition-all hover:shadow-xl p-5">
                <h3 className="text-lg font-medium text-[var(--app-foreground)] mb-4">
                  LiFi Cross-Chain Bridge
                </h3>
                <Widget />
                <Button 
                  variant="outline" 
                  onClick={() => setActiveTab("home")}
                  className="mt-4"
                >
                  Back to Home
                </Button>
              </div>
            </div>
          )}
        </main>

        <nav className="mt-4 flex justify-center space-x-4">
          <Button
            variant={activeTab === "home" ? "primary" : "ghost"}
            size="sm"
            onClick={() => setActiveTab("home")}
          >
            Home
          </Button>
          <Button
            variant={activeTab === "features" ? "primary" : "ghost"}
            size="sm"
            onClick={() => setActiveTab("features")}
          >
            Features
          </Button>
          <Button
            variant={activeTab === "lifi" ? "primary" : "ghost"}
            size="sm"
            onClick={() => setActiveTab("lifi")}
          >
            LiFi
          </Button>
        </nav>

        <footer className="mt-2 pt-4 flex justify-center">
          <Button
            variant="ghost"
            size="sm"
            className="text-[var(--ock-text-foreground-muted)] text-xs"
            onClick={() => openUrl("https://base.org/builders/minikit")}
          >
            Built on Base with MiniKit
          </Button>
        </footer>
      </div>
    </div>
  );
}

export default function DemoPage() {
  return (
    <ClientOnly fallback={<div className="flex justify-center items-center min-h-screen">Loading...</div>}>
      <DemoPageContent />
    </ClientOnly>
  );
}

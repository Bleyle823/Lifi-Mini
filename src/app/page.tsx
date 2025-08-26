import { Widget } from "@/components/Widget";
import { WidgetEvents } from "@/components/WidgetEvents";

export default function IndexPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <WidgetEvents />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center text-gray-900">
            LiFi Bridge
          </h1>
          <p className="text-lg text-gray-600 mb-8 text-center">
            Cross-chain bridge for seamless token transfers
          </p>
          <Widget />
        </div>
      </main>
    </div>
  );
}

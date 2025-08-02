import {
  Bell,
  Coins,
  Gift,
  Monitor,
  QrCode,
  Settings,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  init,
  Button as BitcoinConnectButton,
  WebLNProviders,
} from "@getalby/bitcoin-connect-react";
import { useSettingsStore } from "@/state/useSettingsState";
init({
  appName: "NWC Screensaver",
  showBalance: false,
  filters: ["nwc"],
  providerConfig: {
    nwc: {
      authorizationUrlOptions: {
        requestMethods: ["get_info"],
        notificationTypes: ["payment_received"],
      },
    },
  },
});

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Zap className="h-8 w-8 text-orange-500" />
            <span className="text-2xl font-bold text-slate-900">
              NWC Screensaver
            </span>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-4">
            <Zap className="h-4 w-4 mr-1" />
            Powered by Nostr Wallet Connect
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            Turn Your Screen Into a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
              Payment Display
            </span>
          </h1>

          <p className="text-xl text-slate-600 mb-16 max-w-2xl mx-auto leading-relaxed">
            Connect your NWC-enabled wallet and transform any screen into a
            beautiful, real-time payment notification display with customizable
            animations and sounds.
          </p>

          <CTA />
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20 pt-8 ">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Everything You Need for Payment Notifications
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A complete solution for displaying Bitcoin payments with style and
            customization
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="border-2  transition-colors">
            <CardHeader>
              <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Coins className="h-6 w-6 text-orange-600" />
              </div>
              <CardTitle>Real-Time Payment Display</CardTitle>
              <CardDescription className="text-slate-600">
                Instantly display payment amounts and optional messages when
                payments are received through your NWC wallet
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2  transition-colors">
            <CardHeader>
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Bell className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle>Audio Notifications</CardTitle>
              <CardDescription className="text-slate-600">
                Customizable sound alerts with multiple audio options to notify
                you of incoming payments
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2  transition-colors">
            <CardHeader>
              <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Gift className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle>Payment Animations</CardTitle>
              <CardDescription className="text-slate-600">
                Eye-catching animations and optional random GIF displays to
                celebrate each payment received
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2  transition-colors">
            <CardHeader>
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Monitor className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle>Screensaver Options</CardTitle>
              <CardDescription className="text-slate-600">
                Configurable screensaver modes to keep your display active and
                engaging while waiting for payments
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2  transition-colors">
            <CardHeader>
              <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <QrCode className="h-6 w-6 text-indigo-600" />
              </div>
              <CardTitle>QR Code Display</CardTitle>
              <CardDescription className="text-slate-600">
                Show your payment QR code prominently for easy scanning and
                payment collection
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2  transition-colors">
            <CardHeader>
              <div className="h-12 w-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Settings className="h-6 w-6 text-red-600" />
              </div>
              <CardTitle>Notification Queueing</CardTitle>
              <CardDescription className="text-slate-600">
                Smart queueing system to handle multiple payments gracefully
                without missing any notifications
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
        <div className="flex items-center justify-center mt-16">
          <CTA />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-orange-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Simple Setup, Powerful Results
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Get up and running in minutes with your NWC-enabled wallet
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="h-16 w-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Connect Your Wallet
              </h3>
              <p className="text-slate-600">
                Link your NWC-enabled Bitcoin wallet to start receiving
                real-time payment notifications
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Customize Your Display
              </h3>
              <p className="text-slate-600">
                Configure animations, sounds, screensaver options, and
                notification preferences
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Start Receiving</h3>
              <p className="text-slate-600">
                Share your QR code and watch as payments appear with beautiful
                animations and sounds
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-16">
          <CTA />
        </div>
      </section>
    </div>
  );
}

function CTA() {
  return (
    <div
      className="animate-pulse"
      style={{
        filter: "drop-shadow(0px 0px 20px #0000ffaa)",
      }}
    >
      <BitcoinConnectButton
        onConnected={(providerConfig) => {
          if (providerConfig instanceof WebLNProviders.NostrWebLNProvider) {
            const nostrWalletConnectUrl =
              providerConfig.client.getNostrWalletConnectUrl(true);
            setTimeout(() => {
              useSettingsStore
                .getState()
                .setNostrWalletConnectUrl(nostrWalletConnectUrl);
            }, 3000 /* wait for bitcoin connect modal to close */);
          }
        }}
      />
    </div>
  );
}

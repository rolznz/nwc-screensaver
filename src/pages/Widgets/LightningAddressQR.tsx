import type { WidgetProps } from "@/lib/types";
import { ZapIcon } from "lucide-react";
import QRCode from "react-qr-code";

export function LightningAddressQR({ lightningAddress }: WidgetProps) {
  if (!lightningAddress) {
    return (
      <div className="w-64 h-64 bg-white">
        <p>No lightning address found</p>
      </div>
    );
  }
  return (
    <div className="absolute bottom-4 right-4">
      <div className="flex gap-2 items-center justify-center">
        <p className="text-center text-primary-foreground font-semibold text-sm">
          SCAN TO PAY
        </p>
        <ZapIcon className="w-4 h-4 text-primary-foreground" />
      </div>
      <div className="w-64 h-64 bg-white p-4 rounded-lg mt-2">
        <QRCode
          value={lightningAddress}
          size={256}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          viewBox={`0 0 256 256`}
        />
      </div>
    </div>
  );
}

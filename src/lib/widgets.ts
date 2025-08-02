import { ExchangeRate } from "@/pages/Widgets/ExchangeRate";
import { LightningAddressQR } from "@/pages/Widgets/LightningAddressQR";

export const widgets = {
  exchangerate: {
    label: "Exchange Rate",
    component: ExchangeRate,
  },
  qrcode: {
    label: "Lightning Address QR",
    component: LightningAddressQR,
  },
};

export const widgetEntries = Object.entries(widgets);

import type { Background, NotificationElement, Widget } from "@/lib/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SettingsState {
  readonly nostrWalletConnectUrl?: string;
  setNostrWalletConnectUrl: (nostrWalletConnectUrl: string | undefined) => void;
  readonly background: Background;
  setBackground: (background: Background) => void;
  readonly notificationElements: NotificationElement[];
  setNotificationElements: (elements: NotificationElement[]) => void;
  readonly widgets: Widget[];
  setWidgets: (widgets: Widget[]) => void;
  readonly fiatCurrency: string;
  setFiatCurrency: (fiatCurrency: string) => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      fiatCurrency: "USD",
      setFiatCurrency: (fiatCurrency) => set(() => ({ fiatCurrency })),
      nostrWalletConnectUrl: undefined,
      setNostrWalletConnectUrl: (nostrWalletConnectUrl) =>
        set(() => ({ nostrWalletConnectUrl })),
      background: "stars",
      setBackground: (background) => set(() => ({ background })),
      notificationElements: ["textToSpeech", "bigText", "zapconfetti"],
      setNotificationElements: (notificationElements) =>
        set(() => ({ notificationElements })),
      widgets: ["qrcode", "exchangerate"],
      setWidgets: (widgets) => set(() => ({ widgets })),
    }),
    {
      name: "settings-storage",
    }
  )
);

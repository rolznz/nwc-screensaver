import { useSettingsStore } from "@/state/useSettingsState";
import { fiat } from "@getalby/lightning-tools";
import React from "react";
export function ExchangeRate() {
  const [fiatValue, setFiatValue] = React.useState(0);
  const currency = useSettingsStore((store) => store.fiatCurrency);
  React.useEffect(() => {
    const updateFiatValue = async () => {
      try {
        const _fiatValue = await fiat.getFiatValue({
          satoshi: 100_000_000,
          currency,
        });

        setFiatValue(Math.ceil(_fiatValue));
      } catch (e) {
        console.error(e);
        setFiatValue(0);
      }
    };
    updateFiatValue();
    const interval = setInterval(() => {
      updateFiatValue();
    }, 10000);
    return () => clearInterval(interval);
  }, [currency]);

  if (!fiatValue) {
    return null;
  }

  return (
    <div className="absolute top-4 left-0 right-0">
      <div className="flex gap-2 items-center justify-center">
        <p className="text-center text-primary-foreground font-semibold text-sm">
          1 BTC = {new Intl.NumberFormat().format(fiatValue)} {currency}
        </p>
      </div>
    </div>
  );
}

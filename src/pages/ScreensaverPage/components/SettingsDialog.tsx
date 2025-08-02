import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { BackgroundPicker } from "./BackgroundPicker";
import { NotificationElementsPicker } from "./NotificationElementsPicker";
import { Button } from "@/components/ui/button";
import { disconnect } from "@getalby/bitcoin-connect-react";
import { WidgetsPicker } from "./WidgetsPicker";
import { useSettingsStore } from "@/state/useSettingsState";
import { Input } from "@/components/ui/input";

export function SettingsDialog({
  isOpen,
  setOpen,
  sendTestNotification,
}: {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
  sendTestNotification: () => void;
}) {
  const { fiatCurrency, setFiatCurrency } = useSettingsStore();
  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Screensaver Settings</DialogTitle>
          <DialogDescription>
            Make changes to your screensaver display here.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-2">
            <div className="grid gap-3">
              <Label htmlFor="background">Background</Label>
              <BackgroundPicker />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="fiat-currency">Fiat currency</Label>
              <Input
                id="fiat-currency"
                name="fiat-currency"
                value={fiatCurrency}
                onChange={(e) => setFiatCurrency(e.target.value)}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col gap-3 items-start">
              <Label htmlFor="background">Notification Elements</Label>
              <NotificationElementsPicker />
            </div>
            <div className="flex flex-col gap-3 items-start">
              <Label htmlFor="background">Widgets</Label>
              <WidgetsPicker />
            </div>
          </div>
          <div className="grid gap-3">
            <Button
              onClick={() => {
                setOpen(false);
                setTimeout(() => {
                  sendTestNotification();
                }, 100);
              }}
            >
              Send Test Notification
            </Button>
            <div className="flex gap-2">
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => {
                  try {
                    if (!document.fullscreenElement) {
                      document.documentElement.requestFullscreen();
                    } else {
                      document.exitFullscreen();
                    }
                  } catch (error) {
                    console.error(error);
                    alert("Failed to toggle fullscreen mode. Try F11 instead");
                  }
                }}
              >
                Toggle Fullscreen
              </Button>
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => {
                  disconnect();
                  useSettingsStore
                    .getState()
                    .setNostrWalletConnectUrl(undefined);
                }}
              >
                Log out
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

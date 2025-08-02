import { Button } from "@/components/ui/button";
import { CogIcon } from "lucide-react";
import React from "react";
import { SettingsDialog } from "./SettingsDialog";

const HIDE_BUTTON_DELAY = 5000;

export function SettingsButton({
  sendTestNotification,
}: {
  sendTestNotification: () => void;
}) {
  const [settingsModalOpen, setSettingsModalOpen] = React.useState(true);
  const [lastMouseMove, setLastMouseMove] = React.useState(0);
  const [now, setNow] = React.useState(Date.now());

  React.useEffect(() => {
    const interval = setInterval(() => {
      setNow(Date.now());
    }, 100);
    return () => clearInterval(interval);
  });
  React.useEffect(() => {
    const eventListener = () => {
      setLastMouseMove(Date.now());
    };
    document.addEventListener("mousemove", eventListener);
    document.addEventListener("touchstart", eventListener);
    eventListener();
    return () => {
      document.removeEventListener("mousemove", eventListener);
      document.removeEventListener("touchstart", eventListener);
    };
  }, []);

  return (
    <>
      {!settingsModalOpen && lastMouseMove > now - HIDE_BUTTON_DELAY && (
        <Button
          variant="secondary"
          className="fixed top-4 right-4 z-10 m-0"
          style={{ opacity: 1 - (now - lastMouseMove) / HIDE_BUTTON_DELAY }}
          onClick={() => {
            setSettingsModalOpen((current) => !current);
          }}
        >
          <CogIcon className="w-4 h-4" />
        </Button>
      )}
      <SettingsDialog
        isOpen={settingsModalOpen}
        setOpen={setSettingsModalOpen}
        sendTestNotification={sendTestNotification}
      />
    </>
  );
}

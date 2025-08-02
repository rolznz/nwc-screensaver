import React from "react";
import { nwc } from "@getalby/sdk";
import { SettingsButton } from "./components/SettingsButton";
import { useSettingsStore } from "@/state/useSettingsState";
import { backgrounds } from "@/lib/backgrounds";
import { notificationElements } from "@/lib/notificationElements";
import { widgets } from "@/lib/widgets";

let notificationTime = 0;
const NOTIFICATION_TIMEOUT = 5000;

export function ScreensaverPage() {
  const {
    background,
    notificationElements: selectedNotificationElements,
    widgets: selectedWidgets,
  } = useSettingsStore();
  const nostrWalletConnectUrl = useSettingsStore(
    (store) => store.nostrWalletConnectUrl
  );
  const [notificationQueue, setNotificationQueue] = React.useState<
    nwc.Nip47Notification[]
  >([]);
  const [nwcClient, setNwcClient] = React.useState<nwc.NWCClient>();

  const onNotification = React.useCallback(
    (notification: nwc.Nip47Notification) => {
      setNotificationQueue((current) => {
        if (!current.length) {
          notificationTime = Date.now();
        }
        return [...current, notification];
      });
    },
    []
  );

  React.useEffect(() => {
    const interval = setInterval(() => {
      setNotificationQueue((current) => {
        if (notificationTime > Date.now() - NOTIFICATION_TIMEOUT) {
          return current;
        }
        if (!current.length) {
          return current;
        }

        notificationTime = Date.now();
        return current.slice(1);
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const sendTestNotification = React.useCallback(() => {
    onNotification({
      notification: {
        amount: 21000,
        description: "Example payment description",
      } as nwc.Nip47Notification["notification"],
      notification_type: "payment_received",
    });
  }, [onNotification]);

  React.useEffect(() => {
    if (!nostrWalletConnectUrl) {
      return;
    }
    const _nwcClient = new nwc.NWCClient({
      nostrWalletConnectUrl,
    });
    _nwcClient.subscribeNotifications(onNotification, ["payment_received"]);
    setNwcClient(_nwcClient);
    return () => {
      _nwcClient.close();
    };
  }, [nostrWalletConnectUrl, onNotification]);

  const BackgroundComponent = backgrounds[background].component;
  const notificationElementComponents = React.useMemo(
    () =>
      selectedNotificationElements.map(
        (element) => notificationElements[element]
      ),
    [selectedNotificationElements]
  );

  const widgetComponents = React.useMemo(
    () => selectedWidgets.map((element) => widgets[element]),
    [selectedWidgets]
  );

  if (!nwcClient) {
    return null;
  }

  return (
    <>
      <BackgroundComponent />
      <SettingsButton sendTestNotification={sendTestNotification} />
      {widgetComponents.map((widget) => (
        <widget.component
          key={widget.label}
          lightningAddress={nwcClient.lud16}
        />
      ))}
      {!!notificationQueue.length &&
        notificationElementComponents.map((element) => (
          <element.component
            key={element.label}
            notification={notificationQueue[0]}
          />
        ))}
    </>
  );
}

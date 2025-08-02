import LandingPage from "./pages/LandingPage";
import { ScreensaverPage } from "./pages/ScreensaverPage/ScreensaverPage";
import { useSettingsStore } from "./state/useSettingsState";

export function App() {
  const nostrWalletConnectUrl = useSettingsStore(
    (store) => store.nostrWalletConnectUrl
  );
  if (nostrWalletConnectUrl) {
    return <ScreensaverPage />;
  }
  return <LandingPage />;
}

import { nwc } from "@getalby/sdk";
import type { backgrounds } from "./backgrounds";
import type { notificationElements } from "./notificationElements";
import type { widgets } from "./widgets";

export type NotificationElementProps = {
  notification: nwc.Nip47Notification;
};

export type WidgetProps = {
  lightningAddress?: string;
};

export type Background = keyof typeof backgrounds;
export type NotificationElement = keyof typeof notificationElements;
export type Widget = keyof typeof widgets;

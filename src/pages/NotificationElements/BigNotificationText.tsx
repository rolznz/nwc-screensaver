import type { NotificationElementProps } from "@/lib/types";

export function BigNotificationText({
  notification,
}: NotificationElementProps) {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 text-white w-full h-full flex flex-col items-center justify-center gap-4">
      <p className="text-7xl">
        {Math.floor(notification.notification.amount / 1000)} sats
      </p>
      {notification.notification.description && (
        <p className="text-xl">{notification.notification.description}</p>
      )}
    </div>
  );
}

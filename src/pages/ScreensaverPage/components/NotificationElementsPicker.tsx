"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { notificationElementEntries } from "@/lib/notificationElements";
import type { NotificationElement } from "@/lib/types";
import { useSettingsStore } from "@/state/useSettingsState";
import { Label } from "@radix-ui/react-label";

export function NotificationElementsPicker() {
  const { notificationElements, setNotificationElements } = useSettingsStore();

  return notificationElementEntries.map((entry) => (
    <div className="flex gap-2 items-center" key={entry[0]}>
      <Checkbox
        id={entry[0]}
        name={entry[0]}
        checked={notificationElements.includes(entry[0] as NotificationElement)}
        onCheckedChange={(checked) => {
          const newNotificationElements = notificationElements.filter(
            (n) => n !== (entry[0] as NotificationElement)
          );
          if (checked) {
            newNotificationElements.push(entry[0] as NotificationElement);
          }
          setNotificationElements(newNotificationElements);
        }}
      />
      <Label htmlFor={entry[0]}>{entry[1].label}</Label>
    </div>
  ));
}

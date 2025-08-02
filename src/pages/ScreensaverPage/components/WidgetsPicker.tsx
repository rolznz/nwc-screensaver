"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { widgetEntries } from "@/lib/widgets";
import type { Widget } from "@/lib/types";
import { useSettingsStore } from "@/state/useSettingsState";
import { Label } from "@radix-ui/react-label";

export function WidgetsPicker() {
  const { widgets, setWidgets } = useSettingsStore();

  return widgetEntries.map((entry) => (
    <div className="flex gap-2 items-center" key={entry[0]}>
      <Checkbox
        id={entry[0]}
        name={entry[0]}
        checked={widgets.includes(entry[0] as Widget)}
        onCheckedChange={(checked) => {
          const newWidgets: Widget[] = widgets.filter(
            (n) => n !== (entry[0] as Widget)
          );
          if (checked) {
            newWidgets.push(entry[0] as Widget);
          }
          setWidgets(newWidgets);
        }}
      />
      <Label htmlFor={entry[0]}>{entry[1].label}</Label>
    </div>
  ));
}

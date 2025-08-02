import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { backgroundEntries, backgrounds } from "@/lib/backgrounds";
import type { Background } from "@/lib/types";
import { useSettingsStore } from "@/state/useSettingsState";

export function BackgroundPicker() {
  const [open, setOpen] = React.useState(false);
  const { background, setBackground } = useSettingsStore();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          id="background"
          name="background"
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between"
        >
          {background ? backgrounds[background]?.label : "Select background..."}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search background..." className="h-9" />
          <CommandList>
            <CommandEmpty>No background found.</CommandEmpty>
            <CommandGroup>
              {backgroundEntries.map((entry) => (
                <CommandItem
                  key={entry[0]}
                  value={entry[0]}
                  onSelect={(currentValue) => {
                    setBackground(currentValue as Background);
                    setOpen(false);
                  }}
                >
                  {entry[1].label}
                  <Check
                    className={cn(
                      "ml-auto",
                      background === entry[0] ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

import type { NotificationElementProps } from "@/lib/types";
import React from "react";
import confetti from "canvas-confetti";

export function ZapConfetti({ notification }: NotificationElementProps) {
  React.useEffect(() => {
    const scalar = 2;
    const zapShape = confetti.shapeFromText({ text: "⚡", scalar });

    confetti({
      shapes: [zapShape],
      scalar,
      spread: 65,
      startVelocity: 90,
      origin: { x: 0.5, y: 1 },
      gravity: 1.5,
      particleCount: 100,
    });
  }, [notification]);
  return null;
}

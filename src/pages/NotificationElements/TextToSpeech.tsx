import type { NotificationElementProps } from "@/lib/types";
import type { nwc } from "@getalby/sdk";
import React from "react";

let lastNotification: nwc.Nip47Notification | undefined;
let voices: SpeechSynthesisVoice[] | undefined;
speechSynthesis.onvoiceschanged = populateVoiceList;

function populateVoiceList() {
  voices = speechSynthesis.getVoices();
  console.log(voices.filter((v) => v.lang === "en-US"));
}

export function TextToSpeech({ notification }: NotificationElementProps) {
  React.useEffect(() => {
    if (!voices) {
      alert("Voices not ready");
      return;
    }
    if (lastNotification !== notification) {
      lastNotification = notification;
      let text =
        Math.floor(notification.notification.amount / 1000) + " satoshis";
      if (notification.notification.description) {
        text += ` - ${notification.notification.description}`;
      }
      const utterance = new SpeechSynthesisUtterance(text);
      const voice = voices.find((voice) => voice.lang === "en-US");
      if (!voice) {
        alert("voice not found");
        return;
      }
      utterance.voice = voice;
      speechSynthesis.speak(utterance);
    }
  }, [notification]);
  return null;
}

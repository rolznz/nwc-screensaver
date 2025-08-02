import { TextToSpeech } from "@/pages/NotificationElements/TextToSpeech";
import { BigNotificationText } from "@/pages/NotificationElements/BigNotificationText";
import { ZapConfetti } from "@/pages/NotificationElements/ZapConfetti";

export const notificationElements = {
  zapconfetti: {
    label: "Zap Confetti",
    component: ZapConfetti,
  },
  textToSpeech: {
    label: "Text to Speech",
    component: TextToSpeech,
  },
  bigText: {
    label: "Big Text",
    component: BigNotificationText,
  },
};

export const notificationElementEntries = Object.entries(notificationElements);

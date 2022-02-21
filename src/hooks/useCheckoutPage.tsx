import { useState } from "react";

export const useCheckoutPage = (step: number) => {
  const [progress, setProgress] = useState("");
  const [buttonProgress, setButtonProgress] = useState("");

  if (step === 0) {
    setButtonProgress("Shipping");
    setProgress("contact");
  }

  if (step === 1) {
    setButtonProgress("Payment");
    setProgress("shipping");
  }

  if (step === 2) {
    setButtonProgress("Submit");
    setProgress("payment");
  }

  if (step === 3) {
    setButtonProgress("");
    setProgress("submit");
  }

  return { buttonProgress, progress };
};

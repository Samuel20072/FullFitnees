import { useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

type Props = {
  onResult: (text: string) => void;
};

export default function QRScanner({ onResult }: Props) {
  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "reader", // ID del div
      {
        fps: 10,
        qrbox: 250,
      },
      false // ← este es el argumento 'verbose'
    );

    scanner.render(
      (decodedText) => {
        onResult(decodedText);
        scanner.clear().catch(console.error);
      },
      (error) => {
        console.warn("Error escaneando:", error);
      }
    );

    return () => {
      scanner.clear().catch(console.error);
    };
  }, [onResult]);

  return <div id="reader" className="w-full mx-auto" />;
}

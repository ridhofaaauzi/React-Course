import React, { useState } from "react";
import QRCode from "react-qr-code";

const QRGenerator = () => {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  const handleGenerateCode = () => {
    setQrCode(input);
    setInput("");
  };

  return (
    <>
      <div>
        <h1>QR Code Generator</h1>
        <div>
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            name="qr-code"
            value={input}
            placeholder="Enter Your Value Here"
          />
          <button
            disabled={input && input.trim() !== "" ? false : true}
            onClick={handleGenerateCode}
          >
            Generate
          </button>
        </div>
        <div>
          <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
        </div>
      </div>
    </>
  );
};

export default QRGenerator;

"use client";

import * as Ably from "ably";
import ChatBox from "./chat-box.jsx";

export default function Chat() {
  const client = new Ably.Realtime({
    key: "FgYvKA.tuuEpA:SEsYyfZBl_xhHHStJF-39h0DB3NJJ_TFYAdbio8F-iY",
  });
  return (
    <div className="flex flex-col h-full">
        <ChatBox />
    </div>
  );
}
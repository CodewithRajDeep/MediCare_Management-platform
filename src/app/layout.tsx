"use client";
import "jsvectormap/dist/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/style.css";
import React, { useEffect, useState } from "react";
import { SessionProvider } from "next-auth/react";
import { UserProvider } from "@/app/context/UserContext";
import * as Ably from "ably";
import { AblyProvider, ChannelProvider } from "ably/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const client = new Ably.Realtime({
    key: "FgYvKA.tuuEpA:SEsYyfZBl_xhHHStJF-39h0DB3NJJ_TFYAdbio8F-iY",
  });
  return (
    <html lang="en">
      <head>
      <script src="/node_modules/@rdkit/rdkit/dist/RDKit_minimal.wasm"></script>
      </head>
      <body suppressHydrationWarning={true}>
        <SessionProvider>
          <UserProvider>
          <AblyProvider client={client}>
            <ChannelProvider channelName="chat-group1">
            {children}
            </ChannelProvider>
            </AblyProvider>
          </UserProvider>
        </SessionProvider>
        </body>
    </html>
  );
}

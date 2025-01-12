"use client";
import "jsvectormap/dist/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/style.css";
import React, { useEffect, useState } from "react";
import { SessionProvider } from "next-auth/react";
import { UserProvider } from "@/app/context/UserContext";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
      <script src="/node_modules/@rdkit/rdkit/dist/RDKit_minimal.wasm"></script>
      </head>
      <body suppressHydrationWarning={true}>
        <SessionProvider>
          <UserProvider>
            {children}
          </UserProvider>
        </SessionProvider>
        </body>
    </html>
  );
}

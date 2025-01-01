import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "MediCare: Research Discovery Management Platform",
  description: "A scalable, secure drug discovery management platform leveraging NEXT.js, MongoDB, NVIDIA models, and SMILE technology for molecule generation, user collaboration, and real-time insights for MediCare.",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <p>Welcome to MediCare!</p>
      </DefaultLayout>
    </>
  );
}

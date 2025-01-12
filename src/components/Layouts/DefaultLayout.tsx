"use client";

import {useState, useLayoutEffect} from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";
import { useSession } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";
export default function DefaultLayout({
children,
}:{
    children: React.ReactNode;
}){ 
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();
    const { status } = useSession(); 
    const publicRoutes = [
        "/auth-page/signin",
        "/auth-page/signup",
        "/verify-email",
        "/reset-password",
        "/forgot-password",
      ];
      useLayoutEffect(() => {
        if(status === 'unauthenticated' && !publicRoutes.includes(pathname)){
            router.push("/auth-page/signin");
        }
      }, [status, router, pathname]);
    return(
        <div  className="flex">
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
          <div className="relative flex flex-1 flex-col lg:ml-72.5">
            <Header  sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <main>
                <div className="mx-auto max-w-screen-2xl p-4 dark:bg-[#121212] md:p-6 2xl:p-10">
                    {children}
                </div>
            </main>
          </div>
        </div>
    )
}
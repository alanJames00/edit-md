"use client"
import React from "react";
import PageHeader from "../components/page-header";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "@/components/theme-provider";

export default function Layout( { children } : { children: React.ReactNode}) {

    return (
        <RecoilRoot>
            <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
        <div>  
            <PageHeader />
            
            <div>
                {children}
            </div>
        </div>
            </ThemeProvider>
        </RecoilRoot>
    );
}
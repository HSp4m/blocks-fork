import "@/app/globals.css";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import Script from "next/script";

export default function BlockLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex flex-1 flex-col">
        <div className="mx-auto w-full max-w-screen-xl flex-1 border-border border-r-1 border-l-1 border-dotted px-8">
          <div className="min-h-[calc(100%-2rem)] w-full pt-10 pb-20">
            {children}
          </div>
        </div>
      </div>
      <Footer />

      {process.env.NODE_ENV === "production" && (
        <Script
          async
          data-website-id="1671be23-4bb0-43b1-9632-962a463265e8"
          src="https://analytics.duncan.land/script.js"
        />
      )}
    </div>
  );
}

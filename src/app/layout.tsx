import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Cloudfolio | Sanved — Cloud Engineer Portfolio",
  description:
    "Cloudfolio is my personal portfolio showcasing cloud engineering projects, AWS deployments, CI/CD pipelines, and DevOps experience.",
  metadataBase: new URL("https://www.sslinfo.xyz"),
  openGraph: {
    title: "Cloudfolio | Sanved — Cloud Engineer Portfolio",
    description:
      "A production-grade cloud portfolio showcasing AWS, CloudFront, S3, CI/CD pipelines, and real-world cloud engineering projects.",
    url: "https://www.sslinfo.xyz",
    siteName: "Cloudfolio | Sanved",
    images: [
      {
        url: "https://www.sslinfo.xyz/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cloudfolio | Sanved – Cloud Engineer Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloudfolio | Sanved — Cloud Engineer Portfolio",
    description:
      "AWS-powered cloud portfolio with CI/CD, CloudFront, S3, and secure HTTPS deployment.",
    images: ["https://www.sslinfo.xyz/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ✅ FAVICONS (FORCE BLUE LOGO) */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* ✅ FONTS */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@500;700&family=Source+Code+Pro&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className={cn("min-h-screen bg-background font-body antialiased")}>
        <ThemeProvider>
          <div className="relative flex min-h-dvh flex-col bg-background">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

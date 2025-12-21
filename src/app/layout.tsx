import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sslinfo.xyz"),

  title: "Cloudfolio | Sanved — Cloud Engineer Portfolio",
  description:
    "Cloudfolio is my cloud engineering portfolio showcasing AWS, S3, CloudFront, CI/CD pipelines, and real-world DevOps projects.",

  openGraph: {
    title: "Cloudfolio | Sanved",
    description:
      "A production-grade cloud portfolio built using AWS S3, CloudFront, HTTPS, and CI/CD.",
    url: "https://www.sslinfo.xyz",
    siteName: "Cloudfolio | Sanved",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cloudfolio | Sanved – Cloud Engineer Portfolio",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Cloudfolio | Sanved",
    description:
      "AWS-powered cloud portfolio with S3, CloudFront, CI/CD, and secure HTTPS deployment.",
    images: ["/og-image.png"],
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
        {/* Fonts only — favicon is handled automatically by Next.js App Router */}
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

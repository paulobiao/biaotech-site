import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  metadataBase: new URL("https://biaotech.dev"),
  title: {
    default: "Paulo Fernandes Biao - Professional Portfolio",
    template: "%s | Paulo Fernandes Biao",
  },
  description:
    "Professional portfolio of Paulo Fernandes Biao - Innovation in SecureBank™, HealthGuard™, and PhysiDigital™ frameworks. Academic and technology leadership.",
  keywords: [
    "Paulo Fernandes Biao",
    "SecureBank",
    "HealthGuard",
    "PhysiDigital",
    "Technology Innovation",
    "Academic Research",
  ],
  authors: [{ name: "Paulo Fernandes Biao" }],
  creator: "Paulo Fernandes Biao",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Paulo Fernandes Biao - Professional Portfolio",
    description:
      "Professional portfolio showcasing innovation in SecureBank™, HealthGuard™, and PhysiDigital™ frameworks.",
    siteName: "Paulo Fernandes Biao Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Paulo Fernandes Biao Professional Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paulo Fernandes Biao - Professional Portfolio",
    description:
      "Professional portfolio showcasing innovation in technology frameworks.",
    images: ["https://www.biaotech.dev/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-placeholder",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

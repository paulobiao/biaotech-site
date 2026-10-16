import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import PortfolioShell from "@/components/shell/portfolio-shell";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://biaotech.dev"),
  title: {
    default: "Paulo Biao — Systems & Cloud Analyst",
    template: "%s | Paulo Biao",
  },
  description:
    "Systems & Cloud Analyst. 15 years with electronic security systems in Brazil (CCTV, alarms, monitoring and networked sites for banking environments), now building software and cloud platforms for intelligent infrastructure. Postgraduate specialization in Cloud Computing (PUC Minas). Peer reviewer, IEEE Internet of Things Journal.",
  keywords: [
    "Paulo Biao",
    "systems and cloud analyst",
    "cloud computing",
    "AWS",
    "electronic security systems",
    "CCTV monitoring",
    "IoT reliability",
    "distributed systems",
    "IEEE peer reviewer",
  ],
  authors: [{ name: "Paulo Biao" }],
  creator: "Paulo Biao",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Paulo Biao — Systems & Cloud Analyst",
    description:
      "15 years with electronic security systems in Brazil, now building software and cloud platforms for intelligent infrastructure. Postgraduate specialization in Cloud Computing (PUC Minas). Peer reviewer, IEEE Internet of Things Journal.",
    siteName: "Paulo Biao — biaotech.dev",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Paulo Biao — Systems & Cloud Analyst",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paulo Biao — Systems & Cloud Analyst",
    description:
      "15 years with electronic security systems in Brazil, now building software and cloud platforms for intelligent infrastructure. Peer reviewer, IEEE Internet of Things Journal.",
    images: ["/og-image.png"],
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
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
          <PortfolioShell>{children}</PortfolioShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
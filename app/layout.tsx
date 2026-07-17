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
    default: "Paulo Biao — Systems Analyst | Cloud Computing",
    template: "%s | Paulo Biao",
  },
  description:
    "Systems analyst with a decade of field experience in electronic security systems (CCTV, alarms, and monitoring for banking environments), now focused on cloud computing. Graduate student in Cloud Computing at PUC Minas. Peer reviewer, IEEE Internet of Things Journal.",
  keywords: [
    "Paulo Biao",
    "systems analyst",
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
    title: "Paulo Biao — Systems Analyst | Cloud Computing",
    description:
      "Systems analyst with a decade of field experience in electronic security systems, now focused on cloud computing. Graduate student in Cloud Computing at PUC Minas. Peer reviewer, IEEE Internet of Things Journal.",
    siteName: "Paulo Biao — biaotech.dev",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Paulo Biao — Systems Analyst | Cloud Computing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paulo Biao — Systems Analyst | Cloud Computing",
    description:
      "Systems analyst with a decade of field experience in electronic security systems, now focused on cloud computing. Peer reviewer, IEEE Internet of Things Journal.",
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
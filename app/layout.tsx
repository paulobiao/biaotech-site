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
    default: "Paulo Fernandes Bião — Banking Security & Cloud Infrastructure Engineer",
    template: "%s | Paulo Fernandes Bião",
  },
  description:
    "Banking Security & Cloud Infrastructure Engineer with 15+ years securing financial infrastructure, IoT ecosystems, and cloud-native environments. Creator of SecureBank™, HealthGuard™, and PhysiDigital™. IEEE IoT Journal Peer Reviewer. Open to US opportunities.",
  keywords: [
    "Paulo Fernandes Biao",
    "banking security engineer",
    "cloud security engineer",
    "cybersecurity South Florida",
    "IoT security",
    "cloud infrastructure security",
    "SecureBank framework",
    "HealthGuard framework",
    "PhysiDigital framework",
    "Zero Trust banking",
    "AWS security",
    "NIST PCI-DSS compliance",
    "IEEE IoT peer reviewer",
    "OWASP ASVS",
    "ISC2 certified cybersecurity",
    "EB-2 NIW cybersecurity",
  ],
  authors: [{ name: "Paulo Fernandes Bião" }],
  creator: "Paulo Fernandes Bião",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Paulo Fernandes Bião — Banking Security & Cloud Infrastructure Engineer",
    description:
      "15+ years securing financial infrastructure, IoT ecosystems, and cloud-native environments. Creator of SecureBank™, HealthGuard™, and PhysiDigital™ frameworks. IEEE IoT Journal Peer Reviewer. Open to US opportunities.",
    siteName: "Paulo Fernandes Bião — biaotech.dev",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Paulo Fernandes Bião — Banking Security & Cloud Infrastructure Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paulo Fernandes Bião — Banking Security & Cloud Infrastructure Engineer",
    description:
      "15+ years securing financial infrastructure, IoT, and cloud environments. Creator of SecureBank™, HealthGuard™, PhysiDigital™. IEEE IoT Peer Reviewer. Open to US roles.",
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

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Welth",
  description: "One stop Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/logo-sm.png" sizes="any" />
        </head>
        <body className={`${inter.className} relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50`}>
          <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,white,transparent)] pointer-events-none"></div>
          <div className="relative">
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />

          <footer className="bg-blue-50 py-12">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>&copy; {new Date().getFullYear()} Harsh Patare</p>
            </div>
          </footer>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}

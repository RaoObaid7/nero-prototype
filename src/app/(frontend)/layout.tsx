import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "NERO CMS — Prototype Reference Application",
  description: "A reusable publishing platform powered by Payload CMS v3 & Next.js App Router.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container" style={{ minHeight: "75vh", paddingTop: "2rem" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

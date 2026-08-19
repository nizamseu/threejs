import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "ThreeJS Showcase",
  description: "ThreeJS 3D scenes and experiences built with React Three Fiber",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen ">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}


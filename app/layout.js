import Header from "@/components/Header";
import { poppins } from "./font";
import "./globals.css";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "@/components/Error";

export const metadata = {
  title:
    "Frontend Developer & Web Designer Portfolio | Daniel | Startup | NextJS Design | UIUX Partner",
  description:
    "Explore the portfolio of [Your Name], a seasoned frontend developer and web designer specializing in crafting scalable, responsive, and conversion-optimized digital solutions. With expertise in user-centric design and cutting-edge technologies, I'm dedicated to bringing your digital vision to life. Discover how I can elevate your brand's online presence today.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} relative`}>
        {/* <ErrorBoundary fallback={<Error />}> */}
          <Header />
          {children}
        {/* </ErrorBoundary> */}
      </body>
    </html>
  );
}

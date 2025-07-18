import Script from "next/script";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css"

// Components
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export const metadata = {
  title: "Landing Page for Job Test",
  description: "Front End Web Developer | Web Developer | MERN Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Navbar />
        {children}
        <Footer />
      </body>

      <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.min.js" integrity="sha384-7qAoOXltbVP82dhxHAUje59V5r2YsVfBafyUDxEdApLPmcdhBPg1DKg1ERo0BZlK" crossorigin="anonymous"></Script>
    </html>
  );
}

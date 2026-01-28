import "./globals.scss";
import {Footer, Navbar} from "./Widgets";

export const metadata = {
  title: "Ilya Skipper",
  description: "Портфолио Илья Корявкин",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
      <Navbar/>
        {children}
      <Footer/>
      </body>
    </html>
  );
}

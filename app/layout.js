import "./globals.scss";
import {Navbar} from "@/app/Widgets";

export const metadata = {
  title: "Илья Корявкин",
  description: "Портфолио Илья Корявкин",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
      <Navbar/>
        {children}
      </body>
    </html>
  );
}

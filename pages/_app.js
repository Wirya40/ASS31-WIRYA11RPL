import "antd/dist/reset.css";
import "./globals.css"; // ✅ correct path

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

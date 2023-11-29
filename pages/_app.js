import '../styles/antd.css';
import '../styles/globals.css';
import "animate.css/animate.min.css";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
        }
        p, h1, h2, h3, h4, h5, h6 {
          margin: 0;
          padding: 0;
        }
      `}</style>
      <Component {...pageProps} />
    </div>
  );
}
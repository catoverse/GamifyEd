import Head from "next/head";

import "../styles/global.css";
import "swiper/css/bundle";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>GamifyED - Craft playful learning experiences</title>
        <meta property="og:image" content={"/thumbnail.png"} />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo-dark.svg" />
        <meta
          name="description"
          content="Apply gamification to your EdTech products with the help of GamifyEd Notion Template, a comprehensive research based gamification framework"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

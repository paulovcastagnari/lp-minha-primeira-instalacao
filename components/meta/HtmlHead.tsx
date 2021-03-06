import Head from "next/head";

interface HeadProps {
  title: string;
  description: string;
  ogImageUrl: string;
}

export const HtmlHead = (props: HeadProps): JSX.Element => {
  const { title, description, ogImageUrl } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        id="mvp"
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={process.env.NEXT_PUBLIC_BASE_URL} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
              (function (w, d, s, l, i) {
              w[l] = w[l] || [];
              w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
              var f = d.getElementsByTagName(s)[0],
              j = d.createElement(s),
              dl = l != "dataLayer" ? "&l=" + l : "";
              j.async = true;
              j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
              f.parentNode.insertBefore(j, f);
              })(window, document, "script", "dataLayer", "GTM-K23J2LS");
              `,
        }}
      />
    </Head>
  );
};

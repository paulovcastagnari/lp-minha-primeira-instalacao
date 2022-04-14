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
    </Head>
  );
};

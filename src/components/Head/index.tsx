import { APP_NAME } from "@src/constants/main";
import { NextSeo } from "next-seo";

interface Props {
  title?: string;
  subtitle?: string;
  description?: string;
  keywords?: string[];
  thumbnailUrl?: string;
  noIndex?: boolean;
  noFollow?: boolean;
}

const Head: React.FC<Props> = ({
  title,
  subtitle,
  description,
  keywords,
  thumbnailUrl,
  noIndex,
  noFollow,
}: Props) => {
  const finalTitle = title
    ? `${subtitle ? `${subtitle} - ` : ""}${title} | ${APP_NAME}`
    : APP_NAME;

  const finalThumbnailUrl = thumbnailUrl || "/images/open-graph-image.jpg";

  return (
    <NextSeo
      title={finalTitle}
      description={description}
      openGraph={{
        title: finalTitle,
        description: description,
        site_name: APP_NAME,
        images: [
          {
            url: finalThumbnailUrl,
            alt: finalTitle,
            type: "image/jpeg",
          },
        ],
      }}
      additionalMetaTags={[
        {
          property: "keywords",
          content: `creatos${
            keywords ? `, ${keywords.join(", ").toLowerCase()}` : ""
          }`,
        },
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1, maximum-scale=5, user-scalable=0",
        },
      ]}
      noindex={noIndex}
      nofollow={noFollow}
    />
  );
};

export default Head;

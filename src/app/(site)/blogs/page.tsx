import { getBlogs } from "@/src/lib/Storefront/getBlogs";
import Image from "next/image";

import React from "react";

const getData = async () => {
  const articles = await getBlogs();

  const articlesData = articles?.map(({ id, handle, title, image, content, excerpt, blog, authorV2 }) => {
    return {
      id,
      href: `/blogs/${handle}`,
      image,
      title,
      content,
      handle,
      excerpt,
      blog,
      authorV2
    };
  });

  return articlesData;
};

async function page() {
  const articles = await getData();
  console.log(articles);
  return (
    <>
    {/* <InnerBanner data={"Blogs"} /> */}
    <div className="container py-[50px]">
      <div className="flex gap-7">
        {articles?.map((data) => {
          return (
            <Image className="!w-[600px] !h-[250px]" src={data.image.url} alt={data.image.altText} width={666} height={401} />
          );
        })}
      </div>
      </div>
    </>
  );
}

export default page;

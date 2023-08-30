import { getProductsByCollection } from "@/src/lib/Storefront/getProducts";
import Image from "next/image";

import React from "react";

const getData = async () => {
  const allproducts = await getProductsByCollection(handle: string);

  const allproductsData = allproducts?.map(({ id, handle, title, image, content, excerpt, blog, authorV2 }) => {
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

  return allproductsData;
};

async function page() {
  const allproducts = await getData();
  console.log(allproducts);
  return (
    <>
    {/* <InnerBanner data={"Blogs"} /> */}
    <div className="container py-[50px]">
      <div className="flex gap-7">
        {allproducts?.map((data) => {
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

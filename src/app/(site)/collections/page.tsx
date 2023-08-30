// import Collection from "@/components/collection"
// import { LoadingSpinner } from "@/components/ui/LoadingSpinner"
// import { getCollections } from "@/lib/storefront/getCollections"
// import { Suspense } from "react"

// const getData = async () => {
//     const collections = await getCollections()

//     const collectionData = collections.map(({ id, handle, title, image }) => {
//         return {
//             id,
//             href: `/collections/${handle}`,
//             image,
//             title,
//         }
//     })

//     return collectionData
// }

// export default async function CollectionDirectoryPage() {
//     const collections = await getData()

//     return (
//         <Collection.Section>
//             <Collection.Heading collectionTitle="Collection Directory" />
//             <Collection.Grid>
//                 {collections.map(({ id, title, href, image }) => {
//                     return (
//                         <Collection.Card
//                             href={href}
//                             rounded
//                             key={id}
//                         >
//                             <Suspense fallback={<LoadingSpinner />}>
//                                 {image ? (
//                                     <Collection.Image
//                                         image={image}
//                                         title={title}
//                                     />
//                                 ) : (
//                                     <p className="flex flex-col text-center text-base font-bold">
//                                         <span>Collection</span>
//                                         <span>Image</span>
//                                     </p>
//                                 )}
//                                 <Collection.Title
//                                     title={title}
//                                     centered
//                                     rounded
//                                 />
//                             </Suspense>
//                         </Collection.Card>
//                     )
//                 })}
//             </Collection.Grid>
//         </Collection.Section>
//     )
// }


import React from 'react'

function page() {
  return (
    <div>Collection page</div>
  )
}

export default page
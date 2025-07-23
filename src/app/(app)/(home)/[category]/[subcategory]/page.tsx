import React from "react";

interface Props {
    params: Promise<{
        category: string
        subcategory: string
    }>
}
async function Page({ params }: Props) {
    const { category, subcategory } = await params;
    return (
        <div>
            Category: {category}  <br />
      </div>
  )
} 

export default Page;

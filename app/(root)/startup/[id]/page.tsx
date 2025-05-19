import { formatDate } from '@/lib/utils';
import { client } from '@/sanity/lib/client';
import { STARTUP_BY_ID_QUERY, STARTUPS_BY_AUTHOR_QUERY } from '@/sanity/lib/queries';
import { notFound } from 'next/navigation';
import React from 'react'

//export const experimental__ppr = true;

const page = async ({params}: {params: Promise<{id: string}>}) => {
    const id = (await params).id

    const post = await client.fetch(STARTUP_BY_ID_QUERY, { id })

    if(!post) return notFound();

  return (
    <>
    <section className="pink_container !min-h-[210px]">
        <p className="tag">{formatDate(post?._createdAt)}</p>

        <h1 className="Heading">{post.title}</h1>
        <p className="sub-heading !max-w-5xl">{post.description}</p>
    </section>

    <section className="section_container">
        <img 
        src={post.image} 
        alt="thumbnail"
        className="w-full h-auto mt-10 max-w-4xl mx-auto"
        />

        <div className="space-y-5" mt-10 max-w-4xl mx-auto>
            <div className="flex-between gap-5"></div>
        </div>
    </section>
    </>
  )
}

export default page
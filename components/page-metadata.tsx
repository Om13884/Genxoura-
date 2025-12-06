"use client"

import Head from "next/head"

interface PageMetadataProps {
  title: string
  description: string
}

export function PageMetadata({ title, description }: PageMetadataProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  )
}


"use client"

import HomePage from "./home-page"

export default function ClientPage({ recentPost, featuredEvent, featuredPosts }: { recentPost?: any, featuredEvent?: any, featuredPosts?: any[] }) {
  return <HomePage recentPost={recentPost} featuredEvent={featuredEvent} featuredPosts={featuredPosts} />
}
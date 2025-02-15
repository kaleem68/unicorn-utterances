import React from "react";
import { SEO } from "components/seo";
import { PostListHeader } from "./post-list-header";
import { PostList } from "components/post-card-list";
import { PostListProvider } from "constants/post-list-context";
import { Pagination } from "components/pagination";
import { FilterSearchBar } from "components/filter-search-bar";
import { siteMetadata } from "constants/site-config";
import { useRouter } from "next/router";
import { ListViewPosts } from "utils/fs/api";

interface PostListTemplateProps {
  numberOfPages: number;
  limitNumber: number;
  pageIndex: number;
  posts: ListViewPosts;
}
export const PostListTemplate = (props: PostListTemplateProps) => {
  const { numberOfPages, limitNumber, pageIndex, posts } = props;

  const SEOTitle = pageIndex === 1 ? "Homepage" : `Post page ${pageIndex}`;

  const router = useRouter();

  return (
    <>
      <SEO title={SEOTitle} />
      <div>
        <PostListProvider
          posts={posts}
          numberOfPages={numberOfPages}
          limitNumber={limitNumber}
          pageIndex={pageIndex}
        >
          <PostListHeader siteDescription={siteMetadata.description} />
          <main>
            <FilterSearchBar />
            <PostList listAriaLabel="List of posts" />
          </main>
          <Pagination absolutePath={router.basePath} />
        </PostListProvider>
      </div>
    </>
  );
};

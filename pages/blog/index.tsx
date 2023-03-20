import Link from "next/link";
import { getPosts, Post } from "@/lib/content";
import BlogPostPrev from "@/components/blog_post_prev";
import { GetStaticProps } from "next";

interface Props {
  posts: Post[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      posts: await getPosts("blog"),
    },
  };
};

export default function Posts({ posts }: Props) {
  return (
    <div className="flex min-h-screen flex-col p-4">
      <title>Štěpán&apos;s blog</title>
      <header className="flex p-3 justify-center">
        <div className="text-center">
          <p className="text-xl">
            <Link href="/" className="hover:font-bold transition-opacity">
              Home
            </Link>{" "}
            / Blog
          </p>
        </div>
      </header>

      <div className="flex justify-center items-end text-justify mt-3 sm:mt-6">
        <ul>
          {/* todo show only 10-15 posts and then option to go to page 2 for more posts, etc. */}
          {posts.map((post) => (
            <div key={post.slug} className="flex max-w-2xl">
              <BlogPostPrev post={post} />
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

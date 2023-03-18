import Link from "next/link";
import { getPostFromSlug } from "@/lib/content";
import { getPosts, Post } from "@/lib/content";
import { GetStaticProps } from "next";

interface Prop {
  post: Post;
}

export const getStaticProps: GetStaticProps<Prop> = async (context: any) => {
  return {
    props: {
      post: await getPostFromSlug("coffee", context.params.slug),
    },
  };
};

export async function getStaticPaths() {
  const posts = await getPosts("coffee");
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export default function CoffeeSlug({ post }: Prop) {
  return (
    <div className="flex min-h-screen flex-col p-4">
      <header className="flex p-3 justify-center">
        <div className="text-center">
          <p className="text-xl">
            <Link href="/" className="hover:font-bold transition-opacity">
              Home
            </Link>{" "}
            / Coffee / {post.title}
          </p>
        </div>
      </header>

      <div className="flex justify-center items-end text-justify mt-3 sm:mt-6">
        <p className="max-w-2xl"></p>
      </div>
    </div>
  );
}

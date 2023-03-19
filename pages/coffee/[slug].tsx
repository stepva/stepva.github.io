import Link from "next/link";
import { getPostFromSlug } from "@/lib/content";
import { getPosts, Post } from "@/lib/content";
import { GetStaticProps } from "next";
import CookedRichText from "@/components/rich_text";
import { format } from "date-fns";

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
  const written_at = new Date(post.written_at).setHours(0, 0, 0, 0);
  const updated_at = new Date(post.updated_at).setHours(0, 0, 0, 0);

  return (
    <div className="flex min-h-screen flex-col p-4">
      <header className="flex p-3 justify-center">
        <div className="text-center">
          <p className="text-xl">
            <Link href="/" className="hover:font-bold transition-opacity">
              Home
            </Link>{" "}
            /{" "}
            <Link
              href="/coffee/"
              className="hover:font-bold transition-opacity"
            >
              Coffee
            </Link>{" "}
            /{" "}
            <Link
              href="/coffee/posts/"
              className="hover:font-bold transition-opacity"
            >
              Posts
            </Link>
          </p>
        </div>
      </header>

      <div className="flex justify-center items-end text-justify mt-3 sm:mt-6">
        <div className="max-w-2xl leading-relaxed space-y-4">
          <p className="text-center text-2xl"> {post.title} </p>
          <CookedRichText text={post.text} />
          <p className="text-sm">
            <CookedRichText text={post.sources} />
          </p>
          <p className="text-right text-sm italic">
            {" "}
            bought on {format(new Date(post.date), "dd MMM Y")} <br />
            {updated_at > written_at ? "updated" : "written"} on{" "}
            {format(Math.max(updated_at, written_at), "dd MMM Y")}
          </p>
          <p className="text-right italic"></p>
        </div>
      </div>
    </div>
  );
}

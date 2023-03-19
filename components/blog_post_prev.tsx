import { Post } from "@/lib/content";
import { FC } from "react";
import { format } from "date-fns";
import Link from "next/link";

type BlogPostPrevProps = {
  post: Post;
};

const BlogPostPrev: FC<BlogPostPrevProps> = ({ post }) => {
  const written_at = new Date(post.written_at).setHours(0, 0, 0, 0);
  const updated_at = new Date(post.updated_at).setHours(0, 0, 0, 0);

  return (
    <Link href={"/blog/" + post.slug}>
      <div className="hover:bg-gray-200 hover:dark:text-black group p-5 ">
        <span className="text-xl group-hover:font-bold">{post.title}</span>
        {/* <p>{post.excerpt}</p> */}
        <p className="text-right italic">
          {updated_at > written_at ? "updated" : "written"} on{" "}
          {format(Math.max(updated_at, written_at), "dd MMM Y")}
        </p>
      </div>
    </Link>
  );
};

export default BlogPostPrev;

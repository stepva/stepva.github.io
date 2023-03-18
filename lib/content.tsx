import { createClient, Entry } from "contentful";

const space = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

if (!space || !accessToken) {
  throw "Missing CMS environment configuration";
}

const client = createClient({
  space: space,
  accessToken: accessToken,
});

function cookPost(entry: Entry<any>): Post {
  return {
    title: entry.fields.title,
    slug: entry.fields.slug,
    excerpt: entry.fields.excerpt,
    bought_at: entry.fields.date,
    text: entry.fields.text.content[0].content
      .map((c: any) => c.value)
      .join(" "),
    written_at: entry.sys.createdAt,
    updated_at: entry.sys.updatedAt,
  };
}

export async function getPosts(post_type: "coffee" | "blog"): Promise<Post[]> {
  const response = await client.getEntries({ content_type: post_type });

  const raw = response.items;
  // console.log(raw[0]);

  const cooked = raw.map(cookPost);

  return cooked;
}

export async function getPostFromSlug(
  post_type: "coffee" | "blog",
  slug: string
): Promise<Post> {
  const response = await client.getEntries({
    content_type: post_type,
    "fields.slug": slug,
  });

  const raw = response.items[0];
  // console.log(raw[0]);

  const cooked = cookPost(raw);

  return cooked;
}

export interface Post {
  title: string;
  slug: string;
  text: string;
  excerpt: string;
  bought_at: string;
  written_at: string;
  updated_at: string;
}

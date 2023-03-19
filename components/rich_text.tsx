import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { RichText } from "@/lib/content";
import { FC } from "react";
// import { BLOCKS, MARKS } from "@contentful/rich-text-types";

// const richTextDocument = {
//   nodeType: "document",
//   data: {},
//   content: [
//     {
//       nodeType: "paragraph",
//       data: {},
//       content: [
//         {
//           nodeType: "text",
//           value: "Hello",
//           data: {},
//           marks: [{ type: "bold" }],
//         },
//         {
//           nodeType: "text",
//           value: " world!",
//           data: {},
//           marks: [{ type: "italic" }],
//         },
//       ],
//     },
//   ],
// };

const options: Options = {
  // renderMark: {
  //   [MARKS.BOLD]: (children) => <p className="font-bold">{children}</p>,
  // },
  // renderNode: {
  //   [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
  // },
};

type Prop = {
  text: RichText;
};

const CookedRichText: FC<Prop> = ({ text }): JSX.Element => {
  return <>{documentToReactComponents(text, options)}</>;
};

export default CookedRichText;

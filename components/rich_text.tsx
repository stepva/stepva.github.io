import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { RichText } from "@/lib/content";
import { FC } from "react";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import Image from "next/image";

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
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      // render the EMBEDDED_ASSET as you need
      return (
        <Image
          src={`https://${node.data.target.fields.file.url}`}
          height={node.data.target.fields.file.details.image.height}
          width={node.data.target.fields.file.details.image.width}
          alt={node.data.target.fields.description}
        />
      );
    },
  },
};

type Prop = {
  text: RichText;
};

const CookedRichText: FC<Prop> = ({ text }): JSX.Element => {
  return <>{documentToReactComponents(text, options)}</>;
};

export default CookedRichText;

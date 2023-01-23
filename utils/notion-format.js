import Divider from "@/components/UIElements/Divider";
import Image from "next/image";

// General methods

const renderNestedList = (block) => {
  const { type } = block;
  const value = block[type];
  if (!value) return null;

  const isNumberedList = value.children[0].type === "numbered_list_item";

  if (isNumberedList) {
    return (
      <ol>
        <RenderBlocks blocks={value.children} />
      </ol>
    );
  }
  return (
    <ul>
      <RenderBlocks blocks={value.children} />
    </ul>
  );
};

export const RenderBlocks = ({ blocks }) => {
  return blocks.map((block) => {
    const { type, id } = block;
    const value = block[type];
    const color = block[type].color;

    switch (type) {
      case "paragraph":
        return (
          <Text
            text={value.rich_text}
            id={id}
            key={id}
            style={color !== "default" ? { color } : {}}
          />
        );

      case "heading_1":
        return (
          <Heading
            text={value.rich_text}
            id={id}
            level={type}
            key={id}
            style={color !== "default" ? { color } : {}}
          />
        );

      case "heading_2":
        return (
          <Heading
            text={value.rich_text}
            id={id}
            level={type}
            key={id}
            style={color !== "default" ? { color } : {}}
          />
        );

      case "heading_3":
        return (
          <Heading
            text={value.rich_text}
            id={id}
            level={type}
            key={id}
            style={color !== "default" ? { color } : {}}
          />
        );

      case "bulleted_list_item":
        return (
          <UnorderedListItem
            block={block}
            value={value}
            id={id}
            key={id}
            style={color !== "default" ? { color } : {}}
          />
        );

      case "numbered_list_item":
        return (
          <OrderedListItem
            block={block}
            value={value}
            id={id}
            key={id}
            style={color !== "default" ? { color } : {}}
          />
        );

      case "to_do":
        return (
          <ToDo
            key={id}
            value={value}
            style={color !== "default" ? { color } : {}}
          />
        );

      case "toggle":
        return (
          <Toggle
            key={id}
            value={value}
            style={color !== "default" ? { color } : {}}
          />
        );

      case "image":
        const imageSrc =
          value.type === "external" ? value.external.url : value.file.url;
        const caption = value.caption.length ? value.caption[0].plain_text : "";
        return (
          <figure key={id}>
            <Image alt={caption} src={imageSrc} fill />
            {/* <img alt={caption} src={imageSrc} /> */}
            {caption && <figcaption>{caption}</figcaption>}
          </figure>
        );

      case "callout":
        return (
          <Callout
            text={value.rich_text}
            key={id}
            style={color !== "default" ? { color } : {}}
          />
        );

      case "quote":
        return (
          <Blockquote
            text={value.rich_text}
            key={id}
            style={color !== "default" ? { color } : {}}
          />
        );

      case "divider":
        return <Divider key={id} />;

      case "code":
        return <BlockCode text={value.rich_text} key={id} />;

      default:
        return `Unsupported block (${
          type === "unsupported" ? "unsupported by Notion API" : type
        })`;
    }
  });
};

// Block types

const SpanText = ({ text }) => {
  return text.map((value) => {
    const {
      annotations: { bold, code, italic, strikethrough, underline },
      text,
    } = value;
    return (
      <span
        key={value.id}
        className={[
          bold ? "text-[var(--label-base)]" : "",
          code
            ? "font-mono bg-[var(--bg-shade)] px-1 py-[2px] mx-1 rounded text-[var(--label-base)])]"
            : "",
          italic ? "italic" : "",
          strikethrough ? "line-through" : "",
          underline ? "underline" : "",
        ].join(" ")}
      >
        {text.link ? (
          <a
            href={text.link.url}
            className="text-[var(--label-link)] no-underline hover:text-[var(--label-link-hover)] transition duration-150 ease-out"
          >
            {text.content}
          </a>
        ) : (
          text.content
        )}
      </span>
    );
  });
};

const Text = ({ text, id }) => {
  return (
    <p className="font-normal text-base text-[var(--label-base)] text-left">
      <SpanText text={text} id={id} />
    </p>
  );
};

const UnorderedListItem = ({ block, value, id }) => {
  return (
    <li className="list-item mb-3">
      <SpanText text={value.rich_text} id={id} />
      {!!value.children && renderNestedList(block)}
    </li>
  );
};

const OrderedListItem = ({ block, value, id }) => {
  return (
    <li className="list-item mb-3">
      <SpanText text={value.rich_text} id={id} />
      {!!value.children && renderNestedList(block)}
    </li>
  );
};

const Heading = ({ text, level }) => {
  switch (level) {
    case "heading_1":
      return (
        <h1 className="font-semibold text-4xl text-[var(--label-title)] text-left">
          <SpanText text={text} />
        </h1>
      );
    case "heading_2":
      return (
        <h2 className="font-semibold text-3xl text-[var(--label-title)] text-left">
          <SpanText text={text} />
        </h2>
      );
    case "heading_3":
      return (
        <h3 className="font-semibold text-2xl text-[var(--label-title)] text-left">
          <SpanText text={text} />
        </h3>
      );

    default:
      return null;
  }
};

const ToDo = ({ id, value }) => {
  return (
    <div>
      <label htmlFor={id}>
        <input type="checkbox" id={id} defaultChecked={value.checked} />{" "}
        <SpanText text={value.rich_text} />
      </label>
    </div>
  );
};

const Toggle = ({ value }) => {
  return (
    <details>
      <summary>{value.rich_text[0].text.content}</summary>
      {value.children?.map((block) => {
        if (block.type === "paragraph") {
          return (
            <Text
              key={block.id}
              text={block.paragraph.rich_text}
              id={block.id}
            />
          );
        }
      })}
    </details>
  );
};

const Callout = ({ text }) => {
  return (
    <div className="bg-[var(--bg-shade)] p-4 rounded-lg my-6 shadow-md border border-[var(--bg-border)]">
      <SpanText text={text} />
    </div>
  );
};

const Blockquote = ({ text }) => {
  return (
    <div className="p-4 my-6 border-l-4 border-[var(--bg-border)] italic">
      <SpanText text={text} />
    </div>
  );
};

const BlockCode = ({ text }) => {
  return (
    <pre className="w-full p-4 my-6 rounded-lg block box-border bg-[var(--bg-shade)] font-mono border border-[var(--bg-border)] shadow-md overflow-auto whitespace-pre">
      <code className="font-mono flex flex-wrap">
        <Text text={text} />
      </code>
    </pre>
  );
};

// export const renderBlock = (block) => {
//     const { type, id } = block;
//     const value = block[type];
//
//     switch (type) {
//     case "child_page":
//         return <p>{value.title}</p>;

//     case "code":
//         return (
//             <pre className={styles.pre}>
//           <code className={styles.code_block} key={id}>
//             {value.text[0].plain_text}
//           </code>
//         </pre>
//         );
//     case "file":
//         const src_file =
//             value.type === "external" ? value.external.url : value.file.url;
//         const splitSourceArray = src_file.split("/");
//         const lastElementInArray = splitSourceArray[splitSourceArray.length - 1];
//         const caption_file = value.caption ? value.caption[0]?.plain_text : "";
//         return (
//             <figure>
//                 <div className={styles.file}>
//                     📎{" "}
//                     <Link href={src_file} passHref>
//                         {lastElementInArray.split("?")[0]}
//                     </Link>
//                 </div>
//                 {caption_file && <figcaption>{caption_file}</figcaption>}
//             </figure>
//         );
//     case "bookmark":
//         const href = value.url
//         return (
//             <a href={ href } target="_brank" className={styles.bookmark}>
//                 { href }
//             </a>
//         );
//     default:
//         return `❌ Unsupported block (${
//             type === "unsupported" ? "unsupported by Notion API" : type
//         })`;
//     }
// };

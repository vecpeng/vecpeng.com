import Divider from "@/components/UIElements/Divider";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { getPageTitleByURL } from "./notion-request";

// General methods

const renderNestedList = (block) => {
  const { type } = block;
  const value = block[type];
  if (!value) return null;

  const isNumberedList = value.children[0].type === "numbered_list_item";

  if (isNumberedList) {
    return (
      <ol className="list-decimal list-inside">
        <RenderBlocks blocks={value.children} />
      </ol>
    );
  }
  return (
    <ul className="list-disc list-inside">
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
        return <ImageItem key={id} value={value} />;

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

      // case "bookmark":
      //   return <Bookmark key={id} value={value} />;

      default:
        return `Unsupported block (${
          type === "unsupported" ? "unsupported by Notion API" : type
        })`;
    }
  });
};

// Block types

const SpanText = ({ text, className }) => {
  return text.map((value) => {
    const {
      annotations: { bold, code, italic, strikethrough, underline },
      text,
    } = value;
    return (
      <span
        key={value.id}
        className={`${twMerge(
          [
            bold ? "text-[var(--label-base)]" : "",
            code
              ? "font-mono bg-[var(--bg-shade)] px-1 py-[2px] mx-1 rounded text-[var(--label-base)]"
              : "",
            italic ? "italic" : "",
            strikethrough ? "line-through" : "",
            underline ? "underline" : "",
          ].join(" "),
          className
        )}`}
      >
        {text.link ? (
          <a
            href={text.link.url}
            tabIndex={-1}
            className="hover:decoration-[var(--label-muted)] hover:text-[var(--label-title)] underline underline-offset-2 decoration-[var(--label-faint)] transitio300 ease-out outline-none"
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

const Text = ({ text, id, className }) => {
  return (
    <p
      className={twMerge(
        `font-normal text-base text-[var(--label-base)] leading-relaxed text-left`,
        className
      )}
    >
      <SpanText text={text} id={id} />
    </p>
  );
};

const UnorderedListItem = ({ block, value, id }) => {
  return (
    <li className="list-disc font-normal text-base text-[var(--label-base)] leading-relaxed text-left -my-1">
      <SpanText text={value.rich_text} id={id} />
      {!!value.children && renderNestedList(block)}
    </li>
  );
};

const OrderedListItem = ({ block, value, id }) => {
  return (
    <li className="list-disc font-normal text-base text-[var(--label-base)] leading-relaxed text-left -my-1">
      <SpanText text={value.rich_text} id={id} />
      {!!value.children && renderNestedList(block)}
    </li>
  );
};

const Heading = ({ text, level }) => {
  switch (level) {
    case "heading_1":
      return (
        <h1 className="font-semibold text-2xl text-[var(--label-title)] leading-loose text-left">
          <SpanText text={text} />
        </h1>
      );
    case "heading_2":
      return (
        <h2 className="font-semibold text-xl text-[var(--label-title)] leading-relaxed text-left">
          <SpanText text={text} />
        </h2>
      );
    case "heading_3":
      return (
        <h3 className="font-semibold text-lg text-[var(--label-title)] leading-relaxed text-left">
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
    <div className="w-full p-4 my-3 rounded-lg bg-[var(--bg-sub)] border border-[var(--bg-border)]">
      <SpanText
        text={text}
        className="text-base font-normal text-[var(--label-muted)]"
      />
    </div>
  );
};

const Blockquote = ({ text }) => {
  return (
    <div className="p-4 my-3 border-l-4 border-[var(--bg-border)] italic text-[var(--label-base)]">
      <SpanText text={text} />
    </div>
  );
};

const BlockCode = ({ text }) => {
  return (
    <pre className="w-full p-4 my-3 rounded-lg block box-border bg-[var(--bg-sub)] font-mono border border-[var(--bg-border)] overflow-auto whitespace-pre">
      <code className="font-mono flex flex-wrap text-sm">
        <Text text={text} className="text-sm pr-4 text-[var(--label-muted)]" />
      </code>
    </pre>
  );
};

const ImageItem = ({ value, id }) => {
  const imageSrc =
    value.type === "external" ? value.external.url : value.file.url;
  const caption = value.caption.length ? value.caption[0].plain_text : "";
  return (
    <figure key={id} className="my-3">
      <Image
        alt={caption}
        src={imageSrc}
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-full rounded-lg"
      />
      {caption && (
        <figcaption className="text-xs mt-2 text-left text-[var(--label-muted)]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

const Bookmark = async ({ value, id }) => {
  const href = value.url;
  const title = await getPageTitleByURL(href);
  const caption = value.caption.length ? value.caption[0].plain_text : "";
  return (
    <div className="my-3" key={id}>
      <Link href={href} target="_brank" className="w-full ">
        {title || href}
        {href}
      </Link>
      {caption && (
        <div className="text-xs mt-2 text-left text-[var(--label-muted)]">
          {caption}
        </div>
      )}
    </div>
  );
};

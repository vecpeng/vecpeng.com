import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_KEY });

export const getPosts = async () => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_POST_DATABASE_ID,
    filter: {
      property: "status",
      select: {
        equals: "Published",
      },
    },
    sorts: [
      {
        property: "articleDate",
        direction: "descending",
      },
    ],
  });
  return response.results;
};

export const getPage = async (pageId) => {
  const response = await notion.pages.retrieve({ page_id: pageId });
  return response;
};

export const getBlocks = async (blockId) => {
  const blocks = [];
  let cursor;
  while (true) {
    const { results, next_cursor } = await notion.blocks.children.list({
      start_cursor: cursor,
      block_id: blockId,
    });
    blocks.push(...results);
    if (!next_cursor) {
      break;
    }
    cursor = next_cursor;
  }
  return blocks;
};

export const getDemos = async () => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DEMO_DATABASE_ID,
    filter: {
      property: "status",
      select: {
        equals: "Published",
      },
    },
    sorts: [
      {
        property: "craftDate",
        direction: "descending",
      },
    ],
  });
  return response.results;
};

export const getPageTitleByURL = async (url) => {
  fetch(url)
    .then((response) => response.text())
    .then((text) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(text, "text/html");
      const title = doc.querySelector("title").textContent;
      return title;
    });
};

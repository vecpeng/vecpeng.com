const generateRssPostItem = (post: any) => {
  let postTitle;
  let postDescription;
  let postDate;
  let postSlug;

  postDate = new Date(post.properties.postDate.date.start).toLocaleString(
    "en-US",
    {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }
  );
  postDescription = post.properties.postDescription.rich_text[0].plain_text;
  postTitle = post.properties.postTitle.title[0].plain_text;
  postSlug = post.properties.slug.rich_text[0].plain_text;

  return `
      <item>
          <guid>https://dott.love/writing/${postSlug}</guid>
          <title>${postTitle}</title>
          <link>https://dott.love/writng/${postSlug}</link>
          <description>${postDescription}</description>
          <pubDate>${postDate}</pubDate>
          <author>contact@dott.love (Dott)</author>
      </item>
  `;
};

const generateRss = (posts: any[]) => `
    <rss version="2.0">
        <channel>
            <title>Dott's Blog</title>
            <link>https://dott.love</link>
            <description>Dott's Blog - A product &amp; design learner's forest cabin in the Internet.</description>e
            <language>en-US</language>
            <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
            <link href="https://dott.love/rss.xml" rel="self" type="application/rss+xml" title="Dott's Blog"/>
            <copyright>Copyright ©Dott</copyright>
            ${posts.map(generateRssPostItem).join("")}
        </channel>
    </rss>
`;

export default generateRss;

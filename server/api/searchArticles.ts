// ./server/api/searchArticles.ts

import { getSearchResults } from "~~/utils/butter";
export default defineEventHandler(async (event) => {
  // get the query from the event
  const query = getQuery(event);

  // get the search results from butter
  // pass the query and params to the function
  const data = await getSearchResults(query.query, {
    page_type: query.page_type || "kb_article",
    page: query.page || 1,
    page_size: query.page_size || 10,
  });

  return data;
});

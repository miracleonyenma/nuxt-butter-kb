// ./server/api/getArticles.ts

import { getArticles } from "~~/utils/butter";
export default defineEventHandler(async (event) => {
  // get the query from the event
  const query = getQuery(event);

  const data = await getArticles(query);
  return data;
});

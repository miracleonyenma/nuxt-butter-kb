// ./server/api/getArticle.ts

import { getArticle } from "~~/utils/butter";
export default defineEventHandler(async (event) => {
  // get the slug from query from the event
  const { slug } = getQuery(event);

  const data = await getArticle(slug);
  return data;
});

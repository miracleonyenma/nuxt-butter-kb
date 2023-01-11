// ./server/api/getCategory.ts

import { getCategory } from "~~/utils/butter";
export default defineEventHandler(async (event) => {
  // get the slug from query from the event
  const { slug } = getQuery(event);

  const data = await getCategory(slug);
  return data;
});

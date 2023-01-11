// ./server/api/getCategories.ts

import { getCategories } from "~~/utils/butter";
export default defineEventHandler(async (event) => {
  // get the query from the event
  const query = getQuery(event);
  const data = await getCategories(query);
  return data;
});

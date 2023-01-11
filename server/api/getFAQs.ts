// ./server/api/getFAQs.ts

import { getFAQs } from "~~/utils/butter";
export default defineEventHandler(async (event) => {
  // get query from event
  const query = getQuery(event);

  const data = await getFAQs(query);
  return data;
});

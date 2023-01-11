// ./utils/butter.ts

import Butter from "buttercms";

const { butterApiToken } = useRuntimeConfig();

// initialize butter
export const butter = Butter(butterApiToken);

// function to fetch categories
export const getCategories = async (params?: any) => {
  try {
    const res = await butter.page.list("kb_category", params);
    return res?.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

// function to fetch category by slug
export const getCategory = async (slug: any) => {
  try {
    const res = await butter.page.retrieve("kb_category", slug);
    return res?.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

// function to get articles
export const getArticles = async (params?: any) => {
  try {
    const res = await butter.page.list("kb_article", params);
    return res?.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

// function to get article by slug
export const getArticle = async (slug: any) => {
  try {
    const res = await butter.page.retrieve("kb_article", slug);
    return res?.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

// function to get FAQs
export const getFAQs = async (params?: any) => {
  try {
    const res = await butter.content.retrieve(["kb_faqs"], params);
    return res?.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

// function to get search results
export const getSearchResults = async (query?: any, params?: any) => {
  try {
    const res = await butter.page.search(query, params);
    return res?.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
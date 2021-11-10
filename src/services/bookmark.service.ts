export const getBookmarksHandler = () => {
  return JSON.parse(localStorage.getItem("Bookmarks") || "[]");
};

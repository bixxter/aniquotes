export const Types = {
  GET_QUOTES_REQUEST: "GET_QUOTES_REQUEST",
  GET_QUOTES_SUCCESS: "GET_QUOTES_SUCCESS",
  GET_BOOKMARKS_REQUEST: "GET_BOOKMARKS_REQUEST",
  GET_BOOKMARKS_SUCCESS: "GET_BOOKMARKS_SUCCESS",
};

export const getQuotesRequest = () => ({
  type: Types.GET_QUOTES_REQUEST,
});

export const getQuotesSuccess = (result: any) => ({
  type: Types.GET_QUOTES_SUCCESS,
  payload: { quotes: result },
});

export const getBookmarksRequest = () => ({
  type: Types.GET_BOOKMARKS_REQUEST,
});

export const getBookmarksSuccess = (result: any) => ({
  type: Types.GET_BOOKMARKS_SUCCESS,
  payload: { bookmarks: result },
});

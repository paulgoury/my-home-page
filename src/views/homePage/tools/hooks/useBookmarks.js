import { useContext } from "react";

import { SettingsContext } from "../";

import "../styles/bookmark.css";

function useBookmarks() {
  const { state, dispatch } = useContext(SettingsContext);

  const BookmarkLink = ({ children }) => (
    <div className="bookmark">{children}</div>
  );

  const buildBookmarks = () => {
    const { bookmarks } = state;
    return bookmarks.map((item) => {
      const { bookmark } = item;
      const { bookmarkName } = bookmark;
      return <BookmarkLink>{bookmarkName}</BookmarkLink>;
    });
  };

  const addBookmark = ({ bookmarkLink, bookmarkName }) => {
    dispatch({ type: "addBookmark", value: { bookmarkLink, bookmarkName } });
  };

  return { buildBookmarks, addBookmark };
}

export default useBookmarks;

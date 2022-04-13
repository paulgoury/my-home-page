import { useBookmarks } from "../../tools";

import "../styles/bookmarks.css";

function Bookmarks() {
  const { buildBookmarks } = useBookmarks();

  return <div className="bookmarks">{buildBookmarks()}</div>;
}

export default Bookmarks;

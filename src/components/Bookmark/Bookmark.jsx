import { useBookmark } from "../Context/BookmarkListContext";
import Loader from "../Loader/Loader";

function Bookmark() {
  const { isLoading, bookmarks } = useBookmark();
  if (isLoading) return <Loader />;

  return (
    <div>
      <h2>BookmarkList</h2>
      <div className="bookmarkList">
        {bookmarks.map((item) => {
          return <div key={item.id} className="bookmarkItem"></div>;
        })}
      </div>
    </div>
  );
}

export default Bookmark;

import { useParams } from "react-router-dom";
import { useBookmark } from "../Context/BookmarkListContext";
import { useEffect } from "react";
import Loader from "../Loader/Loader";

function SingleBookmark() {
  const { id } = useParams();
  const { getBookmark, isLoadingCurrBookmark, currentBookmark } = useBookmark();
  useEffect(() => {
    getBookmark(id);
  }, [id]);

  if (isLoadingCurrBookmark || !currentBookmark) return <Loader />;
  return <div>SingleBookmark</div>;
}

export default SingleBookmark;

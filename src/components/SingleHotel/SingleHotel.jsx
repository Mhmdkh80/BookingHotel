import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Loader from "../Loader/Loader";

function SingleHotel() {
  const { id } = useParams();
  const { data, isLoading } = useFetch(`http://localhost:5000/${id}`);

  if (isLoading) return <Loader />;
  return (
    <div className="room">
      <div className="roomDetail">
        <h2>{data.name}</h2>
        <div>
          {data.number_of_reviews} reviews &bull; {data.smart_location}
        </div>
      </div>
    </div>
  );
}

export default SingleHotel;

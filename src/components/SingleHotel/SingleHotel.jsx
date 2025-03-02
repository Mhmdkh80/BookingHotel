import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { useHotels } from "../Context/HotelsProvider";
import { useEffect } from "react";

function SingleHotel() {
  const { id } = useParams();
  const { getHotel, isLoadingCurrHotel } = useHotels();

  useEffect(() => {
    getHotel(id);
  }, [id]);


  
  return (
    <div className="">single hotel</div>
    // <div className="room">
    //   <div className="roomDetail">
    //     <h2>{data.name}</h2>
    //     <div>
    //       {data.number_of_reviews} reviews &bull; {data.smart_location}
    //     </div>
    //     <img src={data.xl_picture_url} alt={data.name} />
    //   </div>
    // </div>
  );
}

export default SingleHotel;

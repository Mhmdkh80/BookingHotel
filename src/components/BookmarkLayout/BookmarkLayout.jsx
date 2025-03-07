import Map from "../Map/Map";

function BookmarkLayout() {
  return (
    <div className="appLayout">
      <div className="sidebar">
        {/* <Outlet /> */}
        <div>bookmark list</div>
      </div>
      <Map markerLocations={[]}/>
    </div>
  );
}

export default BookmarkLayout;

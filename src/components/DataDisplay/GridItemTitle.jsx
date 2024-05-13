function GridItem( {value }) {
    return (
    <div className="grid grid-cols-2">
        <div className="px-4 py-2 font-semibold">{value}</div>
        <div className="px-4 py-2"></div>
    </div>
    );
  }
export default GridItem;
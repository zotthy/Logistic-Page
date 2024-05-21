// eslint-disable-next-line react/prop-types
function DivData({value}){
    return (
        <div className="grid grid-cols-2">
            <div className="px-4 py-2 font-semibold">{value}</div>
        </div>
    )
}
export default DivData;
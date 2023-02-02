import "../style/number.css"

export default function PaginationBtn({btnName, btnClass}) {
    return (
        <button className={`paginationBtn ${btnClass}`}>{btnName}</button>
    )
}
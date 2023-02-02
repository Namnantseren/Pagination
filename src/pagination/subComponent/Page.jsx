import { useParams } from "react-router-dom"

export default function Page() {
    const { id } = useParams();
    return (
        <div className="page">
            PageNumber: {id}
        </div>
    )
}
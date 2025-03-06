import { Link } from "react-router"
export const Card = ({ image, title, id }) => {

    return (
        <Link
            className="lg:inline-block lg:w-xs lg:m-2 lg:rounded-lg lg:text-center lg:hover:opacity-80
        inline-block w-2/5 m-2 border rounded-lg border-gray-400 text-center hover:opacity-80"
            to={`/products/${id}`}>
            <img src={image} alt="image" className="lg:w-xs" />
            <div className="lg:p-2 lg:m-2 lg:rounded-lg
            p-2 rounded-lg">
                <h3 className="lg:inline-block lg:text-lg
                inline-block text-sm">{title}</h3>
            </div>
        </Link>
    )
}


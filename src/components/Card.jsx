import { Link } from "react-router"
export const Card = ({ image, title, id }) => {

    return (
        <Link
            className="md:inline-block md:w-sm md:m-2 md:border md:rounded-md md:border-gray-400 md:text-center md:hover:opacity-80
        inline-block w-2/5 m-2 border rounded-md border-gray-400 text-center hover:opacity-80"
            to={`/products/${id}`}>
            <img src={image} alt="image" className="md:w-sm" />
            <div className="md:p-2 md:m-2 md:rounded-md
            p-2 rounded-md">
                <h3 className="md:inline-block md:text-md
                inline-block text-sm">{title}</h3>
            </div>
        </Link>
    )
}


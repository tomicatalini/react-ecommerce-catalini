import { Link } from "react-router-dom";

const CategoryListContainer = ({categories, load}) => {
    
    return (
        <div className="px-2 bg-gray-200">
            <div className="flex flex-row items-center gap-2">
            <h2 className="font-bold">Categorias</h2>
                
                {
                    categories.map( (category, index) => (
                        <Link key={index}
                            className="p-2 hover:bg-gray-100"                    
                            to={`/category/${category}`} 
                            onClick={() => load(true)}>{category[0].toUpperCase() + category.substring(1)}</Link>
                    ))
                }
            </div>
        </div>
    );
}

export default CategoryListContainer;
import { Link } from "react-router-dom";

const CategoryListContainer = ({categories, load}) => {
    
    return (
        <div className="px-2 bg-gray-200">
            <div className="flex flex-row items-center gap-2">
            <h2 className="font-bold">Categorias</h2>
                
                {
                    categories.map( category => (
                        <Link key={category.id}
                            className="p-2 hover:bg-gray-100"                    
                            to={`/category/${category.key}`} 
                            onClick={() => load(true)}>{category.description}</Link>
                    ))
                }
            </div>
        </div>
    );
}

export default CategoryListContainer;
import { Link } from "react-router-dom";
import CustomMenu from "../CustomMenu";

const CategoryListContainer = ({current, categories, load}) => {

    const handleClick =  (evt) => {        
        if(!evt.target.href.includes(current)){
            load(true);
        }
    };

    return (
        <div className="px-2 bg-white shadow-md">
            <div className="flex flex-row items-center gap-2">
            <CustomMenu menuName={'Categorias'} options={categories}/>
                
                {
                    categories.map( category => (
                        <Link key={category.id}
                            className="p-2 hover:bg-gray-100"
                            to={`/category/${category.key}`} 
                            onClick={handleClick}>{category.description}</Link>
                    ))
                }
            </div>
        </div>
    );
}

export default CategoryListContainer;
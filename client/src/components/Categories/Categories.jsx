import './Categories.scss';
import { Link } from 'react-router-dom';
import { useGetCategoriesQuery } from '../../services/categories';

function Categories() {
    const { data, isError, isLoading } = useGetCategoriesQuery();
    const categories = data?.categories || [];

    if (isError) return <h4>Error...</h4>;

    return isLoading ? (
        <h4>Loading...</h4>
    ) : (
        <div className='categories'>
            <h4 className='category-title'>Categories</h4>
            <div className='categories-grid'>
                {categories?.length &&
                    categories.map(({ name, imgUrl, id }) => {
                        return (
                            <Link
                                className={`grid-item ${name}`}
                                key={id}
                                to={`category/${name}`}>
                                <img src={imgUrl} alt={name} />
                                <div className='category-name'>{name}</div>
                            </Link>
                        );
                    })}
            </div>
        </div>
    );
}

export default Categories;

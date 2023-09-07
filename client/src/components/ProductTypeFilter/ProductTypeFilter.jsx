import CheckBox from '../../shared/Checkbox/Checkbox';

const ProductTypeFilter = ({
    productTypeOptions,
    productTypes,
    setProductTypes,
    setPage,
}) => {
    const isTypeChecked = (type) => productTypes.includes(type);

    const handleCheckboxChange = (event) => {
        const selectedType = event.target.name;

        if (isTypeChecked(selectedType)) {
            return setProductTypes((prevTypes) =>
                prevTypes.filter((type) => type !== selectedType)
            );
        }
        setProductTypes((prevTypes) => [...prevTypes, selectedType]);
        setPage(0);
    };

    return (
        <div className='product-type-filter'>
            <h5 className='product-type-filter-title'>Product Types</h5>
            <div className='product-type-filter-box'>
                {productTypeOptions.map((type) => (
                    <CheckBox
                        key={type}
                        type={type}
                        isChecked={isTypeChecked(type)}
                        handleCheckboxChange={handleCheckboxChange}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductTypeFilter;

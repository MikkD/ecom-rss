import CheckBox from '../../shared/Checkbox/Checkbox';

const ProductTypeFilter = ({ selectedProductTypes, setSelectedProductTypes }) => {
    const handleCheckboxChange = (event) => {
        const selectedType = event.target.name;

        setSelectedProductTypes((prevSelectedProdTypes) => {
            return prevSelectedProdTypes.map((prevType) => {
                return prevType.type === selectedType
                    ? { ...prevType, isChecked: !prevType.isChecked }
                    : prevType;
            });
        });
    };

    return (
        <div className='product-type-filter'>
            <h5 className='product-type-filter-title'>Product Types</h5>
            <div className='product-type-filter-box'>
                {selectedProductTypes.map(({ type, isChecked }) => (
                    <CheckBox
                        key={type}
                        type={type}
                        isChecked={isChecked}
                        handleCheckboxChange={handleCheckboxChange}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductTypeFilter;

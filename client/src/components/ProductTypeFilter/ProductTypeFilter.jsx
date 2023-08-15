import CheckBox from '../../shared/Checkbox/Checkbox';

const ProductTypeFilter = ({ checkBoxes, setCheckBoxes }) => {
    const handleCheckboxChange = (event) => {
        setCheckBoxes((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.checked,
        }));
    };

    return (
        <div className='product-type-filter'>
            <h5 className='product-type-filter-title'>Product Types</h5>
            <div className='product-type-filter-box'>
                {Object.entries(checkBoxes).map(([type, isChecked]) => (
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

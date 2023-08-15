const CheckBox = ({ type, isChecked, handleCheckboxChange }) => {
    return (
        <label htmlFor={type}>
            <input
                name={type}
                id={type}
                type='checkbox'
                onChange={handleCheckboxChange}
                checked={isChecked}
            />
            {type}
        </label>
    );
};

export default CheckBox;

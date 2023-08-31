import { generatePagintationNumbers, NUM_OF_PRODUCTS_PER_PAGE } from '../../utils/utils';

const Pagination = ({ totalNumOfProducts, setPage, page }) => {
    const numOfPages = Math.ceil(totalNumOfProducts / NUM_OF_PRODUCTS_PER_PAGE);
    const handlePrevPage = () => setPage((currentPage) => currentPage - 1);
    const handleNextPage = () => setPage((currentPage) => currentPage + 1);

    return (
        <div className='pagination'>
            <button disabled={page === 0} onClick={handlePrevPage}>
                &#8592;
            </button>
            {generatePagintationNumbers(numOfPages).map((pageNum, idx) => (
                <button
                    key={idx}
                    className={page === idx ? 'active' : ''}
                    onClick={() => setPage(idx)}>
                    {pageNum + 1}
                </button>
            ))}
            <button onClick={handleNextPage} disabled={page === numOfPages - 1}>
                &#8594;
            </button>
        </div>
    );
};

export default Pagination;

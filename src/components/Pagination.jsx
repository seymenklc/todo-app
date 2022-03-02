import './Pagination.css';

export default function Pagination({ pageNums, paginate }) {
    return (
        <nav>
            <ul className='pagination'>
                {pageNums.map(num => (
                    <li key={num}>
                        <button onClick={() => paginate(num)}>
                            {num}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
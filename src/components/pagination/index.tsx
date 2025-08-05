import styles from './styles.module.scss'

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className={styles.pagination}>

      <div>
        {/* Previous button */}
        <button 
          onClick={() => onPageChange(currentPage - 1)} 
          disabled={currentPage === 1}
        >
          &lt;
        </button>

        {/* Page numbers */}
        {pages.map(page => (
          <button
            key={page}
            className={currentPage === page ? styles.active : ''}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}

        {/* Next button */}
        <button 
          onClick={() => onPageChange(currentPage + 1)} 
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>

      <div>
        <p>you are viewing {currentPage} of {totalPages} pages</p>
      </div>
    </div>
  );
}

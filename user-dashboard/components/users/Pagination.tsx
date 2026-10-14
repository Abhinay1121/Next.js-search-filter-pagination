import React from 'react'

const Pagination = ({page, totalPages, onPageChange}) => {
  return (
   <nav className='flex text-center justify-center align-center gap-4 mt-3'>
    <button onClick={() => onPageChange(page-1)} disabled={page === 1} className='bg-blue-600 border text-white px-3 py-2 rounded disbaled:opacity-50'>Previous</button>
    <span>{page} of {totalPages}</span>
    <button onClick={() =>onPageChange(page+1)} disabled={page === totalPages}className='bg-blue-600 border text-white px-3 py-2 rounded disabled:opacity-50'>Next</button>
   </nav>
  )
}

export default Pagination
export const Navigation = () => {
  return (
    <nav className='flex justify-between items-center py-4 gap-6'>
      <ul className='flex ml-16 space-x-8'>
        <li>
          <a href='/' className='text-gray-500 hover:text-gray-900'>
            Portfolio
          </a>
        </li>
        <li>
          <a href='/' className='text-gray-500 hover:text-gray-900'>
            About
          </a>
        </li>
        <li>
          <a href='/' className='text-gray-500 hover:text-gray-900'>
            Contacts
          </a>
        </li>
        <li>
          <a href='/' className='text-gray-500 hover:text-gray-900'>
            Blogs
          </a>
        </li>
      </ul>
      <div>
        <button className='flex items-center gap-2 py-3 px-4 rounded-full border border-black'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-6'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3' />
          </svg>
          <span>Start Project</span>
        </button>
      </div>
    </nav>
  )
}

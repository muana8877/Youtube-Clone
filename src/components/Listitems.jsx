import React from 'react'

const Listitems = () => {
    const categories = [
        { id: 1, name: "All", active: true },
        { id: 2, name: "Web Development", active: false },
        { id: 3, name: "Colleges", active: false },
        { id: 4, name: "User Interface Design", active: false },
        { id: 5, name: "Television Series", active: false },
        { id: 6, name: "C++", active: false },
        { id: 7, name: "AI", active: false },
        { id: 8, name: "Podcasts", active: false },
        { id: 9, name: "Job Interviews", active: false },
        { id: 10, name: "Desktop Computing", active: false },
        { id: 11, name: "Movies", active: false },
        { id: 12, name: "Science Fiction", active: false },
        { id: 13, name: "ReactJS", active: false },
      ];
      
  return (
    <div className='flex space-x-3 overflow-x-scroll no-scrollbar px-3'>
        {
            categories.map(category => {
                return (
                    <div key={category.id}  className={`${
                        category.active ? 'bg-gray-500 text-white' : 'bg-gray-200'
                      } cursor-pointer py-2 px-4 whitespace-nowrap rounded-xl text-sm hover:bg-gray-300 duration-300`}>
                        {category.name}
                    </div>
                )
            }) 
        }
    </div>
  )
}

export default Listitems
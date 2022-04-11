import React, {useState} from 'react'
import data from '../data.js'


const Work = () => {
    const [noOfElements, setnoOfElements] = useState(3)
    const slice = data.work.slice(0, noOfElements)
    const loadMore = () =>{
        setnoOfElements(noOfElements + noOfElements)
    }
  return (
    <div name="work" className='w-full h-full text-gray-300 bg-[#0a192f] px-4'>
        <div className='max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                <p className='py-6'>Check out some of my recent work</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {/* Grid item */}
                {slice.map((item, index)=>{
                    return(
                        <div style={{backgroundImage: `url(${item.img})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex flex-col justify-center items-center mx-auto work-div'>
                            <div className='opacity-0 group-hover:opacity-100'>
                                <span className='text-2xl font-bold text-white tracking-wider'>
                                    {item.title}
                                </span>
                            </div>
                            <div className='pt-8 text-center'>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div>
                <button onClick={loadMore}
                 className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>
                    Load More
                </button>
            </div>
            
            
        </div>
    </div>
  )
}

export default Work
import React,{useState} from 'react'
import { data } from '../data/data'

function Food() {
    const [food, setFood] = useState(data);

    const filtertype = (category) => {
        setFood(
            data.filter((item) => {
                return item.category === category
            })
        )
    }

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
        <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Item</h1>
     <div className='flex flex-col lg:flex-row justify-between'>
        <div>
            <p className='font-bold text-gray-700'>Filter Type</p>
            <div className='flex justify-between flex-wrap'>
                <button onClick={() => setFood(data)} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
                <button onClick={() => filtertype('Burger')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Burgers</button>
                <button onClick={() => filtertype('Pizza')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Pizza</button>
                <button onClick={() => filtertype('Fries')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Fries</button>
            </div>
        </div>
     </div>
     <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {food.map((item, index) => (
            <div key={index} className="border shadow-lg rounded-lg hover:scale-105 duration-300">
                <img src={item.imageUrl} alt={item.title}
                className="w-full h-[200px] object-cover rounded-t-lg"
                />
                <div className='flex justify-between px-2 py-4'>
                    <p className='font-bold'>{item.name}</p>
                </div>
            </div>
        ))}
     </div>
    </div>
  )
}

export default Food
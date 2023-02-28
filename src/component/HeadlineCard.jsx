import React from 'react'

function HeadlineCard() {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* Cards */}
        <div className='rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white '>
                <p className='font-bold text-2xl px-2 pt-4'>Sun's Out</p>
                <p className='px-2'>Through 8/26</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://tse1.mm.bing.net/th?id=OIP.hpkSmRVm73BLgOMIAOXotQHaE8&pid=Api&P=0" alt="/" />
        </div>
         {/* Cards */}
         <div className='rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white '>
                <p className='font-bold text-2xl px-2 pt-4'>New restaurents</p>
                <p className='px-2'>Added Daily</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://tse2.mm.bing.net/th?id=OIP.D99INzw9RoStZysgd7hs-AHaEK&pid=Api&P=0" alt="/" />
        </div>
         {/* Cards */}
         <div className='rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white '>
                <p className='font-bold text-2xl px-2 pt-4'>We Deliver Dessert too</p>
                <p className='px-2'>Tasty-Treats</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://tse3.mm.bing.net/th?id=OIP.1exBU1IysSqCt86DFMA7BAHaE8&pid=Api&P=0" alt="/" />
        </div>
    </div>
  )
}

export default HeadlineCard
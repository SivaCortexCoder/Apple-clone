import React from 'react'
import heroImage from '../assets/Images/Hero-Image.png';
import iphoneHero from '../assets/Images/hero_iphone_family.jpg';
import watchHero from '../assets/Images/hero_apple_watch_famil.jpg';



const HeroSection = () => {
  return (
    <div className='flex flex-col gap-3'>
    <div className='h-[80vh] bg-cover bg-center flex justify-center items-end' style={{ backgroundImage: `url(${heroImage})` }}>
      <div className='text-center mb-12'>
        <h2 className='font-semibold text-4xl'>Mother's Day</h2>
        <p className='text-xl mt-2'>It's not too late to find
        the perfect gift for Mom</p>
        <button className='bg-blue-600 text-white px-4 py-2 rounded-full mt-5'>Shop</button>
      </div>
    </div>
     <div className='h-[80vh] bg-cover bg-center flex justify-center' style={{ backgroundImage: `url(${iphoneHero})` }}>
      <div className='text-center m-12'>
        <h2 className='font-semibold text-4xl'>iPhone</h2>
        <p className='text-xl mt-2'>Meet the iPhone 16 family.</p>
        <button className='bg-blue-600 text-white px-4 py-2 rounded-full mt-5'>Learn more</button>
         <button className='bg-transparent text-blue-600 px-4 py-2 border border-blue-600 rounded-full mt-5 ml-4'>Shop iPhone</button>
        <p className='text-lg font-medium mt-7 bg-gradient-to-r from-blue-400 via-pink-500 to-orange-600 bg-clip-text text-transparent'>Built for Apple Intelligence.</p>
      </div>
    </div>
      <div className='h-[80vh] bg-cover bg-center flex justify-center' style={{ backgroundImage: `url(${watchHero})` }}>
      <div className='text-center m-12'>
        <h2 className='font-semibold text-4xl'>Watch</h2>
        <p className='text-xl mt-2'>Live healthier. Train Better. Stay Connected.</p>
        <button className='bg-blue-600 text-white px-4 py-2 rounded-full mt-2'>Learn more</button>
         <button className='bg-transparent text-blue-600 px-4 py-2 border border-blue-600 rounded-full mt-2 ml-4'>Shop iPhone</button>
        
      </div>
    </div>
    
    </div>
    
  )
}

export default HeroSection
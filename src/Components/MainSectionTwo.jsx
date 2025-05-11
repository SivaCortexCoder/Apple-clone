import React from 'react'
import airpods_4 from '../assets/Images/airpods_4.jpg'
import iphone_tradein from '../assets/Images/iphone_tradein.jpg'

const images = [
     {image:airpods_4 , title:"iPad air",desc1:"Now supercharged by the M3 chip",desc2:"Major. In any field."},
    {image:iphone_tradein, title:"Trade In",desc1:"Upgrade and save.",desc2:"It's  that easy."}
]

const MainSectionTwo = () => {
  return (
    <div className='grid gap-3 m-3 grid-cols-1 md:grid-cols-2'>
        {
            images.map((item,index)=>(
        <div key={index} className={`h-[80vh] bg-cover bg-center ${index === 0 ? 'flex justify-center items-end text-white' : 'text-black'}`} style={{ backgroundImage: `url(${item.image})` }}>
            <div className="text-center p-5 mt-5">
                <h1 className='font-semibold text-3xl'>{item.title}</h1>
                <p className='text-xl mt-2'>{item.desc1}</p>
                <p className='text-xl'>{item.desc2}</p>
                <button className='bg-blue-600 text-white px-4 py-2 rounded-full mt-3'>learn more</button>
                <button className='bg-transparent text-blue-600 px-4 py-2 border border-blue-600 rounded-full mt-3 ml-4'>buy</button>
            </div>

        </div>


            ))
        }
    </div>
  )
}

export default MainSectionTwo
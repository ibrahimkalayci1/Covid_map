import React from 'react'

//! {item[0].split("_").join(" ")} replace metodu bu da

const İnfoCard = ({item}) => {
    console.log(item)
  return (
    <div className=' bg-gray-200 p-4 rounded-lg text-gray-600 shadow-md'>
        <p className=' text-sm font-semibold mb-2 capitalize'>
            {item[0].replace("_", " ")} 
            </p> 
            
        <h2 className=' text-lg font-bold text-gray-800'>
            {item[1]}

        </h2>
    </div>
  )
}

export default İnfoCard
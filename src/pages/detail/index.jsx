import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useSearchParams } from 'react-router-dom'
import { getData } from '../../redux/action'
import store from '../../redux/store'
import Loader from '../../components/loader'
import Heading from '../detail/heading'
import Content from '../detail/content'

const Detail = () => {

 



 //urldeki arama parametresini al
const [params] = useSearchParams()
const code = params.get("code")

//dispatch kurulu
 const dispatch = useDispatch()

 //asenkron aksiyonu tetikler
 const sendAction = () => dispatch(getData({code}))

 useEffect(() => {
sendAction() 
}, [])

return (
    <div className=' min-h-[calc(100vh-100px)] text-white grid place-items-center p-6' >
      <div className=' bg-white min-h-[80vh] p-8 rounded-lg shadow-lg max-w-3xl max-md:w-full md:min-w-[500px]'>
        {/*Üst Kısım*/}
       <Heading/>
        {/*  Alt Kısım   */}
        <Content retry={sendAction}/>
      </div>
    </div>
  )
}

export default Detail
import React from 'react'
import Lampa from './Lampa'

export default function Jatekter(props) {
    function katt(){
        props.katt(props.index)
    }
  return (
    <>
        {
            props.lista.map((elem, index)=>{
                return(<Lampa jel={elem} key={index} index={index} katt={katt} />)
            })
        }
    </>
  )
}

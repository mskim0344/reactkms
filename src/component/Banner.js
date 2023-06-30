import React from 'react'
import banner from '../scss/banner.module.css'

export default function Banner(props) {   

    return (
        <>   
        <div className="h-100vh">
        <div className={banner.container}>
          swiper 리액트 플러그인으로 제작합니다.
          </div>
          <div className={"d-flex  "+banner.container + ' ' + banner.row}>
            클래스명이 2개이상일때 공백이 필요하고 그 공백은 문자라서
            공백과 문자를 결합해야함
          </div> 
          <div className={`d-flex ${banner.container}  ${banner.row}`}>
            클래스명이 2개이상일때 공백이 필요하고 그 공백은 문자라서
            공백과 문자를 결합해야함
          </div>
        </div>    
          
        </>
    )
}

import React from 'react'
import banner from '../scss/interview.module.css'

export default function Interview(props) {
    

    return (
        <>
        <div className={banner.row + ' h-100vh'}>
        사전인터뷰로 질문과 답이 있고
            질문 토글기능으로 답변이 보이는 UI입니다.
        </div>
           
        </>
    )
}

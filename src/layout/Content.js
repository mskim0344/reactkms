import React from 'react'
import Banner from '../component/Banner'
import Contact from '../component/Contact'
import Interview from '../component/Interview'
import Portfolio from '../component/Portfolio'

export default function Content(mother) {
    

    return (
        <div id={mother.cid}>
           <Banner></Banner>
           <Portfolio></Portfolio> 
           <Interview></Interview>
           <Contact></Contact>
        </div>
    )
}

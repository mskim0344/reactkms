 const Hd = (props)=> {
   
    return (
            <header id="hd" className={`fixed-top border-bottom bg-warning ${props.scrollcls}`}>
                <div className="container px-0">
                    <div className="d-flex justify-content-between align-items-center">
                        <h1><a href="#top">로고</a></h1>
                        <ul id="gnb" className="d-flex">
                            <li className="px-2"><a href="" className="d-blcok">1</a></li>
                            <li className="px-2"><a href="" className="d-blcok">2</a></li>
                            <li className="px-2"><a href="" className="d-blcok">3</a></li>
                            <li className="px-2"><a href="" className="d-blcok">4</a></li>
                        </ul>
                        <ul className="sns d-flex align-items-center">
                            <li className="px-1"><a href=""><i>1</i></a></li>
                            <li className="px-1"><a href=""><i>2</i></a></li>
                        </ul>

                    </div>

                </div>
                             
            </header>           
        
    )
}

export default Hd 
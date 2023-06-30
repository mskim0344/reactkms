export default function Hd(props) {
    let dbnavi = {     
        topad : {
            adtitle : "모든 회원에게 7월의 다가오는 혜택",
            adlink : "http://www.11st.co.kr"
        },
        navi : [
            {
                nm : ['회사소개','company.html'],
                cls : 'navi com'
            },
            {
                nm : ['제품소개','show.html'],
                cls : 'navi pro'
            },
            {
                nm : ['고객센터','center.html'],
                cls : 'navi contact'
            }
        ],
        sns : [
            {
                nm : "git",
                nmlink : "http://github.com/4thdraw"

            },{
                nm : "notion",
                nmlink : "http://notion.io/"

            }
        ]
    }
    return (
        <>
            <header className="fixed-top border-bottom bg-warning">
                <div className="ad bg-dark text-center py-2">
                    <a href={dbnavi.topad.adlink} className="text-white">{dbnavi.topad.adtitle}</a>
                </div>
                <div className="container d-flex justify-content-between align-items-center">
                    <h1>
                        <a href="">퍼블릭 svg</a>
                    </h1>
                    <ul id="gnb" className="d-flex">
                        {
                        dbnavi.navi.map(( val, idx) => {
                                return(
                                    <li className={val.cls} id={'navilist'+idx}>
                                        <a href={val.nm[1]}>{val.nm[0]}</a>
                                    </li>
                                )
                        })
                        } 
                    </ul>
                    <ul className="sns d-flex">
                       {
                        dbnavi.sns.map(( val, idx) => {
                                return(
                                    <li >
                                        <a href={val.nmlink}>{val.nm}</a>
                                    </li>
                                )
                        })
                        } 

                    </ul>
                </div>                
            </header>           
        </>
    )
}


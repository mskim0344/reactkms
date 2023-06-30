import Hd from './layout/Hd'
import Ft from './layout/Ft'
import Content from './layout/Content'

export default function App(props) {  
    return (
        <>
          <Hd scrollcls='scroll'></Hd>  
          <Content cid='content'></Content>
          <Ft fid='ft'></Ft>
        </>
    )
}

import * as C from './styles';
import imgfind from '../../Assets/section/burgerfind.jpg';

type Props = {}

const Notfindpage = (props: Props) => {
  return (
    <C.Container>
        <C.MessageContainer>
            <h3>Que pena!</h3>
            <h4>Infelizmente ainda não estamos na sua região :/</h4>
        </C.MessageContainer>
    </C.Container> 
  )
} 

export default Notfindpage;

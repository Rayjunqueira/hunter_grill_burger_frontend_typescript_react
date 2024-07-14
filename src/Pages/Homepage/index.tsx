import * as C from './styles';
import SearchIcon from '@mui/icons-material/Search';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import section from '../../Assets/section/sectionmain.jpg';
import section2 from '../../Assets/section/grillsection.jpg';
import sectionburgers from '../../Assets/section/sectionburgers.png';
import drinksection from '../../Assets/section/drinksection.png';
import findpic from '../../Assets/section/findpic.png';
import { useNavigate } from 'react-router-dom';


type Props = {}

const Homepage = (props: Props) => {
  const navigate = useNavigate();

  const handleMenuClick = () => {
    navigate("/menu")
  }

  const handleDrinkClick = () => {
    navigate("/drinks")
  }

  return (
    <C.Container>
      <C.Section>  
        <img src={section2} alt="" />
        <div className="text-overlay">
          <h4>Hambúrgueres artesanais <i>100%</i> grelhados!</h4>
        </div>
        <button>Pedir agora</button>
      </C.Section>
      <C.MenuSectionMobile>
        <C.SectionMobileItem onClick={handleMenuClick}>
          <img src={sectionburgers} alt="" />
          <h4>especialidades</h4>
        </C.SectionMobileItem>
        <C.SectionMobileItem onClick={handleDrinkClick}>
          <img src={drinksection} alt="" />
          <h4>Bebidas</h4>
        </C.SectionMobileItem>
      </C.MenuSectionMobile>            
      <C.MenuSection>
      <div>
        <img onClick={handleMenuClick} src={sectionburgers} alt="" />
        <h4>Especialidades</h4>
      </div>
      <div>
        <img onClick={handleDrinkClick} src={drinksection} alt="" />
        <h4>Bebidas</h4>
      </div>
    </C.MenuSection>  
      <C.FindUs>
        <C.ImgContainer>
          <img src={findpic} alt="" />
        </C.ImgContainer>
        <C.FindUsContent>
          <C.FindTitle>
            <h4>Receba seu lanche direto da sua casa! <i><DeliveryDiningIcon /></i></h4>
          </C.FindTitle>
          <C.FindText>
            <h5>O Hunter Grill é uma rede que até o momento apenas trabalhamos com a função de delivery ou retirada no local. Verifique através do seu CEP se estamos disponível na sua região.</h5>
          </C.FindText>
          <C.FindInputContainer>
            <input type="text" placeholder='Digite seu cep aqui'/>
            <button><i><SearchIcon /></i></button>
          </C.FindInputContainer>
        </C.FindUsContent>
      </C.FindUs>
    </C.Container>
  )
}

export default Homepage;

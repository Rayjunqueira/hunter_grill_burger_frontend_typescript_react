import * as C from './styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

type Props = {}

const Footer = (props: Props) => {
  return (
    <C.Container>
      <C.IconContainer>
        <C.SocialIcon hoverColor="#1877F2"> 
          <FacebookIcon />
        </C.SocialIcon>
        <C.SocialIcon hoverColor="#E1306C"> 
          <InstagramIcon />
        </C.SocialIcon>
        <C.SocialIcon hoverColor="#7F7F7F">
          <XIcon />
        </C.SocialIcon>
      </C.IconContainer>
      <C.Copyright>
        Todos os direitos autorais reservados © 2024
      </C.Copyright>
    </C.Container>
  )
}

export default Footer;

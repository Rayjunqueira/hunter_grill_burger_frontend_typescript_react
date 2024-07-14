import * as C from './styles';

type Props = {}

const Contactpage = (props: Props) => {

  return (
    <C.Container>
      <C.ContactContainer>
        <C.ContactTitle>
          <h3>Mande sua dúvida, sugestão ou pedido.</h3>
        </C.ContactTitle>
        <C.ContactInput>
          <h3>Nome completo</h3>
          <input type="text" placeholder='Nome completo'/>
        </C.ContactInput>        
        <C.ContactInput>
          <h3>Endereço de email</h3>
          <input type="email" placeholder='Nome completo'/>
        </C.ContactInput>        
        <C.ContactInput>
          <h3>Mensagem</h3>
          <textarea name="#" placeholder='Sua mensagem' id=""></textarea>
        </C.ContactInput>
        <C.SentContainer>
          <button>Enviar</button>
        </C.SentContainer>
      </C.ContactContainer>
    </C.Container>
  )
}

export default Contactpage;

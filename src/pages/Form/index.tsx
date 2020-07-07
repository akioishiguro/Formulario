import React from 'react';

import { FaTelegramPlane } from 'react-icons/fa';
import { Container, Contact, Background } from './styles';

import Input from '../../components/Input';

import ImgContact from '../../assets/contact.svg';
import Ak from '../../assets/Ak.svg';

const Formulario: React.FC = () => (
  <Container>
    <Background>
      <div>
        <h1>Bora trocar uma ideia ?</h1>
        <img src={ImgContact} alt="ImgContact" />
      </div>
    </Background>
    <Contact>
      <img src={Ak} alt="Ak" />
      <p>Preencha o formulário abaixo que entraremos em contato com você.</p>

      <form action="">
        <span>Nome*</span>
        <Input name="name" type="text" />

        <span>Email*</span>
        <Input name="email" type="text" />

        <span>Telefone*</span>
        <Input name="phone" type="text" />

        <span>Mensagem</span>
        <textarea />
      </form>

      <button type="submit">
        Enviar
        <FaTelegramPlane size={20} />
      </button>
    </Contact>
  </Container>
);

export default Formulario;

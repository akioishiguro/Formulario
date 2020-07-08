import React, { useCallback, useRef } from 'react';

// Bibliotecas
import { FaTelegramPlane, FaUser, FaPhone } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

// Componentes
import getValidationErrors from '../../utils/getValidationErrors';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';

// Estilizacao
import { Container, Contact, Background } from './styles';

// Imgs
import Ak from '../../assets/Ak.svg';

const Formulario: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome Obrigatorio'),
        email: Yup.string()
          .required('Email Obrigatorio')
          .email('Digite Um Email'),
        phone: Yup.string()
          .min(9, 'Numero Invalido')
          .max(11, 'Numero Invalido'),
        mensagem: Yup.string(),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      console.log(data);
    } catch (err) {
      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);
    }
  }, []);
  return (
    <Container>
      <Background />
      <Contact>
        <img src={Ak} alt="Ak" />
        <p>Preencha o formulário abaixo que entraremos em contato com você.</p>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="name" icon={FaUser} type="text" placeholder="Nome *" />

          <Input name="email" icon={FiMail} type="text" placeholder="Email *" />

          <Input
            name="phone"
            icon={FaPhone}
            type="text"
            placeholder="Telefone *"
          />

          <TextArea name="mensagem" placeholder="Mensagem" />

          <button type="submit">
            Enviar
            <FaTelegramPlane size={20} />
          </button>
        </Form>
      </Contact>
    </Container>
  );
};

export default Formulario;

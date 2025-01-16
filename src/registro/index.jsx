import React from 'react';


import {
    Label,
    Container,
    FormWrapper,
    Title,
    From,
    Input,
    Button,
    Link
} from '../login/styled';

const Registro = () => {

    
    return (
        <Container>
            <FormWrapper>
            
                <Title>Registra-se</Title>
                <From>
                    <Label>Nome de Usuario</Label>
                    <Input type="text" placeholder="Digite seu nome de usuario" />
                    <Label>Senha</Label>
                    <Input type="password" placeholder="Digite sua senha" />
                    <Button type="submit">Cadastrar</Button>
                </From>
                <Link to ="/">Voltar</Link>
            </FormWrapper>
        </Container>
    )
}

export default Registro
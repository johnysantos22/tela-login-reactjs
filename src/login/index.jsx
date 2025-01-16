import React from "react";


import { 
    Container, 
    FormWrapper, 
    Title, 
    Label, 
    Input, 
    Button,
    Link,
    Footer
} from "./styled"


const Login = () => {

    
    return (
        <Container>
            <FormWrapper>
                <Title>Faça seu Login</Title>
                <>
                    <Label>Nome de Usuario</Label>
                    <Input type="text" placeholder="Digite seu nome de usuario" />
                    <Label>Senha</Label>
                    <Input type="password" placeholder="Digite sua senha" />
                    <Button type="submit">Entrar</Button>
                </>
                <Footer>
                    Não tem uma conta?{''}
                    <Link to="/register" >Cadastre-se</Link>
                </Footer>
            </FormWrapper>
        </Container>
    )
}

export default Login
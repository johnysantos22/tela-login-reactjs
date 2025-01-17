import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  color: #ffffff;
  
`;

export const FormWrapper = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  background-color:rgb(131, 130, 130);
  padding: 50px;
 
 
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1.5rem;
 
`;

export const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
  color: #333;

`;

export const Input = styled.input`
 width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 1rem;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #ffa500;
  }

`;

export const Button = styled.button`
 width: 100%;
  background: #ffa500;
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: #e59400;
  }

`;

export const Footer = styled.div`
text-align: center;
margin-top: 1rem;
`;


export const Link = styled(NavLink)`
color: #ffa500;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;
import { Link } from 'react-router-dom'

import styled from 'styled-components'

export const Circulo = styled(Link)`
  width: 60px;
  font-size: 24px;
  height: 60px;
  background-color: #4CAF50;
  border-radius: 50%;
  border: none;
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  z-index: 1000;
  &:hover {
    background-color: #45a049;
    transform: scale(1.05);
`

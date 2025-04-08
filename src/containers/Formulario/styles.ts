import styled from 'styled-components'

export const Form = styled.form`
  max-width: 547px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  textarea {
    resize: none;
    height: 100px;
    padding: 8px;
    background-color: #fff;
    border-radius: 8px;
    font-weight: bold;
    color: #666666;
    font-size: 14px;
    border-color: #666666;
    width: 100%;
    margin-bottom: 16px;
  }
`

export const Opcoes = styled.div`
  p {
    margin-bottom: 8px;
  }

  input {
    margin-right: 8px;
  }

  label {
    margin-right: 16px;
  }
  justify-content: space-between;
  margin-bottom: 16px;
  font-size: 14px;
  color: #666666;
  font-weight: bold;
  input[type='radio'] {
    margin-right: 8px;
  }
`
export const Opcao = styled.div`
  display: inline;
  text-transform: capitalize;
  align-items: center;
  margin-bottom: 8px;
  font-size: 14px;
  color: #666666;
  font-weight: bold;
`

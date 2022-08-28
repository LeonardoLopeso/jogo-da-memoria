import styled from 'styled-components';

type ContainerProps = {
  showBackground: boolean;
}

export const Container = styled.div<ContainerProps>`
  background-color: ${props => props.showBackground ? '#1550FF' : '#E2E3E3'};
  height: 100px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid ${props => props.showBackground ? '#FFF' : '#CCC'};
  box-shadow: 1px 2px 2px rgba(0,0,0,.1);
  transition: all ease .3s;
  
  &:hover {
    border: 1px solid rgba(0,0,0,.2);
    box-shadow: 1px 2px 15px rgba(0,0,0,.1);
  }
`;

type IconProps = {
  opacity?: number;
}

export const Icon = styled.img<IconProps>`
  width: 40px;
  height: 40px;
  opacity: ${props => props.opacity ?? 1 }
` ;
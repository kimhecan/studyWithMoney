import styled from 'styled-components';
import { Card } from 'antd';

export const StyledCard = styled(Card)`
  border: 1px solid lightgray;
  margin: 40px 50px; 
  padding: 20px;
  font-size: 15px;
  font-family: 'Do Hyeon', sans-serif;
  transition: all ease 0.5s 0s;
  &:hover {
    box-shadow: 5px 5px 5px lightgray;
    cursor: pointer;
  }

  strong {
    font-size: 27px;
  }
  .ant-card-body {
    display: none;
  }
  
`;

export const CardHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

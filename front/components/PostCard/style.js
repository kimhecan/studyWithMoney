import styled from 'styled-components';
import { Card } from 'antd';

export const StyledCard = styled(Card)`
  margin: auto auto;
  margin-top: 100px;
  box-shadow: 0px 0px 1px 0.05px gray;
  max-width: 700px;
`;

export const CardHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CardHeader = styled.div`
  margin: 15px;
  flex: 1;
`;

export const DateWrapper = styled.div`
  flex: 15;
  margin-top: 12px;
`;

export const StyledSpan = styled.span`
  float: right; 
  margin-right: 10px; 
  color: gray;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

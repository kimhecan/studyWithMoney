import styled from 'styled-components';
import { Comment, Avatar } from 'antd';

export const StyledComment = styled(Comment)`
  background-color: white;
  .ant-comment-inner {
    padding: 5px;
  }
`;

export const StyledAvatar = styled(Avatar)`
  img {
    width: ${props => props.size === 'small' ? '25px' : '30px'};
    height: ${props => props.size == 'small' ? '25px' : '30px'};
  }
`;

export const StyledSpan = styled.span`
  font-weight: bold;
  font-size: 12px;
  margintop: 3px;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

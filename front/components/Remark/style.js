import styled from 'styled-components';
import { Comment, Avatar } from 'antd';

export const StyledComment = styled(Comment)`
  background-color: white;
  max-width: 700px;
  margin: auto auto;
  .ant-comment-inner {
    padding: 5px;
  }
  .ant-comment-content-author-name {
    margin-left: 2px;
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

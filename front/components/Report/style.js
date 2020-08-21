import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  z-index: 5000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba( 242, 243, 245, 0.7 );

  .ant-card-body {
    display: none;
  }
`;

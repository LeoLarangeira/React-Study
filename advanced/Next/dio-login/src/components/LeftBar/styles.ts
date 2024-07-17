import styled from "styled-components";


export const BarContainer = styled.div`
  height:100%;
  width: 100%;
  display:flex;
  flex-direction:column;
  padding:10px;
  box-sizing:content-box;
`;

export const BarItems = styled.div`
  display: flex;
  flex-direction:column;
  width:100%;
`;

export const BarItem = styled.a`
  margin: 10px 10px 5px;
  width:90%;
  padding:10px;
  background-color: #333
`;

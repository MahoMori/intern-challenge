import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const TilesContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const EachTile = styled.div`
  position: relative;
  //   width: 400px;
  width: calc(90% / 2);
  height: 500px;
  object-fit: cover;
  display: flex;
  justify-content: center;
  margin: 15px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.6);
`;

export const FavIcon = styled(FontAwesomeIcon)`
  color: #ff84ff;
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
`;

export const InfoContainer = styled.div`
  position: absolute;
  bottom: 10px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  width: 80%;
  box-shadow: 2px 2px 10px gray;
  height: 75px;
  overflow: hidden;
  transition: all 0.3s;

  &:hover {
    height: 425px;
    overflow: auto;
    background-color: rgba(255, 255, 255, 0.8);
  }
`;

export const TitleDate = styled.p`
  text-align: center;
  font-weight: bold;
  margin: 10px;
`;

export const Description = styled.p`
  margin: 0 15px 15px;
`;

export const TileImage = styled.img`
  object-fit: cover;
  border-radius: 3px;
  width: 100%;
  height: 500px;
`;

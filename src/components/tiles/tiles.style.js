import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { device } from "../../assets/screenSize";

export const TilesContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const EachTile = styled.figure`
  position: relative;
  width: 90%;
  height: 500px;
  object-fit: cover;
  display: flex;
  justify-content: center;
  margin: 15px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.6);

  @media ${device.laptop} {
    width: calc(90% / 2);
  }

  @media ${device.laptopL} {
    width: calc(90% / 3);
  }
`;

export const FavIcon = styled(FontAwesomeIcon)`
  font-size: 1.75rem;
  color: #e4007f;
  position: absolute;
  left: 10px;
  top: 10px;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 2px 2px 10px gray;
  // padding: 10px;
  width: 25px;
  height: 25px;
  -webkit-appearance: none;
  border-radius: 50px;
`;

export const InfoContainer = styled.div`
  position: absolute;
  bottom: 10px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  width: 90%;
  height: auto;
  box-shadow: 2px 2px 10px gray;
  overflow: hidden;
  transition: all 0.3s;

  &:hover {
    height: 425px;
    background-color: rgba(255, 255, 255, 0.8);
  }

  &:hover div {
    display: block;
  }

  @media ${device.tablet} {
    width: 80%;
  }
`;

export const InfoShowingDiv = styled.div`
  padding: 13px 0;
  & > :first-child {
    font-size: 1.25rem;
  }
`;

export const TitleDate = styled.p`
  text-align: center;
  font-weight: bold;
  margin: 2px 10px;
`;

export const InfoHidingDiv = styled.div`
  overflow: auto;
  height: 75%;
  display: none;

  @media ${device.tablet} {
    height: 80%;
  }
`;

export const Description = styled.p`
  margin: 0 15px 10px;
  line-height: 1.6rem;

  @media ${device.tablet} {
    padding: 0 7px;
  }
`;

export const TileImage = styled.img`
  object-fit: cover;
  border-radius: 3px;
  width: 100%;
  height: 500px;
`;

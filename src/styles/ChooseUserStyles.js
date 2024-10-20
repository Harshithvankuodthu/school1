// ChooseUserStyles.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ChooseUserContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  background-image: url("https://img.freepik.com/free-vector/four-happy-kids-with-backpacks-jumping-smiling_9975-108473.jpg?w=996&t=st=1729328437~exp=1729329037~hmac=43f803688f71972afb38ca26f5ffb59a22271a36686425279ee68be976a8e5d5");
  background-size: cover;
  background-position: center-down;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between; /* Spread items evenly horizontally */
    align-items: flex-start;
  }
`;

export const UserSection = styled.div`
  text-align: center; /* Center text */
  padding-top: 20px;

  @media screen and (min-width: 768px) {
    padding-top: 0;
    margin: 20px;
    text-align: left; /* Align text to the left for larger screens */
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #FF4500; /* Admin: Orange color */

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Button = styled(Link)`
  background-color: #7CFC00; /* Student: Light green color */
  color: white;
  border: none;
  padding: 10px 20px;
  margin-top: 10px;
  text-decoration: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #90EE90; /* Darker shade of green on hover */
  }

  @media screen and (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;

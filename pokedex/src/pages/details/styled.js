import styled from "styled-components";

export const Container = styled.div`
  background-color: #5e5e5e;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10.19rem;
  gap: 5rem;
  width: 86.82144rem;
  height: 41.4375rem;
  border-radius: 2.36788rem;
  background: ${(props) => props.color};
`;

export const Title = styled.div`
  width: 13.75rem;
  height: 4.5rem;
  color: #fff;
  font-family: Poppins;
  font-size: 3rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 2.3rem 73.75rem 2.3rem 2.5rem;
`;

export const FrontBackImageContainer = styled.div`
  height: 38.19rem;
  width: 17.625rem;
  margin-top: 1.63rem;
  margin-left: 2.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Image = styled.img`
  width: 17.625rem;
  height: 17.625rem;
  border-radius: 0.5rem;
  border: 2px solid #fff;
  background-color: #ffffff;
`;

export const StatusContainer = styled.div`
  width: 21.4375rem;
  height: 38.3125rem;
  border-radius: 0.75rem;
  background: #fff;
  border-radius: 0.75rem;
  margin: 1.5rem 2.13rem;
`;

export const TesteContainer = styled.div`
  margin-top: 1.5rem;
  width: 21.4375rem;
  height: 38.3125rem;
  background: #fff;
  border-radius: 0.75rem;
  margin-left: 3.25rem;
`;

export const TypeContainer = styled.div`
  
 
`;

export const MovesContainer = styled.div`
  margin-top: 3.25rem;
  width: 100%;
  height: 25rem;
  border-radius: 0.5rem;
  background: #ffffff;
`;
import styled from "styled-components";


const CardWrapper = styled.div`
    font-weight: bold;
    text-decoration: none;
    color: var(--primary-color);

    &:hover {
        color: var(--secondary-color);
    }
`;
const CardTitle = styled.h3`
    margin-top: 0;
  margin-bottom: 12px;
  font-size: 1.25rem;
`;
const CardDescription = styled.p`
    margin-top: 0;
  margin-bottom: 4px;
`;
export default function Card() {
  return (
    <CardWrapper >
      <CardTitle >Homer Simpson</CardTitle>
      <CardDescription>
        Homer Jay Simpson is a fictional character and the main protagonist of
        the American animated sitcom The Simpsons. He is voiced by Dan
        Castellaneta and first appeared, along with the rest of his family, in
        The Tracey Ullman Show short Good Night on April 19, 1987.
      </CardDescription>
    </CardWrapper>
  );
}

import styled from "styled-components";

const Section = ({ section: { subtitle, array } }) => {
  return (
    <Wrapper>
      <SubTitle>{subtitle}</SubTitle>
      <Grid>
        {array.map((item) => (
          <ListItem key={item.text}>
            <div>{item.icon && <item.icon color={item.iconColor} />} </div>
            <p>{item.text}</p>
          </ListItem>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default Section;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--nord3);
  border-radius: 1em;
  width: 100%;
  margin: 1rem 0;
`;
const Grid = styled.ul`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr;
`;
const SubTitle = styled.h3`
  color: var(--nord8);
  padding: 1rem;
  text-align: center;
  font-size: 1.5em;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  list-style: none;
`;

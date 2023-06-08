import styled from "styled-components";

const Section = ({ section: { subtitle, array } }) => {
  return (
    <Wrapper>
      <SubTitle>{subtitle}</SubTitle>
      <Grid>
        {array.map((item) => (
          <ListItem key={item.text}>
            {item.icon && <item.icon color={item.iconColor} />} {item.text}
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
  margin: 20px;
  width: calc(100% - 40px);
`;
const Grid = styled.ul`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr;
`;
const SubTitle = styled.h3`
  color: var(--nord8);
  margin: 10px 0;
  font-size: 1.5em;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  list-style: none;
`;

import  styled from 'styled-components'
import { CloseButton } from 'react-bootstrap';
import {hover} from "@testing-library/user-event/dist/hover";
import app from "../../src/App.css";

const Wrapper = styled.article`
  border-radius: var(--radii);
  background-color: car(--colrs-ui-base);
  box-shadow: var(--shadow);
  cursor: pointer;
  overflow: hidden;
`;

const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
  box-shadow: var(--shadow);
`;

const CardBody = styled.div`
  padding: 1rem 1.5rem 2rem`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
`;

const CardList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 1rem 0 0;
  
`;

const CardListItem = styled.li`
  font-weight: var(--fw-sm);
  line-height: 1.5;
  font-weight: var(--fw-light);
  & > b {font-weight: var(--fw-bold );}
`;


export const Card = ({ img, name,  info = [], onSelect, isSelected, onClick }) => {
    return (
        <Wrapper>
            <CardImage src={img} alt={name} onClick={onClick}/>
            <CardBody>
                <div className={app.cardfixer}>

                    <input  type="checkbox" checked={isSelected} onChange={onSelect}/>
                </div>
                <CardTitle>{name}</CardTitle>
                <CardList>
                    {info.map((el) => (
                        <CardListItem key={el.title}>
                            <b>{el.title}:</b> {el.description}
                        </CardListItem>
                    ))}
                </CardList>
            </CardBody>
        </Wrapper>
    );
};

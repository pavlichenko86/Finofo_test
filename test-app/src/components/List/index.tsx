import React, {FC} from 'react';
import {Fruits} from "../../types/fruits";
import {AddButton, FruitsListItemWrapper, Wrapper} from "./styles";
import FruitsListItem from "../FruitsListItem";

interface Props {
  fruits: Fruits[];
  onAdd: (id: number) => void;
}

const List: FC<Props> = ({fruits, onAdd}) => {
  return <Wrapper>
    {fruits.map((fruit) => {
      return (
        <FruitsListItemWrapper key={fruit.id}>
          <FruitsListItem fruit={fruit}/>
          <AddButton onClick={() => onAdd(fruit.id)}>Add</AddButton>
        </FruitsListItemWrapper>
      )
    })}
  </Wrapper>
}

export default List;
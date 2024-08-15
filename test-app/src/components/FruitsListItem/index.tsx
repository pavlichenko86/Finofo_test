import React, {FC} from 'react';
import {Fruits} from "../../types/fruits";
import {Wrapper} from "./styles";

interface Props {
  fruit: Fruits;
}

const FruitsListItem: FC<Props> = ({fruit}) => {
  return <Wrapper>
    <div>{fruit.name}</div>
    <div>{fruit.nutritions.calories} kcal</div>
  </Wrapper>;
}

export default FruitsListItem;
import React, {FC, useMemo} from 'react';
import {Fruits} from "../../types/fruits";
import { Wrapper, TitleWrapper, FruitsListItemWrapper} from "./styles";
import FruitsListItem from "../FruitsListItem";

interface Props {
  fruitsInJar: Fruits[];
}

const Jar: FC<Props> = ({fruitsInJar}) => {
  const kcalCount = useMemo(() => {
    let sum = 0;
    for (const item of fruitsInJar) {
      sum+= item.nutritions.calories
    }

    return sum;
  }, [fruitsInJar]);

  return <Wrapper>
    <TitleWrapper>
      <h2>Jar list</h2>
      <h4>Total kcal: {kcalCount}</h4>
    </TitleWrapper>

    <FruitsListItemWrapper>
      {fruitsInJar.map((fruit) => {
        return (
          <FruitsListItem key={fruit.id} fruit={fruit} />
        )
      })}
    </FruitsListItemWrapper>

  </Wrapper>
}

export default Jar;
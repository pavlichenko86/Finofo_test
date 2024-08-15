import React, { FC, useEffect, useState } from 'react';
import { Fruits } from '../../types/fruits';
import { Wrapper } from './styles';
import { map, chain, groupBy } from 'lodash';
import List from '../List';
import GroupList from '../GroupList';

interface Props {
  fruits: Fruits[];
  onAdd: (id: number) => void;
  onAddArray: (fruits: Fruits[]) => void;
}

interface GroupProps {
  group: string;
  fruits: Fruits[];
}

const FruitsList: FC<Props> = ({ fruits, onAdd, onAddArray }) => {
  const [group, setGroup] = useState('');
  const [fruitsGroupedArray, setFruitsGroupedArray] = useState<GroupProps[]>(
    [],
  );

  const grouping = (field: string) => {
    const res = chain(fruits)
      .groupBy(field)
      .map((value, key) => ({ group: key, fruits: value }))
      .value();

    setFruitsGroupedArray(res);
  };
  useEffect(() => {
    switch (group) {
      case 'order':
        return grouping('order');
      case 'genus':
        return grouping('genus');
      case 'family':
        return grouping('family');
      default:
        grouping('');
    }
  }, [group]);

  return (
    <Wrapper>
      <h2>Fruits list</h2>
      <select
        onChange={(e) => {
          setGroup(e.target.value);
        }}
      >
        <option value="" defaultChecked>
          None
        </option>
        <option value="order">Order</option>
        <option value="genus">Genus</option>
        <option value="family">Family</option>
      </select>
      {!!fruitsGroupedArray.length && group !== '' ? (
        <GroupList
          fruitsGroupedArray={fruitsGroupedArray}
          onAdd={onAdd}
          onAddArray={onAddArray}
        />
      ) : (
        <List fruits={fruits} onAdd={onAdd} />
      )}
    </Wrapper>
  );
};

export default FruitsList;

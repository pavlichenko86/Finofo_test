import React, { FC } from 'react';
import { Fruits } from '../../types/fruits';
import { Group, AddButton, Wrapper } from './styles';
import GroupListItem from '../GroupListItem';

interface GroupProps {
  group: string;
  fruits: Fruits[];
}

interface Props {
  fruitsGroupedArray: GroupProps[];
  onAdd: (id: number) => void;
  onAddArray: (fruits: Fruits[]) => void;
}

const GroupList: FC<Props> = ({ fruitsGroupedArray, onAdd, onAddArray }) => {
  return (
    <Group>
      {fruitsGroupedArray.map((group) => {
        return (
          <Wrapper key={group.group}>
            <GroupListItem key={group.group} group={group} onAdd={onAdd} />
            <AddButton onClick={() => onAddArray(group.fruits)}>Add</AddButton>
          </Wrapper>
        );
      })}
    </Group>
  );
};

export default GroupList;

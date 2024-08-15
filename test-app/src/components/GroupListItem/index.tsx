import React, {FC, useState} from 'react';
import {Fruits} from "../../types/fruits";
import {Wrapper, AddButton, FruitsListItemWrapper, ListWrapper, GroupName} from "./styles";
import FruitsListItem from "../FruitsListItem";
import { ReactComponent as ExpandMoreIcon } from '../../assets/expand-more.svg';
import { ReactComponent as ExpandLessIcon } from '../../assets/expand-less.svg';

interface GroupProps {
  group: string;
  fruits: Fruits[];
}

interface Props {
  group: GroupProps;
  onAdd: (id: number) => void;
}

const GroupListItem: FC<Props> = ({group, onAdd}) => {
  const [collapsed, setCollapsed] = useState(false);

  const handleCollapse = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <Wrapper key={group.group}>
      <GroupName onClick={handleCollapse}>
        <div>{group.group}</div>
        {collapsed ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </GroupName>
      {collapsed && <ListWrapper>{group.fruits.map((fruit) => {
        return (
          <FruitsListItemWrapper key={fruit.id}>
            <FruitsListItem fruit={fruit}/>
            <AddButton onClick={() => onAdd(fruit.id)}>Add</AddButton>
          </FruitsListItemWrapper>
        )
      })}</ListWrapper>}

    </Wrapper>
  )
}

export default GroupListItem;
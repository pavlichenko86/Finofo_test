import React, { FC } from 'react';
import {ErrorStyled} from './styles'

interface ErrorProps {onUpdate: () => void}

const Error: FC<ErrorProps> = ({onUpdate}) => {
  return <ErrorStyled><div><p>Something went wrong</p><button onClick={onUpdate}>Try again</button> </div></ErrorStyled>;
}

export default Error;
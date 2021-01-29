import React from 'react';

import './list.scss'

interface ListProps{
  children?: React.ReactNodeArray
}

const List: React.FC<ListProps> = ({children}) => (
  <ul className="main-table">{children}</ul>
)

export default List;
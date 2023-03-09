import React from 'react';
import Table from './Table';
import { useState } from 'react';

function SortableTable(props) {
  

  const { config } = props;

  const handleClick = (label) => {

  }

  const updatedConfig = config.map((column) => {
    if(!column.sortValue){
      return column;
    }

    return {
      ...column,
      header: () => <th onClick={() => handleClick(column.label)}>{column.label} IS SORTABLE</th>
    }
  })

  return (
    <div><Table {...props} config={updatedConfig }/></div>
  )
}

export default SortableTable
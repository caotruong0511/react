import React from 'react'
import type{Info} from '../type/Info';

type alo={
    Person:Info;
    name:Info
}

const ShowInfo = (Prop:alo) => {
    console.log(Prop)
  return (
    <div>{Prop.Person.name}</div>
  )
}

export default ShowInfo
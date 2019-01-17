import React from 'react'
export default function Table(props) {
  let todo = props.todo.map((value) => {
      return (<div key={value.id}>
        {value.text}
      </div>)
  })
  return (
    <div>
       {todo}
    </div>
  )
}

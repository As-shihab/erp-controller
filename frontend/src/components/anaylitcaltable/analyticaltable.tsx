import { AnalyticalTable, Bar, Input } from '@ui5/webcomponents-react'
import React from 'react'

export default function Analyticaltable() {
  return (
 <div>

<Bar 
design='Header'
startContent={<h1>Title the nature</h1>}

endContent={
  <div>
    <Input
    />
  </div>
}
>



</Bar>

     <AnalyticalTable
    columns={[
      {
        Header: 'Name',
        accessor: 'name'
      },
      {
        Header: 'Age',
        accessor: 'age',
        hAlign: 'End'
      },
      {
        Header: 'Friend Name',
        accessor: 'friend.name'
      },
      {
        Header: 'Friend Age',
        accessor: 'friend.age',
        hAlign: 'End'
      }
    ]}
    data={[
      {
        age: 80,
        friend: {
          age: 68,
          name: 'Carver Vance'
        },
        name: 'Allen Best',
        status: 'Positive'
      },
      {
        age: 31,
        friend: {
          age: 70,
          name: 'Strickland Gallegos'
        },
        name: 'Combs Fleming',
        status: 'None'
      },
      {
        age: 57,
        friend: {
          age: 28,
          name: 'Velez Powell'
        },
        name: 'Gould Logan',
        status: 'Negative'
      },
      {
        age: 27,
        friend: {
          age: 18,
          name: 'Ballard Talley'
        },
        name: 'Sally Garner',
        status: 'Critical'
      },
      {
        age: 74,
        friend: {
          age: 30,
          name: 'Cameron Reyes'
        },
        name: 'Esther Dillon',
        status: 'Indication01'
      },
      {
        age: 84,
        friend: {
          age: 32,
          name: 'Booth Howard'
        },
        name: 'Sofia Crosby',
        status: 'Indication02'
      },
      {
        age: 75,
        friend: {
          age: 21,
          name: 'Jenifer James'
        },
        name: 'Sophie Keller',
        status: 'Indication03'
      }
     

    ]

  }
 />
 </div>
  )
}

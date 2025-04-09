import { AnalyticalTable, Bar, Button, Input, Label, SegmentedButton, SegmentedButtonItem, Title, Toolbar } from '@ui5/webcomponents-react'
export default function GridTable() {
  return (
    <div>
<Bar
  design="Header"
  endContent={<span><Button   design='Emphasized'>New</Button></span>}
  startContent={<span>Start Content</span>}
>
  <span>
    Center Content
  </span>
</Bar>
    <AnalyticalTable
    className='p-3 shadow-sm'
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

  minRows={27}
  rowHeight={30}
 />
 </div>
  )
}

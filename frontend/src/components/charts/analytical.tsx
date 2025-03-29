import {
      AnalyticalCardHeader,
      NumericSideIndicator,
      CardHeader,
      Card
    } from '@ui5/webcomponents-react';
import React from 'react'
import { LineChart } from '@ui5/webcomponents-react-charts';

export default function Analytical() {
  return (
    <Card header={<AnalyticalCardHeader description="Q1, 2018" scale="K" state="Error" subtitleText="Revenue" titleText="Project Cloud Transformation" trend="Down" unitOfMeasurement="EUR" value="65.34"><NumericSideIndicator number="100" titleText="Target" unit="k"/><NumericSideIndicator number="34.7" titleText="Deviation" unit="%"/></AnalyticalCardHeader>}>
    <LineChart
      className="chromatic-ignore"
      dataset={[
        {
          name: 'January',
          users: 76
        },
        {
          name: 'February',
          users: 230
        },
        {
          name: 'March',
          users: 240
        },
        {
          name: 'April',
          users: 280
        },
        {
          name: 'May',
          users: 100
        }
      ]}
      dimensions={[
        {
          accessor: 'name'
        }
      ]}
      measures={[
        {
          accessor: 'users',
        
        }
      ]}
      noLegend
    />
  </Card>
  )
}

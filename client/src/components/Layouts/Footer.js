import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


export default ({ frequency, category, onSelect }) => {
    const index = category
    ? frequency.findIndex(group => group === category) + 1
    : 0

    const onIndexSelect = (e, index) =>
    onSelect(index === 0 ? '' : frequency[index - 1])

  return <Paper>
    <Tabs
      value={index}
      onChange={onIndexSelect}
      indicatorColor="primary"
      textColor="primary"
      fontSize="20px"
      centered
    >
      <Tab label="All"/>
      {frequency.map(group =>
        <Tab key={group} label={group} />
      )}
    </Tabs>
  </Paper>
}  
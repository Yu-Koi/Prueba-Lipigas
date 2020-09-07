import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { TableCell, TableRow } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import Hours from '../Components/Hours';



function TabPanel(props) {
  const { children, value, index, ...other } = props;
  

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [calendar, setCalendar] = React.useState([]);

  const [scheduledTime, setScheduledTime] = React.useState([]);

  React.useEffect(() => {
    console.log("useEffect");
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch(
      "http://5f4928b88e271c001650c73d.mockapi.io/AGENDAMIENTO/CONSULTARDISPONIBILIDAD"
    );
    const hoursAvailable = await data.json();
    console.log(hoursAvailable);
    setCalendar(hoursAvailable.data);
  };
  

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="Lunes"  {...a11yProps(0)} />
          <Tab label="Martes"  {...a11yProps(1)} />
          <Tab label="Miercoles"  {...a11yProps(2)} />
          <Tab label="Jueves"  {...a11yProps(3)} />
          <Tab label="Viernes"  {...a11yProps(4)} />
          <Tab label="Sabado"  {...a11yProps(5)} />
          <Tab label="Domingo"  {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Hours/>
    
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Hours/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Hours/>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <Hours/>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <Hours/>
      </TabPanel>
      <TabPanel value={value} index={5}>
      <Hours/>
      </TabPanel>
      <TabPanel value={value} index={6}>
      <Hours/>
      </TabPanel>
    </div>
  );
}

import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Container } from '@mui/material';

export default function ScrollableTabsButtonVisible() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <div style={ { backgroundColor: 'rgb(71 71 71)', } }>
      <Container fixed>
        <Box
          sx={{
            flexGrow: 1,
            bgcolor: 'rgb(71 71 71)',
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="visible arrows tabs example"
            sx={{
              [`& .${tabsClasses.scrollButtons}`]: {
                '&.Mui-disabled': { opacity: 0.3 },
              },
              color: "#fff"
            }}
          >
            <Tab label="Item One" sx={ { 
              color: "#fff",
                '&:hover': {
                backgroundColor: '#606060',
              },
            } } />
            <Tab label="Item Two" sx={ { 
              color: "#fff",
                '&:hover': {
                backgroundColor: '#606060',
              },
            } } />
            <Tab label="Item Three" sx={ { 
              color: "#fff",
                '&:hover': {
                backgroundColor: '#606060',
              },
            } } />
            <Tab label="Item Four" sx={ { 
              color: "#fff",
                '&:hover': {
                backgroundColor: '#606060',
              },
            } } />
            <Tab label="Item Five" sx={ { 
              color: "#fff",
                '&:hover': {
                backgroundColor: '#606060',
              },
            } } />
            <Tab label="Item Six" sx={ { 
              color: "#fff",
                '&:hover': {
                backgroundColor: '#606060',
              },
            } } />
            <Tab label="Item Seven" sx={ { 
              color: "#fff",
                '&:hover': {
                backgroundColor: '#606060',
              },
            } } />
          </Tabs>
        </Box>
      </Container>
    </div>
  );
}
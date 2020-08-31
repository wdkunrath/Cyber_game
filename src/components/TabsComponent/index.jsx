import React from "react";
//import "./styles.css";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabsComponent({ arrayTabs = [], arrayContent = [] }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <div>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="tabs for obligations"
        >
          {arrayTabs.map((element, index) => (
            <Tab key={index} label={element} {...a11yProps(index)} />
          ))}
        </Tabs>
      </div>
      {arrayContent.map((element, index) => (
        <TabPanel value={value} index={index} key={index}>
          {element()}
        </TabPanel>
      ))}
    </div>
  );
}

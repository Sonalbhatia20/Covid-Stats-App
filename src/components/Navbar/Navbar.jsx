import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import styles from './Navbar.module.css';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';


export default function ButtonAppBar() {

  return (
    <div className={styles.root}>
      <AppBar position="static" className={styles.contain} >
        <Toolbar>
          <IconButton edge="start" className={styles.menuButton} color="inherit" aria-label="menu">
            <TrendingUpIcon />
          </IconButton>
          <Typography variant="h6" className={styles.title}>
            Covid-19 Statistics
          </Typography>
          <Button color="inherit" href="https://www.investindia.gov.in/bip/resources/list-ngos-providing-relief-during-covid-19#:~:text=Khalsa%20Aid%20international%20is%20providing%20free%20oxygen%20concentrators%20to%20COVID%20patients.&text=MCKS%20Food%20for%20the%20Hungry,profit%20organization%20started%20in%202005." target="_blank">Partner NGOs</Button>
          <Button color="inherit" href="https://www.missionoxygen.org/" target="_blank">About</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

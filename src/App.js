import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core'; 
import NavBar from './components/NavBar'
import Grid from './components/Grid'
import Footer from './components/Footer'
import './App.css';
//changes to imports 
import SecurityIcon from '@material-ui/icons/Security';
import EventNoteIcon from '@material-ui/icons/EventNote';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import ComputerIcon from '@material-ui/icons/Computer';
import HttpIcon from '@material-ui/icons/Http';

const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#2e1667",
    },
    secondary: {
      main:"#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace:{
    marginTop: "2.5rem",
  },
  grid:{
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap", 
  },
})

function App() {
  const classes = styles(); 

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar/>
        <div className={classes.wrapper}>
          <Typography variant="h2" className={classes.bigSpace} color="primary">
            A Democratic Token For a New Age 
          </Typography>
          <Typography variant="h5" className={classes.littleSpace} color="primary">
            Choice Coin is an Algorand Standard Asset that powers Decentralized Decisions, a voting and governance software built directly on the Algorand Blockchain. Decentralized Decisions enables organizations to make governance decisions in an open and decentralized manner. For the Choice Coin DAO, Decentralized Decisions leverages Proof-of-Participation as a governance mechanism, allowing voters to have a larger say in direct proportion to their contribution to the network. 
          </Typography>
        </div>
        <div className={`${classes.grid} ${classes.bigSpace}`}>
          <Grid icon={<SecurityIcon style={{fill: "#4360A6", height:"125", width:"125"}}/>}  title="Secure" btnTitle="Show me More" />
          <Grid icon={<EventNoteIcon style={{fill: "#449A76", height:"125", width:"125"}}/>} title="Reliable" btnTitle="Show me More"/>
          <Grid icon={<TrendingUpIcon style={{fill: "#D05B2D", height:"125", width:"125"}}/>}  title="Performant" btnTitle="Show me More"/>
        </div>
        <div className={`${classes.grid} ${classes.bigSpace}`}>  
          <Grid icon={<ImportExportIcon style={{fill: "#5EA780", height:"125", width:"125"}}/>}  title="Modular" btnTitle="Show me More"/>
          <Grid icon={<ComputerIcon style={{fill: "#E69426", height:"125", width:"125"}}/>}  title="Multi-Platform" btnTitle="Show me More"/>
          <Grid icon={<HttpIcon style={{fill: "#2EA09D", height:"125", width:"125"}}/>} title="Connected" btnTitle="Show me More"/>
        </div>
        <div className={classes.wrapper}>
          <Typography variant="h3" className={classes.bigSpace} color="primary">
            Promoting Democracy and Decentralization
          </Typography>
          <Typography variant="h5" className={classes.littleSpace} color="primary">
            

            Decentralized Voting

            Choice Coin powers Decentralized Voting Technology that will define governance for the next generation.

            Participatory Validation

            Holders of Choice Coin can immediately vote on allocations for the network, which will help democratic causes and organizations.

            Open Development

            The Choice Coin Network is entirely open source, and all participants can develop openly on both Choice Coin and its voting protocol.
 
          </Typography>
        </div>
        <div className={classes.bigSpace}>
          <Footer/>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
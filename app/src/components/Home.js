import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  coverIamge: {
    width: '100%',
  },
  flex: {
    flexGrow: 1,
  },
  paper: {
    textAlign: 'center',
  },
  subPaper: {
    textAlign: 'left',
    margin: '3em 3em',
    fontSize: '20px',
    color: 'gray',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  root: {
    height: '100%',
  },
  title: {
    margin: 'auto',
    color: theme.palette.common.white,
  }
});

class Home extends Component {
  onLoginClicked = () => {
    this.props.history.push('/login');
  }

  render() {
    const {classes} = this.props
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit" className={classes.flex}>
              OSA
            </Typography>
            <Button color="inherit"
              onClick={this.onLoginClicked}
              >
              Log In
            </Button>
          </Toolbar>
        </AppBar>
        <Grid container
          alignitem="center"
          justify="center"
          className="login-background"
          >
          <Paper className={classes.paper} xs={8} sm={6} >
            <img className={classes.coverIamge}
              src="https://image.ibb.co/mAuxZJ/Screen_Shot_2018_07_21_at_4_42_35_PM.png"/>
            <h1>
              Open the window to the world for Kids
            </h1>
          </Paper>
          <div className={classes.subPaper}>
            <h3>
              Parents are tired and overwhelmed, especially parents with children who have special needs, such as autism.
            </h3>
            <h3>
              Most therapeutic approaches don't model neurotypical play, therefore our kids don't have the opportunity to learn things like theory of mind, initiating interaction, and good 'ole Parallel Play or Cooperative Play skills!
            </h3>
          </div>
       </Grid> 
      </div>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
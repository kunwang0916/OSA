import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  paper: {
    margin: '10em auto auto auto',
    textAlign: 'center',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  form: {
    padding: '1em',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '20em',
  },
  button: {
    margin: theme.spacing.unit,
  },
  root: {
    height: '100%',
  },
  title: {
    margin: 'auto',
    color: theme.palette.common.white,
  }
});

class Login extends Component {
  state = {
    userName: '',
    password: '',
    loading: false,
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  onClickLogin = () => {
    const { userName, password } = this.state || {};
    // prototype demo use hard code 
    if (userName === 'test@gmail.com' && password === '123456') {
      this.props.history.push('/courseList');
    } else {
      toast.error('wrong account info');
    }
  }

  render() {
    const { classes } = this.props;
    const { userName, password } = this.state || {};
    const disableBtn = (userName.length === 0) || (password.length === 0);
    return (
      <div className={classes.root}>
      <Grid container
        alignitem="center"
        justify="center"
        className="login-background"
        >
        <ToastContainer />
        <Paper className={classes.paper} xs={8} sm={6} >
          <AppBar position="static">
            <Toolbar>
              <Typography variant="title" component="h1" className={classes.title}>
                OSA
              </Typography>
            </Toolbar>
          </AppBar>
          <FormGroup className={classes.form}>
            <TextField
              id="userName"
              label="User Name:"
              className={classes.textField}
              value={userName}
              onChange={this.handleChange('userName')}
              fullWidth
              margin="normal"
            />
            <TextField
              id="password"
              label="Password:"
              type="password"
              value={password}
              onChange={this.handleChange('password')}
              className={classes.textField}
              fullWidth
              margin="normal"
            />
            <Button variant="raised" 
              color="primary" 
              className={classes.button}
              onClick={this.onClickLogin}
              disabled={disableBtn}>
              Login
            </Button>
          </FormGroup>
        </Paper>
      </Grid>
    </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  flex: {
    flexGrow: 1,
  },
  gridList: {
    width: 600,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

const LIST_DATA = [
  {
    title: 'Cultivating Healthy Relationships Through Sports',
    author: 'Kelsie Whitehead',
    image: 'https://cdn-s3.si.com/styles/marquee_large_2x/s3/images/AUTISMSPORTS_web.jpg_0.jpeg',
  },
  {
    title: 'Autism Awareness Course for Parents - Autism Training',
    author: 'Taslima Harrison',
    image: 'http://paragonautismservices.com/wp-content/uploads/2013/08/Family-Training-980x445.jpg'
  },
  {
    title: 'Autism Step by Step: The ultimate guide for families',
    author: 'Montell Morrow',
    image: 'https://alm7.wikispaces.com/file/view/feature-autism.jpg/337155652/800x345/feature-autism.jpg'
  }
];

class CourseList extends Component {
  onCourseClick = ()=> {
    this.props.history.push('/courseDetail');
  }

  onLogoutClick =()=> {
    this.props.history.push('/');
  }

  generateList = (listData, classes) => {
    let rows = listData.map((data) => {
      return (
        <GridListTile key={data.img}
          cols={2}
          onClick={this.onCourseClick}>
          <img src={data.image} alt={data.title} />
          <GridListTileBar
            title={data.title}
            subtitle={<span>by: {data.author}</span>}
            actionIcon={
              <IconButton className={classes.icon}>
                <InfoIcon />
              </IconButton>
            }
          />
        </GridListTile>
      )
    });

    return (
      <GridList cellHeight={300} 
        className={classes.gridList}
        spacing={20} 
        >
        {rows}
      </GridList>
    );
  }

  render() {
    const { classes } = this.props;
    const list = this.generateList(LIST_DATA, classes);
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              OSA
            </Typography>
            <Button color="inherit"
              onClick={this.onLogoutClick}>Log out</Button>
          </Toolbar>
        </AppBar>
        { list }
      </div>
    )
  }
}

CourseList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CourseList);

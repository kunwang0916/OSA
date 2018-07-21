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
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

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
    title: 'course A1',
    author: 'Jalal Zevulun',
    image: 'http://www.learnod.com/img/courses/technical-analysis-online-course.jpg'
  },
  {
    title: 'course A1',
    author: 'Jalal Zevulun',
    image: 'http://www.learnod.com/img/courses/technical-analysis-online-course.jpg'
  },
  {
    title: 'course A1',
    author: 'Jalal Zevulun',
    image: 'http://www.learnod.com/img/courses/technical-analysis-online-course.jpg'
  },
  {
    title: 'course A1',
    author: 'Jalal Zevulun',
    image: 'http://www.learnod.com/img/courses/technical-analysis-online-course.jpg'
  },
  {
    title: 'course A1',
    author: 'Jalal Zevulun',
    image: 'http://www.learnod.com/img/courses/technical-analysis-online-course.jpg'
  },
  {
    title: 'course A1',
    author: 'Jalal Zevulun',
    image: 'http://www.learnod.com/img/courses/technical-analysis-online-course.jpg'
  },
  {
    title: 'course A1',
    author: 'Jalal Zevulun',
    image: 'http://www.learnod.com/img/courses/technical-analysis-online-course.jpg'
  },
  {
    title: 'course A1',
    author: 'Jalal Zevulun',
    image: 'http://www.learnod.com/img/courses/technical-analysis-online-course.jpg'
  },
];

class CourseList extends Component {

  generateList = (listData, classes) => {
    let rows = listData.map((data) => {
      return (
        <GridListTile key={data.img}
          cols={2}>
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
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">CourseList</ListSubheader>
        </GridListTile>
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
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              OSA
            </Typography>
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

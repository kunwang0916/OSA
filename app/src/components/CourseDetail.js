import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import YouTube from 'react-youtube';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
  content: {
    flexGrow: 1,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  card: {
    maxWidth: 600,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  description: {
    textAlign: 'left',
  }
});

const COURSE_DETAIL = {
  title: 'Autism Awareness Course for Parents - Autism Training',
  image: 'http://paragonautismservices.com/wp-content/uploads/2013/08/Family-Training-980x445.jpg',
  author: 'Taslima Harrison',
}

const VIDEOS_DATA = [
  {
    title: "The Son-Rise Program - 1",
    youtubeId: "DhVm4d2vKCU"
  },
  {
    title: "The Son-Rise Program - 2",
    youtubeId: "TLDmgGL6sGk"
  },
  {
    title: "The Son-Rise Program - 3",
    youtubeId: "lMIw8Eo3AmE"
  },
  {
    title: "The Son-Rise Program - 3",
    youtubeId: "xnRYPfgjBZY"
  }
]

class CourseDetail extends Component {
  generateVideoList =(listData, classes)=> {
    let videoOpt = {
      height: '300',
      width: '600',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
        fs: 1,
        controls: 1,
      }
    };
    const count = listData.length;
    let rows = listData.map((data, index) => {
      return (
        <GridListTile key={data.img}
          cols={2}
          onClick={this.onCourseClick}>
          <GridListTileBar
            title={data.title}
            subtitle={<span>Part: {index + 1} / {count} </span>}
            actionIcon={
              <IconButton className={classes.icon}>
                <InfoIcon />
              </IconButton>
            }
          />
          <YouTube videoId={data.youtubeId} 
            opts={videoOpt}/>
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
    const { classes } = this.props 
    const list = this.generateVideoList(VIDEOS_DATA, classes);
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              {COURSE_DETAIL.title}
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={classes.content}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={COURSE_DETAIL.image}
              title={COURSE_DETAIL.title}
            />
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                Author: {COURSE_DETAIL.author}
              </Typography>
              <Typography className={classes.description}>
              &nbsp;&nbsp;&nbsp;&nbsp;Autism is a very unique developmental disorder for which there is no cure. 
              <br/><br/>
              The autism spectrum is extremely wide so the disorder can manifest itself in a variety of ways and each case will be particularly unique to the individual.
              <br/><br/>
              This course is designed to help individuals understand the world of autism so that they can help a child cope with this developmental disorder and achieve as much in life as possible. You will learn the skills and information necessary to help an autistic child/adult better understand the world and their place in it.
              <br/><br/>
              You Will Learn All of the Following:
              <br/><br/>
                <ul>
                  <li>You will learn About the autism spectrum and what it means to be autistic</li>
                  <li>You will learn About various therapeutic treatments and methods to help teach someone with autism how to better communicate and relate to the world</li>
                  <li>You will understand How to deal with a child's tantrums and emotional outbursts in an effective and caring way, so that the child might learn how to express themselves in a more calm and collected fashion</li>
                  <li>You will learn How to effectively express emotion and show autistic children that they are loved - without sending them into sensory overload</li>
                  <li>You will learn About all the various educational programs and schools that can help </li>
                  <li>an autistic child or autistic person learn to function at their highest level in society</li>
                  <li>You will learn How to find the best doctors for someone's needs - including a pediatrician, physician, clinical psychologist, and speech therapist</li>
                </ul>

              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" size="small" color="primary">
                Share
              </Button>
              <Button variant="contained" size="small" color="secondary" >
                Subscribe 
              </Button>
            </CardActions>
            <CardContent>
              {list}
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}

CourseDetail.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CourseDetail);
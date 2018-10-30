import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { mod } from 'react-swipeable-views-core';
import { virtualize } from 'react-swipeable-views-utils';
const VirtualizeSwipeableViews = virtualize(SwipeableViews);
const styles = () => ({
  root: {
    display: "flex",
    justify: "center"
  }
});
class App extends React.Component<any, any> {
  public render() {
    const slideRenderer = (params: any) => {
      const data = require('./data.json');
      const { index, key } = params;
      const slideContent = (n: any) => {
        return (
          <a href={data[n].href} key={key}>
            <img width="100%" src={data[n].src} />
          </a>
        )
      }
      switch (mod(index, data.length)) {
        case 0:
          return(
            slideContent(0)
          )
        case 1:
          return(
            slideContent(1)
          )
        default:
          return (null)
      }
    }
    const { classes } = this.props;
    return (
      <Grid className={classes.root}>
        <Grid xs={8} xl={2}>
          <Grid className={classes.demo} justify="center">
            <VirtualizeSwipeableViews slideRenderer={slideRenderer} />
          </Grid>
        </Grid>
      </Grid>
    )
  }
}
export default withStyles(styles)(App);

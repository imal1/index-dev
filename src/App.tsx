import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { mod } from 'react-swipeable-views-core';
import { virtualize } from 'react-swipeable-views-utils';
const VirtualizeSwipeableViews = virtualize(SwipeableViews);
const styles = () => ({
  root: {
    display: "flex"
  }
});
class App extends React.Component<any, any> {
  public data = require('./data.json');
  public state = { n: 0 }
  public m = (i: number) => (mod(i, this.data.length))
  public render() {
    const t = this;
    const { classes } = t.props;
    return (
      <Grid container={true} className={classes.root} justify="center">
        <Grid item={true} xs={8} xl={2}>
          <VirtualizeSwipeableViews
            resistance={true}
            slideRenderer={t.sR}
            onChangeIndex={t.hS}
          />
        </Grid>
        <Grid item={true} xs={10} xl={4}>
          <InputBase />
        </Grid>
      </Grid>
    )
  }
  private sR = (params: any) => {
    const t = this;
    const { index, key } = params;
    const sC = (n: number) => {
      const td = t.data[n]
      return (
        <a href={td.href} key={key}>
          <img width="100%" src={td.src} />
        </a>
      )
    }
    switch (t.m(index)) {
      case 0:
        return (sC(0))
      case 1:
        return (sC(1))
      default:
        return (null)
    }
  }
  private hS = (n: number) => {
    this.setState({ n })
  }
}
export default withStyles(styles)(App);

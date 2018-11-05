import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import SvgIcon from "@material-ui/core/SvgIcon";
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
          <Paper>
            <Grid container={true}>
              <Grid item={true}>
                <SvgIcon color="action">
                  <path d="M15.5 14h-.79l-.26-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                </SvgIcon>
              </Grid><Grid item={true}>
                <InputBase />
              </Grid>
            </Grid>
          </Paper>
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

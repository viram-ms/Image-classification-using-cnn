import React from "react";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  root: {
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
    borderRadius: "16px",
    boxShadow: "none",
    marginTop: 5
  },
  wrapper: {
    position: "relative"
  },
  buttonProgress: {
    color: theme.secondaryColor,
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12
  },
  roundButton: {
    borderRadius: "20px"
  },
  smallFont: {
    fontSize: "13px"
  }
});

class LoadingButton extends React.Component {
  render() {
    const {
      classes,
      submitting,
      disabled,
      roundbutton,
      smallFont,
      ...rest
    } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <Button
            classes={{
              root: roundbutton ? classes.roundButton : classes.root,
              label: smallFont ? classes.smallFont : ""
            }}
            {...rest}
            disabled={submitting || disabled}
          >
            {this.props.children}
            {submitting && (
              <CircularProgress size={24} className={classes.buttonProgress} />
            )}
          </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(LoadingButton);

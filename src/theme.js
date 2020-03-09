import { createMuiTheme } from "@material-ui/core/styles";

const variables = {
  primaryColor: "#62789E",
  secondaryColor: "#E85D75",
  primaryBlack: "#3C4858",
  appBar: "#785D60",
  paleWhite: "#FFFDF7",
  white: "#000000",
  viewportFullHeight: `calc(100vh - 8em)`,
  bgColor: 'rgba(255, 255, 255)',
};

let baseTheme = createMuiTheme({
  typography: {
    useNextVariants: true,
    subtitle1: {
      fontFamily: "Open Sans, sans-serif",
      fontSize: "16px",
      letterSpacing: "0.0015em",
      color: "rgba(0, 0, 0, 0.8)"
    },
    subtitle2: {
      fontFamily: "Open Sans, sans-serif",
      fontWeight: 600,
      fontSize: "14px",
      letterSpacing: "0.001em",
      color: "rgba(0, 0, 0, 0.8)"
    },
    h1: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: 300,
      fontSize: "64px",
      letterSpacing: "-0.005em",
      color: "rgba(0, 0, 0, 0.8)"
    },
    h2: {
      fontFamily: "Poppins, sans-serif",
      fontSize: "48px",
      color: "rgba(0, 0, 0, 0.8)"
    },
    h3: {
      fontFamily: "Poppins, sans-serif",
      fontSize: "34px",
      letterSpacing: "0.0025em",
      color: "rgba(0, 0, 0, 0.8)"
    },
    h4: {
      fontFamily: "Poppins, sans-serif",
      fontSize: "24px",
      letterSpacing: "0.0025em",
      color: "rgba(0, 0, 0, 0.8)"
    },
    h5: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: 500,
      fontSize: "20px",
      letterSpacing: "0.0025em",
      color: "rgba(0, 0, 0, 0.8)"
    },
    body1: {
      fontFamily: "Open Sans, sans-serif",
      fontWeight: 500,
      fontSize: "16px",
      letterSpacing: "0.005em",
      color: "rgba(0, 0, 0, 0.8)"
    },
    body2: {
      fontFamily: "Open Sans, sans-serif",
      fontSize: "14px",
      letterSpacing: "0.0025em",
      color: "rgba(0, 0, 0, 0.8)"
    },
    caption: {
      fontFamily: "Open Sans, sans-serif",
      fontSize: "12px",
      letterSpacing: "0.004em",
      color: "rgba(0, 0, 0, 0.8)"
    }
  },

  palette: {
    primary: {
      main: variables.primaryColor
    },
    secondary: {
      main: variables.secondaryColor
    },
    white: {
      main: variables.white
    }
  },
  ...variables
});

export const muiTheme = {
  ...baseTheme,
  overrides: {
    MuiTypography: {
      root: {
        overflowWrap: "break-word"
      }
    },
    MuiButton: {
      text: {
        borderRadius: "16px",
        boxShadow: "none"
      }
    },
    MuiInputLabel: {
    //   shrink: {
    //     fontSize: "12px"
    //   }
    },
    MuiTableCell: {
      root: {
        padding:"14px 0px 14px 8px"
      }
    }
    // MuiInput: {
    //   underline: {
    //     //borderBottom: '5px solid rgba(0, 0, 0, 0.9)',
    //     "&:before": {
    //       // The MUI source seems to use this but it doesn't work
    //       opacity: 0.2,
    //       borderBottom: "1px solid rgba(0, 0, 0, 0.9)"
    //     }
    //   }
    // }
  }
};

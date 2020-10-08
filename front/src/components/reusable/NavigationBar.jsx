import { withStyles } from "@material-ui/core";
import Component from "react";
class NavBar extends Component {
  render() {


    return (
   <div>
     
   </div>
    );
  }
}

const styles = (theme) => ({
  topBar: {
    display: "table",
    width: "100%",
    paddingBottom: 10
    // backgroundColor: theme.palette.primary.main
  }
});

const NavigationBar = withStyles(styles, { withTheme: true })(NavBar);
export default NavigationBar;

import { DRAWER_WIDTH } from "../../constants";

const styles = theme => ({
  drawerPaper: {
    width: DRAWER_WIDTH
  },
  toolbar: {
    ...theme.mixins.toolbar
  }
});

export default styles;

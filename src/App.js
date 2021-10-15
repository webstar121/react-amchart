import { BrowserRouter as Router } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Sidebar from "./common/components/oaSidebar";
import Header from "./common/components/oaHeader";
import OARoutes from "./routes/oaRoutes";
import "./App.css";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.root}>
        <Header />
        <Sidebar />
        <OARoutes />
      </div>
    </Router>
  );
}

export default App;

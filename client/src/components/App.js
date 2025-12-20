import { Component, React /*useEffect*/ } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import Root from "./Root";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import SurveyNew from "./surveys/SurveyNew";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<Landing />} />
      <Route path="surveys" element={<Dashboard />}>
        <Route path="new" element={<SurveyNew />} />
      </Route>
    </Route>
  )
);

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return <RouterProvider router={router} />;
  }
}

/*
const App = (props) => {
  useEffect(() => {
    props.fetchUser();
  }, []);

  return <RouterProvider router={router} />;
};*/

export default connect(null, actions)(App);

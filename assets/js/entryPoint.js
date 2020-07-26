// import "./recipes/startup/registration";
// import "./recipes-redux/startup/registration";
// import "./liform/startup/registration";
import ReactOnRails from "react-on-rails";

import Home from "./components/home/Home";
import Auth from "./auth/components/Auth";
import Subscribe from "./auth/components/Subscribe";

ReactOnRails.register({ Home });
ReactOnRails.register({ Auth });
ReactOnRails.register({ Subscribe });
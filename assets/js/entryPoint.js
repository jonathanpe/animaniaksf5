// import "./recipes/startup/registration";
// import "./recipes-redux/startup/registration";
// import "./liform/startup/registration";
import ReactOnRails from "react-on-rails";
import Header from "./components/layout/Header";
import UserContext from "./general/components/UserContext";
import Auth from "./auth/components/Auth";
import Home from "./components/home/Home";
import Subscribe from "./auth/components/Subscribe";
import configureStore from "./redux/store/store";


const store = configureStore;

ReactOnRails.registerStore({ store });
ReactOnRails.register({ UserContext });
ReactOnRails.register({ Home });
ReactOnRails.register({ Auth });
ReactOnRails.register({ Subscribe });
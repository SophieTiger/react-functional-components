import css from './App.module.css';
import Sidebar from "./components/Sidebar"
import NavBarSimple from "./components/NavBarSimple"
import NavBarForm from './components/NavBarForm';
import RenderingLists from './components/RenderingLists';
import Content from './components/Content';
import LifeCyclesCDM from './components/LifeCyclesCDM';
import LifeCyclesCDU from './components/LifeCyclesCDU';
import LifeCyclesCWU from './components/LifeCyclesCWU';
import Loader from './components/Loader';
import ControlledForm from './components/ControlledForm';
import UnControlledForm from './components/UnControlledForm'
import SearchBar from './components/SearchBar';
import ControlledFormHooks from './components/ControlledFormHooks';
import UseStateWithArrays from './components/UseStateWithArrays';
import UseStateWithObjects from './components/UseStateWithObjects';
import UseEffectCounter from './components/UseEffectCounter';
import UseEffectCounterContainer from './components/UseEffectCounterContainer';
import ContentHooks from './components/ContentHooks';
import HTTPRequests from './components/HTTPRequests';

function App() {
  return (
    <div className={css.App}>
      < Sidebar />
      {/* < NavBarSimple /> */}
      <NavBarForm />
      {/* <Content /> */}
      {/* <RenderingLists /> */}
      {/* <LifeCyclesCDM /> */}
      {/* <LifeCyclesCDU /> */}
      {/* <LifeCyclesCWU /> */}
      {/* <Loader /> */}
      {/* <ControlledForm /> */}
      {/* <UnControlledForm /> */}
      {/* <SearchBar /> */}
      {/* <ControlledFormHooks /> */}
      {/* <UseStateWithArrays /> */}
      {/* <UseStateWithObjects /> */}
      {/* <UseEffectCounter /> */}
      {/* <UseEffectCounterContainer /> */}
      {/* <ContentHooks /> */}
      <HTTPRequests />
    </div>
  );
}

export default App;
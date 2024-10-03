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

function App() {
  return (
    <div className={css.App}>
      < Sidebar />
      {/* < NavBarSimple /> */}
      <NavBarForm />
      <Content />
      {/* <RenderingLists /> */}
      {/* <LifeCyclesCDM /> */}
      {/* <LifeCyclesCDU /> */}
      {/* <LifeCyclesCWU /> */}
      {/* <Loader /> */}
    </div>
  );
}

export default App;
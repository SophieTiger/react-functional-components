import css from './App.module.css';
import Sidebar from "./components/Sidebar"
import NavBarSimple from "./components/NavBarSimple"
import NavBarForm from './components/NavBarForm';
import RenderingLists from './components/RenderingLists';
import Content from './components/Content';

function App() {
  return (
    <div className={css.App}>
      < Sidebar />
      {/* < NavBarSimple /> */}
      <NavBarForm />
      <Content />
      {/* <RenderingLists /> */}
    </div>
  );
}

export default App;
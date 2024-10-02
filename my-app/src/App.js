import css from './App.module.css';
import Sidebar from "./components/Sidebar"
import NavBarSimple from "./components/NavBarSimple"
import NavBarForm from './components/NavBarForm';
import RenderingLists from './components/RenderingLists';

function App() {
  return (
    <div className={css.App}>
      {/* < Sidebar /> */}
      {/* < NavBarSimple /> */}
      {/* <NavBarForm /> */}
      <RenderingLists />
    </div>
  );
}

export default App;
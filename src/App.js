import { Routes, Route } from "react-router-dom";
import Home from "./components/routes/home/home.component";
import NavBar from "./components/routes/navigation-bar/navigation-bar.component";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar/>}>
        <Route index element={<Home />}/>
      </Route>
    </Routes>
  );
};

export default App;
//lol new stuff

import { Routes, Route } from "react-router-dom";
import Home from "./components/routes/home/home.component";
import NavBar from "./components/routes/navigation/navigation.component";
import Shop from "./components/routes/shop/shop.component";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar/>}>
        <Route index element={<Home />}/>
        <Route path="/shop" element={<Shop/>} />
      </Route>
    </Routes>
  );
};

export default App;
//lol new stuff

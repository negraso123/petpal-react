import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Control from "./components/Control"; // Asegúrate de crear este componente
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBan,
  faMusic,
  faGift,
  faVolumeMute,
} from "@fortawesome/free-solid-svg-icons";

// Agrega los iconos que vas a usar a la biblioteca
library.add(faBan);
library.add(faGift);
library.add(faMusic);
library.add(faVolumeMute);

// function App() {
//   return (
//     <>
//       <Header />
//       <Home />
//     </>
//   );
// }

// export default App;
const ws = new WebSocket("ws://0.tcp.sa.ngrok.io:18710?clientType=App");

// App.js
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="control" element={<Control ws={ws} />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

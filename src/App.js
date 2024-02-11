import RulesJSX from "./2-Jsx/Rules/RulesJSX";
import Bootstrap from "./4-Bootstrap/Bootstrap";
import NavigateBar from "./4-Bootstrap/NavigateBar";
// import { Container } from "react-bootstrap";
// import AndCondition from "./2-Jsx/Conditions/AndCondition";
import Flowers from "./5-Props/Places/R3-Props/Flowers";
// import Books from "./5-Props/Book/Books";

// import FirstHook from "./7-Hooks/FirstHook";
import PersonData from "./9-Crud/PersonData";
import { Routes, Route } from 'react-router-dom';
import ReactInfo from "./ReactInfo";
import Components from "./1-Components/Components";
import CSSALL from "./3-StyleCss/CSSALL";
import UseStateHook from "./7-Hooks/useState/UseStateHook";
import UseEffectHook from "./7-Hooks/useEffect/UseEffectHook";
import Places1 from './5-Props/Places/R1-Props/Places1'
import Places2 from './5-Props/Places/R2-Props/Places2'
// import Places3 from './5-Props/Places/R3-Props/Places3'
function App() {
  return (

    <section>
      <NavigateBar />
      <Routes>
        <Route path="/" element={<ReactInfo />} />
        <Route path="/components" element={<Components />} />
        <Route path="/JSXRules" element={<RulesJSX />} />
        <Route path="/CSSReact" element={<CSSALL />} />
        <Route path="/BootstrapReact" element={<Bootstrap />} />
        <Route path="/Props1" element={<Places1 />} />
        <Route path="/Props2" element={<Places2 />} />
        <Route path="/Props3" element={<Flowers />} />
        <Route path="/ReactRouterDom" element={<PersonData />} />
        <Route path="/useStateHook" element={<UseStateHook />} />
        <Route path="/useEffectHook" element={<UseEffectHook />} />
        <Route path="/Crud" element={<PersonData />} />
      </Routes>
      {/*
      <Flowers />
      <Container>
        <h2>Conditions</h2>
        <h3>Logical && operator</h3>
        <AndCondition />
        <hr />
      </Container> */}
    </section>
  );
}

export default App;

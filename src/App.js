import Onboarding from "./components/header/Onboarding";
import Balance from "./components/main/balance/Balance";
import Frens from "./components/main/frens/token/Frens";
import Graph from "./components/main/graph/Graph";
import TradingViewWidget from "./components/main/graph/TradingViewWidget";
import Tasks from "./components/main/tasks/Tasks";
import Header from "./mobileVersion/header/Header";
import { useMediaQuery } from 'react-responsive';
import MobileBalance from "./mobileVersion/main/MobileBalance";
import Favorites from "./mobileVersion/main/favorites/Favorites";
import Main from "./mobileVersion/main/Main";


function App() {
  const isMobile = useMediaQuery({ query: '(max-width: 864px)' });

  return (
    <div className="App">
      {isMobile ?
        <>
          <Header />
          <Main />
        </>
        :
        <>
          <Onboarding />
          <Balance />
          <Frens />
          <Graph />
          <Tasks />
        </>
      }

    </div>
  );
}

export default App;

import Router from "./Router/Router";
import { Auth } from "./context/Auth";
import Libary from "./context/Libary";
import User from "./context/User";
import Theme from "./providers/ThemeProvider/Theme";
function App() {
  return (
    <div className="App">
      <Theme>
        <Libary>
          <User>
            <Auth>
              <Router />
            </Auth>
          </User>
        </Libary>
      </Theme>
    </div>
  );
}

export default App;

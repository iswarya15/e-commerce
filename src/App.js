import "./App.css";
import {
  Route,
  Routes,
  useMatch,
  useNavigate,
  Link,
  useLocation,
} from "react-router-dom";
import { HomePage } from "./pages/homepage/homepage";
import { Header } from "./components/header/header";
import SignInAndSignOutPage from "./pages/sign-in-and-sign-out/sign-in-and-sign-out";
import ShopPage from "./pages/shop/shop";

function App() {
  const location = useLocation();

  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/topics" element={<TopicsPage />} />
        <Route path="/topics/:topicId" element={<TopicDetailPage />} /> */}
        <Route path="/shop" element={<ShopPage />}></Route>
        <Route path="/signin" element={<SignInAndSignOutPage />}></Route>
      </Routes>
    </div>
  );
}

const TopicsPage = () => {
  const navigate = useNavigate();
  const match = useMatch("/topics");
  //   console.log("Match => ", match);
  //   console.log("Navigate =>", navigate);
  return (
    <>
      <Link to={match.pathname + "/1"}>Topic List - 1</Link>
      <br></br>
      <Link to={match.pathname + "/2"}>Topic List - 2</Link>
      <br></br>
      <Link to={match.pathname + "/3"}>Topic List - 3</Link>
    </>
  );
};
const TopicDetailPage = () => {
  const match = useMatch("/topics/:topicId");
  //   console.log(match);

  //   console.log(match.params.topicId);
  return <h1>Topic Detail - {match.params.topicId}</h1>;
};

export default App;

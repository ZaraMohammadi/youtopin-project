import "./App.css";
// import "./index.css"
import Banner1 from "./Banner1";
import Banner2 from "./Banner2";
import Commiunity from "./Commiunity";
import EmailRequest from "./EmailRequest";
import Footer from "./Footer";
import Question from "./Question";
import Subscription from "./Subscription";
import Trovelouge from "./Trovelouge";


function App() {
  return (
    <div className=" container w-full m-0 max-w-none">
      <Banner1/>
      <Commiunity />
      <Banner2 />
      <Trovelouge />
      <Question />
      <Subscription />
      <EmailRequest />
      <Footer />
    </div>
  );
}

export default App;

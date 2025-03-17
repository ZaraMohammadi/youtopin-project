
import './App.css';



import Allmain from './Allmain';
import Swiper1 from './Swiper1';
import Allmain2 from './Allmain2';
import Allmain3 from './Allmain3';
import CardList from './CardComp';

const App =()=> {
  return (
   <>
  <div className='container'>

<div className="main">
  <Allmain/>
<CardList/>
  <Swiper1/>

  
  <Allmain2/>
  <Allmain3/>
</div>
  </div>
   
   </>
  );
}

export default App;

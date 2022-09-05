// import logo from './logo.svg';
import './App.css';
import ImageComponent from './components/ImageComponent';
import Title from './components/Title.jsx';



function App() {
  return (
    
      <div className="App">
      {/* <ButtonComponent  label = "process" style ={{color:"black", width:"50px",height:"50px", backgroundColor:"green"}}/>
      <ImageComponent src={'../images/img'} alt={"ironman"}> */}
      <ImageComponent img= "./img.jpg" alt= "ironman"/>
      <Title heading="hello"/>
      </div>

  );
}


export default App;

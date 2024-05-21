
import './App.css'
import ResponsiveAppBar from "./component/AppBar/appBar.jsx";
import {Button, Button2, Button3} from "./component/Button/Button.jsx";

function App() {

  return (
   <div>
    {/* <ResponsiveAppBar />*/}
       <Button/>
       <Button/>
       <Button2 name="Hello"/>
       <Button2 name="React"/>
       <Button3 name="Click" bgColor="red"/>
       <Button3 name="Click" bgColor="purple"/>
   </div>
  )
}

export default App

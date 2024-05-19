
import './App.css'
import ResponsiveAppBar from "./component/AppBar/appBar.jsx";
import {Button, Button2} from "./component/Button/Button.jsx";

function App() {

  return (
   <div>
    {/* <ResponsiveAppBar />*/}
       <Button/>
       <Button/>
       <Button2 name="Hello"/>
       <Button2 name="React"/>
   </div>
  )
}

export default App

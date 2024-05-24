
import './App.css'
import ResponsiveAppBar from "./component/AppBar/appBar.jsx";
import {Button, Button2, Button3, Button5, Button6} from "./component/Button/Button.jsx";

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
       {/*<Button4 text="onClick()" onClick={() => alert("Hello")}/>*/}
       <Button5 text="OnClick" onClick={()=>alert("Hello")}/>
       <Button6 text="onClick" onClick={()=>alert("Hello React")}/>
   </div>
  )
}

export default App

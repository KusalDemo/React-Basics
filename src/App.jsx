
import './App.css'
import ResponsiveAppBar from "./component/AppBar/appBar.jsx";
import {Button, Button2, Button3, Button5, Button6, Button7} from "./component/Button/Button.jsx";
import {useState} from "react";

function App() {
    const [name, setName] = useState('');

  return (
   <div>
    {/* <ResponsiveAppBar />*/}
       <Button/>
       <Button/>
       <Button2 name={"Hello"}/>
       <Button2 name={"React"}/>
       <Button3 name={"Click"} bgColor={"red"}/>
       <Button3 name={"Click"} bgColor={"purple"}/>
       {/*<Button4 text="onClick()" onClick={() => alert("Hello")}/>*/}
       <Button5 text={"OnClick"} onClick={()=>alert("Hello")}/>
       <Button6 text={"onClick"} onClick={()=>alert("Hello React")}/>
       <Button7 text={"OnClick"} name={'Kusal'} onClick={(name)=>setName(name)}/>
       <Button5 text={"get Value"} onClick={()=>console.log(name)}/>


   </div>
  )
}

export default App

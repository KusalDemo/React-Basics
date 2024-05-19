import './style.css'

export function Button(){
    return(
        <button className="myButton">Click Me</button>
    )
}
export function Button2(props){
    let {name} = props;
    return(
        <button className="myButton">{name}</button>
    )
}
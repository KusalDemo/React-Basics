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

export function Button3(props){
    let {name,bgColor} = props;
    return(
        <button className="myButton" style={{backgroundColor:bgColor}}>{name}</button>
    )
}
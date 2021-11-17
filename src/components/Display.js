import "./Display.css";

const Display = (props) => 
<div className="display"> 
    <p>{props.input}</p>
    <p>{props.result}</p>
</div>

export default Display;



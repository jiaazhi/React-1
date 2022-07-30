import '../index.css';


function Button(props){
    
    return (
        <button class="button-28" onClick="handleButton">Button #{props.button}</button>
    )

}

export default Button;
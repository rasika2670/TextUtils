import React, {useState} from 'react'
//import PropTypes from 'prop-types'

export default function TextForm(props) {

  const handleUpClick = () => {
    //console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Uppercase has been unabled" , "success");
  }

  const handleLowClick = () => {
    //console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Lowercase has been unabled" , "success")
  }

  const handleClearClick = () => {
    //console.log("Lowercase was clicked" + text);
    let newText = '';
    setText(newText);
    props.showAlert("Text Cleared!" , "success")
  }

  const handleOnChange = (event) => {
    //console.log("On Change");
    setText(event.target.value);
  }

  const [text , setText] = useState('Enter text here') ;
  
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} 
        style={{backgroundColor: props.mode==='dark'?'#140e3d':'white' , color: props.mode==='dark'?'white':'black'}} 
        rows="8"></textarea>
      </div>
      <button className="btn btn-primary m-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary m-2" onClick={handleLowClick}>Convert to Lowercase</button>
      <button className="btn btn-primary m-2" onClick={handleClearClick}>Clear Text</button>
    </div>

    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>Your text summary </h1>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} charachters</p>
      <p>{0.008 * text.split(" ").length} Minutes reading time</p>
      <h2>Preview</h2>
      <p>{text.length > 0 ? text : "Enter Something in the text box above to preview it here"}</p>
    </div>
    </>
  );
}

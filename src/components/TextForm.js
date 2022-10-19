import React, {useState} from 'react'


export default function TextForm(props) {
  const [text, setText] = useState(''); 
  // setText("new text");
  const handleUpClick = () => {
    console.log("Uppercase was clicked");
    let newText = text.toLocaleUpperCase();
    setText(newText)
   props.showAlert("Converted to UpperCase", "success");

    
}
const handleDownClick = () => {
    console.log("lowercase was clicked");
    let newText = text.toLocaleLowerCase();
    setText(newText)
   props.showAlert("Converted to LowerCase", "success");

}
const clearText = () => {
    console.log("lowercase was clicked");
    let newText = ("");
    setText(newText)
   props.showAlert("Cleared the Text Box", "success");

}

const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
    
}
const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
   props.showAlert("Text copied to ClipBoard", "success");
}
 const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }
    const handleSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(""));
        props.showAlert("Removed all the spaces", "success");
    }


  return (
    <>
 <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 
            <h1>{props.heading}</h1>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Uppercase</button>
      <button className="btn btn-primary my-3 mx-2" onClick={handleDownClick}>Lowercase</button>
      <button className="btn btn-info my-3 mx-2" onClick={handleCopy}>Copy</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      <button disabled={text.length===0} className="btn btn-warning mx-1 my-1" onClick={handleSpaces}>Remove All Spaces</button>
      {/* //remove text below thisi */}
      <button className="btn btn-danger my-3 mx-2" onClick={clearText}>clear</button>
      

    </div>
    <div className='container my-3'>
    <h2>Your Input Summary</h2>
    <p1>You have used {text.split(" ").length-1} words</p1>
    <p>You have used {text.length} letters</p>
    <p>it will take about {0.008 * text.split(" ").length} minutes to read</p>
    <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
  </div>
    </>

  )
}

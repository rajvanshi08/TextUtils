import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("Upper case was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Convert to uppercase!", "Success")
    }
    const handleDownClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Convert to lowercase!", "Success")
    }
    const handleClearClick = () => {
        let newText = ""
        setText(newText)
        props.showAlert("Text clear!", "Success")
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra space removed!", "Success")
    }

    const [mode, setMode] = useState('light');
    const [alert, setAlert] = useState(null);
    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {

        }, 1000);
    }
    const handleBgOrange = () => {
        if (mode == 'light') {
            setMode('orange');
            document.body.style.background = 'orange';
            showAlert("Orange Mode Activate", "Success!");
        }
        else {
            setMode('light');
            document.body.style.background = 'white';
            showAlert("Light Mode Activate", "Success!");
        }
    }

    const [text, setText] = useState("Enter text here");
    // text = "new text"  //worng way to change state
    // setText("new text"); //correct way to change state
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1 className='mb-4'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ background: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="3"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleDownClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Clear Extra Space</button>

                {/* background orange button */}
                {/* <button type="submit" className="btn btn-primary mx-2" onClick={handleBgOrange}>bg orange</button> */}
                <div className=" form-switch ">
                    <input className="form-check-input" onClick={handleBgOrange} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                </div>
            </div>

            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").filter((element) => { return element.lenght !== 0 }).length} words, {text.length} charcters</p>
                <p>{0.008 * text.split(" ").length} Mintes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview!!!"}</p>

            </div>
        </>

    )
}

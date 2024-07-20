import React, { useState } from 'react'

export default function About() {

    const [myStyle , setMyStyle] = useState({
        color : 'black' ,
        backgroundColor : 'white' ,
    })

    const [btnstate , setBtnState] = useState("Enable Dark Mode")

    const toggleStyle = () => {
        if (myStyle.color === 'white') {
            setMyStyle({
                color : 'black' ,
                backgroundColor : 'white' ,
            });
            setBtnState("Enable Dark Mode");
        } else {
            setMyStyle({
                color : 'white' ,
                backgroundColor : 'black' ,
                border : '0.1px solid white'
            })
            setBtnState("Enable Light Mode");
        }
    }
  return (
    <div className='p-4' style={myStyle}>
      <div className="accordion" id="accordionExample" >
        <h1 >About Us</h1>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" 
            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Acnalyze Your Text
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, 
                    charachter count , etc.
                </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" 
            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Free to use
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita nam ullam natus, culpa reprehenderit 
                labore quis saepe veritatis dolorum laudantium accusantium id quia quisquam maxime ad facilis soluta odio animi.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" 
            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Browser Compatible
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem doloremque fugiat repudiandae, fuga sunt velit atque
                beatae blanditiis repellendus nihil optio possimus perferendis, minus dolor at veniam aliquam, deleniti alias.
            </div>
            </div>
        </div>
        </div>
        <button className='m-2 btn btn-primary' onClick={toggleStyle}>{btnstate}</button>
    </div>
  )
}

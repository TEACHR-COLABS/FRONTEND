import React, { useState, useEffect } from 'react';

//Custom Components
import Header from '../../components/Header';

function MarkingPage() {

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);
    const [count5, setCount5] = useState(0);
    const [count6, setCount6] = useState(0);
    const [count7, setCount7] = useState(0);
    const [count8, setCount8] = useState(0);
    const [count9, setCount9] = useState(0);
  
    // const sum = count1 + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9;
  
    var studs = [
      { name: "Rita Acquati" },
      { name: "Maricela Brzezicki" },
      { name: "Maachah Tracy" },
      { name: "Shaun Romijnsen" },
      { name: "Minakshi Dupont" },
      { name: "Jimeno Behrends" },
      { name: "Nadia Ayodele" },
      { name: "Jaylen Hersch" },
      { name: "Rudolf Hayden" },
      { name: "Bopha Savidge" },
    ];
    return (
      <div className="App">
        <Header />
        <div className = "header">
          <p>Roundtable Discussion • Grade 11 English; Group 1</p>
          <h1>Select a student to Begin Marking</h1>
          <div className="name-list">
            {studs.map((ele) => (
              <a> {ele.name} </a>
            ))}
          </div>
        </div>
  
        <div className="grades">
          <div>
            <div>
              <input placeholder="0" value={count1}></input>
              <button onClick={() => setCount1(count1 + 1)}>+ Made a comment</button>
              <button onClick={() => setCount1(count1 - 1)}>-</button>
            </div>
            <div>
              <input placeholder="0" value={count2}></input>
              <button onClick={() => setCount2(count2 + 1)}>+ Referenced text</button>
              <button onClick={() => setCount2(count2 - 1)}>-</button>
            </div>
            <div>
              <input placeholder="0" value={count3}></input>
              <button onClick={() => setCount3(count3 + 1)}>+ New interpretation</button>
              <button onClick={() => setCount3(count3 - 1)}>-</button>
            </div>
            <div>
              <input placeholder="0" value={count4}></input>
              <button onClick={() => setCount4(count4 + 1)}>+ Made connections</button>
              <button onClick={() => setCount4(count4 - 1)}>-</button>
            </div>
            <div>
              <input placeholder="0" value={count5}></input>
              <button onClick={() => setCount5(count5 + 1)}>+ Used evidence</button>
              <button onClick={() => setCount5(count5 - 1)}>-</button>
            </div>
            <div>
              <input placeholder="0" value={count6}></input>
              <button onClick={() => setCount6(count6 + 1)}>+ Respectful</button>
              <button onClick={() => setCount6(count6 - 1)}>-</button>
            </div>
            <div>
              <input placeholder="0" value={count7}></input>
              <button onClick={() => setCount7(count7 + 1)}>+ Questions</button>
              <button onClick={() => setCount7(count7 - 1)}>-</button>
            </div>
            <div>
              <input placeholder="0" value={count8}></input>
              <button onClick={() => setCount8(count8 + 1)}>+ Spoke clearly</button>
              <button onClick={() => setCount8(count8 - 1)}>-</button>
            </div>
            <div>
              <input placeholder="0" value={count9}></input>
              <button onClick={() => setCount9(count9 + 1)}>+ Off topic</button>
              <button onClick={() => setCount9(count9 - 1)}>-</button>
            </div>
  
            <div>
              <label>Notes</label>
              <textarea id="w3review" name="w3review" rows="4" cols="50"></textarea>
            </div>
            <div>
              <label>Final grade</label>
              <input></input>
            </div>
          </div>
        </div>
        <div>
          <button>Save all marks and exit</button>
        </div>
      </div>
    );
  }
  
  export default MarkingPage;

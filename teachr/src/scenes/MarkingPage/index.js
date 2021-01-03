import React, { useState, useEffect } from 'react';

//Custom Components
import Header from '../../components/Header';
//import styled from "styled-components";
import {Roundtable} from '../../components/InitialVariables';

import {AppPage, NameList, Grades, Checklist, Input, Notes, StudentCircle} from '../../globals/components.js'

function MarkingPage() {
const Roundtables = Roundtable;

const [myMarks, setMarks] = useState (Roundtables);
  useEffect (() =>{
    localStorage.setItem("roundtable", JSON.stringify(myMarks));
  }, [myMarks]);

/*function criteriaText(value, index) {
  const myMarksValues = [...myMarks];
  const label = myMarksValues[index].listItem;
  return `${label}`;
}*/

function handleScoreChange(index, value){
  const myMarksValues = [...myMarks];
  myMarksValues[index].score = value;
  setMarks(myMarksValues);
  console.log(value);
}
  
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
      <div><Header />
      <AppPage>
        
        <div className = "header">
          <p class="title">Roundtable Discussion • Grade 11 English; Group 1</p>
          <h1>Select a student to Begin Marking</h1>
          <NameList>
            {studs.map((ele) => (
              <div class="studentBox" key={ele.index}><StudentCircle></StudentCircle>
              <a> {ele.name} </a></div>
            ))}
          </NameList>
        </div>
  
        <Grades>
          <Checklist>
            {myMarks.map((item, index)=> (
                <Input key={index}>
                  <div class="score" key={index}><p key={index}>{item.score}</p></div>
                  <button class="checkup" onClick={() => handleScoreChange(index, item.score + 1)}>+ {item.listItem}</button>
                  <button class="subtract" onClick={() => handleScoreChange(index, item.score - 1)}>-</button>
                </Input>
              ))}
          </Checklist>
          <Notes>
              <p>Notes</p>
              <textarea id="w3review" name="w3review" rows="4" cols="50"></textarea>
          </Notes>
          <div>
              <p>Final mark</p>
              <input></input>
          </div>
        </Grades>
        <div>
          <button class="saveexit">Save all marks and exit</button>
        </div>
      </AppPage></div>
    );
  }
  
  export default MarkingPage;
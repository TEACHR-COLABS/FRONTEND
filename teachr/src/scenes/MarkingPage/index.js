import React, { useState, useEffect } from 'react';

//Custom Components
import Header from '../../components/Header';
import styled from "styled-components";

import {AppPage, NameList, Grades, Checklist, Input, Notes, StudentCircle} from '../../globals/components.js'


function MarkingPage() {
const Roundtable = JSON.parse(localStorage.getItem("roundtable")) || [
    {
      listItem: "Made a comment",
      score: 0,
      category: "",
      order: 0,
    },
    {
      listItem: "Referenced text",
      score: 0,
      category: "",
      order: 1,
    },
    {
      listItem: "New interpretation",
      score: 0,
      category: "",
      order: 2,
    },
    {
      listItem: "Made connections",
      score: 0,
      category: "",
      order: 3,
    },
    {
      listItem: "Used evidence",
      score: 0,
      category: "",
      order: 4,
    },
    {
      listItem: "Respectful",
      score: 0,
      category: "",
      order: 5,
    },
    {
      listItem: "Questions",
      score: 0,
      category: "",
      order: 6,
    },
    {
      listItem: "Spoke clearly",
      score: 0,
      category: "",
      order: 7,
    },
    {
      listItem: "Off topic",
      score: 0,
      category: "",
      order: 8,
    },
  ];

const [myMarks, setMarks] = useState (Roundtable);
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
              <div class="studentBox"><StudentCircle></StudentCircle>
              <a> {ele.name} </a></div>
            ))}
          </NameList>
        </div>
  
        <Grades>
          <Checklist>
            {myMarks.map((item, index)=> (
                <Input key={index}>
                  <div class="score"><p>{item.score}</p></div>
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
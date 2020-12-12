import React, { useState, useEffect } from 'react';

//Custom Components
import Header from '../../components/Header';
import styled from "styled-components";

const StudentCircle = styled.div`
  background: #83C5BE;
  border-style: solid;
  border-width: 1px;
  border-color: #F6C358;
  height: 3em;
  width: 3em;
  border-radius: 3rem;
  padding: 5px;`

const NameList = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  padding:10px;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;`

const AppPage = styled.div`
    font-family: 'Montserrat', sans-serif;
    color: #fdfdfd;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    height: 100%;
    width: 100%;

    .header{
      color: #3C464A;

    }
    .saveexit{
    background: #DC8744;
    color:#fbfbfb;
    border-style: none;
    border-radius: 100px;
    height: 40px;
    width:230px;
    margin: 10px 0 0px 0;
    box-shadow: 0px 4px 4px 0px rgba(0,0,0, 0.25);
  }
  p{
    color: #3C464A;
    font-size: 24px;
    font-weight: 700px;
  }
  .title{
    color: #3C464A;
    font-size: 20px;
    font-weight: 400px;
  }
`

const Grades = styled.div`
  background: #EDF6F9;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Input = styled.div`
  input{
    height: 60px;
    width: 60px;
    background: #EBF4FF;
    border-style: solid;
    border-color: #000000;
    border-radius: 5px;
  }

  .checkup{
    height: 60px;
    width: 400px;
    margin: 10px 10px 10px 50px;
    font-family: 'Montserrat', sans-serif;
    font-size:20px;
    background: #264653;
    color: #fbfbfb;
    border-radius: 10px;
  }

  .subtract{
    background: none;
    border: none;
    font-size: 20px;
  }
`

const Checklist = styled.div`
  display: flex;
  flex-flow:row wrap;
  justify-content: center;
`

const Notes = styled.div`
  width: 100%;
  padding: 10px;

  textarea{
    width: 100%;
    border-radius: 10px;
  }

  p{
    color: #3C464A;
    font-size: 24px;
    font-weight: 700px;
  }
`


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
              <Input>
                <input placeholder="0" value={count1}></input>
                <button class="checkup" onClick={() => setCount1(count1 + 1)}>+ Made a comment</button>
                <button class="subtract" onClick={() => setCount1(count1 - 1)}>-</button>
              </Input>
              <Input>
                <input placeholder="0" value={count2}></input>
                <button class="checkup" onClick={() => setCount2(count2 + 1)}>+ Referenced text</button>
                <button class="subtract" onClick={() => setCount2(count2 - 1)}>-</button>
              </Input>
              <Input>
                <input placeholder="0" value={count3}></input>
                <button class="checkup" onClick={() => setCount3(count3 + 1)}>+ New interpretation</button>
                <button class="subtract" onClick={() => setCount3(count3 - 1)}>-</button>
              </Input>
              <Input>
                <input placeholder="0" value={count4}></input>
                <button class="checkup" onClick={() => setCount4(count4 + 1)}>+ Made connections</button>
                <button class="subtract" onClick={() => setCount4(count4 - 1)}>-</button>
              </Input>
              <Input>
                <input placeholder="0" value={count5}></input>
                <button class="checkup" onClick={() => setCount5(count5 + 1)}>+ Used evidence</button>
                <button class="subtract" onClick={() => setCount5(count5 - 1)}>-</button>
              </Input>
              <Input>
                <input placeholder="0" value={count6}></input>
                <button class="checkup" onClick={() => setCount6(count6 + 1)}>+ Respectful</button>
                <button class="subtract" onClick={() => setCount6(count6 - 1)}>-</button>
              </Input>
              <Input>
                <input placeholder="0" value={count7}></input>
                <button class="checkup" onClick={() => setCount7(count7 + 1)}>+ Questions</button>
                <button class="subtract" onClick={() => setCount7(count7 - 1)}>-</button>
              </Input>
              <Input>
                <input placeholder="0" value={count8}></input>
                <button class="checkup" onClick={() => setCount8(count8 + 1)}>+ Spoke clearly</button>
                <button class="subtract" onClick={() => setCount8(count8 - 1)}>-</button>
              </Input>
              <Input>
                <input placeholder="0" value={count9}></input>
                <button class="checkup" onClick={() => setCount9(count9 + 1)}>+ Off topic</button>
                <button class="subtract" onClick={() => setCount9(count9 - 1)}>-</button>
              </Input>
   
  
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
  
  

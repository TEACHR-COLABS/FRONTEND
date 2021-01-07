import styled from 'styled-components';

export const flexBoxMixin = (direction, justify, align, wrap) => {
    return `
    display: flex;
    flex-direction: ${direction || 'row'};
    justify-content: ${justify || 'flex-start'};
    align-items: ${align || 'flex-start'};
    flex-wrap: ${wrap || 'wrap'};
    `;
};

export const ColumnContainer = styled.div.attrs(props => ({
    justify: props.justify || 'flex-start',
    align: props.align || 'stretch',
    padding: props.padding || 0,
}))`
    padding: ${props => props.padding};
    ${props => flexBoxMixin('column', props.justify, props.align)};
`;

export const RowContainer = styled.div.attrs(props => ({
    justify: props.justify || 'flex-start',
    align: props.align || 'flex-start',
    padding: props.padding || 0,
}))`
    padding: ${props => props.padding};
    ${props => flexBoxMixin('row', props.justify, props.align)}
`;

export const Center = styled.div `
    font-family: 'Montserrat', sans-serif;
    color: #fdfdfd;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background: #83C5BE no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
`;

export const StudentCircle = styled.div`
  background: #83C5BE;
  border-style: solid;
  border-width: 1px;
  border-color: #F6C358;
  height: 3em;
  width: 3em;
  border-radius: 3rem;
  padding: 5px
`
export const NameList = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  padding:10px;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px

`

export const AppPage = styled.div`
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

export const Grades = styled.div`
  background: #EDF6F9;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

`
export const Input = styled.div`
  
  display: flex;
  flex-direction: row wrap;

  .score{
    height: 60px;
    width: 60px;
    background: #EBF4FF;
    border-style: solid;
    border-color: #000000;
    border-radius: 10px;
    font-family: 'Montserrat', sans-serif;
    font-size: 24px;
    color: #3C464A;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
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
    border-style: none;
  }

  .subtract{
    background: none;
    border: none;
    font-size: 20px;
  }
`

export const Checklist = styled.div`
  display: flex;
  flex-flow:row wrap;
  justify-content: center;
`

export const Notes = styled.div`
  width: 100%;
  padding: 10px;

  textarea{
    width: 100%;
  }

  p{
    color: #3C464A;
    font-size: 24px;
    font-weight: 700px;
  }
`
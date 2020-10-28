import React, { useState, useEffect} from 'react';
import Quotes from './components/Quotes'
import styled from '@emotion/styled';


const Container = styled.div`
    display: flex;
    align-items: center;
    padding-top:5rem;
    flex-direction:column;
`;

const Button = styled.button`
    background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
    background-size: 300px;
    font-family: Arial, Helvetica, sans-serif;
    color: #fff;
    margin-top:3rem;
    padding: 1rem 3rem;
    font-size: 2rem;
    border: none;
    border-radius: 1rem;
    box-shadow:1rem 1rem 4rem rgba(15, 87, 78, .1), 
                -1rem -1rem 4rem rgbargba(0, 125, 53, .5);
    transition: all .5s ease-in-out; 

    :hover{
      cursor:pointer;
      background-size: 400px;
      box-shadow: inset .4rem .4rem 1rem rgba(15, 87, 78, .1), 
                inset -.4rem -.4rem 1rem rgba(0, 125, 53, .5);
    }
    
`;


function App() {

  const [quotes, getQuotes] = useState({});

  // fetch and promises
  // const APIget = () => {
  //   const api = fetch('http://breaking-bad-quotes.herokuapp.com/v1/quotes');
  //   const quote = api.then(response => response.json());
  //   quote.then(result => console.log(result))
  // }

  const APIget = async () => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const quote = await api.json();
    getQuotes(quote[0]) 
  }

  useEffect(() => {
    APIget()
  }, [])

  return (
    <Container>
      <Quotes
        quotes={quotes}
      />
      <Button
        onClick={() => APIget()}
      >
        Get quote
      </Button>
    </Container>

  );
}

export default App;

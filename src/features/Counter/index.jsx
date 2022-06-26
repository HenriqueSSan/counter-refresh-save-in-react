import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { Container, Result } from './styles';

export function Counter() {
  let [countCookie, setCountCookie] = useCookies(['num']);
  let [count, setCount] = useState(Number(countCookie.num) ? Number(countCookie.num) : 0);

  function increment() {
    setCount(count += 1);
    setCountCookie('num', count, { path: '/', expires: new Date(2040, 1, 1, 0, 0, 1) });
  }
  function decrement() {
    setCount(count -= 1);
    setCountCookie('num', count, { path: '/', expires: new Date(2040, 1, 1, 0, 0, 1) });
  }

  function colorSelected(value){
    if(value < 0){
      return "negative"
    }else if (value > 0){
      return "positive"
    }else{
      return "neutral"
    }
  }

  return (
    <>
      <main className="main">
        <section className="counter">
          <Container>
            <h1 className="counter__title">
              This a Counter <span className="negative">Refresh</span>
                <span className="positive">Save</span>
            </h1>
            <div className="counter__resultBox">
              <Result isColor={colorSelected(count)}>
                {countCookie.num === undefined ? count : countCookie.num}
              </Result>
            </div>
            <div className="counter__controls">
              <button type="button" className='increment' onClick={() => increment()}>
                Increment
              </button>
              <button type="button" className='decrement' onClick={() => decrement()}>
                Decrement
              </button>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}

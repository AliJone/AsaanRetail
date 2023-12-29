import { Button, InputNumber } from 'antd';
import React, { useState } from 'react';

import cn from 'classnames';
import style from './styleSheet.module.sass';

function Counter({step =1}) {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className={cn(style.CounterDiv)}>
      {/* <Button onClick={handleDecrement}
      type='text'
      style = {{width: 'min-content', height: 'min-content',padding: '0px'}}
      >-</Button> */}
      <InputNumber
        min={0}
        // max={100} // Set the maximum value as needed
        step={step} // Set the step value
        value={count}
        // disabled = {true}
        
        onChange={(value) => setCount(value)}
        bordered = {false}
        style={{ textAlign: 'center' }}
      />
      {/* <Button onClick={handleIncrement}
      type='text'
      style = {{width: 'min-content', height: 'min-content' , padding: '0px'}}
      >+</Button> */}
    </div>
  );
}

export default Counter;





import React,{memo,useCallback} from 'react';

function CounterButton({increment}) {
     /*DO NOT EDIT THIS LINE */ 
     console.log("CounterButton rendered!"); 
     //DO NOT edit this line 
     const handleClick = useCallback(() => {
          increment();
        }, [increment]);
      

     return<button onClick={handleClick}>Increment</button>

}

export default memo(CounterButton);

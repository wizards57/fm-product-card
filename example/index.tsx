import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductTitle, ProductImage, ProductButtons } from '../.';
import { Product } from '../dist/interfaces/interfaces';

const product = {
  id: '1',
  title: 'Coffe Mug - Card',
  // img: './coffe-mug.png'
}

const App = () => {
  return (
     <ProductCard product={product} initialValues={{ count: 8, maxCount: 10, }} >

        {
          ({reset, isMaxCountReached, maxCount, increaseBy, count}) => (
                <>
                    <ProductImage />
                    <ProductTitle  />
                    <ProductButtons  />

                    <button onClick={reset}>reset</button> 
                    <button onClick={() => increaseBy(-2)}>-2</button>
                    
                    {
                        (!isMaxCountReached && <button onClick={()=>increaseBy(2)}>+2</button> )
                    }
                    <span>{ count } - {maxCount} </span>

                </>
          )
        }

          
          </ProductCard>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

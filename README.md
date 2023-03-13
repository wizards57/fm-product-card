# Do-Product-CardReact-Router-Dom-5

Este es un paquete de pruebas de despliegue en NPM

### Fernando Mariscal

## Ejemplo
```
import 
{
    ProductCard,
    ProductImage,
    ProductTitle,
    ProductButtons,
} from 'fm-product-card'
```

```
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

```
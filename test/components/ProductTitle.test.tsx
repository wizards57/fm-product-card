import { ProductTitle, ProductCard } from '../../src/components'
import renderer from 'react-test-renderer';
import React from "react";
import { product1 } from '../data/products';



describe('ProductTitle', () => {

    test('edebe de mostrar el componente correctamente con el titulo personalizado', () => {
        
        const wrapper = renderer.create(
            <ProductTitle title="Custom Product" />
        )
        expect(wrapper.toJSON()).toMatchSnapshot();
        
    }
    );

    test('debe de mostrar el componente con el nombre del producto', () => {
          const wrapper = renderer.create(
              <ProductCard product={product1} >
                  {
                      () => (
                          <ProductTitle />
                      )
                  }
              </ProductCard>
        )
        expect(wrapper.toJSON()).toMatchSnapshot();
    })
    
})
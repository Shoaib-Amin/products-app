import renderer from 'react-test-renderer';
import Card from '../Card'
import { products } from '../../mockDB/products'

test('it render the card correctly', () => {
    const cardComponent = renderer
        .create(<Card product={products[products.length -1]} />)
        .toJSON();
    expect(cardComponent).toMatchSnapshot();
})
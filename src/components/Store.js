import './Store.css'
import { Row ,Col } from 'react-bootstrap'
import storeItems from '../data/discountItems.json';
// import storeItems from '../data/discountItems.json';
import StoreItem from './StoreItem';
import './Store.css'
const Store = () => {
  return (
    <div className='store'>
    <Row md={2} xs={1} lg={3} className='g-3'>
    {storeItems.map((item) => (
      <Col key={item.id}>
        <StoreItem {...item}/>
      </Col>
    ))}
    </Row>
    </div>
  )
}

export default Store
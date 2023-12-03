import './Discount.css';
// import Store from '../../components/Store';
import { Row ,Col } from 'react-bootstrap'
import Text from '../../components/Text/Text';
import storeItems from '../../data/discountItems.json';
import StoreItem from '../../components/StoreItem';
// import Discount-img from './discount.png';


const Discount = () => {
    return (
    <div id="dis">
    <Text text= '_ Discounts 50% _'/>
    <div className='store'>
    <Row md={2} xs={1} lg={3} className='g-3'>
    {storeItems.map((item) => (
      <Col key={item.id}>
        <StoreItem {...item}/>
      </Col>
    ))}
    </Row>
    </div>   
    </div>
    )}
   
export default Discount

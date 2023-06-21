import { Row ,Col } from 'react-bootstrap'
import Text from '../../components/Text/Text';
import storeItems from '../../data/mostPopularItems.json';
import StoreItem from '../../components/StoreItem';

const MostPopular = () => {
    return (
    <div id="most">
    <Text text= '_ most Popular _'/>
    <div className='store'>
    <Row md={2} xs={1} lg={5} className='g-3'>
    {storeItems.map((item) => (
      <Col key={item.id}>
        <StoreItem {...item}/>
      </Col>
    ))}
    </Row>
    </div>   
    </div>
    )}
   
export default MostPopular

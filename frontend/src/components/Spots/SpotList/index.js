import { Route, Switch, NavLink } from 'react-router-dom';
import './SpotList.css';
import SingleSpot from '../SingleSpot';

const SpotList = ({spotsObj}) => {

  const spots = Object.values(spotsObj);

  const avragedete =(input)=>input==="NaN"?"":input;
  
    return (
      <div>
        <div className='listitem'>
          {spots.map(({ id, city,country,price,avgRating,previewImage }) => (
            <div className='item' key={id}><NavLink to={`/spots/${id}`}>
                <div className='itemimg'><img src={previewImage} className="image"/></div>
                <div className='address'>
                   <div>{`${city},${country}`}</div>
                   <div><i className="fas fa-star" />{avragedete(avgRating)}</div>
                </div>
                <div className='price'>
                   {`$${parseFloat(price).toFixed(2)} night`}
                </div>
            </NavLink></div>
          ))}
        </div>
  
        <Switch>
          <Route path='/spots/:spotId'>
            <SingleSpot/>
          </Route>
        </Switch>
      </div>
    );
  };
  
  export default SpotList;
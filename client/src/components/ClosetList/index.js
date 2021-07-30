//Using the code for Product List for now until we have
//mutations and paths set up for the new Items to be passed
//into this component

import React, { useEffect } from 'react';
import ClosetItem from '../ClosetItem';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/spinner.gif';
import { QUERY_USER } from '../../utils/queries';

function ClosetList() {
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_PRODUCTS);


  const { userData } = useQuery(QUERY_USER);
	let user;
	if (userData) {
  user = userData.user;
	}

  function filterProducts() {
    if (!currentCategory) {
      return state.products;
    }

    return state.products.filter(
      (product) => product.category._id === currentCategory
    );
  }

  return (
    <div className="my-2">
      <h2 style={{color: "white"}}>
            Welcome to Your Closet
      </h2>

      {state.products.length ? (
        <div className="flex-row">
          {filterProducts().map((product) => (
            <ClosetItem
              key={product._id}
              _id={product._id}
              image={product.image}
              name={product.name}
              /*---------added by Eric Dodgion-------*/
              size={product.size}
              /*---------added by Eric Dodgion-------*/
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default ClosetList;

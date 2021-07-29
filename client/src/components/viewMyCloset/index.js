import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries';
import ClosetList from "../ClosetList";


function MyCloset() {

	const { data } = useQuery(QUERY_USER);
	let user;
	if (data) {
  user = data.user;
	}

	return (
    <>
    <ClosetList />
				{user ? (
          <>
            {user.orders.map((order) => (
              <div key={order._id}>
                  {order.products.map(({ _id, image, name, size }, index) => (
                    <div key={index}>
                      <Link to={`/products/${_id}`}>
                        <img
                        className="productImg"
                        src={`/images/${image}`}
                        alt={name}
                      />
                      </Link>
                      <div>{size}</div>
                    </div>
                  ))}
                </div>
            ))}
          </>
        ) : null}
</>
  );
}

export default MyCloset;

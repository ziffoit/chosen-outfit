import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries';
import ClosetList from "../ClosetList";
import ClosetItem from "../ClosetItem";


function MyCloset() {

	const { data } = useQuery(QUERY_USER);
	let user;
	if (data) {
  user = data.user;
	}

	return (
<>
<ClosetList />
      <div className="container my-1">


        {user ? (
         <>
             {user.orders.map((order) => (
              <div key={order._id} className="my-2">
                <div className="flex-row">
                  {order.products.map(({ _id, image, name, price }, index) => (
                    <div key={index} >
                    
                      </div>

                  ))}
                </div>
              </div>
            ))}
          </>
        ) : null}
      </div>
    </>
  );
}

export default MyCloset;

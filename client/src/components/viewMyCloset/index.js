import React from "react";
import { Link } from "react-router-dom";

function myCloset(item) {
	// const [state, dispatch] = useStoreContext();

	const {
		image,
		name,
		_id,
		price,
		size
	} = item;


	return (
		<div className="card flip-card px-1 py-1">
			<div className="flip-card-inner">
				<div className="flip-card-front">
					<Link to={`/products/${_id}`}>
						<img
							alt={name}
							src={`/images/${image}`}
						/>
					</Link>
				</div>
				<div className="flip-card-back">
				<Link to={`/products/${_id}`}>
					<p>{name}</p>
				</Link>
					{/* <div>{quantity} {pluralize("item", quantity)} in stock</div> */}
					<div>Size: XL</div>
					<span>${price}</span>
	
			<div>
			</div>
      </div>
      </div>
      </div>
	
	);
}

export default myCloset;

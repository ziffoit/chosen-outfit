import React from "react";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_STORE, REMOVE_FROM_CLOSET, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

function ClosetItem(item) {
	const [state, dispatch] = useStoreContext();

	const {
		image,
		name,
		_id,
		price,
		size
	} = item;

	const { store } = state

	const addToStore = () => {
	//ADD_TO_STORE 'put'
	}

	const deleteItem = () => {
//REMOVE_FROM_CLOSET 'delete'
	}

	return (
		<div className="flip-card px-1 py-1">
			<div className="flip-card-inner">
				<div className="flip-card-front">
					<Link to={`/products/${_id}`}>
						<img
							className="productImg"
							alt={name}
							src={`/images/${image}`}
						/>
					</Link>
				</div>
				<div className="flip-card-back">
					<div className="card cardBack">
					<Link to={`/products/${_id}`}>
						<p>{name}</p>
					</Link>
					<div>{size}</div>
					<div>${price}</div>
					<button onClick={addToStore}>Sell This Item</button>
					<br />
					<button onClick={deleteItem}>Delete Item</button>

					</div>
				</div>
			</div>
			<div>
			</div>
		</div>
	);
}

export default ClosetItem;

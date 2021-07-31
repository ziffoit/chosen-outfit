import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../../utils/queries";
// import ClosetList from "../ClosetList";
// import ClosetItem from "../ClosetItem";

function MyCloset() {
	const { data } = useQuery(QUERY_USER);
	
    let clothes;
    if (data){
		const user = data.user;
		console.log("User is ", user)
        if (user) {
            clothes = data.user.clothes;
        }
    }

    if (!clothes) return null;

    const buildCard = (id, image, name, description, size, index) => {
        // if (!name) return null;
        return (
            <div key={`closet-item-${index}`}>
                <div className="flip-card px-1 py-1">
                    <div className="flip-card-inner ">
                        <div className="flip-card-front">
                            {image ? (
                                <img
                                    className="productImg"
                                    alt={name}
                                    src={`/images/${image}`}
                                />
                            ) : (
                                <p>{name}</p>
                            )}
                        </div>
                        <div className="flip-card-back">
                            <div className="card cardBack">
                                <Link to={`/products/${id}`}>
                                    <p>{name}</p>
                                    <p>{description}</p>
                                    <p>{size}</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    const closetItems = clothes.map((closet) => {
        return closet.products.map((product, index) => {
            console.log("Product is ", product);
            return buildCard(
                product.id,
                product.image,
                product.name,
                product.description,
                product.size,
                index
            );
        });
    });

    return (
        <>
            {/* <ClosetList /> */}
            <div className="container my-1">{closetItems}</div>
        </>
    );
}

export default MyCloset;

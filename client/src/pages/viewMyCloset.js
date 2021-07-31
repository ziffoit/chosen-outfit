//-----------------------View My Closet added by Eric-----------------------------------
import React from "react";
import { Link } from "react-router-dom";
import MyCloset from "../components/viewMyCloset";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import { FaPlusSquare } from "react-icons/fa";

function ViewMyCloset() {
    return (
        <div
            style={{
                backgroundImage: "url(/images/viewMyClosetBackground.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "100vh",
            }}
        >
            <div className="container">
                <CategoryMenu />
                <div className="container p-2 mt-4">
                    <Link to="/newItem">
                        <button
                            style={{
                                borderRadius: "10px",
                                border: "4px solid rgb(255, 255, 255 )",
                                boxShadow: "4px 4px 4px 0px rgb(211,211,211)",
                            }}
                        >
                            <FaPlusSquare size={40} />
                            Add A New Item
                        </button>
                    </Link>
                </div>

                <MyCloset />
                <Cart />
            </div>
        </div>
    );
}

export default ViewMyCloset;

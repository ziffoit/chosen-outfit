import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { NEW_ITEM } from '../utils/mutations';

function NewItem(props) {
  const [formState, setFormState] = useState({ name: '', description: '', image: null, quantity: 0, price: 0.0, size: '' });
  const [newItem] = useMutation(NEW_ITEM);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await newItem({
      variables: {
        name: formState.name,
        description: formState.description,
        image: formState.image,
        quantity: formState.quantity,
        price: formState.price,
        // category: {name:formState.category},
        size: formState.size
      },
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
//   _id: ID
//   name: String
//   description: String
//   image: String
//   quantity: Int
//   price: Float
//   category: Category
  return (
    <div className="container my-1">
      <Link to="/closet">← Go back to Closet</Link>

      <h2>Add a New Item to Your Closet</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="name">Name:</label>
          <input
            placeholder="Name"
            name="Name"
            type="text"
            id="name"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="description">Description:</label>
          <input
            placeholder="Description"
            name="Description"
            type="text"
            id="description"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="image">Image:</label>
          <input
            placeholder="Image"
            name="Image"
            type="image"
            id="image"
            alt="clothing image"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="quantity">Quantity:</label>
          <input
            placeholder="Quantity"
            name="Quantity"
            type="number"
            id="quantity"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="price">Price:</label>
          <input
            placeholder="Price"
            name="Price"
            type="number"
            id="price"
            onChange={handleChange}
          />
        </div>
        {/* <div className="flex-row space-between my-2">
          <label htmlFor="category">Category:</label>
          <input
            placeholder="Category"
            name="Category"
            type="text"
            id="category"
            onChange={handleChange}
          />
        </div> */}
        <div className="flex-row space-between my-2">
          <label htmlFor="size">Size:</label>
          <input
            placeholder="Size"
            name="Size"
            type="text"
            id="size"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default NewItem;

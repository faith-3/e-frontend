import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image from '../../../assets/images/bkash.jpg'
import image1 from '../../../assets/images/image2.jpg'

// TableHeadItem Component
const TableHeadItem = () => {
    return (
        <th className="">
            <td className='px-2 md:px-6 py-4 w-1/4 whitespace-nowrap h-20 '>Product</td>  
            <td className='px-2 md:px-6 py-4 w-1/4 whitespace-nowrap h-20 '>Quantity</td>  
            <td className='px-2 md:px-6 py-4 w-1/4 whitespace-nowrap h-20 '>Price</td>  
            <td className='px-2 md:px-6 py-4 w-1/4 whitespace-nowrap h-20 '>Subtotal</td>  
            <td className='px-2 md:px-6 py-4 w-1/4 whitespace-nowrap h-20 '>Remove</td>  
        </th>
    );
};

// TableRow Component
const TableRow = ({ data, onRemove, onIncrement, onDecrement }) => {
    return (
        
        <tr className="border-b border-gray-200 w-full">
            <td className="px-2 md:px-6 py-4 w-1/4 whitespace-nowrap h-20 ">{data.img}</td>
            <td className="px-2 md:px-6 py-4 w-1/4 whitespace-nowrap h-20">
                <button onClick={() => onDecrement(data.id)} className="px-2 py-1 text-gray-600">-</button>
                <span className="px-4">{data.quantity}</span>
                <button onClick={() => onIncrement(data.id)} className="px-2 py-1 text-gray-600">+</button>
            </td>
            <td className="px-2 md:px-6 w-1/4 whitespace-nowrap h-20">{data.price}</td>
            <td className="px-2 md:px-6 w-1/4 whitespace-nowrap h-20">{data.subtotal}</td>
            <td className="px-2 md:px-6 w-1/4 whitespace-nowrap h-20">
                <button onClick={() => onRemove(data.id)} className="text-red-600 hover:text-red-800">Remove</button>
            </td>
        </tr>
       
    );
};

// Table Component
const Table = ({ theadData, tbodyData, onRemove, onIncrement, onDecrement }) => {
    return (
        <div className="w-full container">
                 <div className='flex flex-row ml-6 text-center'>
                    <div className='w-1/4'>Product</div>
                    <div className='w-1/4'>Product</div>
                    <div className='w-1/4'>Product</div>
                    <div className='w-1/4'>Product</div>
                    <div className='w-1/4'>Product</div>
                </div>
            <table className="w-full">
                <tbody className="bg-white divide-y divide-gray-200">
                    {tbodyData.map((item) => (
                        <TableRow key={item.id} data={item} onRemove={onRemove} onIncrement={onIncrement} onDecrement={onDecrement} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

// Example Component
const Example = () => {
    const theadData = ["Product", "Quantity", "Price", "Subtotal", "Actions"];
    const initialTbodyData = [
      {
        id: "1",
        img: <img src={image1} className='w-20 object-contain'/>,
        quantity: 2,
        price: "$10.00",
        subtotal: "$20.00"
    },
    {
        id: "2",
        img: <img src={image1} className='w-20 object-contain'/>,
        quantity: 1,
        price: "$15.00",
        subtotal: "$15.00"
    },
    {
        id: "3",
        img: <img src={image1} className='w-20 object-contain'/>,
        quantity: 3,
        price: "$7.00",
        subtotal: "$21.00"
    },
    ];

    const [tbodyData, setTbodyData] = useState(initialTbodyData);

    const handleRemove = (id) => {
        const newTbodyData = tbodyData.filter(item => item.id !== id);
        setTbodyData(newTbodyData);
    };

    const handleIncrement = (id) => {
        const newTbodyData = tbodyData.map(item => {
            if (item.id === id) {
                const newQuantity = item.quantity + 1;
                const newSubtotal = `$${(newQuantity * parseFloat(item.price.substring(1))).toFixed(2)}`;
                return { ...item, quantity: newQuantity, subtotal: newSubtotal };
            }
            return item;
        });
        setTbodyData(newTbodyData);
    };

    const handleDecrement = (id) => {
        const newTbodyData = tbodyData.map(item => {
            if (item.id === id && item.quantity > 1) {
                const newQuantity = item.quantity - 1;
                const newSubtotal = `$${(newQuantity * parseFloat(item.price.substring(1))).toFixed(2)}`;
                return { ...item, quantity: newQuantity, subtotal: newSubtotal };
            }
            return item;
        });
        setTbodyData(newTbodyData);
    };

    return (
        <div>
            <Table theadData={theadData} tbodyData={tbodyData} onRemove={handleRemove} onIncrement={handleIncrement} onDecrement={handleDecrement} />
        </div>
    );
};

// Cart Component

const Cart = ({data}) => {
  return (
  <div className='w-100 text-sm md:mx-10'>
          <Example />
          <div className='flex flex-row justify-between mt-4'>
            <button className='border px-4 py-2 rounded hover:bg-red-400 hover:border-red-400 hover:text-white font-medium text-sm'>Return To Shop</button>
            <button className='border px-10 py-2 rounded hover:bg-red-400 hover:border-red-400 hover:text-white font-medium text-sm'>Update Cart</button>
          </div>
      <div className='flex flex-row gap-4 md:justify-between mt-10 w-100'>
            <div className='space-y-2 md:spaca-y-0 md:space-x-10'>
            <input type='text' placeholder='Coupon code' className='border px-4 py-2 rounded text-black font-medium text-sm' />
            <button className='border px-4 py-2 rounded bg-red-400 hover:bg-red-600 hover:border-red-600 text-white font-medium text-sm'>Apply coupon</button>
            </div>
      <div className='w-full md:w-1/4 flex flex-col'>
        <div className='border rounded border-gray-600 px-6 py-12 text-sm font-medium'>
              <h1>Cart Total:</h1>
            <div className='flex flex-row justify-between border-b border-gray-600 mt-4'>
            <p>Subtotal:</p>
            <p>$987</p>
            </div>
          <div className='flex flex-row justify-between border-b border-gray-600 mt-4'>
            <p>Shipping:</p>
            <p>Free</p>
          </div>
          <div className='flex flex-row justify-between border-b border-gray-600 mt-4'>
            <p>Total:</p>
            <p>$987</p>
          </div>
        </div>
          <div className="mt-6 text-sm text-gray-500">
              <Link to="/checkout" className="flex justify-center text-center rounded-md border border-transparent bg-red-400 px-2 py-3 font-medium text-white text-nowrap shadow-sm hover:bg-red-700">
                 Process To Checkout
              </Link>
          </div>
          <div className="mt-6 text-sm text-gray-500 text-center">
              <p>
                  or
                  <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500 px-2">
                      Continue Shopping
                      <span aria-hidden="true"> &rarr;</span>
                  </button>
              </p>
          </div>
    </div>
    </div>
  </div>
  );
};

export default Cart;
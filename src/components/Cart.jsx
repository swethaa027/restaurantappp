
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableHead, TableBody, TableCell, TableContainer, TableRow, Button } from '@mui/material';
import Home from './Home';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [selected, setselected] = useState({});
    const [edit, setedit] = useState(false);

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const response = await axios.get('http://localhost:3001/cart');
                setCartItems(response.data);
            } catch (error) {
                console.error('Failed to fetch cart items', error);
            }
        };
        fetchCartItems();
    }, []);

    const deletedata = (id) => {
        axios.delete(`http://localhost:3001/cart/${id}`)
            .then(() => {
                setCartItems(currentItems => currentItems.filter(item => item._id !== id));
            })
            .catch(err => {
                alert("Could not delete the data");
            });
    };

    const updateQuantity = async (title, newQuantity) => {
        if (newQuantity < 1) return;
        try {
            await axios.put(`http://localhost:3001/cart/update`, { title, quantity: newQuantity });
            setCartItems(currentItems =>
                currentItems.map(item =>
                    item.title === title ? { ...item, quantity: newQuantity } : item
                )
            );
        } catch (error) {
            console.error('Failed to update quantity', error);
        }
    };

    const totalAmount = () => {
        const total= cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
        return  Number(total.toFixed(2));
    };

    return (
        <div>
            <br /><br /><br />
            {edit ? (
                <Home method='Put' data={{ id: selected._id, name: selected.name, price: selected.price, quantity: 1 }} />
            ) : (
                
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Price</TableCell>
                                <TableCell>Quantity</TableCell>
                                <TableCell>Total Price</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {cartItems.map((item) => (
                                <TableRow key={item._id}>
                                    <TableCell>{item.title}</TableCell>
                                    <TableCell>IND{item.price}</TableCell>
                                    <TableCell>
                                        <button onClick={() => updateQuantity(item.title, item.quantity - 1)}>-</button>
                                        {item.quantity}
                                        <button onClick={() => updateQuantity(item.title, item.quantity + 1)}>+</button>
                                    </TableCell>
                                    <TableCell>IND{(item.price * item.quantity).toFixed(2)}</TableCell>
                                    <TableCell>
                                        <Button variant='contained' color='error' onClick={() => deletedata(item._id)}>Delete</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
            <hr />
            Total Amount: IND{totalAmount()}
        </div>
    );
};

export default Cart;
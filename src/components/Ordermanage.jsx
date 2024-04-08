import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { useNavigate } from 'react-router-dom';
const OrderManagement = () => {
  const [orderItems, setorderItems] = useState([]);

  useEffect(() => {
    const fetchorderItems = async () => {
        try {
            const response = await axios.get('http://localhost:3001/order');
            setorderItems(response.data);
        } catch (error) {
            console.error('Failed to fetch order items', error);
        }
    };
    fetchorderItems();
}, []);

    const navigate = useNavigate(); 

  const handleBackClick = () => {
    navigate('/admin'); 
  };
  return (
    <div>
        <br /><br /><br /><br />
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{fontSize:'20px', fontFamily:'fantasy'}}>Order no</TableCell>
                        <TableCell style={{fontSize:'20px', fontFamily:'fantasy'}}>Orders</TableCell>
                        {/* <TableCell style={{fontSize:'20px'}}>Status of order</TableCell> */}
                    </TableRow>
                </TableHead>
                <TableBody>
                            {orderItems.map((item, index) => (
                                <TableRow key={item._id}>
                                <TableCell>{index + 1}</TableCell>

                                <TableCell>
                                  {item.items.map((orderItem) => (
                                    <div key={orderItem._id}>
                                      <p>Title: {orderItem.title}</p>
                                      <p>Quantity: {orderItem.quantity}</p>
                                      <p>Price: ${orderItem.price}</p>
                                    </div>
                                  ))}
                                </TableCell>
                                  
                                </TableRow>
                            ))}
                        </TableBody>
        
            </Table>

        </TableContainer>

        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <Button variant="contained" onClick={handleBackClick}>
          Back
        </Button>
    </div>
    </div>

  )
}

export default OrderManagement
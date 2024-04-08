import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios';

const MenuManagement = () => {
  const [menuItems, setmenuItems] = useState([]);

  useEffect(() => {
    const fetchmenuItems = async () => {
        try {
            const response = await axios.get('http://localhost:3001/add');
            setmenuItems(response.data);
        } catch (error) {
            console.error('Failed to fetch menu items', error);
        }
    };
    fetchmenuItems();
}, []);


  const navigate = useNavigate(); 

  const handleBackClick = () => {
    navigate('/additem'); 
  };

  const deletedata = (id) => {
    axios.delete(`http://localhost:3001/add/${id}`)
        .then(() => {
            setmenuItems(currentItems => currentItems.filter(item => item._id !== id));
            alert('Item deleted successfully')

        })
        .catch(err => {
            alert("Could not delete the data");
        });
};

  return (
    <div>
        <br /><br /><br /><br />
       <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell style={{fontSize:'20px', fontFamily:'fantasy'}}>Item name</TableCell>
                    <TableCell style={{fontSize:'20px', fontFamily:'fantasy'}}>Price</TableCell>
                    <TableCell style={{fontSize:'20px',fontFamily:'fantasy'}}>Description</TableCell>
                    <TableCell style={{fontSize:'20px',fontFamily:'fantasy'}}>Action</TableCell>

                </TableRow>
            </TableHead>
            <TableBody>
                            {menuItems.map((item) => (
                                <TableRow key={item._id}>
                                <TableCell>{item.itemname}</TableCell>
                                <TableCell>{item.price}</TableCell>
                                <TableCell>{item.description}</TableCell>
                                <TableCell>
                                <Button variant='contained' color='error' onClick={() => deletedata(item._id)}>Delete</Button>                                </TableCell>


                                  
                                </TableRow>
                            ))}
                        </TableBody>
        
        
        </Table>

    </TableContainer>

    <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <Button variant="contained" onClick={handleBackClick}>
          Back
        </Button>&nbsp;
        <Button variant="contained" color='success' onClick={()=>{navigate('/add')}}>
          Add Item
        </Button>
    </div>
    </div>
  )
}

export default MenuManagement
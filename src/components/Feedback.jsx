import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Feedback = () => {
    const [FeedbackItems, setFeedbackItems] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchFeedbackItems = async () => {
            try {
                const response = await axios.get('http://localhost:3001/feedback');
                console.log(response.data);
                setFeedbackItems(response.data);
            } catch (error) {
                console.error('Failed to fetch feedback items', error);
            }
        };

        fetchFeedbackItems();
    }, []);

    const handleBackClick = () => {
        navigate('/admin');
    };

    return (
        <div>
            <br /><br /><br /><br /><br />
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ fontSize: '20px' , fontFamily:'fantasy'}}>Customer name</TableCell>
                            <TableCell style={{ fontSize: '20px' , fontFamily:'fantasy'}}>Email</TableCell>
                            <TableCell style={{ fontSize: '20px', fontFamily:'fantasy' }}>Comments</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {FeedbackItems.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.email}</TableCell>
                                <TableCell>{item.feedback}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <br /><br /><br /><br />
            <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
                <Button variant="contained" onClick={handleBackClick}>
                    Back
                </Button>
            </div>
        </div>
    );
};

export default Feedback;
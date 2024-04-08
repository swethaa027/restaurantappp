import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
const Filemanage = () => {
  return (
    <div>
        <br /><br /><br /><br />
        <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell style={{color:'red',fontFamily:'cursive',fontSize:'20px'}}>Customer name</TableCell>
                    <TableCell style={{color:'red',fontFamily:'cursive',fontSize:'20px'}}>Rating</TableCell>
                    <TableCell style={{color:'red',fontFamily:'cursive',fontSize:'20px'}}>Comments</TableCell>
                </TableRow>
            </TableHead>
        
        </Table>

    </TableContainer>
    </div>
  )
}

export default Filemanage;
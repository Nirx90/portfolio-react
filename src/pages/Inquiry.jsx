import { Box, Button, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { endpoints } from "../api/endpoints";
import {
    Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Paper
} from "@mui/material";
import { IconTrash } from "@tabler/icons-react";
import { useSelector } from "react-redux";

const Inquiry = () => {

    const [inquires, setInquires] = useState([])
    const { token } = useSelector((state) => state.auth)

    useEffect(() => {
        getAllQuaries()
    }, [])

    const getAllQuaries = async () => {
        const token = localStorage.getItem("token")
        try {
            const res = await axios.get(endpoints.get_inquies, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log("🚀 ~ getAllQuaries ~ res:", res)
            setInquires(res.data.data)
        } catch (error) { }
    }

    return (
        <Container sx={{ mt: 12 }}>
            <TableContainer component={Paper}>
                <Typography variant="h6" sx={{ p: 2 }}>
                    Inquiries
                </Typography>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell><strong>Name</strong></TableCell>
                            <TableCell><strong>Mobile</strong></TableCell>
                            <TableCell><strong>Email</strong></TableCell>
                            <TableCell><strong>Subject</strong></TableCell>
                            <TableCell><strong>Description</strong></TableCell>
                            <TableCell><strong>Created At</strong></TableCell>
                            <TableCell><strong>Action</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {inquires.length > 0 && inquires.map((contact) => (
                            <TableRow key={contact._id}>
                                <TableCell>{contact.name}</TableCell>
                                <TableCell>{contact.mobile}</TableCell>
                                <TableCell>{contact.email}</TableCell>
                                <TableCell>{contact.subject}</TableCell>
                                <TableCell>{contact.description}</TableCell>
                                <TableCell>
                                    {new Date(contact.createdAt).toLocaleString()}
                                </TableCell>
                                {token && (
                                    <TableCell>
                                        <IconTrash />
                                    </TableCell>
                                )}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default Inquiry;

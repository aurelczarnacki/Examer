import { Card, CardContent, Typography, Grid, Tab } from "@mui/material";
import React from "react";
import Center from "../components/Center";
import { useNavigate } from "react-router";
import { createAPIEndpoint, ENDPOINTS } from "../api";
import Table from "../components/Table"

export default function Home() {
  const navigate = useNavigate();

  return (
    <Center>
    <Table>
        
    </Table>
    </Center>
  )
}

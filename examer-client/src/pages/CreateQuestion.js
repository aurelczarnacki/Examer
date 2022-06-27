import {
    Button,
    Card,
    CardContent,
    TextField,
    Typography,
  } from "@mui/material";
  import { Box } from "@mui/system";
  import React from "react";
  import Center from "../components/Center";
  import useForm from "../hooks/useForm";
  import { createAPIEndpoint, ENDPOINTS } from "../api";
  import { useNavigate } from "react-router";

  const getFreshModelObject = () => ({
    QText: "",
    A1: "",
    A2: "",
    A3: "",
    A4: "",
    ACorrect: "",
    ExamId: ""
  });
  
  
  export default function Create() {
    const navigate = useNavigate();
  
    const { values, errors, handleInputChange } =
      useForm(getFreshModelObject);
    values.ExamId = localStorage.getItem("ExamId");

    const Create = (e) => {
      e.preventDefault();
        createAPIEndpoint(ENDPOINTS.question)
        .post(values)
        .then((res) => 
          console.log(res))
        .catch((err) => console.log(err));
        navigate("/details")
  
    };
  
  
    return (
      <Center>
        <Card sx={{ width: 600 }}>
          <CardContent sx={{ textAlign: "center" }}>
            <Typography variant="h3" sx={{ my: 3 }}>
              New Question
            </Typography>
            <Box
              sx={{
                "& .MuiTextField-root": {
                  margin: 1,
                  width: "90%",
                },
              }}
            >
              <form noValidate onSubmit={Create}>
                <TextField
                  id="outlined=basic"
                  label="Question:"
                  name="qtext"
                  value={values.qtext}
                  onChange={handleInputChange}
                  variant="outlined"
                  {...(errors.qtext && {
                    error: true,
                    helperText: errors.qtext,
                  })}
                />

<TextField
                  id="outlined=basic"
                  label="Answer A:"
                  name="a1"
                  value={values.a1}
                  onChange={handleInputChange}
                  variant="outlined"
                  {...(errors.a1 && {
                    error: true,
                    helperText: errors.a1,
                  })}
                />

<TextField
                  id="outlined=basic"
                  label="Answer B:"
                  name="a2"
                  value={values.a2}
                  onChange={handleInputChange}
                  variant="outlined"
                  {...(errors.a2 && {
                    error: true,
                    helperText: errors.a2,
                  })}
                />

<TextField
                  id="outlined=basic"
                  label="Answer C:"
                  name="a3"
                  value={values.a3}
                  onChange={handleInputChange}
                  variant="outlined"
                  {...(errors.a3 && {
                    error: true,
                    helperText: errors.a3,
                  })}
                />

<TextField
                  id="outlined=basic"
                  label="Answer D:"
                  name="a4"
                  value={values.a4}
                  onChange={handleInputChange}
                  variant="outlined"
                  {...(errors.a4 && {
                    error: true,
                    helperText: errors.a4,
                  })}
                />

<TextField
                  id="outlined=basic"
                  label="Correct Answer:"
                  name="aCorrect"
                  value={values.aCorrect}
                  onChange={handleInputChange}
                  variant="outlined"
                  {...(errors.aCorrect && {
                    error: true,
                    helperText: errors.aCorrect,
                  })}
                />
  
                <Button
                  variant="contained"
                  type="submit"
                  size="large"
                  sx={{ width: "90%" }}
                >
                  Submit
                </Button>
              </form>
            </Box>
          </CardContent>
        </Card>
      </Center>
    );
  }
  
import React, { Component } from "react";
import { Card, CardContent, Grid } from "@mui/material";
import Center from "../components/Center";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scores: [],
      isLoading: false,
      isError: false,
    };
  }
  async componentDidMount() {
    this.setState({ isLoading: true });
    const response = await fetch("https://localhost:44354/api/scores");

    if (response.ok) {
      const scores = await response.json();
      console.log(scores);
      this.setState({ scores, isLoading: false });
    } else {
      this.setState({ isLoading: false });
      this.setState({ isError: true });
    }
  }

  render() {
    const { scores, isLoading, isError } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    } else if (isError) {
      return <div>Error</div>;
    }
    return scores.length > 0 ? (
      <Center>
        <Grid
          container
          direction="column"
          sx={{ minHeight: "100vh" }}
          spacing={3}
        >
          {
          scores.map((curElem) => {
            if(curElem.examId == localStorage.getItem("ExamId")){
            return (
              <Grid item xs={12}>
                <Card sx={{ width: 800 }}>
                  <CardContent>
                    <div className="card_item" key={curElem.id}>
                      <div className="card_inner">
                      <Grid item xs={12}>{curElem.userName}&emsp;&emsp;&emsp;{curElem.userLastName}&emsp;&emsp;&emsp;&emsp;
                      &emsp;&emsp;&emsp;&emsp;&emsp;
                      &emsp;&emsp;&emsp;&emsp;&emsp;
                      &emsp;&emsp;&emsp;&emsp;&emsp;{curElem.points}/{curElem.max}</Grid>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
              );}
          })}
        </Grid>
      </Center>
    ) : (
      <div>There are no Scores.</div>
    );
  }
}

export default Table;

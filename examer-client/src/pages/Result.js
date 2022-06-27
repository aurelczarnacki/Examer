import Center from "../components/Center"
import SaveResult from "../components/SaveResult"
import {
    Card,
    CardContent
  } from "@mui/material";

export default function Result() {


var points = localStorage.getItem("points")
if(localStorage.getItem("futureA") == localStorage.getItem("Idx")) {
localStorage.setItem("Idx", 99)
points++
localStorage.setItem("points", points)
}

return (
    <SaveResult>
    <Center>
        <Card sx={{width: 500}}>
        <CardContent>
        <div><h1>You scored {points} on {localStorage.getItem("counter")}</h1></div>
        </CardContent>
    </Card>
    </Center>
    </SaveResult>
)
}

import React from "react";
import Header from "./framework/Header";
import ConnectApi from "../api/ConnectApi";

export const QuizSelect = () => {

const API_URL = "http://localhost:8000/quiz/";
const [dataState] = ConnectApi(API_URL);

console.log(dataState)

return(
    <>
    <Header />
    </>
)

}

export default QuizSelect
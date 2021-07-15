import React from "react"
import "survey-react/survey.css"
import * as Survey from "survey-react"
import {json} from "../surveys/questionTwo"

const TnpsSurvey = () => {
       function sendDataToServer(survey) {
    // send Ajax request to your web server.
    console.log(survey.data)
    alert("The results are:" + JSON.stringify(survey.data));
}
const myJson = window.localStorage.getItem("YourStorageName")
console.log(myJson)
    return(
        <Survey.Survey 
        json = {myJson}
        // showCompletedPage = {false}
        // onComplete = {(data) => console.log(data.valuesHash)}
        //  onComplete = {(data) => console.log(data)}
         onComplete = {sendDataToServer}
        />

    )
}
export default TnpsSurvey
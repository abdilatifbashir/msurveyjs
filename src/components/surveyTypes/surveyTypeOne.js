import React from "react"
import "survey-react/survey.css"
import * as Survey from "survey-react"
import {json} from "../surveys/questionOne"

const TnpsSurvey = () => {
    function sendDataToServer(survey) {
    // send Ajax request to your web server.
    console.log(survey.data)
    alert("The results are:" + JSON.stringify(survey.data));
}
    return(
        <Survey.Survey 
        json = {json}
        // showCompletedPage = {false}
        // onComplete = {(data) => console.log(data.valuesHash)}
        //  onComplete = {(data) => console.log(data)}
         onComplete = {sendDataToServer}
        />

    )
}
export default TnpsSurvey
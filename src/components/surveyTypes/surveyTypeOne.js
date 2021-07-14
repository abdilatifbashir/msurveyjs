import React from "react"
import "survey-react/survey.css"
import * as Survey from "survey-react"
import {json} from "../surveys/questionOne"

const TnpsSurvey = () => {
    return(
        <Survey.Survey 
        json = {json}
        // showCompletedPage = {false}
        // onComplete = {(data) => console.log(data.valuesHash)}
         onComplete = {(data) => console.log(data)}
        />

    )
}
export default TnpsSurvey
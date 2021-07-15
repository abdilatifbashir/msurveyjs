import React, { Component } from "react";


// import * as Survey from "survey-knockout";
import * as SurveyCreator from "survey-creator";
 

import 'bootstrap/dist/css/bootstrap.css';
// import "survey-knockout/survey.css";
import "survey-creator/survey-creator.css";
// import "./index.css";

SurveyCreator.StylesManager.applyTheme("bootstrap");

class SurveyComponent extends Component {
    constructor() {
        super();
        
    }
    componentDidMount() {
    

    // Show Designer, Test Survey, JSON Editor and additionally Logic tabs
var options = { showLogicTab: true, showEmbeddedSurveyTab: true };
//create the SurveyJS Creator and render it in div with id equals to "creatorElement"
var creator = new SurveyCreator.SurveyCreator("creatorElement", options);
//Show toolbox in the right container. It is shown on the left by default
creator.showToolbox = "right";
//Show property grid in the right container, combined with toolbox
creator.showPropertyGrid = "right";
//Make toolbox active by default
creator.rightContainerActiveItem("toolbox");

    

    

    
    }
    render() {
        return (
            <div id="creatorElement" />
        );
    }
}

export default SurveyComponent;

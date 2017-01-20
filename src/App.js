import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Glyphicon } from 'react-bootstrap';
import './App.css';

import Experience from './components/experience/experience';
import SideBySideSection from './components/side-by-side-section/side-by-side-section';

import avatar from './images/avatar.jpg';
import hootsuiteLogo from './images/hootsuitelogo.png';
import indochinoLogo from './images/indochinologo.png';

class App extends Component {
    constructor() {
        super();

        this.scrollSectionIntoView = this.scrollSectionIntoView.bind(this);
    }

    scrollSectionIntoView (nodeName) {
        var domNode = ReactDOM.findDOMNode(this[nodeName]);
        domNode.scrollIntoView();
    }

    setReference (node, nodeName) {
        this[nodeName] = node;
    }

    render () {
        const glyphiconStyles = {
            fontSize: "30px",
            margin: "0 8px 0 0"
        };
        return (
            <div className="App">
                <div className="App-header">
                    <div className="App-header-left">
                        <div className="App-logo">
                            <img src={avatar} alt="logo" />
                        </div>
                    </div>
                    <div className="App-header-right">
                        <a href="https://github.com/Danieltsang?tab=repositories" className="App-header-button">
                            <Glyphicon glyph="wrench" style={glyphiconStyles} />
                            Work
                        </a>
                        <h3 className="App-header-button" onClick={this.scrollSectionIntoView.bind(this, "contact")}>
                            <Glyphicon glyph="send" style={glyphiconStyles} />
                            Contact
                        </h3>
                    </div>
                </div>
                <div className="App-intro">
                    <h1>Hi, I'm Daniel</h1>
                    <Glyphicon
                        glyph="menu-down"
                        style={glyphiconStyles}
                        onClick={this.scrollSectionIntoView.bind(this, "aboutMe")}
                    />
                </div>
                <div className="App-body">
                    <SideBySideSection title="About me" ref={(node) => this.setReference(node, "aboutMe")}>
                        <p>Who: Daniel Tsang</p>
                        <p>What: Front End Engineer</p>
                        <p>Why: New trends and technologies keep the front end landscape super engaging and fascinating</p>
                        <p>Where: Beautiful Vancouver, British Columbia, Canada</p>
                    </SideBySideSection>
                    <div className="App-divider"></div>
                    <SideBySideSection title="Skills" ref={(node) => this.setReference(node, "skills")}>
                        <ul>
                            <li>Vanilla Javascript</li>
                            <li>React</li>
                            <li>jQuery</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>LESS</li>
                            <li>PHP</li>
                            <li>Java</li>
                            <li>Jasmine</li>
                        </ul>
                    </SideBySideSection>
                    <div className="App-divider"></div>
                    <div className="App-experience" ref={(node) => this.setReference(node, "experience")}>
                        <h2>Experiences</h2>
                        <div className="App-experience-container">
                            <Experience
                                companyUrl="www.hootsuite.com"
                                duration="January 2016 - August 2016"
                                imageSrc={hootsuiteLogo}
                                position="Co-op Software Developer"
                                location="Vancouver, BC, Canada"
                                title="Hootsuite"
                            />
                            <Experience
                                companyUrl="www.indochino.com"
                                duration="January 2015 - August 2015"
                                imageSrc={indochinoLogo}
                                location="Vancouver, BC, Canada"
                                position="Co-op Full Stack Engineer"
                                title="Indochino"
                            />
                        </div>
                    </div>
                    <div className="App-divider"></div>
                    <div className="App-contact" ref={(node) => this.setReference(node, "contact")}>
                        <h1>I have what it takes to be a great employee</h1>
                        <p>I look to begin my career as a Front End Engineer from May 2017 and onwards.</p>
                        <a href="mailto:danieltsang94@gmail.com">
                            Send me a message
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

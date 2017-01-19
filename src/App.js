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
            fontSize: "21px",
            margin: "0 5px 0 0"
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
                        <h3 className="App-header-button" onClick={this.scrollSectionIntoView.bind(this, "aboutMe")}>
                            <Glyphicon glyph="user" style={glyphiconStyles} />
                            About
                        </h3>
                        <h3 className="App-header-button" onClick={this.scrollSectionIntoView.bind(this, "skills")}>
                            <Glyphicon glyph="wrench" style={glyphiconStyles} />
                            Skills
                        </h3>
                        <h3 className="App-header-button" onClick={this.scrollSectionIntoView.bind(this, "experience")}>
                            <Glyphicon glyph="list-alt" style={glyphiconStyles} />
                            Experiences
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
                        <p>Where: Vancouver, BC</p>
                        <p>When: I graduate in April 2017</p>
                        <p>Why: I constantly look to explore new technologies and trends to build awesome things</p>
                    </SideBySideSection>
                    <SideBySideSection title="Skills" ref={(node) => this.setReference(node, "skills")}>
                        <ul>
                            <li>Vanilla Javascript</li>
                            <li>React</li>
                            <li>jQuery</li>
                            <li>Jasmine</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>LESS</li>
                            <li>PHP</li>
                            <li>Java</li>
                        </ul>
                    </SideBySideSection>
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
                    <div className="App-contact">
                        <a href="mailto:danieltsang94@gmail.com">
                            <Glyphicon glyph="send" style={{fontSize: '30px', margin: "0 5px 0 0"}} />
                            Contact me!
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

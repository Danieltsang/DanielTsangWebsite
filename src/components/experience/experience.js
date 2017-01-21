import React, { Component } from 'react';
import './experience.css';

class Experience extends Component {
    render () {
        return (
          <div className="Experience">
              <a href={"http://" + this.props.companyUrl}>
                  <div className="Experience-image-container">
                          <img src={this.props.imageSrc} alt={this.props.title + "_logo"}/>
                  </div>
              </a>
              <p className="Experience-title">{this.props.title}</p>
              <p className="Experience-location">{this.props.location}</p>
              <p className="Experience-duration">{this.props.duration}</p>
              <p className="Experience-position">{this.props.position}</p>
          </div>
        );
    }
}

Experience.propTypes = {
    companyUrl: React.PropTypes.string.isRequired,
    description: React.PropTypes.string,
    duration: React.PropTypes.string.isRequired,
    imageSrc: React.PropTypes.string.isRequired,
    location: React.PropTypes.string.isRequired,
    position: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired
};

export default Experience;
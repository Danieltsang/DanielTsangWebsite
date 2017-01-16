import React, { Component } from 'react';
import './side-by-side-section.css';

class SideBySideSection extends Component {
    render () {
        return (
            <div className="SideBySideSection">
                <h2>{this.props.title}</h2>
                <div className="SideBySideSection-content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

SideBySideSection.propTypes = {
    children: React.PropTypes.any.isRequired,
    title: React.PropTypes.string.isRequired
};

export default SideBySideSection;
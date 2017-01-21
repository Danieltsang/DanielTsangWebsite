import React, { Component } from 'react';
import './content-section.css';

class ContentSection extends Component {
    render () {
        let styles = {
            flexDirection: this.props.orientation
        };
        return (
            <div className="ContentSection">
                <h2>{this.props.title}</h2>
                <div className="ContentSection-content" style={styles}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

ContentSection.propTypes = {
    children: React.PropTypes.any.isRequired,
    title: React.PropTypes.string.isRequired,
    orientation: React.PropTypes.oneOf(['row', 'column'])
};

ContentSection.defaultProps = {
    orientation: 'column'
};

export default ContentSection;
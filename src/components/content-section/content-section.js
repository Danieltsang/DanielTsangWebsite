import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import './content-section.css';

class ContentSection extends Component {
    renderTitle () {
        if (!this.props.titleInView) {
            return;
        }
        return <h2>{this.props.title}</h2>;
    }

    render () {
        let styles = {
            flexDirection: this.props.orientation
        };
        return (
            <div className="ContentSection">
                <ReactCSSTransitionGroup
                    transitionName="ContentSection-title"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    {this.renderTitle()}
                </ReactCSSTransitionGroup>
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
    titleInView: React.PropTypes.bool,
    orientation: React.PropTypes.oneOf(['row', 'column'])
};

ContentSection.defaultProps = {
    titleInView: true,
    orientation: 'column'
};

export default ContentSection;
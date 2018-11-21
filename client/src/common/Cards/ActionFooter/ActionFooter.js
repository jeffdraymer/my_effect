import React, { Component } from 'react';
import PropTypes from 'prop-types';

//import styles 
import './styles.css';

class ActionFooter extends Component {

  //create an i tag for any icon classes which are passed in
  iconItem = (icon, i) => (
    <img key={i} src={icon.image} alt={icon.alt} />
  );

  render() {
    const { from, to, title } = this.props;
    //map through all the icons which were passed in as props
    const icons = this.props.icons.map(this.iconItem);

    return (
      <div className="action-footer">
        <div className="row icon-images">
          {icons}
        </div>
        <div className="row bottom">
          <div className="col-6 date">
            {from} {to !== undefined ? (' - ' + to) : ('')}
          </div>
          <div className="col-6 title">
            {title}
          </div>
        </div>
      </div>
    )
  }
};

ActionFooter.propTypes = {
  icons: PropTypes.array.isRequired,
  from: PropTypes.string.isRequired,
  to: PropTypes.string,
  title: PropTypes.string.isRequired
}

export default ActionFooter;




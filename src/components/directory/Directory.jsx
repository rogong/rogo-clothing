import React from 'react';
import MenuItem from '../menuItem/MenuItem';
import './Directory.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: '/cat-img/hats.png',
          id: 1,
          linkUrl: 'hats'
        },
        {
          title: 'jackets',
          imageUrl: '/cat-img/jackets.png',
          id: 2,
          linkUrl: ''
        },
        {
          title: 'sneakers',
          imageUrl: '/cat-img/sneakers.png',
          id: 3,
          linkUrl: ''
        },
        {
          title: 'hats',
          imageUrl: '/cat-img/womens.png',
          size: 'large',
          id: 4,
          linkUrl: ''
        },
        {
          title: 'mens',
          imageUrl: '/cat-img/men.png',
          size: 'large',
          id: 5,
          linkUrl: ''
        },
      ],
    };
  }

  render() {
      return(
          <div className='directory-menu'>
          {
              this.state.sections.map(({id, ...otherSectionProps}) => (
                  <MenuItem key={id} {...otherSectionProps} />
              ))
          }
          </div>
      )
  }
}

export default Directory;

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
        },
        {
          title: 'jackets',
          imageUrl: '/cat-img/jackets.png',
          id: 2,
        },
        {
          title: 'sneakers',
          imageUrl: '/cat-img/sneakers.png',
          id: 3,
        },
        {
          title: 'hats',
          imageUrl: '/cat-img/womens.png',
          size: 'large',
          id: 4,
        },
        {
          title: 'mens',
          imageUrl: '/cat-img/men.png',
          size: 'large',
          id: 5,
        },
      ],
    };
  }

  render() {
      return(
          <div className='directory-menu'>
          {
              this.state.sections.map(({title, imageUrl, id, size}) => (
                  <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
              ))
          }
          </div>
      )
  }
}

export default Directory;

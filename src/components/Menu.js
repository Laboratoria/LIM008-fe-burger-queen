import React from 'react';

class Menu extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     menu: menu
  //   }
  // }

  // render() {
  //   const menu = this.state.menu.map((item, i) => {
  //     return (
  //       <div>
  //         <button>{item.title} - {item.value}</button>
  //       </div>
  //     )
  //   })

  //   return (
  //     <div>
  //       {menu}
  //     </div>
  //     )
  // }
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/mahaliroblesarbieto/LIM008-fe-burger-queen/prototype/src/data/menu.json')
      .then(res => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json,
        });
      });
  }

  render() {
    const { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        {items.map(item => (
          <div>
            {item.name}
            {item.value}
            <button type="button">+</button>
          </div>
        ))}
      </div>
    );
  }
}
export default Menu;

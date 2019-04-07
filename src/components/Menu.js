import React from 'react';
import './styles/Menu.css';

class Menu extends React.Component {
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
          <button className="margin" type="button">
            {`${item.name} ${item.value}`}
          </button>
        ))}
      </div>
    );
  }
}
export default Menu;

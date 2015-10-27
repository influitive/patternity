import { Component, PropTypes } from 'react';
import Components from 'components/Components';
import NavBar from 'components/NavBar';
import s from './StyleGuide.css';

export default class StyleGuide extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    highlightTheme: PropTypes.string.isRequired,
    components: PropTypes.array.isRequired
  }

  // TODO: Blank slate

  render() {
    let { title, components, highlightTheme } = this.props;

    let filteredComponents = components.filter((component) => {
      if (component.name.indexOf('ProxyClass') != -1) {
        console.warn('Component at \'' + component.filepath + '\' may be broken because it reports it\'s name as ProxyClass');
        return false;
      }
      return true;
    });
    return (
      <div className={s.root}>
        <div className={s.nav}>
          <NavBar components={filteredComponents}/>
        </div>
        <div className={s.content}>
          <div>
            <Components highlightTheme={highlightTheme} components={filteredComponents}/>
          </div>
        </div>
      </div>
    );
  }
}

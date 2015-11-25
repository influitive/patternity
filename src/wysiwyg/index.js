import React, { Component, PropTypes } from 'react';
import ReactQuill, { Toolbar } from 'react-quill';
import styles from '../../node_modules/quill/dist/quill.snow.css';

// Component File Template
export default class Wysiwyg extends Component {
  static propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    readOnly: PropTypes.bool,
    modules: PropTypes.object,
    toolbar: PropTypes.oneOfType([ PropTypes.array, PropTypes.oneOf([false]), ]),
    formats: PropTypes.array,
    styles: PropTypes.oneOfType([ PropTypes.object, PropTypes.oneOf([false]) ]),
    theme: PropTypes.string,
    pollInterval: PropTypes.number,
    onKeyPress: PropTypes.func,
    onKeyDown: PropTypes.func,
    onKeyUp: PropTypes.func,
    onChange: PropTypes.func,
    onChangeSelection: PropTypes.func
  };

  static defaultProps = {
    id: 'wysiwyg-editor',
    readOnly: false,
    theme: 'snow',
    styles: {
      '.ql-editor' : {
        'min-height': '200px',
        'height': '100%'
      }
    },
  };

  render() {

    const colours = [{ value: '#000000'}, { value: '#444444'}, { value: '#666666'}, { value: '#969696'}, { value: '#d0d2d3'}, { value: '#eeeeee'}, { value: '#08a5c5'}, { value: '#046f99'}, { value: '#8BC540'}, { value: '#c54040'}, { value: '#ffcc00'}, { value: '#ffffff'}];

    const TOOLBAR_ITEMS = [
      { label:'Formats', type:'group', items: [
        { label:'Size', type:'size', items: [
          { label:'Normal', value:'13px' },
          { label:'Small',  value:'10px' },
          { label:'Large',  value:'18px' },
          { label:'Huge',   value:'32px' }
        ]}
      ]},

      { label:'Text', type:'group', items: [
        { type:'bold', label:'Bold' },
        { type:'italic', label:'Italic' },
        { type:'strike', label:'Strike' },
        { type:'underline', label:'Underline' },
        { type:'separator' },
        { type:'color', label:'Color', items: colours },
        { type:'separator' },
        { type:'link', label:'Link' }
      ]},

      { label:'Blocks', type:'group', items: [
        { type:'bullet', label:'Bullet' },
        { type:'separator' },
        { type:'list', label:'List' }
      ]}
    ];

    const { value } = this.props;

    return (
      <ReactQuill {...this.props} theme="snow">
        <Toolbar key="toolbar" ref="toolbar" items={TOOLBAR_ITEMS} />
        <div key="editor" ref="editor" className="quill-contents"dangerouslySetInnerHTML={{__html:this.props.value}} />
      </ReactQuill>
    );
  };
}

import React, { Component, PropTypes } from 'react';
import ReactQuill, { Toolbar } from 'react-quill';
import flowRight from 'lodash/function/flowRight';

export default class Wysiwyg extends Component {
  static propTypes = {
    id:                PropTypes.string,
    className:         PropTypes.string,
    style:             PropTypes.object,
    value:             PropTypes.string,
    defaultValue:      PropTypes.string,
    readOnly:          PropTypes.bool,
    modules:           PropTypes.object,
    toolbar:           PropTypes.oneOfType([ PropTypes.array, PropTypes.oneOf([false]) ]),
    formats:           PropTypes.array,
    styles:            PropTypes.oneOfType([ PropTypes.object, PropTypes.oneOf([false]) ]),
    theme:             PropTypes.string,
    pollInterval:      PropTypes.number,
    onKeyPress:        PropTypes.func,
    onKeyDown:         PropTypes.func,
    onKeyUp:           PropTypes.func,
    onChange:          PropTypes.func,
    onChangeSelection: PropTypes.func,
    disabledToolbarOptions: PropTypes.array
  };

  static defaultProps = {
    id:       'wysiwyg-editor',
    readOnly: false,
    theme:    'snow',
    disabledToolbarOptions: [],

    styles: {
      '.ql-editor': {
        'min-height': '200px',
        'height':     '100%'
      }
    }
  };

  colours = [
    { value: '#000000'},
    { value: '#444444'},
    { value: '#666666'},
    { value: '#969696'},
    { value: '#d0d2d3'},
    { value: '#eeeeee'},
    { value: '#08a5c5'},
    { value: '#046f99'},
    { value: '#8BC540'},
    { value: '#c54040'},
    { value: '#ffcc00'},
    { value: '#ffffff'}
  ];

  TOOLBAR_ITEMS = [
    { label: 'Formats', type: 'group', items: [
      { label: 'Font', type: 'font', items: [
        { label: 'Sans Serif', value: 'sans-serif' },
        { label: 'Serif', value: 'serif' },
        { label: 'Monospace', value: 'monospace' }
      ]},
      { label: 'Formats', type: 'separator' },
      { label: 'Size', type:  'size', items: [
        { label: 'Normal', value: '13px' },
        { label: 'Small', value: '10px' },
        { label: 'Large', value: '18px' },
        { label: 'Huge', value: '32px' }
      ]}
    ]},
    { label: 'Size', type: 'separator' },
    { label: 'Alignment', type: 'align', items: [
      { label: '', value: 'center' },
      { label: '', value: 'left' },
      { label: '', value: 'right' },
      { label: '', value: 'justify' }
    ]},
    { label: 'Alignment', type: 'space' },
    { label: 'Text', type:  'group', items: [
      { type: 'bold', label: 'Bold' },
      { type: 'italic', label: 'Italic' },
      { type: 'strike', label: 'Strike' },
      { type: 'underline', label: 'Underline' },
      { type: 'separator' },
      { type: 'color', label: 'Color', items: this.colours },
      { type: 'background', label: 'Background Color', items: this.colours },
      { type: 'separator' },
      { type: 'link', label: 'Link' }
    ]},
    { label: 'Blocks', type:  'group', items: [
      { type: 'bullet', label: 'Bullet' },
      { type: 'separator' },
      { type: 'list', label: 'List' }
    ]}
  ];


  render() {
    const onChange = this.props.onChange
      ? flowRight(this.props.onChange, this._replaceItalics)
      : () => {};

    const props = {...this.props, onChange};

    return (
      <ReactQuill {...props} theme="snow">
        <Toolbar key="toolbar" ref="toolbar" items={this.getToolbarOptions()} />
        <div key="editor" ref="editor" className="quill-contents" dangerouslySetInnerHTML={{__html: this.props.value}} />
      </ReactQuill>
    );
  }

  getToolbarOptions = () => {
    const disabledItems = this.props.disabledToolbarOptions
    const toolbarOptions = this.TOOLBAR_ITEMS

    return toolbarOptions.filter((item) => {
      return disabledItems.indexOf(item.label) == -1;
    });
  }

  //TODO: Remove this hack when react-quill supports addFormat
  _replaceItalics = (text) => {
    return text.replace('<i>', '<em>').replace('</i>', '</em>')
  }
}

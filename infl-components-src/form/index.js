const React = require('react');

const ReactDOM = require('react-dom');

class Form extends React.Component {
  componentDidMount() {
    this._determineNumberOfColumns();
  }

  render() {
    return <form className='pt-form' ref='form'
      noValidate={this.props.novalidate}
      acceptCharset={this.props.acceptCharset}
      action={this.props.action}
      autoComplete={this.props.autocomplete}
      encType={this.props.enctype}
      method={this.props.method}
      name={this.props.name}
      target={this.props.target}
      onSubmit={this.props.onSubmit}>
        {this.props.children}
    </form>;
  }

  _determineNumberOfColumns() {
    let columns = [];
    const children = ReactDOM.findDOMNode(this.refs.form).children;

    //Partition the column children by FormRow and FormAction. Apply 'column-num ${length}' to each partition
    for (let i = 0; i < children.length; i++) {
      if (this._isFormColumn(children[i])) {
        columns.push(children[i]);
      } else if (this._isFormRow(children[i]) || this._isFormAction(children[i])) {
        this._styleColumns(columns);
        columns = [];
      }
    }

    if (columns.length > 0 ) {
      this._styleColumns(columns);
    }
  }

  _isFormColumn(child) {
    return child.className.indexOf('pt-form-column') > -1;
  }

  _isFormRow(child) {
    return child.className.indexOf('pt-form-row') > -1;
  }

  _isFormAction(child) {
    return child.className.indexOf('pt-form-actions') > -1;
  }

  _styleColumns(columns) {
    columns.map(function(column) {
      column.className = column.className + ' column-num-' + columns.length;
    });
  }
}

Form.defaultProps = {
  acceptCharset: '',
  action:        '',
  autocomplete:  '',
  enctype:       '',
  method:        '',
  name:          '',
  novalidate:    true,
  target:        '',
  onSubmit:      function() {}
};

Form.displayName = 'Form';

Form.propTypes = {
  acceptCharset: React.PropTypes.string,
  action:        React.PropTypes.string,
  autocomplete:  React.PropTypes.oneOf([
    'on',
    'off',
    '']
  ),
  enctype: React.PropTypes.oneOf([
    'application/x-www-form-urlencoded',
    'multipart/form-data',
    'text/plain',
    ''
  ]),
  method: React.PropTypes.oneOf([
    'get',
    'post',
    ''
  ]),
  name:       React.PropTypes.string,
  novalidate: React.PropTypes.bool,
  target:     React.PropTypes.oneOf([
    '_blank',
    '_self',
    '_parent',
    '_top',
    ''
  ]),
  onSubmit: React.PropTypes.func
};

Form.Column = React.createClass({
  render: function() {
    return <div className="pt-form-column" ref="column">
      {this.props.children}
    </div>;
  }
});

Form.Row = React.createClass({
  getDefaultProps: function() {
    return {
      inputSize: 'large',
    };
  },

  propTypes: {
    inputSize: React.PropTypes.oneOf(['small', 'medium', 'large', 'full'])
  },

  render: function() {
    return <div className={'pt-form-row ' + this.props.inputSize + '-input'} ref='row'>
      {this.props.children}
    </div>;
  }
});

Form.Actions = React.createClass({
  render: function() {
    return <div className="pt-form-actions" ref="actions">
      {this.props.children}
    </div>;
  }
});

Form.Title = React.createClass({
  getDefaultProps: function() {
    return {
      title:   '',
      actions: null,
    };
  },

  propTypes: {
    title:   React.PropTypes.string,
    actions: React.PropTypes.element //wanted to use instanceOf(ButtonGroup) but i need to include button group in form
  },

  render: function() {
    return <div className="pt-form-title" ref="title">
      <h2>{this.props.title}</h2>
      <div className="pt-form-title-actions" ref="actions">
        {this.props.actions}
      </div>
      <div className="pt-form-title-description" ref="description">
        {this.props.children}
      </div>
    </div>;
  }
});

Form.Section = React.createClass({
  getDefaultProps: function() {
    return {
      hideDivider: false,
    };
  },

  propTypes: {
    hideDivider: React.PropTypes.bool
  },

  render: function() {
    return <div className={'pt-form-section ' + this._divider()} ref='section'>
      {this.props.children}
    </div>;
  },

  _divider: function() {
    return this.props.hideDivider
      ? ''
      : 'pt-form-section-divider';
  }
});

Form.SectionTitle = React.createClass({
  getDefaultProps: function() {
    return {
      title: ''
    };
  },

  propTypes: {
    title: React.PropTypes.string
  },

  render: function() {
    return <div className='pt-form-section-title' ref='title'>
      <h3>{this.props.title}</h3>
      <div className='pt-form-section-title-description' ref='description'>
        {this.props.children}
      </div>
    </div>;
  }
});

Form.Alert = React.createClass({
  render: function() {
    return <div className='pt-form-alert' ref='alert'>
        {this.props.children}
      </div>;
  }
});

module.exports = Form;

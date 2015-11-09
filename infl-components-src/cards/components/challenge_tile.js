const React = require('react');
const Icon = require('../../icon');
const Tooltip = require('../../tooltip');
const classNames = require('classnames');

const acceptedStatusType = ['started', 'expiring', 'limited', 'multi'];

class ChallengeTile extends React.Component {
  static defaultProps = {
    onShowDescription : function() {}
  }

  static propTypes = {
    type:              React.PropTypes.oneOf(acceptedStatusType).isRequired,
    description:       React.PropTypes.string.isRequired,
    onShowDescription: React.PropTypes.func
  }

  render() {
    return this._addTile();
  }

  _addTile() {
    if (!this._isAcceptedStatusType()) return null;

    return (
      <div className={'pt-challenge-tile ' + this.props.type}>
        <Tooltip
            element={<Icon icon={this._determineTileIcon()} />}
            position='bottom'
            isClickable={false}
            onOpen={this._handleOnOpen}
            style={{
              content: {
                minWidth: '100px',
                padding:  '2px 5px',
                fontSize: '12px'
              }
            }}>
          {this.props.description}
        </Tooltip>
      </div>
    );
  }

  _handleOnOpen = () => {
    this.props.onShowDescription(this.props.type);
  }

  _isAcceptedStatusType() {
    return acceptedStatusType.indexOf(this.props.type) !== -1;
  }

  _determineTileIcon() {
    const tileIcons = {
      'started':  'inprogress',
      'expiring': 'expiring',
      'limited':  'cursor-click',
      'multi':    'multi'
    };

    return tileIcons[this.props.type];
  }
}

ChallengeTile.Container = React.createClass({
  render: function() {
    return <div className="pt-challenge-tile-container">
      {this.props.children}
    </div>;
  }
});

module.exports = ChallengeTile;

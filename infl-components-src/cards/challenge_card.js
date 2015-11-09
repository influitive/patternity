const React        = require('react');
const $            = require('jquery');

const Card         = require('./card');
const animate      = require('../utilities/animate');
const CardDetails  = require('./components/card_details');
const CardImage    = require('./components/card_image');
const ellipsisText = require('./components/ellipsis_text');

class ChallengeCard extends React.Component {
  static propTypes = {
    id:              React.PropTypes.string,
    animateEntrance: React.PropTypes.bool
  }

  static defaultProps = {
    id:              '',
    animateEntrance: false
  }

  componentDidMount() {
    this._addWindowResizeEvent();
    this._animateCardEntrance();
  }

  componentDidUpdate() {
    this._adjustDescriptionHeight();
  }

  componentWillUnmount() {
    this._removeWindowResizeEvent();
  }

  render() {
    return <div ref="challengeCard" className="pt-challenge-card hide" id={this.props.id}>
      <Card ref="card">
        {this.props.children}
      </Card>
    </div>;
  }

  _animateCardEntrance() {
    const challengeCard = React.findDOMNode(this.refs.challengeCard);

    if (this.props.animateEntrance) {
      this._runAnimation(challengeCard);
    } else {
      $(challengeCard).removeClass('hide');
      this._adjustDescriptionHeight();
    }
  }

  _runAnimation(challengeCard) {
    $(challengeCard).removeClass('hide');
    this._adjustDescriptionHeight();
    this._addAnimationDelay();
    animate.run(challengeCard, 'fade-in-up', undefined, this._removeAnimationDelay);
  }

  _addAnimationDelay() {
    const challengeCard = React.findDOMNode(this.refs.challengeCard);
    challengeCard.style['-webkit-animation-delay'] = this._determineEntranceTime() + 's';
    challengeCard.style['-moz-animation-delay'] = this._determineEntranceTime() + 's';
    challengeCard.style['-o-animation-delay'] = this._determineEntranceTime() + 's';
    challengeCard.style['animation-delay'] = this._determineEntranceTime() + 's';
  }

  _determineEntranceTime() {
    return Math.random(0, 1.5).toFixed(2);
  }

  _removeAnimationDelay = () => {
    const challengeCard = React.findDOMNode(this.refs.challengeCard);
    challengeCard.style['-webkit-animation-delay'] = '';
    challengeCard.style['-moz-animation-delay'] = '';
    challengeCard.style['-o-animation-delay'] = '';
    challengeCard.style['animation-delay'] = '';
  }

  _adjustDescriptionHeight = () => {
    const card = React.findDOMNode(this.refs.card);
    const description = $(card).find('.description')[0];

    if (description) {
      const cardHeight = $(card).outerHeight(true);
      const imageHeight = $(card).find('.pt-challenge-image ').outerHeight(true);
      const actionsHeight = $(card).find('.pt-card-actions').outerHeight(true);
      const titleHeight = $(card).find('.headline').outerHeight(true);
      const typeHeight = $(card).find('.pt-challenge-metadata').outerHeight(true);

      description.style.height = (cardHeight - actionsHeight - titleHeight - typeHeight - imageHeight) + 'px';

      this._ellipsisDescription(description);
    }
  }

  _addWindowResizeEvent() {
    $(window).resize(this._adjustDescriptionHeight);
  }

  _ellipsisDescription(description) {
    const descriptionMaxHeight = parseInt(description.style.height);
    ellipsisText.run(description, descriptionMaxHeight);
  }

  _removeWindowResizeEvent() {
    $(window).off('resize', this._adjustDescriptionHeight);
  }
}

ChallengeCard.Details = CardDetails;
ChallengeCard.Actions = Card.Actions;
ChallengeCard.Image = CardImage;

export default ChallengeCard;

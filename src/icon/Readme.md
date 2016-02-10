---
included: true
group: Icons
showCode: false
additionalFiles:
  - icon.readme.css
---
[comment]: <> (WARNING!! DANGER!! THIS FILE IS AUTOMATIGICALLY GENERATED BY "gulp")
[comment]: <> (THE SOURCE FILE IS infl-icons/templates/influicons-readme.md)
```
let mainStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between'
};
let iconGroupStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontSize: '60px',
  padding: '15px 10px 15px 10px',
  lineHeight: 1
};
let titleStyle = {
  fontSize: '12px',
  maxWidth: '60px',
  textAlign: 'center'
};

let onMouseEnter = (e) => {
  if(!e.target.id)
    return;
  this.setState({
    selectedIcon: e.target.id
  })
};

let onMouseLeave = (e) => {
  if(!e.target.id)
    return;
  this.setState({
    selectedIcon: null
  })
};

<div style={mainStyle}>
  
  <div style={iconGroupStyle} className='IconDescription' id="alert-caution">
    <Icon icon="alert-caution" />
    <div style={titleStyle}>alert-caution</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="arrow-down">
    <Icon icon="arrow-down" />
    <div style={titleStyle}>arrow-down</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="arrow-left">
    <Icon icon="arrow-left" />
    <div style={titleStyle}>arrow-left</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="arrow-right">
    <Icon icon="arrow-right" />
    <div style={titleStyle}>arrow-right</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="arrow-up">
    <Icon icon="arrow-up" />
    <div style={titleStyle}>arrow-up</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="asterisk">
    <Icon icon="asterisk" />
    <div style={titleStyle}>asterisk</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="bell">
    <Icon icon="bell" />
    <div style={titleStyle}>bell</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="calendar">
    <Icon icon="calendar" />
    <div style={titleStyle}>calendar</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="check-circle-o">
    <Icon icon="check-circle-o" />
    <div style={titleStyle}>check-circle-o</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="check">
    <Icon icon="check" />
    <div style={titleStyle}>check</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="chevron-down">
    <Icon icon="chevron-down" />
    <div style={titleStyle}>chevron-down</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="chevron-left">
    <Icon icon="chevron-left" />
    <div style={titleStyle}>chevron-left</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="chevron-right">
    <Icon icon="chevron-right" />
    <div style={titleStyle}>chevron-right</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="chevron-up">
    <Icon icon="chevron-up" />
    <div style={titleStyle}>chevron-up</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="clock">
    <Icon icon="clock" />
    <div style={titleStyle}>clock</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="close-circle-o">
    <Icon icon="close-circle-o" />
    <div style={titleStyle}>close-circle-o</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="close">
    <Icon icon="close" />
    <div style={titleStyle}>close</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="code">
    <Icon icon="code" />
    <div style={titleStyle}>code</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="coins">
    <Icon icon="coins" />
    <div style={titleStyle}>coins</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="copy">
    <Icon icon="copy" />
    <div style={titleStyle}>copy</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="email-share">
    <Icon icon="email-share" />
    <div style={titleStyle}>email-share</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="empty">
    <Icon icon="empty" />
    <div style={titleStyle}>empty</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="exclamation-circle-o">
    <Icon icon="exclamation-circle-o" />
    <div style={titleStyle}>exclamation-circle-o</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="flag">
    <Icon icon="flag" />
    <div style={titleStyle}>flag</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="gear">
    <Icon icon="gear" />
    <div style={titleStyle}>gear</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="globe">
    <Icon icon="globe" />
    <div style={titleStyle}>globe</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="grid">
    <Icon icon="grid" />
    <div style={titleStyle}>grid</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="hamburger">
    <Icon icon="hamburger" />
    <div style={titleStyle}>hamburger</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="heart">
    <Icon icon="heart" />
    <div style={titleStyle}>heart</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="info-circle-o">
    <Icon icon="info-circle-o" />
    <div style={titleStyle}>info-circle-o</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="link">
    <Icon icon="link" />
    <div style={titleStyle}>link</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="list">
    <Icon icon="list" />
    <div style={titleStyle}>list</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="lock">
    <Icon icon="lock" />
    <div style={titleStyle}>lock</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="mail">
    <Icon icon="mail" />
    <div style={titleStyle}>mail</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="merge">
    <Icon icon="merge" />
    <div style={titleStyle}>merge</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="minus">
    <Icon icon="minus" />
    <div style={titleStyle}>minus</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="pencil">
    <Icon icon="pencil" />
    <div style={titleStyle}>pencil</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="pin">
    <Icon icon="pin" />
    <div style={titleStyle}>pin</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="plus">
    <Icon icon="plus" />
    <div style={titleStyle}>plus</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="question-circle-o">
    <Icon icon="question-circle-o" />
    <div style={titleStyle}>question-circle-o</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="quote-close">
    <Icon icon="quote-close" />
    <div style={titleStyle}>quote-close</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="quote-fill-close">
    <Icon icon="quote-fill-close" />
    <div style={titleStyle}>quote-fill-close</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="quote-fill-open">
    <Icon icon="quote-fill-open" />
    <div style={titleStyle}>quote-fill-open</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="quote-open">
    <Icon icon="quote-open" />
    <div style={titleStyle}>quote-open</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="search">
    <Icon icon="search" />
    <div style={titleStyle}>search</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="share-facebook-circular">
    <Icon icon="share-facebook-circular" />
    <div style={titleStyle}>share-facebook-circular</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="share-facebook">
    <Icon icon="share-facebook" />
    <div style={titleStyle}>share-facebook</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="share-linkedin-circular">
    <Icon icon="share-linkedin-circular" />
    <div style={titleStyle}>share-linkedin-circular</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="share-linkedin">
    <Icon icon="share-linkedin" />
    <div style={titleStyle}>share-linkedin</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="share-twitter-circular">
    <Icon icon="share-twitter-circular" />
    <div style={titleStyle}>share-twitter-circular</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="share-twitter">
    <Icon icon="share-twitter" />
    <div style={titleStyle}>share-twitter</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="share">
    <Icon icon="share" />
    <div style={titleStyle}>share</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="speech-2">
    <Icon icon="speech-2" />
    <div style={titleStyle}>speech-2</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="speech">
    <Icon icon="speech" />
    <div style={titleStyle}>speech</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="star">
    <Icon icon="star" />
    <div style={titleStyle}>star</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="support">
    <Icon icon="support" />
    <div style={titleStyle}>support</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="target">
    <Icon icon="target" />
    <div style={titleStyle}>target</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="times-circle-o">
    <Icon icon="times-circle-o" />
    <div style={titleStyle}>times-circle-o</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="times">
    <Icon icon="times" />
    <div style={titleStyle}>times</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="trash">
    <Icon icon="trash" />
    <div style={titleStyle}>trash</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="unlock">
    <Icon icon="unlock" />
    <div style={titleStyle}>unlock</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="user">
    <Icon icon="user" />
    <div style={titleStyle}>user</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="star-fill">
    <Icon icon="star-fill" />
    <div style={titleStyle}>star-fill</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="jump-menu">
    <Icon icon="jump-menu" />
    <div style={titleStyle}>jump-menu</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="multi">
    <Icon icon="multi" />
    <div style={titleStyle}>multi</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="circle-filled">
    <Icon icon="circle-filled" />
    <div style={titleStyle}>circle-filled</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="private">
    <Icon icon="private" />
    <div style={titleStyle}>private</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="globe-locked">
    <Icon icon="globe-locked" />
    <div style={titleStyle}>globe-locked</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="private-locked">
    <Icon icon="private-locked" />
    <div style={titleStyle}>private-locked</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="archive">
    <Icon icon="archive" />
    <div style={titleStyle}>archive</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="expiring">
    <Icon icon="expiring" />
    <div style={titleStyle}>expiring</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="inprogress">
    <Icon icon="inprogress" />
    <div style={titleStyle}>inprogress</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="disqus-circular">
    <Icon icon="disqus-circular" />
    <div style={titleStyle}>disqus-circular</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="disqus">
    <Icon icon="disqus" />
    <div style={titleStyle}>disqus</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="circle-empty">
    <Icon icon="circle-empty" />
    <div style={titleStyle}>circle-empty</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="cursor-click">
    <Icon icon="cursor-click" />
    <div style={titleStyle}>cursor-click</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="crop">
    <Icon icon="crop" />
    <div style={titleStyle}>crop</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="medal">
    <Icon icon="medal" />
    <div style={titleStyle}>medal</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="grow">
    <Icon icon="grow" />
    <div style={titleStyle}>grow</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="handshake">
    <Icon icon="handshake" />
    <div style={titleStyle}>handshake</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="conversation">
    <Icon icon="conversation" />
    <div style={titleStyle}>conversation</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="graduation-cap">
    <Icon icon="graduation-cap" />
    <div style={titleStyle}>graduation-cap</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="stage-quiz">
    <Icon icon="stage-quiz" />
    <div style={titleStyle}>stage-quiz</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="quiz-correct">
    <Icon icon="quiz-correct" />
    <div style={titleStyle}>quiz-correct</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="quiz-incorrect">
    <Icon icon="quiz-incorrect" />
    <div style={titleStyle}>quiz-incorrect</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="move">
    <Icon icon="move" />
    <div style={titleStyle}>move</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="share-google">
    <Icon icon="share-google" />
    <div style={titleStyle}>share-google</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="android">
    <Icon icon="android" />
    <div style={titleStyle}>android</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="apple">
    <Icon icon="apple" />
    <div style={titleStyle}>apple</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="video">
    <Icon icon="video" />
    <div style={titleStyle}>video</div>
  </div>
    
  <div style={iconGroupStyle} className='IconDescription' id="coins-old">
    <Icon icon="coins-old" />
    <div style={titleStyle}>coins-old</div>
  </div>
    
</div>
```
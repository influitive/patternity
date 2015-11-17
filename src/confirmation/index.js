import React, { Component, PropTypes } from 'react';

import ButtonGroup from '../button-group';
import Button      from '../button2';

import Form        from '../../infl-components/form.jsx';
import Tabs        from '../../infl-components/tabs.jsx';

import Modal       from '../modal_dialog';
import ModalHeader from '../modal_dialog/header';
import ModalBody   from '../modal_dialog/body';
import ModalFooter from '../modal_dialog/footer';

export default class Confirmation extends Component {
  static propTypes = {
    body:   PropTypes.string,
    title:  PropTypes.string,
    no:     PropTypes.string,
    yes:    PropTypes.string,
    onYes:  PropTypes.func,
    onNo:   PropTypes.func,
    onCancel: PropTypes.func
  }

  static defaultProps = {
    title: 'Are you sure?',
    yes: 'OK',
    no: 'Cancel',
    onCancel: null,
    onNo: function() {},
    saveStatus: 'unsaved',
  }

  componentWillReceiveProps(nextProps) {

  }

  componentWillMount() {

  }

  render() {
    return (
      <Modal size='small'>
        <ModalHeader title={this.props.title} />

        <ModalBody>
          {this.props.body}
        </ModalBody> 

        <ModalFooter>
          <ButtonGroup>
            <Button type='secondary' className='discard' onClick={this.props.onNo} >{ this.props.no }</Button>
            <Button type='primary' className='discard' onClick={this.props.onYes} >{ this.props.yes }</Button>
          </ButtonGroup>
        </ModalFooter>
      </Modal>
    );
  }
}

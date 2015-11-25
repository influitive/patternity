import React, { Component, PropTypes } from 'react';

import ButtonGroup from '../button-group';
import Button      from '../button2';
import SaveButton  from '../save-button';

import Modal       from '../modal_dialog';
import ModalHeader from '../COMMON/header';
import ModalBody   from '../COMMON/body';
import ModalFooter from '../COMMON/footer';

export default class Confirmation extends Component {
  static propTypes = {
    body:     PropTypes.string,
    title:    PropTypes.string,
    no:       PropTypes.string,
    yes:      PropTypes.string,
    onYes:    PropTypes.func,
    onNo:     PropTypes.func,
    onCancel: PropTypes.func
  };

  static defaultProps = {
    title:      'Are you sure?',
    yes:        'OK',
    no:         'Cancel',
    onCancel:   null,
    onNo:       function() {},
    saveStatus: 'unsaved'
  };

  render() {
    const { title, body, onNo, no, onYes, yes, saveStatus } = this.props;
    return (
      <Modal size='small'>
        <ModalHeader title={ title } />

        <ModalBody>
          { body }
        </ModalBody>

        <ModalFooter>
          <ButtonGroup>
            <Button type='secondary' className='discard' onClick={ onNo } >{  no  }</Button>
            <SaveButton onClick={ onYes } saveStatus={ saveStatus } customText={ {unsaved:  yes} }></SaveButton>
          </ButtonGroup>
        </ModalFooter>
      </Modal>
    );
  }
}

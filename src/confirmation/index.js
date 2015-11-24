import React, { Component, PropTypes } from 'react';

import ButtonGroup from '../button-group';
import Button      from '../button2';
import SaveButton  from '../save-button';

import Form        from '../../infl-components/form.jsx';
import Tabs        from '../../infl-components/tabs.jsx';

import Modal       from '../modal_dialog';
import ModalHeader from '../modal_dialog/header';
import ModalBody   from '../modal_dialog/body';
import ModalFooter from '../modal_dialog/footer';

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

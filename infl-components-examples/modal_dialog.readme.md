---
included: true
group: Components
---
```
  var open = () => {
    this.setState({isOpen:true});
  };

  var close = () => {
    this.setState({isOpen:false});
  };

  <div>
    <button onClick={open}>Open it!</button>
    <ModalDialog id="demo-modal" isModalOpen={this.state.isOpen} closeable={true} scrollingBody={false} lightbox={true} onClose={close}>
      <ModalDialog.Header title="test" />
      <ModalDialog.Body>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </ModalDialog.Body>
      <ModalDialog.Footer>
        <ButtonGroup>
          <button className="secondary">Cancel</button>
          <button className="success">Success</button>
        </ButtonGroup>
      </ModalDialog.Footer>
    </ModalDialog>
  </div>
```

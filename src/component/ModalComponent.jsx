import React from "react";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

const ModalComponent = ({score, open}) => (
  <div>
    <Dialog
      open={open}
      maxWidth={'md'}
    >
      <DialogContent>
        <DialogContentText id="alert-dialog-description" className="modal-font">
          Your final score is {score}
        </DialogContentText>
      </DialogContent>
    </Dialog>
  </div>
);

export default ModalComponent;
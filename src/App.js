import Home from "../../training/src/Component/Home";
import React from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "./App.css";
function App() {
  const [open, setOpen] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 2000);
  }, []);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="App">
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
       
          <DialogContentText>
            <div className="modalmain row">
              <div className="modalimg col-6">
                <img src="images/popup.png" alt="popup" />
              </div>
              <div className="modaldesc col-6">
              <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    <CloseIcon />
                  </Button>
                </DialogActions>
                <img
                  src="images/popupimage.png"
                  alt="popup"
                  className="popupimg"
                />
                <p className="pdesc">
                  <strong>
                    Want to know more how to land job in product based companies
                    ?
                  </strong>
                </p>
                <div class="input-group" style={{marginLeft: "-77px"}}>
                  <input
                  placeholder="Enter your Email"
                    type="text"
                    class="form-control"
                    aria-label="Dollar amount (with dot and two decimal places)"
                    style={{padding: "12px;"}}
                  />
                  <span class="input-group-text">  <EmailIcon /></span>
                
                </div>
                <div className="input-group mt-4" style={{marginLeft: "-77px"}}>
                  <input
                  placeholder="Enter your Phone Number"
                    type="text"
                    class="form-control"
                    aria-label="Dollar amount (with dot and two decimal places)"
                    style={{padding: "12px; !important"}}
                  />
                  <span class="input-group-text">  <LocalPhoneIcon /></span>
                
                </div>
                <DialogActions className="btnc">
                  <Button onClick="" color="primary">
                     Send me The Free PDF Now <ArrowForwardIosIcon />
                  </Button>
                </DialogActions>
              </div>
            </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>
      <Home />
    </div>
  );
}

export default App;

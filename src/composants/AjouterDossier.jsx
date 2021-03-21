import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import MuiDialogContent from '@material-ui/core/DialogContent';
import { withStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useState } from 'react';
import { TwitterPicker } from 'react-color';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

export default function AjouterDossier({ouvert, setOuvert, gererAjout}) {
  const [nom, setNom] = useState('');
  const [couverture, setCouverture] = useState('');
  const [couleur, setCouleur] = useState('#537169');

  function viderChamps() {
    setNom('');
    setCouverture('');
    setCouleur('#537169');
  }

  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);
  
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#008000",
        contrastText: "#fff"
      },
      secondary: {
        main: "#ff0000",
        contrastText: "#fff"
      },
    },
  });

  const myColors = ['#ff0000', '#ffa500', '#ffff00', '#008000', '#0000ff', '#4b0082'];

  return (
    <div className="AjouterDossier">
      <Dialog open={ouvert} onClose={()=>setOuvert(false)} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Ajouter un dossier</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="nomDossier"
            label="Nom du dossier"
            type="text"
            fullWidth
            onChange={(e) => setNom(e.target.value)}
            defaultValue={nom}
          />
          <TextField
            margin="dense"
            id="urlImage"
            label="Adresse de l'image de couverture"
            type="text"
            fullWidth
            onChange={(e) => setCouverture(e.target.value)}
            defaultValue={couverture}
          />
          <TwitterPicker 
            width="100%" 
            triangle="hide" 
            colors={myColors}
            onChangeComplete={(couleur, e) => setCouleur(couleur.hex)}
            color={couleur}
          />
        </DialogContent>
        <DialogActions>
        <ThemeProvider theme={theme}>
          <Button 
          onClick={()=>{setOuvert(false); viderChamps()}} 
          variant="contained"
          color="secondary"
          >
            Annuler
          </Button>
          <Button 
          onClick={() => {nom !== '' && gererAjout(nom, couverture, couleur); viderChamps(); }} 
          variant="contained"
          color="primary">
            Ajouter
          </Button>
        </ThemeProvider>
        </DialogActions>
      </Dialog>
    </div>
  );
}
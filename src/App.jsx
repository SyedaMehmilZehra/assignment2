import { CardContent, TextField, Typography, Card, Grid, Button, Container, InputLabel, Select, MenuItem } from '@mui/material';
import './App.css';

function App() {
  
  return (
    <Container maxWidth="sm" className='App'>
      <br />
      <br />
      <Typography gutterBottom variant='h4' align='center'>Try <strong>sign</strong> free for <strong>14</strong> days</Typography>
      <br />
      <br />
      <Typography gutterBottom variant='h6' align='center'>Already have a Formstack account? Start your trial in app</Typography>

      <Card>
        <CardContent>
          <form>
            <Grid container spacing={2}>

              <Grid xs={12} sm={6} item>
                <InputLabel htmlFor="firstname">FIRST NAME</InputLabel>
                <TextField id="firstname" name="firstname" placeholder="John" variant="outlined" fullWidth required />
              </Grid>

              <Grid xs={12} sm={6} item>
                <InputLabel htmlFor="lastname">LAST NAME</InputLabel>
                <TextField id="lastname" name="lastname" placeholder="Doe" variant="outlined" fullWidth required />
              </Grid>

              <Grid xs={12} sm={12} item>
                <InputLabel htmlFor="workemail">WORK EMAIL</InputLabel>
                <TextField id="workemail" name="workemail" placeholder="john@gmail.com" variant="outlined" fullWidth required />
              </Grid>

              <Grid xs={12} sm={12} item>
                <InputLabel htmlFor="password">PASSWORD</InputLabel>
                <TextField id="password" name="password" placeholder="#########" variant="outlined" fullWidth required />
              </Grid>

              <Grid xs={12} sm={12} item>
                <InputLabel htmlFor="organization_name">ORGANIZATION NAME</InputLabel>
                <TextField id="organization_name" name="organization_name" placeholder="ABC Organization" variant="outlined" fullWidth required />
              </Grid>

              <Grid xs={12} sm={12} item>
                <InputLabel htmlFor="organization_size">ORGANIZATION SIZE</InputLabel>
                <Select id="organization_size" name="organization_size" variant="outlined" fullWidth required>
                <MenuItem value="" disabled>Select...</MenuItem>
                  <MenuItem value="Small">Small</MenuItem>
                  <MenuItem value="Medium">Medium</MenuItem>
                  <MenuItem value="Large">Large</MenuItem>
                </Select>
              </Grid>

              <Grid xs={12} sm={12} item>
                <InputLabel htmlFor="industry">INDUSTRY</InputLabel>
                <Select id="industry" name="industry" variant="outlined" fullWidth required>
                  <MenuItem value="IT">IT</MenuItem>
                  <MenuItem value="Finance">Finance</MenuItem>
                  <MenuItem value="marketing">Marketing</MenuItem>
                </Select>
              </Grid>

              <Grid xs={12} item>
              <p>Formstack has updated our Terms of Service effective November 17, 2023<br />We encourage you to read the document in its entirely.</p>
              </Grid>
              
              <Grid xs={12} item>
                {/* <label htmlFor="understand" style={{ display: 'flex', alignItems: 'center' }}> */}
                  <input type="checkbox" id="understand" name="understand" style={{ marginRight: '8px' }} />
                  I understand and agree to the
                  <a href='http://google.com'>Formstack Privacy Policy, Software</a><br></br>
                  <a href='https://googl.com'>Service Agreement</a>, and
                  <a href='http://google.com'>Acceptable Use Policy</a>
                {/* </label> */}
              </Grid>


              {/* <Grid xs={12} item>
              <p>Formstack has updated our Terms of Service effective November 17, 2023<br />We encourage you to read the document in its entirely.<br /><br /><center>I understand and agree to the <a href='http://google.com'>Formstack Privacy Policy, Software</a><br /><a href='https://googl.com'>Service Agreement</a>and<a href='http://google.com'>Acceptable Use Policy</a></center></p>
              </Grid> */}
              
              <Grid xs={12} item>
                <Button variant='contained' color='primary' fullWidth type="submit">Submit</Button>
              </Grid>
            </Grid>
          </form>


        </CardContent>
      </Card>
    </Container>
  );
}

export default App;

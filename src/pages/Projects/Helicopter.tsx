// src/components/ProjectShowcase/ProjectShowcase.js

import { Container, Typography, Box, Card, CardContent, CardMedia, Grid } from '@mui/material';
import './Helicopter.module.css';
import HeliImage from '../../images/helicopter.png';
import InterfaceImage from '../../images/remote lab.png'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from '@mui/material/Link';
import projectsData from '../../data/projectsData';

function Helicopter() {

  const projectId = 1; // Replace with actual project ID
  const project = projectsData.find((project) => project.id === projectId);

  if (!project) {
    return null; // Handle if project is not found
  }


  return (
    <Container maxWidth="lg" className="project-showcase" sx={{ mt: 5, mb: 5}}>
      <Typography variant="h2" gutterBottom sx={{ textDecoration: 'underline'}}>
        Helicopter Rig Control Project
      </Typography>


      <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0, mb: 2, display: 'flex', flexWrap: 'wrap' }}>
        {project.tags.map((tag) => (
          <Box component="li" key={tag} sx={{ backgroundColor: '#f0f0f0', borderRadius: 1, p: 1, mr: 1, mb: 1 }}>
            {tag}
          </Box>
        ))}
      </Box>
      
      <Typography variant="h4" gutterBottom>
        Overview
      </Typography>
      <Box className="project-description" mb={4}>
        <Typography variant="body1" paragraph>
        This project was collaboratively developed as part of the ENCE361 Embedded Systems course at the University of Canterbury.
        </Typography>
        <Typography variant="h4" gutterBottom>
        Introduction
        </Typography>
        <Typography variant="body1" paragraph>
        The goal of this project is to program a remote controlled helicopter so that a “pilot” can fly a sortie, comprised of the following component tasks:
        <ol style={{ paddingLeft: '20px', paddingTop: '10px' }}>
          <li>Find a direction in which to take off.</li>
          <li>Rise to an altitude where stable, manoeuvrable flight can be maintained.</li>
          <li>Rotate around a fixed position and over several incremental steps.</li>
          <li>Land back at base, “parking” in a home position.</li>
        </ol>
        </Typography>
        <Typography variant="body1" paragraph>
        The helicopter is controlled by a TIVA board that is programmable over a web-based remote
laboratory interface (http://eng-labshare.canterbury.ac.nz); development work will be
completed on TIVA-Orbitboards loaned in labs. The main project output will be a program
for a TIVA board that contains a small, interrupt-driven, real-time kernel able to control the
lift-off, hover, heading, and landing of a helicopter mounted on a remote rig.
        </Typography>
      </Box>
      <Box className="project-media" mb={4}>
        <Grid container justifyContent='center' spacing={2}>
          <Grid item xs={8}>
            <Card className="custom-card">
              <CardMedia
                component="img"
                alt="Project screenshot"
                image={InterfaceImage}
                title="Project screenshot"
                className="project-image"
              />
              <CardContent>
                <Typography variant="body2" align='center'>
                  Figure 1: The remote lab inerface
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Box className="project-description" mb={4}>
        <Typography variant="h4" gutterBottom>
          Physcial Interface
        </Typography>
        <Typography variant="body1" paragraph>
      The helicopter is attached to a rig that allows a limited vertical range of motion (altitude) and
free rotation about the helicopter’s z-axis (yaw).
The helicopter’s rotors are driven by two motors, one for the main rotor and the other for the
stabilising tail rotor. Both motors are controlled by pulse width modulation (PWM) outputs
from the TIVA board and are powered by bench power supplies, which supply up to 6 A to the
main rotor at full power. The main rotor rotates clockwise (viewed from above); the tail rotor
generates a torque which opposes the torque of the main rotor.
Feedback to the TIVA board is in the form of altitude, yaw, and reference orientation signals.
<ul style={{ listStyleType: 'disc', paddingLeft: '20px', paddingTop: '10px'}}>
          <li>Altitude is monitored by an optical distance transducer that produces an analogue signal
between 2 V (down) and 1 V (up), corresponding to approximately 70 mm altitude range.
You should assume altitude signal frequency components above 4 Hz are noise.</li>
          <li>Yaw is monitored by means of a quadrature optical angle encoder which generates two
binary signals at voltage levels compatible with the TIVA board. There are 112 slots
around the circumference of the angle encoder (i.e. 112 slots over 360◦). Yaw movement
isn’t limited or restricted in any way; the helicopter can rotate freely. You should assume
the yaw can change at a rate above a reasonable background scheduling frequency.</li>
          <li>A reference signal is asserted (HIGH) when the helicopter faces directly towards the
          camera.</li>
        </ul>
        </Typography>
      </Box>
      <Box className="project-media" mb={4}>
        <Grid container spacing={2} justifyContent='center'>
          <Grid item xs={6}>
            <Card className="custom-card">
              <CardMedia
                component="img"
                alt="Project screenshot"
                image={HeliImage}
                title="Project screenshot"
                className="project-image"
              />
              <CardContent>
                <Typography variant="body2" align='center'>
                  Figure 2: The HeliRig
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Typography variant="h4" gutterBottom>
          Program Specification
        </Typography>
      <Typography variant="body1" gutterBottom>
        The developed program will be assessed against the following specifications:
      </Typography>
      <Typography variant="body1" paragraph>
        1. The 2-channel quadrature signal for the helicopter yaw should be processed via interrupt-driven decoding. 
        NB: There is a built-in quadrature encoder interface (QEI) on the TIVA board – this should NOT be used by the program. 
        The helicopter yaw in signed degrees should be displayed on the Orbit OLED display.
      </Typography>
      <Typography variant="body1" paragraph>
        2. The analogue signal from the altitude sensor should be sampled and converted by the TIVA ADC (module 0, channel 9); 
        the helicopter altitude should be displayed as a percentage on the Orbit OLED board. 100 % should indicate maximum altitude, 
        0 % should indicate minimum altitude, i.e. when the helicopter has landed. A reference minimum altitude reading should be 
        recorded before take-off. To reduce the effects of electrical noise, readings should be filtered to reliably estimate altitude.
      </Typography>
      <Typography variant="body1" paragraph>
        3. Two output PWM signals should be generated, one for the main rotor motor (module 0, PWM 7), and one for the tail rotor 
        motor (module 1, PWM 5). The frequency of the PWM signals should be in the range from 150 Hz to 300 Hz. The PWM duty cycles 
        for each motor should be displayed as percentages on the Orbit OLED display.
      </Typography>
      <Typography variant="body1" paragraph>
        4. The SW1 slider switch on the Orbit board should control the mode of the helicopter: the DOWN position of the switch should 
        indicate that the helicopter is either landed or in the process of landing. Changing the slider switch from DOWN to UP when 
        the helicopter is landed should cause the helicopter to take off.
        
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', paddingTop: '10px'}}>
          <li>The helicopter should land smoothly, facing the reference orientation. When landing is complete the rotor motors should stop.</li>
          <li>At take off the helicopter should increase main rotor thrust until it is at the point of starting to hover.</li>
          <li>With the main rotor near the hover point, the helicopter should rotate to a known reference position, indicated by a HIGH input from the independent yaw reference signal.</li>
          <li>While the helicopter is landing any change to the switch position should be ignored until landing is complete.</li>
          <li>When the program starts, which may happen after a ‘reset’ operation (either physically on the TIVA or remotely over the web interface) or after reprogramming, the helicopter should be in landed mode with the motors off, regardless of the slider position. NB: The web interface implements SW1 as a push button rather than a slider switch. This means that two pushes of the virtual button may be required to make the helicopter fly again after re-programming or a restart.</li>
        </ul>
      </Typography>

      <Typography variant="body1" paragraph>
        5. The four user-programmable buttons of the TIVA-Orbit board should be programmed to interactively control the altitude and yaw 
        of the helicopter.
        
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', paddingTop: '10px' }}>
          <li>Each operation of the UP button on the Orbit board should cause the helicopter to increase its altitude by 10% of its total vertical range. If the helicopter is already within 10% of its maximum altitude, pushing the UP button should take the helicopter to its maximum altitude. When the helicopter is at its maximum altitude any operation of the UP button should be ignored.</li>
          <li>Each operation of the DOWN button on the Orbit board should cause the helicopter to decrease its altitude by 10% of its total vertical range. If the helicopter is already within 10% of its minimum altitude, pushing the DOWN button should take the helicopter to its minimum altitude. When the helicopter is at its minimum altitude any operation of the DOWN button should be ignored.</li>
          <li>Neither the UP nor the DOWN button should affect the yaw of the helicopter.</li>
          <li>Each operation of the CCW (left) button on the TIVA board should cause the helicopter to rotate 15° counterclockwise (viewed from above).</li>
          <li>Each operation of the CW (right) button on the TIVA board should cause the helicopter to rotate 15° clockwise (viewed from above).</li>
          <li>Neither the CCW nor the CW button should affect the height of the helicopter.</li>
        </ul>
      </Typography>

      <Typography variant="body1" paragraph>
        6. The actions of the slider switch and the four pushbuttons will be emulated by virtual signals which are sent to a remote helicopter 
        rig over the remote lab interface. Therefore, the program should respond to pushbutton signals that are asserted for 200 ms for each 
        ”push”; only one button can be operated at a time. The virtual signal for the slider (MODE) is HIGH in the UP position.
      </Typography>
      <Typography variant="body1" paragraph>
        7. Operation of the virtual RESET button (active LOW) should invoke a call to the API function SysCtlReset() (prototype in driverlib/sysctl.h).
      </Typography>
      <Typography variant="body1" paragraph>
        8. The program should have a real-time foreground/background kernel, at minimum operating on a round-robin basis for background tasks. 
        Robust behaviour should be maintained at all times.
      </Typography>
      <Typography variant="body1" paragraph>
        9. At minimum a PI controller with a constant offset should be implemented to achieve controlled ”flight”.
      </Typography>
      <Typography variant="body1" paragraph>
        10. Information on the status of the helicopter should be transmitted via a serial link from UART0 at 9600 baud, with 1 stop bit and no 
        parity bit in each transmitted byte. Status information should include the desired and actual yaw (in degrees), the desired and actual 
        altitude (as a percentage of the maximum altitude), the duty cycle of each of the PWM signals controlling the rotors (%, with 0 meaning 
        off) and the current operating mode. The information needs to be in a concise but easily readable format that is compatible with the 
        scrolling display on the remote lab web page. Updates should be transmitted at regular intervals (no fewer than 4 updates per second).
      </Typography>
      <Typography variant="body1" paragraph>
        11. The program should use the following pin map and on-board resources:
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>TIVA Pin</TableCell>
              <TableCell>MCU Pin</TableCell>
              <TableCell>I/O</TableCell>
              <TableCell>Signal</TableCell>
              <TableCell>Notes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>J1-10</TableCell>
              <TableCell>PA7</TableCell>
              <TableCell>In</TableCell>
              <TableCell>Mode</TableCell>
              <TableCell>Slider switch (HIGH = up) & virtual signal</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>J2-03</TableCell>
              <TableCell>PE0</TableCell>
              <TableCell>In</TableCell>
              <TableCell>UP</TableCell>
              <TableCell>Active HIGH; virtual signal pulses HIGH on operation</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>J3-05</TableCell>
              <TableCell>PD2</TableCell>
              <TableCell>In</TableCell>
              <TableCell>DOWN</TableCell>
              <TableCell>Active HIGH; virtual signal pulses HIGH on operation</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>J4-10</TableCell>
              <TableCell>PF4</TableCell>
              <TableCell>In</TableCell>
              <TableCell>CCW</TableCell>
              <TableCell>Active LOW; virtual signal pulses LOW on operation</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>J2-04</TableCell>
              <TableCell>PF0</TableCell>
              <TableCell>In</TableCell>
              <TableCell>CW</TableCell>
              <TableCell>Active LOW; virtual signal pulses LOW on operation</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>J1-09</TableCell>
              <TableCell>PA6</TableCell>
              <TableCell>In</TableCell>
              <TableCell>RESET</TableCell>
              <TableCell>Active LOW; virtual signal pulses LOW on operation</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>J3-10</TableCell>
              <TableCell>PF1</TableCell>
              <TableCell>Out</TableCell>
              <TableCell>Tail motor</TableCell>
              <TableCell>M1PWM5; 2 % ≤ duty cycle ≤ 98 %, otherwise off</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>J1-03</TableCell>
              <TableCell>PB0</TableCell>
              <TableCell>In</TableCell>
              <TableCell>Yaw A</TableCell>
              <TableCell>B leads A in clockwise rotation</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>J1-04</TableCell>
              <TableCell>PB1</TableCell>
              <TableCell>In</TableCell>
              <TableCell>Yaw B</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>J4-04</TableCell>
              <TableCell>PC4</TableCell>
              <TableCell>In</TableCell>
              <TableCell>Yaw Reference</TableCell>
              <TableCell>LOW when helicopter is at the reference position, otherwise HIGH</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>J4-05</TableCell>
              <TableCell>PC5</TableCell>
              <TableCell>Out</TableCell>
              <TableCell>Main motor</TableCell>
              <TableCell>M0PWM7; 2 % ≤ duty cycle ≤ 98, otherwise off</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>J1-05</TableCell>
              <TableCell>PE4</TableCell>
              <TableCell>In</TableCell>
              <TableCell>Altitude</TableCell>
              <TableCell>M0AIN9; approx 1 V to 2 V range, decreases with increasing altitude</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>

    <Box mt={4} textAlign="center">
  <Link href="https://github.com/your-repo-url" target="_blank" rel="noopener noreferrer" underline="none" color="inherit">
    <GitHubIcon fontSize="large" />
    <Typography variant="body1">
      View the code on GitHub
    </Typography>
  </Link>
</Box>


    </Container>
  );
}

export default Helicopter;

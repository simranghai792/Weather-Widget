import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';


export default function InfoBox({ info }){

    const HOT_URL = "https://t4.ftcdn.net/jpg/05/18/43/73/360_F_518437397_j4c3cOSYK54AjCis5muIjPaHw2KBTCeH.jpg";
    const COLD_URL = "https://www.shutterstock.com/image-photo/winter-forest-south-park-sofia-600nw-2483073899.jpg";
    const RAIN_URL = "https://images.unsplash.com/photo-1519692933481-e162a57d6721?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJhaW58ZW58MHx8MHx8fDA%3D";
    return(
     <div className="InfoBox">
        
        <div className="cardContainer">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="Error"
              height="140"
              image={info.humidity>80 ? RAIN_URL : (info.temp>15 ? HOT_URL : COLD_URL)}
            />

            <CardContent>

             <Typography gutterBottom variant="h5" component="div">
                {info.city}
                {info.humidity>80 ?  <ThunderstormIcon/> : (info.temp>15 ?  <WbSunnyIcon/> : <AcUnitIcon/>)}
             </Typography>

             <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                <div>Temperature = {info.temp}&deg;C</div>
                <div>Humidity = {info.humidity}</div>
                <div>Min Temp = {info.tempMin}&deg;C</div>
                <div>Max Temp = {info.tempMax}&deg;C</div>
                <div>The weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C</div>
             </Typography>

            </CardContent>
    
           </Card>
        </div>
     </div>
    );
}
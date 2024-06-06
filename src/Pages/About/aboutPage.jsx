import './aboutPageStyle.css';
/*import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';*/

import Avatar from "@mui/material/Avatar";

export default function AboutPage() {

    return (
        <div className="aboutPageDiv">
            <div className="aboutCard">
                <div id="avatarDiv">
                    <div><Avatar alt="Kusal" src="/static/images/avatar/1.jpg" style={{marginRight: "10px"}}/></div>
                    <div><h4>Kusal Gunasekara</h4></div>
                </div>
                <div id="aboutContent">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A magnam recusandae sit tenetur.
                        Eligendi, esse?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A magnam recusandae sit tenetur.
                        Eligendi, esse?</p>
                </div>
            </div>
            <div className="aboutCard">

            </div>
        </div>
    )
}

import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
background-image: url(https://i.pinimg.com/originals/5e/b9/24/5eb924aee830d769dff1ad0997a99d25.gif);
width: 100%;
height: 50vh;
background-position: left 0px top -100px;
background-size: cover;
`;

const Heading = styled(Typography)`
    font-size: 70px;
    color: #FFFFFF;
    line-height: 1
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    background: #FFFFFF;
`;

const Banner = () => {
    
    return (
        <Image>
           
        </Image>
    )
}

export default Banner;
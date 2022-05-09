import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import {AccessTime} from '@mui/icons-material';




const TourCards =() => {
    return (
        <Grid item xs={3}>
            
            <Paper >
            <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbuK01ky_QiS4_HZZHHSiWHAIlwhnSwS-DQtnWDudDF9smKUs8e3K8-NmEwDCXSG1Q7Zs&usqp=CAU'   
            alt=''   
            className='img'
            />
            <Box paddingX={1}>
            <Typography variant="subtitle1" component="h2">
                Ниагарский водоспад
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    alignInrems: 'center'
                }}
                >
                    <AccessTime sx={{width:12.5}} />
                 <Typography variant= "body2" component="p" marginLeft= {0.5}>
                    5 haurs
                </Typography>
                </Box>
                <Box
                   sx={{
                        display: 'flex',
                        alignInrems: 'center'
                 }}
                 marginTop={3}
                 >
                 <Rating name="read-only" value={4.5} readOnly precision={0.5} size="small" />

             <Typography variant= "body2" component="p" marginLeft= {0.5}>
                4.5
            </Typography>

            <Typography variant= "body3" component="p" marginLeft= {1.5}>
                   (655 riviews)
                </Typography>
                    
            </Box>
            <Box>
            <Typography variant= "h6" component="h3" marginTop= {0}>
                    Цена 520$
                </Typography>
            </Box>
            </Box>
            </Paper>
        
        </Grid>
    )

};

export default TourCards;
import {Box,Typography} from '@mui/material'
import { useRouteError } from 'react-router-dom';


const ErrorComponent = ()=>{
    const error = useRouteError();
    return(
        <Box sx={{ marginLeft :250}}>
            <Typography>Error loading the page</Typography>

        </Box>
    )
}

export default ErrorComponent;
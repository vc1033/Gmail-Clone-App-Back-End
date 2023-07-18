import { Suspense, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import SuspenseLoader from "../components/common/SuspenseLoader";
import { Box } from "@mui/material";




const Main = () => {

    const [drawerstate , setState] = useState(false);
    const toggleDrawer = () => {
       setState(prevState => !prevState)
    }
    
 

    return (
        <>
        <Header toggleDrawer={toggleDrawer}/>
            <Box>
            <Sidebar drawerstate = {drawerstate}/>
            <Suspense fallback={<SuspenseLoader />}>
               <Outlet context={{drawerstate}}/>
            </Suspense>
            </Box>
            
        </>
       
            
    )
}


export default Main;

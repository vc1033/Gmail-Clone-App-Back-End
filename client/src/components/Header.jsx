import {AppBar , Toolbar , styled , InputBase ,Box} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { gmaillogo } from "../constants/constant";



const StyledAppBar = styled(AppBar)(
    {
        background : '#F5F5F5'
        
    })
const SearchWrapper = styled(Box)(
        {
            background : '#eaf1fb',
            marginLeft :80,
            borderRadius : 80,
            minWidth : 690,
            maxWidth : 720,
            height : 48,
            display : "flex",
            alignItems : "center",
            justifyContent : "space-between",
            padding : "0 20px",
            '& > div': {
                width :'100%',
                padding : "0 10px"
            }
            

            
        }
)

const OptionsWrapper = styled(Box)({
    width:"100%",
    display : "flex",
    justifyContent : "end",
    '& > svg':{
        marginLeft : 20,
    }

})

const Header = ({ toggleDrawer }) => {
    return (
        <div>
           <StyledAppBar position="static">
            <Toolbar>
                <MenuIcon color="action" onClick = {toggleDrawer}/>
                <img src={gmaillogo} alt="gmaillogo" style={{width : 109,height : 40,marginLeft : 15}}/>
                <SearchWrapper>
                  <SearchIcon color="action" />
                  <InputBase placeholder="Search Email"/>
                  <TuneIcon color="action" />
                </SearchWrapper>  
                <OptionsWrapper>
                    <HelpOutlineOutlinedIcon color="action" />
                    <SettingsOutlinedIcon color="action" />
                    <AppsOutlinedIcon color="action"/>
                    <AccountCircleOutlinedIcon color="action"/>
                </OptionsWrapper>

            </Toolbar>
            </StyledAppBar>
        </div>
    )
}

export default Header;
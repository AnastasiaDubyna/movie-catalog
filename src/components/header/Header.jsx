import { Link } from "react-router-dom";
import { nanoid } from "nanoid";
import { Grid } from "@mui/material";
import Logo from "../logo/Logo";
import Search from "../search/Search";
import { headerTabs } from "./constants";
import "./header.css";

const Header = () => (
    <div className="header-container">
        <Grid container className="header-grid" sx={{width: "67%"}}>
            <Grid item  xs={5} sm={2} md={2} lg={1}>
                <Logo />
            </Grid>
            {headerTabs.map(tabObj => (
                <Grid container item  xs={5} sm={2} md={2} lg={1} justifyContent="center" className="header-tab" key={nanoid(3)}>
                    <Link to={tabObj.path}>{tabObj.name}</Link>
                </Grid>
            ))}
            <Grid container item  xs={5} sm={4} md={4} lg={8} justifyContent="flex-end">
                <Search className="header-search"/>
            </Grid>
        </Grid>
    </div>
);

export default Header;
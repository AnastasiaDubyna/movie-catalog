import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import Search from "../search/Search";
import "./header.css";
import { headerTabs } from "./constants";
import { nanoid } from "nanoid";

const Header = () => {
    return (
        <div className="header-container">
            <Grid container className="header-grid">
                <Grid item  xs={5} sm={6} md={7} lg={1}>
                    <Logo />
                </Grid>
                {
                    headerTabs.map(
                        tabObj => (
                            <Grid container item  xs={5} sm={6} md={7} lg={1} justifyContent="center" className="header-tab" key={nanoid(3)}>
                                <Link to={tabObj.path}>{tabObj.name}</Link>
                            </Grid>
                        )
                    )
                }
                <Grid container item  xs={5} sm={6} md={7} lg={8} justifyContent="flex-end">
                    <Search className="header-search"/>
                </Grid>
            </Grid>
        </div>
    )
};

export default Header;
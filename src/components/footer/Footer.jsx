import { Grid } from "@mui/material";
import { nanoid } from "nanoid";
import { footerContent } from "./constants";
import "./footer.css";

const Footer = () => (
    <div className="footer-container">
        <Grid container id="footer-grid" spacing={{md: 2, lg: 1}}>
            {
                footerContent.map(
                    columnContent => (
                        <Grid container item xs={5} sm={6} md={1} lg={2} className="footer-column" key={nanoid()}>
                            {
                                columnContent.map(
                                    row => <Grid item xs={5} sm={6} md={12} lg={12} key={nanoid()}>{row}</Grid>
                                )
                            }
                        </Grid>
                    )
                )
            }
        </Grid>
    </div>
);

export default Footer;
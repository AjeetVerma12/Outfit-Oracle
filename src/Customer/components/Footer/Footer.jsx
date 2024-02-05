import { Button, Grid, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            {""}Company{""}
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              {""}About{""}
            </Button>
          </div>

          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              {""}Blogs{""}
            </Button>
          </div>

          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              {""}Careers{""}
            </Button>
          </div>

          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              {""}Corporate Information{""}
            </Button>
          </div>

          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              {""}Press{""}
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            {""}Solutions{""}
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              {""}Marketing{""}
            </Button>
          </div>

          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              {""}Analytics{""}
            </Button>
          </div>

          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              {""}Commerce{""}
            </Button>
          </div>

          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              {""}Insights{""}
            </Button>
          </div>

          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              {""}Support{""}
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            {""}Documentation{""}
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              {""}Guides{""}
            </Button>
          </div>

          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              {""}API Status{""}
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            {""}Legal{""}
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              {""}Claims{""}
            </Button>
          </div>

          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              {""}Privacy{""}
            </Button>
          </div>

          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              {""}Terms{""}
            </Button>
          </div>
        </Grid>
        <Grid className="pt-10" item xs={12}>
            <Typography variant="body2" component="p" align="center">
                &copy; 2024 Outfit Oracle. All Rights Reserved.
            </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import styles from "./styles";

const useStyles = makeStyles(styles);

const SHIFT_REPORT_IMAGE_SIZE = {
  WIDTH: 141,
  HEIGHT: 200
};

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.home}>
      <Typography variant="h4" component="h1">
        Plan de transformation de l'économie française
      </Typography>
      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        className={classes.aboutHeader}
      >
        À propos de ce site
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm style={{ flexGrow: 0 }}>
          <a
            href="https://theshiftproject.org/wp-content/uploads/2020/05/Crises-climat_chantier-du-Plan_Shift-Project.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="alignleft wp-image-14874"
              src="https://theshiftproject.org/wp-content/uploads/2020/05/Image-de-couverture-chantier-du-Plan-212x300.png"
              alt="Téléchargez le chantier d'urgence du Shift"
              width={SHIFT_REPORT_IMAGE_SIZE.WIDTH}
              height={SHIFT_REPORT_IMAGE_SIZE.HEIGHT}
              srcSet="https://theshiftproject.org/wp-content/uploads/2020/05/Image-de-couverture-chantier-du-Plan-212x300.png 212w, https://theshiftproject.org/wp-content/uploads/2020/05/Image-de-couverture-chantier-du-Plan.png 538w"
              sizes="(max-width: 141px) 100vw, 141px"
            />
          </a>
        </Grid>
        <Grid item xs={12} sm>
          <Typography variant="body1" gutterBottom>
            Ce site reprend les informations présentes dans ce rapport du Shift
            Project.
          </Typography>

          <Typography
            variant="body2"
            gutterBottom
            style={{ whiteSpace: "pre-line" }}
          >
            Aucune informations n'est ajouté ou modifié.
            {"\n"}L'objectif de ce site est de pouvoir parcourir les différents
            sujets abordé à l'aide d'un format différent de celui du document
            source.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;

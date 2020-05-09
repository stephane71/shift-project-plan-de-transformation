import Typography from "@material-ui/core/Typography";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import styles from "./styles";

const useStyles = makeStyles(styles);

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.home}>
      <Typography variant="h2" component="h1">
        Plan de transformation de l'économie française
      </Typography>
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        className={classes.about}
      >
        À propos de ce site
      </Typography>
      <div className={classes.main}>
        <a
          href="https://theshiftproject.org/wp-content/uploads/2020/05/Crises-climat_chantier-du-Plan_Shift-Project.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="alignleft wp-image-14874"
            src="https://theshiftproject.org/wp-content/uploads/2020/05/Image-de-couverture-chantier-du-Plan-212x300.png"
            alt="Téléchargez le chantier d'urgence du Shift"
            width="141"
            height="200"
            srcSet="https://theshiftproject.org/wp-content/uploads/2020/05/Image-de-couverture-chantier-du-Plan-212x300.png 212w, https://theshiftproject.org/wp-content/uploads/2020/05/Image-de-couverture-chantier-du-Plan.png 538w"
            sizes="(max-width: 141px) 100vw, 141px"
          />
        </a>
        <div className={classes.presentation}>
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
        </div>
      </div>
    </div>
  );
}

export default Home;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";

import ShareIcon from "@material-ui/icons/Share";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";

const SECTOR_CARD_WIDTH = 600;
const useStyles = makeStyles(theme => ({
  sectorCard: {
    width: SECTOR_CARD_WIDTH
  },
  block: {
    marginBottom: theme.spacing(2)
  },
  blockListContainer: {
    paddingTop: theme.spacing(3)
  }
}));

function SectorCard({ data }) {
  const classes = useStyles();

  return (
    <Card className={classes.sectorCard}>
      <CardContent>
        <Typography variant="h5" color="textPrimary" gutterBottom>
          {data.title}
        </Typography>
        <div className={classes.blockListContainer}>
          {data.blocks.map(({ title, text }) => (
            <div key={title} className={classes.block}>
              <Typography variant="h6" color="textSecondary">
                {title}
              </Typography>
              <Typography variant="body2">{text}</Typography>
            </div>
          ))}
        </div>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FileCopyOutlinedIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default SectorCard;

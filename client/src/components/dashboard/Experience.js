import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteExperience } from "../../actions/profile";
import formatDate from "../../utils/formatDate";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import { Button, Divider, Grid, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const Experience = ({ experience, deleteExperience }) => {
  const experiences = experience.map((exp) => (
    <Fragment>
      <Grid container justifyContent={"space-between"} key={exp._id} mt={2}>
        <Grid item>
          <Typography variant="h5" gutterBottom={true}>
            {exp.title}
          </Typography>
        </Grid>
        <Grid item>
          <DeleteIcon
            fontSize="large"
            onClick={() => deleteExperience(exp._id)}
            style={{ justifyContent: "flex-end", cursor: "pointer" }}
          ></DeleteIcon>
        </Grid>
      </Grid>
      <Typography mb={2}>
        {exp.company} {formatDate(exp.from)} -{" "}
        {exp.to ? formatDate(exp.to) : "Now"}
      </Typography>
      <Divider />
    </Fragment>
  ));

  return (
    <Fragment>
      <Grid container>
        <Grid item xs={12}>
          <Card elevation={2} style={{ borderRadius: 5 }}>
            <CardContent>
              <Grid container justifyContent={"space-between"}>
                <Grid item>
                  <Typography variant="h4" gutterBottom={true}>
                    Experience
                  </Typography>
                </Grid>
                <Grid item>
                  <Link to="/add-experience">
                    <AddIcon
                      style={{ justifyContent: "flex-end" }}
                      fontSize="large"
                    ></AddIcon>
                  </Link>
                </Grid>
              </Grid>
              {experiences}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
};

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
  deleteExperience: PropTypes.func.isRequired,
};

export default connect(null, { deleteExperience })(Experience);

import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteEducation } from "../../actions/profile";
import formatDate from "../../utils/formatDate";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import { Button, Divider, Grid, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const Education = ({ education, deleteEducation }) => {
  const educations = education.map((edu) => (
    <Fragment>
      <Grid container justifyContent={"space-between"} key={edu._id} mt={2}>
        <Grid item>
          <Typography variant="h5" gutterBottom={true}>
            {edu.school}
          </Typography>
        </Grid>
        <Grid item>
          <DeleteIcon
            fontSize="large"
            onClick={() => deleteEducation(edu._id)}
            style={{ justifyContent: "flex-end", cursor: "pointer" }}
          ></DeleteIcon>
        </Grid>
      </Grid>
      <Typography mb={2}>
        {edu.degree}
        {formatDate(edu.from)} - {edu.to ? formatDate(edu.to) : "Now"}
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
                    Education
                  </Typography>
                </Grid>
                <Grid item>
                  <Link to="/add-education">
                    <AddIcon
                      style={{ justifyContent: "flex-end" }}
                      fontSize="large"
                    ></AddIcon>
                  </Link>
                </Grid>
              </Grid>
              {educations}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
};

Education.propTypes = {
  education: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired,
};

export default connect(null, { deleteEducation })(Education);

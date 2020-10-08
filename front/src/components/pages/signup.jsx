import React from "react";
import { connect } from "react-redux";
import { pure, compose, withHandlers, lifecycle } from "recompose";

import { doSignupPromise } from "redux/actions/session";

import "./login.css";
import { ActionViewModule } from "material-ui/svg-icons";

const enhance = compose(
  connect(
    ({ session }) => ({
      user: session.data
    }),
    {
      doSignupPromise
    }
  ),
  withHandlers({
    handleSubmit: (props) => (data) => props.doSignupPromise(data)
  }),
  lifecycle({
    componentWillMount() {
      if (this.props.user.id) {
        this.props.router.push("/");
      }
    }
  }),
  pure
);

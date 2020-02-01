import { Component } from "react";
import fetch from "isomorphic-unfetch";

import Error from "./_error";
import Layout from "../components/Layout";

export default class About extends Component {

  static async getInitialProps() {
    const response = await fetch("https://api.github.com/users/landon-sturgeon");
    const statusCode = response.status > 200 ? response.status : false;
    const data = await response.json();

    return {user: data, statusCode};
  };

  render() {
    const { user, statusCode } = this.props;

    if (statusCode) {
      return <Error statusCode={statusCode} />
    }

    return (
      <Layout title="About">
        <p>
          {user.name}
        </p>
        <img src={user.avatar_url} alt="me" height="200px"/>
      </Layout>
    )
  }
};
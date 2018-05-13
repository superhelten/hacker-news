import React, { Component } from 'react';

import { get } from "../components/fetch";
import Layout from '../components/layout';
import Header from '../components/header';
import ListDetail from '../components/list-detail';

export default class Jobs extends Component {
  static async getInitialProps({ query: { type = "jobs", page = "1" } }) {
    const json = await get({ type, page });
    return { data: json, page: page };
  }
  render() {
    const { data, page } = this.props;
    return (
      <Layout>
        <Header>Jobs</Header>
        <ListDetail data={data} />
      </Layout>
    )
  }
}

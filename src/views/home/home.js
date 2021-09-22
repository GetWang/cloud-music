import React from "react";
import axios from 'axios'

import "./home.scss";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios.get('http://localhost:4000/personalized').then(res => {
      console.log('res', res.data)
    }).catch(e => {
      console.log('e', e)
    })
  }

  render() {
    return <div id="home-page">home-page</div>;
  }
}

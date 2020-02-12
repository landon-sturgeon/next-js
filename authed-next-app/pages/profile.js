import { getUserProfile } from "../lib/auth";
import Layout from "../components/layout.component";

export default class Profile extends React.Component {
  state = {
    user: null
  };

  componentDidMount() {
    getUserProfile().then(user => this.setState({ user }));
  }

  render() {
    return (
      <Layout title="Profile">
        <pre>{JSON.stringify(this.state.user, null, 2)}</pre>
      </Layout>  
    )
  }
}
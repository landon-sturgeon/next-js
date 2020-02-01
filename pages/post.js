import { withRouter } from 'next/router';

import Layout from "../components/Layout";

const Post = ({ router }) => (
  <Layout title={router.query.title}>
    <p style={{ width: "80vw"}}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque quae, dicta ipsum natus explicabo nemo quos eligendi culpa consequuntur aperiam blanditiis a, molestiae necessitatibus harum, optio doloribus id nostrum quidem.
    </p>
  </Layout>
);

export default withRouter(Post);
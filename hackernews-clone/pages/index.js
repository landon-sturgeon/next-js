import fetch from "isomorphic-fetch";
import Error from "next/error";
import Link from "next/link";

import Layout from "../components/layout.component";
import StoryList from "../components/story-list.component";

class Index extends React.Component {
  static async getInitialProps({request, response, query}) {
    let stories;
    let page;

    try {
      page = Number(query.page) || 1;
      const response = await fetch(
        `https://node-hnapi.herokuapp.com/news?page=${page}`
      );
      stories = await response.json();
    } catch (err) {
      console.log(err);
      stories = [];
    };

    return { page, stories };
  };

  componentDidMount() {
    if ("serivceWorker" in navigator) {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then(registration => {
          console.log("service worker registration successful",
          registration);
        })
        .catch(err => {
          console.warn("service worker registration failed", err.message);
        })
    }
  };

  render() {
    const { stories, page } = this.props;

    if (stories.length === 0) {
      return <Error statusCode={503}/>
    };

    return(
      <Layout title="HackerNews Clone" description="A HackerNews clone made with Next.js">
        <StoryList stories={stories}/>

        <footer>
          <Link href={`/?page=${page + 1}`}>
            <a>Next Page ({page + 1})</a>
          </Link>
        </footer>

        <style jsx>{`
          footer{
            padding: 1em;
          }
          footer a {
            font-weight: bold;
            color: black;
            text-decoration: none
          }
        `}</style>
      </Layout>
    );
  };
};

export default Index;
import Layout from "../components/layout.component";
import Link from "next/link";

export default function Index() {
  return (
    <Layout title="Home">
      <Link href="/profile">
        <a>Go to profile</a>
      </Link>
      <h1>This is just the profile page</h1>
    </Layout>
  )
};
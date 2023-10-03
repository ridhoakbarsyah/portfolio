import { Inter } from "next/font/google";
import Section from "./components/Section";
import Layout from "./components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <Section />
    </Layout>
  );
}

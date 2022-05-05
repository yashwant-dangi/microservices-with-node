import React from "react";
import buildClient from "../api/build-client";

const LandingPage = (props) => {
  console.log(props);
  return <h1>Landing Page</h1>;
};

export async function getServerSideProps(context) {
  const client = buildClient(context);
  const { data } = await client.get("/api/users/currentuser");

  return data;
}

export default LandingPage;

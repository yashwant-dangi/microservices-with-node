import React from "react";
import axios from "axios";

const LandingPage = (props) => {
  console.log(props);
  return <h1>Landing Page</h1>;
};

export async function getServerSideProps({ req }) {
  // const response = await axios.get("/api/users/currentuser");

  if (typeof window === "undefined") {
    // we are on the server!
    // request should be made to http://ingress-nginx.ingress....
    // const { data } = await axios.get("http://SERVICENAME.NAMESPACE.svc.cluster.local");
    const { data } = await axios.get(
      "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser",
      {
        headers: req.headers,
      }
    );
    return {
      props: {
        data,
      },
    };
  } else {
    // we are in the browser!
    // requests can be made with a base url of ''
    const { data } = await axios.get("/api/users/currentuser");
    return {
      props: {
        data,
      },
    };
  }

  return data;
}

export default LandingPage;

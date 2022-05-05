import axios from "axios";

function buildClient({ req }) {
  if (typeof window === "undefined") {
    // We are on the server
    // request should be made to http://ingress-nginx.ingress....
    // const { data } = await axios.get("http://SERVICENAME.NAMESPACE.svc.cluster.local");
    return axios.create({
      baseURL:
        "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local",
      headers: req.headers,
    });
  } else {
    // We must be on the browser
    return axios.create({
      baseURL: "/",
    });
  }
}

export default buildClient;

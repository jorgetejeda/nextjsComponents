import {
  AxiosProvider,
  Request,
  Get,
  Delete,
  Head,
  Post,
  Put,
  Patch,
  withAxios,
} from "react-axios";
import PropTypes from "prop-types";

// TODO:Validate props types

const API = axios.create({
  baseURL: "/api/",
  timeout: 2000,
  headers: { "X-Custom-Header": "foobar" },
});

export const Get = (route) => (
  <Get instance={API} url={route}>
    {(error, response, isLoading, makeRequest, axios) => {
      if (error) this.errorRequest(error, makeRequest);
      else if (isLoading) <h1>Loading Component</h1>;
      else if (response !== null) this.emptyRequest(response, makeRequest);
      return <div>Default message before request is made.</div>;
    }}
  </Get>
);

export const GetById = (route, id) => (
  <Get instance={API} url={route} params={{id:id}}>
    {(error, response, isLoading, makeRequest, axios) => {
      if (error) this.errorRequest(error, makeRequest);
      else if (isLoading) <h1>Loading Component</h1>;
      else if (response !== null) this.emptyRequest(response, makeRequest);
      return <div>Default message before request is made.</div>;
    }}
  </Get>
);

errorRequest = (error) => (
  <div>
    Something bad happened: {error.message}{" "}
    <button onClick={() => makeRequest({ params: { reload: true } })}>
      Retry
    </button>
  </div>
);

emptyRequest = (response) => (
  <div>
    {response.data.message}{" "}
    <button onClick={() => makeRequest({ params: { refresh: true } })}>
      Refresh
    </button>
  </div>
);

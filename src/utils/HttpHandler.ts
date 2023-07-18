import axios from "axios";

const HttpHandler = {
  get: (url: string, options: object): Promise<any> => {
    return axios.get(url, options);
  },
};

export default HttpHandler;

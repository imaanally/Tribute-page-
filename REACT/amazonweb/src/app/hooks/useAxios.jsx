import toast from "react-hot-toast";
import axios from "axios";
import useApp from "./useApps";

const base_url = "http://localhost:5000";

function useAxios() {
  const loadingId = "axios-loader";
  const { token } = useApp();

  const request = async (requestObj) => {
    toast.loading("... Loading", { id: loadingId });

    const { method = "GET", url, data = {}, headers = {} } = requestObj;

    try {
      const response = await axios({
        method,
        url: `${base_url}/${url}`,
        data,
        headers: {
          ...headers,
          Authorization: `Bearer ${token}`,
        },
      });

      const responseData = response?.data;

      return { response, responseData, _error: false };
    } catch (e) {
      const response = e?.response;
      const responseData = response?.data;
      const resDataDetail = responseData?.detail;
      const resDataMessage = responseData?.message;

      if (typeof resDataDetail === "string") {
        toast.error(resDataDetail);
      } else if (typeof resDataMessage === "string") {
        toast.error(resDataMessage);
      } else if (typeof e?.message === "string") {
        toast.error(e.message);
      } else {
        toast.error("Request contact system admin");
      }

      return { response, responseData, _error: true };
    } finally {
      setTimeout(() => toast.dismiss(loadingId), 3000);
    }
  };

  return request;
}

export default useAxios;

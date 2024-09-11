import useAxiosPrivate from "../Hooks/usePrivateAxios";

const GetData = () => {
  const api = useAxiosPrivate();

  const getData = async (url, setData) => {
    try {
      const res = await api.get(url);
      setData(res.data);
      console.log("worked");
    } catch (err) {
      console.log(err);
    }
  };

  return getData;
};

export default GetData;

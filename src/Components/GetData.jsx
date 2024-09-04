import useAxiosPrivate from "../Hooks/usePrivateAxios";

const GetData = url => {
  const api = useAxiosPrivate();

  const getData = async () => {
    console.log(url);
    try {
      const res = await api.get(url);
      //   setData(res);
      console.log("worked");
    } catch (err) {
      console.log(err);
    }
  };

  return getData;
};

export default GetData;

import { useEffect, useState } from "react";
import { DataType } from "../../@types/Data/Data.type";
import { LoadData } from "../../services/LoadConfig/LoadConfig.service";

export const useDataFetch = () => {
  const [data, setData] = useState<DataType | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      const res = await LoadData();
      setData(res);
    };

    fetchData();
  }, []);

  return data;
};

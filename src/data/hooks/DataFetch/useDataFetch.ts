import { useEffect, useState } from "react";
import { DataType } from "../../@types/Data/Data.type";
import { LoadData } from "../../services/LoadConfig/LoadConfig.service";

export const useDataFetch = () => {
  const [data, setData] = useState<DataType | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await LoadData();
        if (res !== undefined) {
          setData(res);
        }
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      }
    };

    fetchData();
  }, []);

  return data;
};

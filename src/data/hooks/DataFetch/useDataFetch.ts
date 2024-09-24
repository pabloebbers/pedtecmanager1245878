import { useEffect, useState } from "react";
import { DataType } from "../../@types/Data/Data.type";
import { LoadData } from "../../services/LoadConfig/LoadConfig.service";

export const useDataFetch = () => {
<<<<<<< HEAD
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
=======
  const [data, setData] = useState<DataType | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      const res = await LoadData();
      setData(res);
>>>>>>> b3aa649c6754ecaeeaf62c41fc84a58551560920
    };

    fetchData();
  }, []);

  return data;
};

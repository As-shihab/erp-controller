import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { Http } from "../../../Http/Http";
import { IsConfirm, Toaster } from "../SweetAlert/Toaster";

export const useDeleteEntity = () => {
  const { setRefrashTable } = useContext(GlobalContext);
  const http = new Http();

  const deleteEntity = async (endpoint: string, id: number , Odata: boolean , model?: any | undefined) => {
    const result = await IsConfirm("delete");

    if (result.isConfirmed) {
      try {
        await http.delete(endpoint, Odata ? true : false, id);
        Toaster("delete");
        setRefrashTable(true);
      } catch (err) {
        console.error("Delete error:", err);
      }
    }
  };

  return deleteEntity;
};


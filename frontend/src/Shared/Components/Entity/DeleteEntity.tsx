import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { Http } from "../../../Http/Http";
import { IsConfirm, Toaster } from "../SweetAlert/Toaster";

export const useDeleteEntity = () => {
  const { setRefrashTable } = useContext(GlobalContext);
  const http = new Http();

  const deleteEntity = async (endpoint: string, model: any) => {
    const result = await IsConfirm("delete");

    if (result.isConfirmed) {
      try {
        await http.delete(endpoint, true, model.id);
        Toaster("delete");
        setRefrashTable(true);
      } catch (err) {
        console.error("Delete error:", err);
      }
    }
  };

  return deleteEntity;
};


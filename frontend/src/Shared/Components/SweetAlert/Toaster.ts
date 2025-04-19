import Swal from "sweetalert2";
export const Toaster = (type: string) => {
  return Swal.fire({
    toast: true,
    position: "bottom-end",
    icon: "success",
    title: type=="delete" ? "Deleted successfully" : type=="post" ? 'Saved successfully' : 'Updated successfully',
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
    customClass: {
      popup: "mini-swal",
      icon: "mini-icon",
      title: "mini-title",
    },
  });
};

export const IsConfirm = (type : string) => {
 return Swal.fire({
    title:`Are you sure want to ${type.charAt(0).toUpperCase()+type.slice(1)}`,
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: type.charAt(0).toUpperCase()+type.slice(1),
    customClass: {
    popup: 'small-swal',
    confirmButton: 'small-btn',
    cancelButton: 'small-btn'
  },
  allowOutsideClick: false,
  
 })
}

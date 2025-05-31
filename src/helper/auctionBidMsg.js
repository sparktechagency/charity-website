import Swal from "sweetalert2";

export const bidOnlineMsg = () => {
  return Swal.fire({
    title: "Confirm Your Bid",
    text: "Are you sure you want to place this bid? This action cannot be undone.",
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, place bid!",
    cancelButtonText: "Cancel"
  });
};
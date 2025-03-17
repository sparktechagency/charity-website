import Swal from "sweetalert2";

const showSuccessAlert = () => {
  Swal.fire({
    title: "<h2 class='text-left font-semibold text-lg'>Application submitted successfully</h2>",
    html: "<p class='text-left text-gray-600'>Your application is under review. Once we're done, we will notify you via email that you have provided. Get in touch with us. Thanks.</p>",
    confirmButtonText: "Done",
    customClass: {
      popup: "rounded-lg shadow-lg p-6",
      confirmButton: "bg-black text-white px-4 py-2 rounded hover:bg-gray-800",
    },
    buttonsStyling: false,
  });
};

export default function PodcastPage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <button
        onClick={showSuccessAlert}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Show Alert
      </button>
    </div>
  );
}
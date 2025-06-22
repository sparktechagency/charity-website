import Swal from "sweetalert2";

export const donactionMsg = () => {
  Swal.fire({
    title: `
      <h2 class="text-left font-semibold text-base lg:text-lg text-yellow-700">
        Donation item under review
      </h2>
    `,
    html: `
      <p class="text-left text-gray-600 text-sm lg:text-base mt-2">
        Donation item submitted successfully. We’ll notify you after review.
      </p>
    `,
    showConfirmButton: false,
    footer: `
      <div class="flex justify-end pt-4">
        <button
          id="custom-btn"
          class="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
        >
          Done
        </button>
      </div>
    `,
    customClass: {
      popup: "rounded-xl shadow-lg p-4 lg:p-6",
    },
    didOpen: () => {
      const doneBtn = document.getElementById("custom-btn");
      if (doneBtn) {
        doneBtn.addEventListener("click", () => {
          Swal.close();
        });
      }
    },
  });
};

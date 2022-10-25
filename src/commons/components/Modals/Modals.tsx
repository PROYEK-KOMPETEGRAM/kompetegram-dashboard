export const Modals = () => {
  return (
    <div
      className="modal fade fixed top-0 left-0 w-full h-full outline-none 
        overflow-x-hidden overflow-y-auto hidden"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog relative w-auto pointer-events-none mt-24 ">
        <div 
          className="modal-content border-none shadow-lg relative flex flex-col w-full p-2 
            pointer-events-auto bg-gray-700 bg-clip-padding rounded-md outline-none text-current">
          <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-900 rounded-t-md">
            <h5 
              className="text-lg font-semibold font-open-sans leading-normal text-gray-50" 
              id="exampleModalLabel"
            >
              Apa yang baru ?
            </h5>
          </div>
          <div className="modal-body relative p-4 font-open-sans text-sm text-white font-regular">
            <ul>
              <li className="py-1">- Kamu dapat mengekspor dokumen anggota dalam CSV</li>
              <li className="py-1">- Dasbor rangkuman statistik telah tersedia</li>
              <li className="py-1">- Perbaikan dalam penomoran tabel serta pagination</li>
            </ul>
          </div>
          <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 rounded-b-md">
            <button
              type="button"
              className="px-6 py-2.5 bg-blue-600 text-white font-medium text-sm 
                leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg 
                focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 
                active:shadow-lg transition duration-150 ease-in-out font-open-sans"
              data-bs-dismiss="modal"
            >
              Dipahami
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
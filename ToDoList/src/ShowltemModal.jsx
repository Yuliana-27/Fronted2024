const ShowItemModal = () => {
    return(
        <div className="modal fade" id="showItemModal">
            <div className="modal-dialog mdoal-dialog-centered">
                <div className="modal-content">
            <div className="modal-header">
                    <h5 
                    className="modal-title"
                    id="showItemModalLabel"
                    >
                        Show Item
                    </h5>
                </div>
                <div className="modal-body">
                    Show select item information
                </div>
                <div className="modal-footer">
                    <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    >
                        Close
                    </button>

                </div>
                </div>
            </div>
        </div>
    )
}

export default ShowItemModal
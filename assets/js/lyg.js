// ================================= table anggota ==========================================
$(function () {
    $("#table_summary_output").DataTable({
        "responsive": true,
        "lengthChange": false,
        "autoWidth": false,
        "info": false,
        "language": {
            "infoEmpty": "Data tidak ditemukan",
            "search": "<i class='fas fa-search'>",
            "searchPlaceholder": "Cari Summary...",
            "loadingRecords": "Loading...",
            "processing": "Processing...",
        },
        ajax: {
            url: base_url + 'sewing/get_summary',
            dataSrc: 'data'
        },
        columns: [
            { data: 'TrnDate', className: 'text-center align-middle', },
            { data: 'StyleCode', className: 'align-middle', },
            { data: 'count_size_name', className: 'text-center align-middle', },
            { data: 'sum_qty_output', className: 'text-center align-middle', },
            {
                data: null, className: 'text-center align-middle', render: function (data, type, row) {
                    // return "<a href='#' class='btn btn-warning btn-xs' onclick='show_modal_detail_transaction(\"" + row.StyleCode + "\");'><i class='fas fa-edit'></i></a>";
                    return "<a href='#' class='btn btn-warning btn-xs' onclick='show_modal_detail_transaction(\"" + row.StyleCode + "\", \"" + row.TrnDate + "\");'><i class='fas fa-edit'></i></a>";

                }
            },
        ],

        rowCallback: function (row, data, index) {
            if (data.status == 0) {
                $(row).addClass('bg-danger');
            }
        },

        initComplete: function () {
            this.api().buttons().container().appendTo('#table_summary_output_wrapper .col-md-6:eq(0)');
        }
    });
});

function show_modal_detail_transaction(StyleCode, TrnDate) {
    // alert(StyleCode);
    $('#modal_detail_date').text(StyleCode + " #" + TrnDate);
    $('#modal_detail_transaction').modal('show');
}

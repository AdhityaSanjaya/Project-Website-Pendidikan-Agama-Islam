document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.inactive').forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault(); // Mencegah navigasi default
            alert("Mohon Maaf Menu pada website FADILLAH ADHITYA SANJAYA Tidak Aktif");
        });
    });
});
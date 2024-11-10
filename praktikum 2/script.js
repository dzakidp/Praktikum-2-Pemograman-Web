function toggleMode() {
    document.body.classList.toggle("messy");
}

function toggleContent(id) {
    const content = document.getElementById(`content${id}`);
    const isHidden = content.classList.contains("hidden");

    const confirmationMessage = isHidden
        ? "Apakah Anda ingin menampilkan konten ini?"
        : "Apakah Anda ingin menyembunyikan konten ini?";

    if (confirm(confirmationMessage)) {
        content.classList.toggle("hidden");
    }
}


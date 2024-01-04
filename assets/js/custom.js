<script>
(function() {
    document.getElementById("downloadButton").addEventListener("click", function() {
        // Replace the placeholder with the direct link to your Google Drive file
        var downloadLink = "https://drive.google.com/u/0/uc?id=1UGDutNn4TgMG-6uBaKm-2xLol5Xlw1aB&export=download";

        // Create a hidden iframe
        var iframe = document.createElement("iframe");
        iframe.style.display = "none";
        document.body.appendChild(iframe);

        // Set the iframe source to trigger the download
        iframe.src = downloadLink;
    });
})();
</script>

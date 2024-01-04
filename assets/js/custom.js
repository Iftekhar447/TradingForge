<script>
(function() {
    document.getElementById("downloadButton").addEventListener("click", function() {
        // Replace the placeholder with the direct link to your Google Drive file
        var downloadLink = "https://drive.google.com/u/0/uc?id=1UGDutNn4TgMG-6uBaKm-2xLol5Xlw1aB&export=download";
        
        // Create a temporary anchor element
        var tempLink = document.createElement("a");
        
        // Set the download attribute and href of the anchor element
        tempLink.setAttribute("download", "TradingForgeApp.zip");
        tempLink.href = downloadLink;
        
        // Append the anchor element to the body
        document.body.appendChild(tempLink);
        
        // Trigger a click event on the anchor element
        tempLink.click();
        
        // Remove the anchor element from the body
        document.body.removeChild(tempLink);
    });
})();
</script>

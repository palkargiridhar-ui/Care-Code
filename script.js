document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('userForm');
    const qrSection = document.getElementById('qrSection');
    const qrCodeContainer = document.getElementById('qrcode');
    const downloadBtn = document.getElementById('downloadBtn');
    const newCodeBtn = document.getElementById('newCodeBtn');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const fullName = document.getElementById('fullName').value.trim();
        const dob = document.getElementById('dob').value.trim();
        const address = document.getElementById('Address').value.trim();
        const emergencyContact = document.getElementById('emergencyContact').value.trim();
        const alternateContact = document.getElementById('Alternate Contact').value.trim();

        // Create a query string
        const params = new URLSearchParams({
            fullName,
            dob,
            address,
            emergencyContact,
            alternateContact
        });

        const qrUrl = `https://Carecode.com/view.html?${params.toString()}`;

        // Clear any previous QR
        qrCodeContainer.innerHTML = '';

        // Generate QR code
        new QRCode(qrCodeContainer, {
            text: qrUrl,
            width: 200,
            height: 200,
            colorDark: "#000000",
            colorLight: "#ffffff",
        });

        qrSection.style.display = 'block';
        document.querySelector('.form-section').style.display = 'none';
    });

    downloadBtn.addEventListener('click', function() {
        const canvas = document.querySelector('#qrcode canvas');
        if (canvas) {
            const link = document.createElement('a');
            link.href = canvas.toDataURL("image/png");
            link.download = 'carecode_qr.png';
            link.click();
        }
    });

    newCodeBtn.addEventListener('click', function() {
        form.reset();
        qrSection.style.display = 'none';
        document.querySelector('.form-section').style.display = 'block';
        qrCodeContainer.innerHTML = '';
    });
});

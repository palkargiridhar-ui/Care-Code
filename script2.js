const form = document.getElementById('userForm');

form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('fullName', document.getElementById('fullName').value);
    formData.append('dob', document.getElementById('dob').value);
    formData.append('address', document.getElementById('Address').value);
    formData.append('emergencyContact', document.getElementById('emergencyContact').value);
    formData.append('alternateContact', document.getElementById('Alternate Contact').value);
    const photoInput = document.getElementById('photo');
    if (photoInput.files.length > 0) {
        formData.append('photo', photoInput.files[0]);
    }

    try {
        const response = await fetch('http://localhost:5000/submit', {
            method: 'POST',
            body: formData
        });

        const result = await response.json();
        if (result.status === 'success') {
            alert('Data saved successfully! Generating QR...');
            // Then generate QR code here
        } else {
            alert('Error saving data!');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to connect to server.');
    }
});

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('surveyForm');
  const popup = document.getElementById('popup');
  const popupData = document.getElementById('popupData');
  const closePopup = document.getElementById('closePopup');
  const submitBtn = document.getElementById('submitBtn');
  const resetBtn = document.getElementById('resetBtn');

  submitBtn.addEventListener('click', function() {
    if (form.checkValidity()) {
      const data = gatherFormData();
      displayPopup(data);
    }
  });

  closePopup.addEventListener('click', function() {
    closePopupWindow();
  });

  resetBtn.addEventListener('click', function() {
    form.reset();
  });

  function gatherFormData() {
    const data = {
      'First Name': document.getElementById('firstName').value,
      'Last Name': document.getElementById('lastName').value,
      'Date of Birth': document.getElementById('dob').value,
      'Country': document.getElementById('country').value,
      'Gender': getSelectedGenders(),
      'Profession': document.getElementById('profession').value,
      'Email': document.getElementById('email').value,
      'Mobile Number': document.getElementById('mobile').value
    };
    return data;
  }

  function getSelectedGenders() {
    const genderInputs = document.querySelectorAll('input[name="gender"]:checked');
    return Array.from(genderInputs).map(input => input.value).join(', ');
  }

  function displayPopup(data) {
    let popupContent = '<h2>Submitted Data:</h2>';
    for (const key in data) {
      popupContent += `<p><strong>${key}:</strong> ${data[key]}</p>`;
    }
    popupData.innerHTML = popupContent;
    popup.style.display = 'block';
  }

  function closePopupWindow() {
    popup.style.display = 'none';
    form.reset();
  }
});

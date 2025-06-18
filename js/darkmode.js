document.addEventListener('DOMContentLoaded', function () {
  // Mengambil elemen-elemen yang dibutuhkan
  var darkModeStylesheet = document.getElementById('darkModeStylesheet');
  const darkModeSwitches = document.querySelectorAll('#darkModeSwitch, #darkModeSwitch2');

  // Mengambil elemen ikon untuk setiap switch
  // Asumsi: setiap switch memiliki label dengan ikon bulan dan matahari di dalamnya
  const darkModeIcons = [];
  darkModeSwitches.forEach(switchElement => {
      const label = switchElement.nextElementSibling; // Mengambil elemen label setelah switch
      if (label && label.classList.contains('custom-control-label')) {
          darkModeIcons.push({
              switch: switchElement,
              moonIcon: label.querySelector('.fa-moon'),
              sunIcon: label.querySelector('.fa-sun')
          });
      }
  });


  // Fungsi untuk mengatur tampilan ikon berdasarkan mode gelap
  function setDarkModeIcon(enabled) {
    darkModeIcons.forEach(iconSet => {
      if (iconSet.moonIcon && iconSet.sunIcon) {
        if (enabled) {
          iconSet.moonIcon.classList.add('d-none');
          iconSet.moonIcon.classList.remove('d-inline');
          iconSet.sunIcon.classList.add('d-inline');
          iconSet.sunIcon.classList.remove('d-none');
        } else {
          iconSet.moonIcon.classList.add('d-inline');
          iconSet.moonIcon.classList.remove('d-none');
          iconSet.sunIcon.classList.add('d-none');
          iconSet.sunIcon.classList.remove('d-inline');
        }
      }
    });
  }

  // Mengecek status dark mode di localStorage saat halaman dimuat
  if (localStorage.getItem('darkMode') === 'enabled') {
    darkModeStylesheet.disabled = false;
    darkModeSwitches.forEach(switchElement => switchElement.checked = true);
    setDarkModeIcon(true); // Atur ikon ke matahari
  } else {
    darkModeStylesheet.disabled = true;
    darkModeSwitches.forEach(switchElement => switchElement.checked = false);
    setDarkModeIcon(false); // Atur ikon ke bulan
  }

  // Menangani perubahan pada kedua switch
  darkModeSwitches.forEach(switchElement => {
    switchElement.addEventListener('change', function () {
      if (this.checked) {
        darkModeStylesheet.disabled = false;
        localStorage.setItem('darkMode', 'enabled');
        darkModeSwitches.forEach(s => s.checked = true); // Sinkronisasi switch
        setDarkModeIcon(true); // Ganti ke ikon matahari
      } else {
        darkModeStylesheet.disabled = true;
        localStorage.setItem('darkMode', 'disabled');
        darkModeSwitches.forEach(s => s.checked = false); // Sinkronisasi switch
        setDarkModeIcon(false); // Ganti ke ikon bulan
      }
    });
  });
});
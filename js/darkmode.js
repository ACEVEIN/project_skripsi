// document.addEventListener('DOMContentLoaded', function() {
//     // Mengambil elemen-elemen yang dibutuhkan
//     var darkModeStylesheet = document.getElementById('darkModeStylesheet'); // Mengambil stylesheet dark mode
//     const darkModeSwitch = document.getElementById('darkModeSwitch'); // Mengambil switch untuk dark mode
  
//     // Mengecek status dark mode di localStorage
//     if (localStorage.getItem('darkMode') === 'enabled') {
//       darkModeStylesheet.disabled = false;
//       darkModeSwitch.checked = true;
//     } else {
//       darkModeStylesheet.disabled = true;
//       darkModeSwitch.checked = false;
//     }
  
//     // Menangani perubahan pada switch
//     darkModeSwitch.addEventListener('change', function() {
//       if (this.checked) {
//         darkModeStylesheet.disabled = false;
//         localStorage.setItem('darkMode', 'enabled');
//       } else {
//         darkModeStylesheet.disabled = true;
//         localStorage.setItem('darkMode', 'disabled');
//       }
//     });
//   });




document.addEventListener('DOMContentLoaded', function () {
  // Mengambil elemen-elemen yang dibutuhkan
  var darkModeStylesheet = document.getElementById('darkModeStylesheet'); // Mengambil stylesheet dark mode
  const darkModeSwitches = document.querySelectorAll('#darkModeSwitch, #darkModeSwitch2'); // Mengambil kedua switch untuk dark mode

  // Mengecek status dark mode di localStorage
  if (localStorage.getItem('darkMode') === 'enabled') {
      darkModeStylesheet.disabled = false;
      darkModeSwitches.forEach(switchElement => switchElement.checked = true); // Menyalakan kedua switch
  } else {
      darkModeStylesheet.disabled = true;
      darkModeSwitches.forEach(switchElement => switchElement.checked = false); // Mematikan kedua switch
  }

  // Menangani perubahan pada kedua switch
  darkModeSwitches.forEach(switchElement => {
      switchElement.addEventListener('change', function () {
          if (this.checked) {
              darkModeStylesheet.disabled = false;
              localStorage.setItem('darkMode', 'enabled');
              // Menyalakan kedua switch untuk sinkronisasi
              darkModeSwitches.forEach(switchElement => switchElement.checked = true);
          } else {
              darkModeStylesheet.disabled = true;
              localStorage.setItem('darkMode', 'disabled');
              // Mematikan kedua switch untuk sinkronisasi
              darkModeSwitches.forEach(switchElement => switchElement.checked = false);
          }
      });
  });
});

  
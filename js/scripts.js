// show & hide #overlay -----------------------------------
function showOverlay(){
  overlay.classList.remove('hidden');
};
function hideOverlay(){
  !overlay.classList.contains('hidden') ? overlay.classList.add('hidden') : null;
};


// show & hide #login -------------------------------------
function showLogin(){
  login.classList.remove('hidden');
  document.querySelector("[name=name]").focus();
};
function hideLogin(){
  !login.classList.contains('hidden') ? login.classList.add('hidden') : null;
};


// show & hide #map ---------------------------------------
function showMap(){
  map.classList.remove('hidden');
};
function hideMap(){
  (typeof(map) !== "undefined") && !map.classList.contains('hidden') ? map.classList.add('hidden') : null;
};


// hide all modal windows ---------------------------------
function hideAllModals(event) {
  hideOverlay();
  hideMap();
  hideLogin();
}


// click on #enter ----------------------------------------
enter.addEventListener('click', function(event){
  event.preventDefault();
  showOverlay();
  showLogin();
});


// close by click on #overlay -----------------------------
// overlay.addEventListener('click', hideAllModals);


// press <Escape> -----------------------------------------
document.addEventListener('keydown', function(event){
  if (event.keyCode === 27) {
    event.preventDefault();
    hideAllModals();
  }
})


// click on #close ----------------------------------------
var closeButtons = document.querySelectorAll('.close');
for (var i=0; i < closeButtons.length; i++) {
  closeButtons[i].addEventListener('click', hideAllModals);
}


// click on #openmap --------------------------------------
(typeof(openmap) !== "undefined") ? openmap.addEventListener('click', function(event){
  event.preventDefault();
  showOverlay();
  showMap();
}) : null;


// --- fucus on first field -------------------------------
(typeof(login) !== "undefined") && !login.classList.contains('hidden') ? document.querySelector("[name=name]").focus() : null;

// --- gallery selector -----------------------------------
gal_preview_1.addEventListener('click', function(){gal_radio_1.checked = 1;})
gal_preview_2.addEventListener('click', function(){gal_radio_2.checked = 1;})
gal_preview_3.addEventListener('click', function(){gal_radio_3.checked = 1;})

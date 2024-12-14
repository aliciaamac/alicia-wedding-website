var img = document.querySelector('.background')

function loaded() {
	document.querySelector('.loading').remove();
}

if (img.complete) {
  loaded()
} else {
  img.addEventListener('load', loaded)
  img.addEventListener('error', function() {
      alert('error')
  })
}
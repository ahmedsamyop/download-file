const inputUrl = document.getElementById('url');
const downloadBtn = document.querySelector('button');


downloadBtn.addEventListener('click', e => {
  e.preventDefault();
  downloadBtn.innerHTML = 'Downloading...';
  urlFetch(inputUrl.value);
})

function urlFetch(url) {
  fetch(url)
  .then(res => res.blob())
  .then(file => {
    let tempUrl = URL.createObjectURL(file);
    let a = document.createElement('a');
    a.href = tempUrl;
    a.download = "filename";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(tempUrl);
    downloadBtn.innerHTML = 'Download File';
  })
  .catch(err => {
    downloadBtn.innerHTML = 'Download File';
    console.log(err);
  })
}
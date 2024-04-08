function uploadFile() {
    var fileInput = document.getElementById('fileInput');
    var file = fileInput.files[0];
    var formData = new FormData();
    formData.append('file', file);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'upload.php', true);

    xhr.upload.onprogress = function (e) {
        if (e.lengthComputable) {
            var percentComplete = (e.loaded / e.total) * 100;
            document.getElementById('status').innerHTML = 'Subiendo: ' + percentComplete.toFixed(2) + '%';
        }
    };

    xhr.onload = function () {
        if (xhr.status === 200) {
            document.getElementById('status').innerHTML = 'Subida completa.';
        } else {
            document.getElementById('status').innerHTML = 'Error al subir.';
        }
    };

    xhr.send(formData);
}

const sendArticles = document.querySelector('#sendArticles'), 
    form = document.querySelector('#google_form_2');

window.addEventListener('load', function () {
    sendArticles.addEventListener('click', function(){
        sendArticles.dataset.text = sendArticles.textContent;
        var line = document.getElementById('line');
        line.style.visibility = 'visible';
        sendData();
    })
})

function sendData() {
    let data = new FormData(), uploadFiles = [], promiseList = [];
    const articles = document.querySelector('#files'),
        url = 'https://script.google.com/macros/s/AKfycbyZmpflwsYnxrEfTDLP9H95Vb7_jfcfxYDkj3dZIRZcnKd5zwPLr6Ptu1cij4n8x_pg/exec';
    
        form.querySelectorAll('input').forEach(input => {
        if (input.type === "text" || input.type === "email") {
            data.append(input.name, input.value)
        }
    })

    for (let file of articles.files) {
        const fr = new FileReader();
        fr.readAsArrayBuffer(file);
        let promise = new Promise((resolve) => {
            fr.onload = f => {
                let fileInfo = {
                    fileArray: [...new Int8Array(f.target.result)],
                    filename: file.name,
                    mimeType: file.type,
                }
                resolve(uploadFiles.push(fileInfo))
            }
        })
        promiseList.push(promise)
    }
    Promise.all(promiseList).then(result => {
        data.append('files', JSON.stringify(uploadFiles))
        fetch(`${url}`, { method: "POST", mode: 'no-cors', body: data })
        .then(response => {
            document.getElementById("nameFile").textContent = "Загрузить файл";
            var line = document.getElementById('line');
            line.style.visibility = 'hidden';
            Swal.fire({
                timer: 4000,
                timerProgressBar: true,
                confirmButtonColor: "#008d85",
                confirmButtonText: "Отлично!",
                focusConfirm: false,
                text: 'Ваша статья была успешно отправлена!',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            });
            $('#google_form_2')[0].reset();
        })
        .catch(err => {
            Swal.fire({
                timer: 4000,
                timerProgressBar: true,
                confirmButtonColor: "#008d85",
                confirmButtonText: "Отлично!",
                focusConfirm: false,
                text: 'При загрузке файла произошла ошибка!',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            });
            $('#google_form_2')[0].reset();
        })
    })
}
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.cv-btn').addEventListener('click', function () {
        var link = document.createElement('a');
        link.href = 'Onkar Salunkhe_resume.pdf'; // Replace with the path to your CV
        link.download = 'Onkar_Salunkhe_CV.pdf'; // The name of the file to be downloaded
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});

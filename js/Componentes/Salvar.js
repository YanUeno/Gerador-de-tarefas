

const Salvar = ()=>{
    html2canvas(
        document.getElementById("mydiv")).then(function (canvas) {			
        var anchorTag = document.createElement("a");
        document.body.appendChild(anchorTag);
        // ;;document.getElementById("previewImg").appendChild(canvas);
        anchorTag.download = "Cronograma.jpg";
        anchorTag.href = canvas.toDataURL();
        anchorTag.target = '_blank';
        anchorTag.click();
    });
 
}





export default Salvar;
const Importancia_badges = (importancia_value)=>{
    

    const badge = document.createElement('span');

    var badges = ``;

    if (importancia_value == 'nor')
        badges = `<span class="badge badge-secondary">Normal</span>`
    else if (importancia_value == 'imp')
        badges = `<span class="badge badge-warning">Importante</span>`
    else if (importancia_value == "mimp")
        badges = `<span class="badge badge-danger">Muito Importante</span>`
    else
        badges = `<span class="badge badge-secondary">Normal</span>`


    return badges;
}


export default Importancia_badges;
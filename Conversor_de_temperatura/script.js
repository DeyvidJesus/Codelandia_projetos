function converter(){
    var Celsius = Number(document.getElementById('celsius').value)
    var fahrenheit = ((Celsius * 1.8) + 32).toFixed(1)

    var resultado = document.getElementById('resultado')
    resultado.innerHTML = `${Celsius}ºC graus são ${fahrenheit}ºF.`
}
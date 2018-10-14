function onSubmit() {
    var a = document.getElementById('a').value
    var b = document.getElementById('b').value
    var c = document.getElementById('c').value
    document.getElementById('imajiner').innerHTML = ""

    if (a == 0) {
        alert("Nilai a tidak boleh sama dengan 0!")
    } else {
        var d = Math.pow(b, 2) - (4 * a * c)
        document.getElementById('diskriminan').setAttribute('value', d)
        if (d == 0) {
            var x = -b / (2 * a)
            document.getElementById('x1').innerHTML = x
            document.getElementById('x2').innerHTML = x
        } else {
            if (d > 0) {
                var x1 = (-b + Math.sqrt(d)) / (2 * a)
                var x2 = (-b - Math.sqrt(d)) / (2 * a)
                document.getElementById('x1').innerHTML = x1
                document.getElementById('x2').innerHTML = x2
            } else {
                document.getElementById('x1').innerHTML = "-"
                document.getElementById('x2').innerHTML = "-"
                document.getElementById('imajiner').innerHTML = "Nilai Diskriminan < 0, merupakan Akar Imajiner"
            }
        }
    }
}
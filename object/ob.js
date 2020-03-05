var city1 = {
    name: "ГородN",
    population: 10000000,

    getName: function () {
        alert(city1.name)
    },

    exportStr: function () {
        for (let key in city1) {
            if (typeof city1[key] != "function") {
                alert(`${key} : ${city1[key]}`)
            }

        }
    }

}


var city2 = {
    name: "ГородM",
    population: 10 ^ 6,
    getName: function () {
        alert(city2.name)
    },

    exportStr: function () {
        for (let key in city2) {
            if (typeof city1[key] != "function") {
                alert(`${key} = ${city2[key]}`)
            }

        }
    }

}
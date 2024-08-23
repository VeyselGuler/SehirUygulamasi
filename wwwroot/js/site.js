let cities = [
    {
        cityName: "Adana",
        famousFor: "Kebap",
        type: "food",
        plateNumber: "01"
    },
    {

        name: "Ankara",
        famousFor: "Simidi",
        type: "food",
        plateNumber: "06"
    },
    {
        name: "İstanbul",
        famousFor: "Boğaz",
        type: "place",
        plateNumber: "34"
    },
    {
        name: "İzmir",
        famousFor: "Boyoz",
        type: "food",
        plateNumber: "35"
    },
    {
        name: "Bursa",
        famousFor: "İskender Kebabı",
        type: "food",
        plateNumber: "16"
    },
    {
        name: "Antalya",
        famousFor: "Düden Şelalesi",
        type: "place",
        plateNumber: "07"
    },
    {
        name: "Gaziantep",
        famousFor: "Baklava",
        type: "food",
        plateNumber: "27"
    },
    {
        name: "Konya",
        famousFor: "Etli Ekmek",
        type: "food",
        plateNumber: "42"
    },
    {
        name: "Trabzon",
        famousFor: "Hamsi",
        type: "food",
        plateNumber: "61"
    },
    {
        name: "Kayseri",
        famousFor: "Mantı",
        type: "food",
        plateNumber: "38"
    },
    {
        name: "Eskişehir",
        famousFor: "Lületaşı",
        type: "place",
        plateNumber: "26"
    },
    {
        name: "Rize",
        famousFor: "Çay",
        type: "food",
        plateNumber: "53"
    },
    {
        name: "Erzurum",
        famousFor: "Cağ Kebabı",
        type: "food",
        plateNumber: "25"
    },
    {
        name: "Diyarbakır",
        famousFor: "Karpuz",
        type: "place",
        plateNumber: "21"
    },
    {
        name: "Mardin",
        famousFor: "Taş Evler",
        type: "place",
        plateNumber: "47"
    },
    {
        name: "Van",
        famousFor: "Van Kedisi",
        type: "place",
        plateNumber: "65"
    },
    {
        name: "Sivas",
        famousFor: "Kangal Köpeği",
        type: "place",
        plateNumber: "58"
    },
    {
        name: "Şanlıurfa",
        famousFor: "Balıklıgöl",
        type: "place",
        plateNumber: "63"
    },
    {
        name: "Mersin",
        famousFor: "Tantuni",
        type: "food",
        plateNumber: "33"
    },
    {
        name: "Muğla",
        famousFor: "Turistik Yerleri",
        type: "place",
        plateNumber: "48"
    },
    {
        name: "Çanakkale",
        famousFor: "Tarihi Gelibolu Yarımadası",
        type: "place",
        plateNumber: "17"
    },
    {
        name: "Hatay",
        famousFor: "Antakya Mozaikleri",
        type: "place",
        plateNumber: "31"
    },
    {
        name: "İzmir",
        famousFor: "Efes Antik Kenti",
        type: "place",
        plateNumber: "35"
    },
    {
        name: "Nevşehir",
        famousFor: "Kapadokya",
        type: "place",
        plateNumber: "50"
    },
    {
        name: "Aydın",
        famousFor: "Milet Antik Kenti",
        type: "place",
        plateNumber: "09"
    }
];


function handleSubmit(e) {
    e.preventDefault();

    let formData = new FormData(cityForm);
    let formObj = Object.fromEntries(formData);
    addCity(formObj);
    cityForm.reset();
}

cityForm.addEventListener('submit', handleSubmit);

function init() {
    yemek.innerHTML = '';
    tarihiYerler.innerHTML = '';
    tekPlaka.innerHTML = '';
    ciftPlaka.innerHTML = '';
    
    for (const item of cities) {
        if (item.type == "food"){
            yemek.innerHTML += `<tr>
        <td>${item.name}</td>
        <td>${item.famousFor}</td>
        </tr>
                               `
        }
        else{
            tarihiYerler.innerHTML +=`<tr>
        <td>${item.name}</td>
        <td>${item.famousFor}</td>
        </tr>
                               `
        }
        if (item.plateNumber % 2 == 0){
            ciftPlaka.innerHTML +=`<tr>
        <td>${item.name}</td>
        <td>${item.plateNumber}</td>
        </tr>`
        }
        else{
            tekPlaka.innerHTML +=`<tr>
        <td>${item.name}</td>
        <td>${item.plateNumber}</td>
        </tr>`
        }
        
    }
}
init();

function addCity(item) {

    cities.push(item);
    init();

}

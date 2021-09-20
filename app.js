const country = document.getElementById('country');
const universityList = document.querySelector('.list-group');
const getUniversities = async (selectCountry) => {
    const response = await fetch(`http://universities.hipolabs.com/search?country=${selectCountry}`);
    if (response.status !== 200) {
        throw new Error("Üniversite Bilgisi alınamıyor !!!")
    }
    const data = response.json();
    return data;
}
country.addEventListener('change',function(){
    universityList.innerHTML = "";
    console.log(country.value)
    let selectCountry = country.value;
    
    getUniversities(selectCountry)
    .then((data) => {

        let i= 1;
        data.forEach(element => {
            console.log(element)
            universityList.innerHTML +=`
            <a href="${element.web_pages[0]}" target="_blank" class="list-group-item list-group-item-action" aria-current="true">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">${i}. ${element.name}</h5>
             
            </div>
            <p class="mb-1">${element.web_pages[0]}</p> 
          </a>
            `;
            i++;
        });
    })
    .catch(err => {
        console.log("Hata : ",err)
    });

})
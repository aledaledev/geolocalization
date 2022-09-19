export class Store {
    constructor({geoplugin_region,geoplugin_countryCode}){
        this.city
        this.countryCode
        this.defaultCity = geoplugin_region;
        this.defaultCountry = geoplugin_countryCode;
    }
    getLocationData(){
        if(localStorage.getItem('city')===null || localStorage.getItem('countryCode')===null){
            this.city=this.defaultCity
            this.countryCode=this.defaultCountry
        } else {
            this.city = localStorage.getItem('city')
            this.countryCode= localStorage.getItem('countryCode') 
        }
        return {
            city:this.city,
            countryCode:this.countryCode
        }
    }
    setLocationData(city,countryCode){
        localStorage.setItem('city',city)
        localStorage.setItem('countryCode',countryCode)
    }
}
import Cookies from "universal-cookie";

const FROM_MS_TO_DAY_FACTOR = ( 1000 * 60 * 60 * 24)
const EXPIRE_DURATION_DAY = 3

const cookie = new Cookies()
const currDate = new Date()
currDate.setTime(currDate.getTime() + (FROM_MS_TO_DAY_FACTOR * EXPIRE_DURATION_DAY))

class CookieApi{
    get(key:string){
        return cookie.get(key)
    }
    set(key:string, value:any){
        return cookie.set(key, value, {expires:currDate})
    }
    remove(key:string){
        return cookie.remove(key)
    }
}

export default new CookieApi()
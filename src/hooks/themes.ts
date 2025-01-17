import { useColorMode } from "@chakra-ui/react"
import { commonLayotDark, commonLayotLight } from "@/data/styles"

const useThemeColors = () =>{
    let mainColor:string =""
    let secondColor:string =""
    let colorSchemBtn:string =""
    let {colorMode} = useColorMode()
    if(colorMode === "dark")
    {
        mainColor=commonLayotDark.mainColor
        secondColor=commonLayotDark.secondColor
        colorSchemBtn=commonLayotLight.colorSchemBtn
    }
    else{
        mainColor=commonLayotLight.mainColor
        secondColor=commonLayotLight.secondColor
        colorSchemBtn=commonLayotLight.colorSchemBtn
    }

    return [mainColor,secondColor, colorSchemBtn]
}

export default useThemeColors
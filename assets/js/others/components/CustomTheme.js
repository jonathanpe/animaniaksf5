
import DefaultTheme from "./DefaultTheme";
import MyStringWidget from "./MyStringWidget";
import SFormTextType from "./SFormTextType";
import SFormCheckboxType from "./SFormCheckboxType";
import SFormEmailType from "./SFormEmailType";
import SFormPasswordType from "./SFormPasswordType";

const CustomTheme =  { ...DefaultTheme, text : MyStringWidget, checkbox : SFormCheckboxType, password : SFormPasswordType,  email : SFormEmailType } ;

export default CustomTheme
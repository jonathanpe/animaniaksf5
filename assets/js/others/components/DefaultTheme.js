import SFormTextType from "./SFormTextType";
import SFormHiddenType from "./SFormHiddenType";

const DefaultTheme = {
  /*  object: ObjectWidget,*/
    text: SFormTextType,
    checkbox : SFormTextType,
    password : SFormTextType,
    email : SFormTextType,
    hidden : SFormHiddenType
    /*textarea: TextareaWidget,
    email: EmailWidget,
    integer: NumberWidget,
    number: NumberWidget,
    money: MoneyWidget,
    percent: PercentWidget,
    array: ArrayWidget,
    boolean: CheckboxWidget,
    password: PasswordWidget,
    search: SearchWidget,
    url: UrlWidget,
    color: ColorWidget,
    choice: ChoiceWidget,*/
}

export default DefaultTheme
export const required = values => {
    if (values)  return undefined;
        return "Поля обезательно *";
}
export const maxLengthCreator = (maxLength) => (value) =>{
    if (value.length > maxLength)  return `Max length is ${maxLength} symbol`;
    return undefined;
}

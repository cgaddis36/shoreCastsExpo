const validateZipcode = (inputs) => {
   return(/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(inputs));

};
export default validateZipcode

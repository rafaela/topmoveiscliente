export const cpfValidation = {
   mask: [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/],
   pattern: /\d{3}\.\d{3}\.\d{3}\-\d{2}/
};

export const cnpjValidation = {
   mask: [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/],
   pattern: /\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}/
};

export const telefoneVadation = {
   mask: (value: any) => {
      if (value && value.replace(/[^\d]/g, '').length <= 10){
         return ['(', /\d/, /\d/, ')', ' ', /\d/,  /\d/,  /\d/,  /\d/, '-', /\d/, /\d/,  /\d/,  /\d/];
      }
      return ['(', /\d/, /\d/, ')', ' ', /\d/, ' ', /\d/,  /\d/,  /\d/,  /\d/, '-', /\d/, /\d/,  /\d/,  /\d/];
   },
   pattern: /\(\d{2}\) (\d )?\d{4}-\d{4}/
};

export const emailValidation = {
   pattern: /^[a-z0-9\._-]+@[a-z0-9\._-]+\.[a-z]+(\.[a-z]+)?$/
};

export const cepValidation = {
   mask: [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/],
   pattern: /\d{5}-\d{3}/
};

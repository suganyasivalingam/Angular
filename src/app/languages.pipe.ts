import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'languages'
})
export class LanguagesPipe implements PipeTransform {

  languageSet = {
    TAMIL: {
      HOME: 'வீடு',
      IMAGES:'உருவம்',
      CHARTS:'வரைபடங்கள்',
      LOGIN: 'உள்நுழைய',
      HELLO: 'வணக்கம்',
      SIGNUP: 'பதிவுபெறுக',
      PAGINATION: 'மண்பாண்டம்',
      DUMMY: 'போலி',
      PIPE: 'குழாய்',
      EMPLOYEELIST: ' ஊழியர்கள் பட்டியல்',
      EMPLOYEE:'ஊழியர்கள் ',
      USERNAME: 'பயனர்பெயர்',
      PASSWORD: 'கடவுச்சொல்',
      CANCEL: 'ரத்து',
      CLICK: 'கிளிக்',
      ENTERUSERNAME: 'பயனர்பெயரை உள்ளிடவும்',
      ENTERPASSWORD: 'கடவுச்சொல்லை உள்ளிடவும்',
      FIRSTNAME: 'முதல் பெயர்',
      SURNAME: 'குடும்ப பெயர்',
      ADDRESS: 'முகவரி',
      CITY: 'நகரம்',
      ENTERYOURCITY: 'உங்களுடைய நகரம்',
      LINE1: 'முதல் வரி',
      LINE2: 'இரண்டாவது வரி',
      EMAILID: 'மின்னஞ்சல் முகவரி',
      ENTERYOUREMAILID: 'உங்கள் மின்னஞ்சல் முகவரியை உள்ளிடவும்',
      CONFIRMEMAILID: 'மின்னஞ்சல் முகவரியை உறுதிசெய்',
      CONFIRMPASSWORD: 'கடவுச்சொல்லை உறுதிசெய்'

    },
    ENGLISH: {
      HOME: 'Home',
      IMAGES:'Images',
      LOGIN: 'Login',
      CHARTS:'Charts',
      HELLO:'Hello',
      SIGNUP: 'SignUp',
      PAGINATION: 'Pagination',
      DUMMY: 'Dummy',
      PIPE: 'Pipe',
      EMPLOYEELIST: 'Employeelist',
      EMPLOYEE:'Employee',
      USERNAME: 'Username',
      PASSWORD: 'Password',
      CANCEL: 'Cancel',
      CLICK: 'Click',
      ENTERUSERNAME: 'Enter Username',
      ENTERPASSWORD: 'Enter Password',
      FIRSTNAME: 'First Name',
      SURNAME: 'Surname',
      ADDRESS: 'Address',
      CITY: 'City',
      LINE1: 'Line1',
      LINE2: 'Line2',
      ENTERYOURCITY: 'Enter your City',
      EMAILID: 'Email ID',
      ENTERYOUREMAILID: 'Enter your email ID',
      CONFIRMEMAILID: 'Comfirm Email ID',
      CONFIRMPASSWORD: 'Confirm password'
    },

    HINDI:
    {

      LOGIN: 'लॉग इन करें',
      SIGNUP: 'साइन अप करें',
      IMAGES:' प्रतिरूप',
      HOME:'घर',
      HELLO:'नमस्कार',
      CHARTS:'चार्ट',
      PAGINATION: 'पृष्ठ पर अंक लगाना',
      DUMMY: 'डमी',
      PIPE: 'पाइप',
      EMPLOYEELIST: ' कर्मचारियों की सूची',
      EMPLOYEE:'कर्मचारियों ',
      USERNAME: 'उपयोगकर्ता नाम',
      PASSWORD: 'कुंजिका',
      CANCEL: 'रद्द करना',
      CLICK: 'क्लिक',
      ENTERUSERNAME: 'उपयोगकर्ता नाम दर्ज करें',
      ENTERPASSWORD: 'पास वर्ड दर्ज करें',
      FIRSTNAME: 'पहला नाम',
      SURNAME: 'उपनाम',
      ADDRESS: 'पता',
      CITY: 'सिटी',
      LINE1: 'प्रथम लाइन',
      LINE2: 'दूसरा लाइन',
      ENTERYOURCITY: 'आपका सिटी',
      EMAILID: 'ईमेल आईडी',
      ENTERYOUREMAILID: 'अपना ईमेल आईडी भरें',
      CONFIRMEMAILID: 'पुष्टि करें ईमेल आईडी',
      CONFIRMPASSWORD: 'पासवर्ड की पुष्टि कीजिये',


    },
    PORTUGUESE:
    {
      HOME: 'Entrada',
      LOGIN: 'Conecte-se',
      IMAGES:'imagem',
      HELLO:'Olá',
      SIGNUP: 'Inscrever-se',
      PAGINATION: 'Paginação',
      DUMMY: ' Manequim',
      PIPE: ' Tubo',
      EMPLOYEELIST: ' Lista de funcionários',
      EMPLOYEE:'Funcionários',
      USERNAME: 'Nome de usuário',
      PASSWORD: 'Senha',
      CANCEL: 'Cancelar',
      CLICK: 'Clique',
      ENTERUSERNAME: 'Enter nome do usuário',
      ENTERPASSWORD: 'Enter senha',
      FIRSTNAME: 'First nome de usuário',
      SURNAME: 'Surname',
      ADDRESS: 'Endereço',
      CITY: 'Cidade',
      LINE1: 'Linha1',
      LINE2: 'Linha2',
      ENTERYOURCITY: 'Enter your City',
      EMAILID: 'Identificação do email',
      ENTERYOUREMAILID: 'Enter identificação do email',
      CONFIRMEMAILID: 'Comfirm identificação do email',
      CONFIRMPASSWORD: 'Confirm senha'
    },
    GERMAN:
    {
      HOME: 'Eingang',
      LOGIN: ' Anmeldung',
      IMAGES:'Image',
      HELLO:'Hallo',
      SIGNUP: ' Anmelden',
      PAGINATION: 'Seitennummerierung',
      DUMMY: 'Attrappe',
      PIPE: ' Rohr',
      EMPLOYEELIST: 'Mitarbeiterliste',
      EMPLOYEE:'Mitarbeiterliste',
      USERNAME: 'Nutzername',
      PASSWORD: 'Passwort',
      CANCEL: 'stornieren',
      CLICK: 'klicken',
      ENTERUSERNAME: 'Enter Nutzername',
      ENTERPASSWORD: 'Enter Passwort',
      FIRSTNAME: 'First nome de usuário',
      SURNAME: 'Surname',
      ADDRESS: 'Adresse',
      CITY: 'Stadt',
      LINE1: 'Linie1',
      LINE2: 'Linie2',
      ENTERYOURCITY: 'Enter your Stadt',
      EMAILID: 'Identificação do email',
      ENTERYOUREMAILID: 'Enter identificação do email',
      CONFIRMEMAILID: 'Comfirm identificação do email',
      CONFIRMPASSWORD: 'Confirm passwort'
    }
  }

  transform(value: any, args?: string): any {
    console.log(value);
    let language = 'ENGLISH';
    if (args) {
      language = args;
    }
    if (this.languageSet[language][value]) {
      return this.languageSet[language][value];
    }
    return value;
  }

}

window.settings = {
  i18n: {
    defaultlocale: 'en',
    /* Set to 'browser' to use browser locale */
    languages: ['en'],
    showLangSwitch: false,
    /* set to true to show the language switcher */
  },
  general: {
    theming: {
      override: false,
      interactiveColor: '#0076DE',
      brandColor: '#3C8712',
    },
    ga: {
      enabled: true,
      trackingid: 'G-RJ6VT2L72P',
    },
    connection: {
      type: 'mashup',
      authtype: 'basic',
      clientid: '',
      clientsecret: '',
      webportal: '',
      c11nserver: '',
    },
    auth_2fa: {
      enabled: false,
      sendMode: 'email',
      url: '',
      emailSettings: {
        correspondenceName: 'pyDefaultOTPCorr',
        emailAccount: 'Default',
        subject: 'New OTP Request',
        validateMaxAge: 'false',
      },
      smsSettings: {
        from: 'Pega',
        account: 'Default',
        message: 'Uplus OTP login code',
        validateMaxAge: 'false',
      },
    },
  },
  quicklinks: [
    {
      title: {
        en: 'Find Plans',
      },
      action: 'createNewWork',
      actionparam: '',
      objclass: '',
      url: '',
      startcase: 'pyStartCase',
      application: '',
      icon: '',
      extraparam: '',
      hide: false,
      channelid: '',
      tenantid: '',
      dataretained: true,
      hideusers: '',
    },
    {
      title: {
        en: 'Make a payfgfdgment',
      },
      action: 'createNewWork',
      actionparam: '',
      objclass: '',
      url: '',
      startcase: 'pyStartCase',
      application: '',
      icon: '',
      extraparam: '',
      hide: false,
      channelid: '',
      tenantid: '',
      dataretained: true,
      hideusers: '',
    },
    {
      title: {
        en: 'Update billing',
      },
      action: 'createNewWork',
      actionparam: '',
      objclass: '',
      url: '',
      startcase: 'pyStartCase',
      application: '',
      icon: '',
      extraparam: '',
      hide: false,
      channelid: '',
      tenantid: '',
      dataretained: true,
      hideusers: '',
    },
    {
      title: {
        en: 'Proof of insurance',
      },
      action: 'createNewWork',
      actionparam: '',
      objclass: '',
      url: '',
      startcase: 'pyStartCase',
      application: '',
      icon: '',
      extraparam: '',
      hide: false,
      channelid: '',
      tenantid: '',
      dataretained: true,
      hideusers: '',
    },
    {
      title: {
        en: 'Update your profile',
      },
      action: 'createNewWork',
      actionparam: '',
      objclass: '',
      url: '',
      startcase: 'pyStartCase',
      application: '',
      icon: '',
      extraparam: '',
      hide: false,
      channelid: '',
      tenantid: '',
      dataretained: true,
      hideusers: '',
    },
  ],
  billpay: {
    action: 'createNewWork',
    actionparam: '',
    objclass: '',
    url: '',
    startcase: 'pyStartCase',
    application: '',
    extraparam: '',
    hidebillpay: false,
    channelid: '',
    tenantid: '',
    dataretained: true,
  },
  banner: {
    action: 'createNewWork',
    actionparam: '',
    objclass: '',
    url: '',
    startcase: 'pyStartCase',
    application: '',
    extraparam: '',
    hidebanner: true,
    hidebanner_button: false,
    color: '#CE9840',
    channelid: '',
    tenantid: '',
    dataretained: true,
  },
  todo: {
    action: 'createNewWork',
    actionparam: '',
    objclass: '',
    url: '',
    startcase: 'pyStartCase',
    application: '',
    extraparam: '',
    hideactivity: false,
    hideaccount: false,
    hideKPI: false,
    channelid: '',
    tenantid: '',
    dataretained: true,
  },
  kmhelp: {
    action: 'display',
    actionparam: 'KMHelpSitePortal',
    objclass: 'Data-Portal',
    url: '',
    startcase: 'pyStartCase',
    application: '',
    extraparam: '',
    username: '',
    password: '',
    channelid: '',
    tenantid: '',
    dataretained: true,
  },
  homeheroaction: {
    action: 'createNewWork',
    actionparam: '',
    objclass: '',
    url: '',
    startcase: 'pyStartCase',
    application: '',
    pega_userid: '',
    pega_pwd: '',
    extraparam: '',
    channelid: '',
    tenantid: '',
    dataretained: true,
  },
  offeraction: {
    action: 'createNewWork',
    actionparam: '',
    objclass: '',
    url: '',
    startcase: 'pyStartCase',
    application: '',
    pega_userid: '',
    pega_pwd: '',
    extraparam: '',
    channelid: '',
    tenantid: '',
    dataretained: true,
  },
  users: [
    {
      username: 'joe',
      password: 'rules',
      img: 'avatar-1.jpg',
      company_name: '',
      name: '',
      accountID: '',
      contactID: '',
      customerID: 'CUST10',
      extraparam: '',
      dmm_context_data: '',
      pega_userid: 'jsmith',
      pega_pwd: 'rules',
      bill_pay: 164.8,
      load_by_default: true,
      otp_send_to: '',
      kpi: [
        {
          name: 'kpi_age',
          value: '31',
        },
        {
          icon: 'pi-gauge',
          name: 'kpi_wellness_score',
          value: '90/100',
        },
        {
          icon: 'pi-chart-donut-solid',
          name: 'kpi_cholesterol',
          value: '185',
        },
        {
          icon: 'pi-target',
          name: 'kpi_bmi',
          value: '22.3',
        },
        {
          icon: 'pi-heart-pulse',
          name: 'kpi_blood_pressure',
          value: '120/76',
        },
      ],
    },
    {
      username: 'mary',
      password: 'rules',
      img: 'avatar-2.jpg',
      company_name: '',
      name: '',
      accountID: '',
      contactID: '',
      customerID: 'CUST11',
      extraparam: '',
      dmm_context_data: '',
      pega_userid: 'mtaylor',
      pega_pwd: 'rules',
      bill_pay: 164.8,
      load_by_default: false,
      otp_send_to: '',
      kpi: [
        {
          name: 'kpi_age',
          value: '24',
        },
        {
          icon: 'pi-gauge',
          name: 'kpi_wellness_score',
          value: '80/100',
        },
        {
          icon: 'pi-chart-donut-solid',
          name: 'kpi_cholesterol',
          value: '215',
        },
        {
          icon: 'pi-target',
          name: 'kpi_bmi',
          value: '26.3',
        },
        {
          icon: 'pi-heart-pulse',
          name: 'kpi_blood_pressure',
          value: '115/86',
        },
      ],
    },
    {
      username: 'Troy',
      password: 'rules',
      img: 'Avatar-Troy-Murphy.jpg',
      company_name: '',
      name: '',
      accountID: '',
      contactID: '',
      customerID: '14',
      extraparam: '',
      dmm_context_data: '',
      pega_userid: 'mtaylor',
      pega_pwd: 'rules',
      bill_pay: 164.8,
      load_by_default: false,
      otp_send_to: '',
      kpi: [
        {
          name: 'kpi_age',
          value: '26',
        },
        {
          icon: 'pi-gauge',
          name: 'kpi_wellness_score',
          value: '85/100',
        },
        {
          icon: 'pi-chart-donut-solid',
          name: 'kpi_cholesterol',
          value: '190',
        },
        {
          icon: 'pi-target',
          name: 'kpi_bmi',
          value: '23.98',
        },
        {
          icon: 'pi-heart-pulse',
          name: 'kpi_blood_pressure',
          value: '113/86',
        },
      ],
    },
    {
      username:'Barbara',
      password:'rules',
      img:'avatar-2.jpg',
      company_name:'',
      name:'',
      accountID:'',
      contactID:'',
      customerID:'15',
      extraparam:'',
      pega_userid:'mtaylor',
      pega_pwd:'rules',
      bill_pay:'164.8',
      load_by_default:'false',
      billpay:'164.8',
      otp_send_to:'',
      kpi:[
              {
            name:'kpi_age',
            value:'32'
         },
         {
            icon:'pi-gauge',
            name:'kpi_wellness_score',
            value:'80/100'
         },
         {
            icon:'pi-chart-donut-solid',
            name:'kpi_cholesterol',
            value:'195'
         },
         {
            icon:'pi-target',
            name:'kpi_bmi',
            value:'25.7'
         },
         {
            icon:'pi-heart-pulse',
            name:'kpi_blood_pressure',
            value:'117/81'
         },
      ],
   },
   {
    username:'Joanna',
    password:'rules',
    img:'Avatar-Carmen-Alvarez.jpg',
    company_name:'',
    name:'',
    accountID:'',
    contactID:'',
    customerID:'16',
    extraparam:'',
    pega_userid:'mtaylor',
    pega_pwd:'rules',
    bill_pay:'164.8',
    load_by_default:'false',
    otp_send_to:'',
    kpi:[
        {
          name:'kpi_age',
          value:'25'
       },
       {
          icon:'pi-gauge',
          name:'kpi_wellness_score',
          value:'82/100'
       },
       {
          icon:'pi-chart-donut-solid',
          name:'kpi_cholesterol',
          value:'220'
       },
       {
          icon:'pi-target',
          name:'kpi_bmi',
          value:'22'
       },
       {
          icon:'pi-heart-pulse',
          name:'kpi_blood_pressure',
          value:'119/89'
       },
    ],
 },
 {
  username:'Robert',
  password:'rules',
  img:'Avatar-Robert-Hill.jpg',
  company_name:'',
  name:'',
  accountID:'',
  contactID:'',
  customerID:'17',
  extraparam:'',
  pega_userid:'mtaylor',
  pega_pwd:'rules',
  bill_pay:'164.8',
  load_by_default:'false',
  billpay:'164.8',
  otp_send_to:'',
  kpi:[
 {
        name:'kpi_age',
        value:'26'
     },
     {
        icon:'pi-gauge',
        name:'kpi_wellness_score',
        value:'70/100'
     },
     {
        icon:'pi-chart-donut-solid',
        name:'kpi_cholesterol',
        value:'280'
     },
     {
        icon:'pi-target',
        name:'kpi_bmi',
        value:'28.12'
     },
     {
        icon:'pi-heart-pulse',
        name:'kpi_blood_pressure',
        value:'120/76'
     },
  ],
},
{
  username:'John',
  password:'rules',
  img:'avatar-1.jpg',
  company_name:'',
  name:'',
  accountID:'',
  contactID:'',
  customerID:'18',
  extraparam:'',
  pega_userid:'mtaylor',
  pega_pwd:'rules',
  bill_pay:'164.8',
  load_by_default:'false',
  billpay:'164.8',
  otp_send_to:'',
  kpi:[
          {
        name:'kpi_age',
        value:'45'
     },
     {
        icon:'pi-gauge',
        name:'kpi_wellness_score',
        value:'65/100'
     },
     {
        icon:'pi-chart-donut-solid',
        name:'kpi_cholesterol',
        value:'300'
     },
     {
        icon:'pi-target',
        name:'kpi_bmi',
        value:'29.82'
     },
     {
        icon:'pi-heart-pulse',
        name:'kpi_blood_pressure',
        value:'112/78'
     },
  ],
},
{
  username:'Arnold',
  password:'rules',
  img:'Avatar-Ben-Stokes.jpg',
  company_name:'',
  name:'',
  accountID:'',
  contactID:'',
  customerID:'19',
  extraparam:'',
  pega_userid:'mtaylor',
  pega_pwd:'rules',
  bill_pay:'164.8',
  load_by_default:'false',
  billpay:'164.8',
  otp_send_to:'',
  kpi:[
          {
        name:'kpi_age',
        value:'56'
     },
     {
        icon:'pi-gauge',
        name:'kpi_wellness_score',
        value:'75/100'
     },
     {
        icon:'pi-chart-donut-solid',
        name:'kpi_cholesterol',
        value:'277'
     },
     {
        icon:'pi-target',
        name:'kpi_bmi',
        value:'26.42'
     },
     {
        icon:'pi-heart-pulse',
        name:'kpi_blood_pressure',
        value:'121/76'
     },
  ],
},
{
  username:'Sara',
  password:'rules',
  img:'Avatar-Sheryl-Williams.jpg',
  company_name:'',
  name:'',
  accountID:'',
  contactID:'',
  customerID:'UPLUS-SAPLUS-WORK-CONTACT SAMPLECON-1',
  extraparam:'',
  pega_userid:'mtaylor',
  pega_pwd:'rules',
  bill_pay:'164.8',
  load_by_default:'false',
  billpay:'164.8',
  otp_send_to:'',
  kpi:[
{
        name:'kpi_age',
        value:'34'
     },
     {
        icon:'pi-gauge',
        name:'kpi_wellness_score',
        value:'90/100'
     },
     {
        icon:'pi-chart-donut-solid',
        name:'kpi_cholesterol',
        value:'185'
     },
     {
        icon:'pi-target',
        name:'kpi_bmi',
        value:'22.3'
     },
     {
        icon:'pi-heart-pulse',
        name:'kpi_blood_pressure',
        value:'120/78'
     },
  ],
},
  ],
  pega_chat: {
    WCBConfigName: '',
    WebChatBotID: '',
    ApplicationName: '',
    MashupURL: '',
    ShowAsButton: true,
    EnableProActiveNotification: false,
    ResetLogout: false,
    ProActiveNotificationDismissTime: '',
    CoBrowseServerURL: '',
    CoBrowseToken: '',
    UseLegacyWebChat: false,
    DMMURL: '',
    DMMID: 'pega-wm-chat',
    DMMSecret: '',
    DMMPrivateURL: 'https://ksxyk0i2hb.execute-api.us-east-1.amazonaws.com/Prod/private-data',
  },
  pega_marketing: {
    Host: 'softserve01.pegalabs.io',
    Port: '',
    channel: 'Web',
    requestTimeout: 90000,
    replaceHomePageHeader: false,
    showAIOverlay: true,
    enableRTS: false,
    enableClickStream: true,
    useCaptureByChannel: true,
    apiLevel: 'V3',
    contextName: 'Customer',
    showLoadingIndicator: true,
    homePage: {
      containerName: '',
      placement: 'Hero,Tile,Tile,Tile',
      clickaction: 'TopURL',
    },
    accountPage: {
      containerName: 'TestContainer',
      placement: 'Tile',
      clickaction: 'TopURL',
    },
    phonePage: {
      containerName: '',
      placement: 'Tile',
      clickaction: 'Mashup',
    },
    offerPage: {
      containerName: 'TopOffers',
      placement: 'Hero,Tile,Tile,Tile',
      clickaction: 'Mashup',
    },
  },
};

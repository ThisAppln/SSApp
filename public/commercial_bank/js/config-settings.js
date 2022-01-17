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
        en: 'File a claim',
        fr: 'Deposer une plainte',
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
        en: 'Make a payment',
        fr: 'Faire un paiement',
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
        fr: 'Mettre a jour ses informations de paiment',
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
        fr: "Certificat d'assurance",
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
        fr: 'Mettre a jour votre profil',
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
    hideKPI: true,
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
      username: 'joe@pegasystems.com',
      password: 'rules',
      img: 'avatar-1.jpg',
      company_name: 'ABC Corporation',
      name: 'Joe Smith',
      accountID: '',
      contactID: '',
      customerID: '',
      extraparam: '',
      dmm_context_data: '',
      pega_userid: 'jsmith',
      pega_pwd: 'rules',
      load_by_default: true,
      otp_send_to: '',
      accounts: [
        {
          number: '****0000',
          name: 'Disbursement Account',
          type: 'Zero Balance',
          balance: 300150.19,
        },
        {
          number: '****0100',
          name: 'Operating Account',
          type: 'DDA',
          balance: 1335000.62,
        },
        {
          number: '****0300',
          name: 'Customer Payment Account',
          type: 'Sweep',
          balance: 43921.82,
        },
      ],
      investmentaccounts: [
        {
          number: '***3415-100',
          name: 'Enhanced Commodity fund',
          type: 'High Yield Investment',
          trend: 'green',
          trendvalue: '.06',
          balance: 106210093.12,
        },
        {
          number: '***4512-100',
          name: 'CD90',
          type: 'Time Deposit, 90 day',
          trend: 'red',
          trendvalue: '.03',
          balance: 10006591.96,
        },
        {
          number: '***5213-100',
          name: 'CD180',
          type: 'Time Deposit, 6 months',
          trend: 'green',
          trendvalue: '.01',
          balance: 25000180.34,
        },
      ],
    },
    {
      username: 'testitnow',
      password: 'rules',
      img: 'avatar-1.jpg',
      company_name: 'ABC Corporation',
      name: 'Joe Smith',
      accountID: '',
      contactID: '',
      customerID: '',
      extraparam: '',
      dmm_context_data: '',
      pega_userid: 'jsmith',
      pega_pwd: 'rules',
      load_by_default: true,
      otp_send_to: '',
      accounts: [
        {
          number: '****0000',
          name: 'Disbursement Account',
          type: 'Zero Balance',
          balance: 300150.19,
        },
        {
          number: '****0100',
          name: 'Operating Account',
          type: 'DDA',
          balance: 1335000.62,
        },
        {
          number: '****0300',
          name: 'Customer Payment Account',
          type: 'Sweep',
          balance: 43921.82,
        },
      ],
      investmentaccounts: [
        {
          number: '***3415-100',
          name: 'Enhanced Commodity fund',
          type: 'High Yield Investment',
          trend: 'green',
          trendvalue: '.06',
          balance: 106210093.12,
        },
        {
          number: '***4512-100',
          name: 'CD90',
          type: 'Time Deposit, 90 day',
          trend: 'red',
          trendvalue: '.03',
          balance: 10006591.96,
        },
        {
          number: '***5213-100',
          name: 'CD180',
          type: 'Time Deposit, 6 months',
          trend: 'green',
          trendvalue: '.01',
          balance: 25000180.34,
        },
      ],
    },
    {
      username: 'mary@pegasystems.com',
      password: 'rules',
      img: 'avatar-2.jpg',
      company_name: 'CKY investments',
      name: 'Mary Taylor',
      accountID: '',
      contactID: '',
      customerID: '',
      extraparam: '',
      dmm_context_data: '',
      pega_userid: 'mtaylor',
      pega_pwd: 'rules',
      load_by_default: false,
      otp_send_to: '',
      accounts: [
        {
          number: 6173782492,
          name: 'Interest only checkin',
          id: 12545,
          previous_balance: 86450,
          current_balance: 89546.32,
        },
        {
          number: 2878429003,
          name: 'CD',
          id: 54920,
          previous_balance: 523421.34,
          current_balance: 534561.34,
        },
      ],
      investmentaccounts: [
        {
          number: '***3415-100',
          name: 'Enhanced Commodity fund',
          type: 'High Yield Investment',
          trend: 'green',
          trendvalue: '.06',
          balance: 106210093.12,
        },
        {
          number: '***4512-100',
          name: 'CD90',
          type: 'Time Deposit, 90 day',
          trend: 'red',
          trendvalue: '.03',
          balance: 10006591.96,
        },
      ],
    },
  ],
  keyrates: [
    {
      name: 'keyrates_treasure_bill',
      trend: 'red',
      current: 2.4,
      high: 2.67,
      low: 1.7,
    },
    {
      name: 'keyrates_commercial_paper',
      trend: 'red',
      current: 2.47,
      high: 2.78,
      low: 1.99,
    },
    {
      name: 'keyrates_federal_funds',
      trend: 'green',
      current: 2.41,
      high: 2.4,
      low: 1.69,
    },
    {
      name: 'keyrates_libor',
      trend: 'green',
      current: 2.60,
      high: 2.61,
      low: 2.54,
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

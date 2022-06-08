(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-common"], {
      0: function(e, t) {},
      1: function(e, t, a) {
          e.exports = a("56d7")
      },
      2919: function(module, __webpack_exports__, __webpack_require__) {
          "use strict";
          __webpack_require__.d(__webpack_exports__, "b", (function() {
              return mainconfig
          })), __webpack_require__.d(__webpack_exports__, "a", (function() {
              return i18n
          })), __webpack_require__.d(__webpack_exports__, "e", (function() {
              return upgradeConfig
          })), __webpack_require__.d(__webpack_exports__, "d", (function() {
              return updatePegaChat
          })), __webpack_require__.d(__webpack_exports__, "c", (function() {
              return setCookie
          }));
          var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2b0e"),
              vue_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("a925"),
              _JWTToken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("dda7");

          function setCookie(e, t, a) {
              var i = new Date;
              i.setTime(i.getTime() + 24 * a * 60 * 60 * 1e3);
              var s = "expires=".concat(i.toGMTString());
              document.cookie = "".concat(e, "=").concat(t, ";").concat(s, ";path=/")
          }

          function getCookie(e) {
              for (var t = "".concat(e, "="), a = decodeURIComponent(document.cookie), i = a.split(";"), s = 0; s < i.length; s++) {
                  var n = i[s];
                  while (" " === n.charAt(0)) n = n.substring(1);
                  if (0 === n.indexOf(t)) return n.substring(t.length, n.length)
              }
              return ""
          }
          var upgradeConfig = function(e) {
                  for (var t in e.settings.todo && "undefined" === typeof e.settings.todo.hideactivity && (e.settings.todo.hideactivity = !1), e.settings.todo && "undefined" === typeof e.settings.todo.hideaccount && (e.settings.todo.hideaccount = !1), e.settings.todo && "undefined" === typeof e.settings.todo.hideKPI && (e.settings.todo.hideKPI = !1), e.settings.billpay && "undefined" === typeof e.settings.billpay.hidebillpay && (e.settings.billpay.hidebillpay = !1), "undefined" === typeof e.settings.banner && (e.settings.banner = {
                          action: "createNewWork",
                          actionparam: "",
                          objclass: "",
                          url: "",
                          startcase: "pyStartCase",
                          application: "",
                          extraparam: "",
                          hidebanner: !0,
                          color: "#CE9840"
                      }), "undefined" === typeof e.settings.banner.hidebanner_button && (e.settings.banner.hidebanner_button = !1), "undefined" === typeof e.settings.kmhelp && (e.settings.kmhelp = {
                          action: "display",
                          actionparam: "KMHelpSitePortal",
                          objclass: "Data-Portal",
                          url: "",
                          startcase: "pyStartCase",
                          application: "",
                          extraparam: ""
                      }), "undefined" === typeof e.settings.kmhelp.username && (e.settings.kmhelp.username = ""), "undefined" === typeof e.settings.kmhelp.password && (e.settings.kmhelp.password = ""), "undefined" === typeof e.settings.offeraction && (e.settings.offeraction = {
                          action: "createNewWork",
                          actionparam: "",
                          objclass: "",
                          url: "",
                          startcase: "pyStartCase",
                          application: "",
                          pega_userid: "",
                          pega_pwd: "",
                          extraparam: ""
                      }), "undefined" === typeof e.settings.pega_chat.CoBrowseServerURL && (e.settings.pega_chat.CoBrowseServerURL = ""), "undefined" === typeof e.settings.pega_chat.CoBrowseToken && (e.settings.pega_chat.CoBrowseToken = ""), "undefined" === typeof e.settings.pega_chat.ShowAsButton && (e.settings.pega_chat.ShowAsButton = !0), "undefined" === typeof e.settings.pega_chat.ResetLogout && (e.settings.pega_chat.ResetLogout = !1), "undefined" === typeof e.settings.pega_chat.EnableProActiveNotification && (e.settings.pega_chat.EnableProActiveNotification = !1), "undefined" === typeof e.settings.pega_chat.ProActiveNotificationDismissTime && (e.settings.pega_chat.ProActiveNotificationDismissTime = ""), "undefined" === typeof e.settings.pega_chat.UseLegacyWebChat && (e.settings.pega_chat.UseLegacyWebChat = !0), "undefined" === typeof e.settings.pega_chat.DMMURL && (e.settings.pega_chat.DMMURL = ""), "undefined" === typeof e.settings.pega_chat.DMMID && (e.settings.pega_chat.DMMID = "pega-wm-chat"), "undefined" === typeof e.settings.pega_chat.DMMSecret && (e.settings.pega_chat.DMMSecret = ""), "undefined" === typeof e.settings.pega_chat.DMMPrivateURL && (e.settings.pega_chat.DMMPrivateURL = "https://ksxyk0i2hb.execute-api.us-east-1.amazonaws.com/Prod/private-data"), "undefined" === typeof e.settings.pega_chat.TenantID && (e.settings.pega_chat.TenantID = ""), e.settings.users) "undefined" === typeof e.settings.users[t].accountID && (e.settings.users[t].accountID = ""), "undefined" === typeof e.settings.users[t].contactID && (e.settings.users[t].contactID = ""), "undefined" === typeof e.settings.users[t].customerID && (e.settings.users[t].customerID = ""), "undefined" === typeof e.settings.users[t].extraparam && (e.settings.users[t].extraparam = ""), "undefined" === typeof e.settings.users[t].dmm_context_data && (e.settings.users[t].dmm_context_data = ""), "undefined" === typeof e.settings.users[t].billpay && (e.settings.users[t].billpay = 164.8), "undefined" === typeof e.settings.users[t].otp_send_to && (e.settings.users[t].otp_send_to = "");
                  for (var a in "undefined" === typeof e.settings.pega_marketing.homePage && (e.settings.pega_marketing.homePage = {
                          containerName: "TestContainer"
                      }), "undefined" === typeof e.settings.pega_marketing.accountPage && (e.settings.pega_marketing.accountPage = {
                          containerName: "TopOffers"
                      }), "undefined" === typeof e.settings.pega_marketing.phonePage && (e.settings.pega_marketing.phonePage = {
                          containerName: "TopOffers"
                      }), "undefined" === typeof e.settings.pega_marketing.offerPage && (e.settings.pega_marketing.offerPage = {
                          containerName: "TopOffers"
                      }), "undefined" === typeof e.settings.pega_marketing.homePage.placement && (e.settings.pega_marketing.homePage.placement = "Hero,Tile,Tile,Tile"), "undefined" === typeof e.settings.pega_marketing.accountPage.placement && (e.settings.pega_marketing.accountPage.placement = "Tile"), "undefined" === typeof e.settings.pega_marketing.phonePage.placement && (e.settings.pega_marketing.phonePage.placement = "Tile"), "undefined" === typeof e.settings.pega_marketing.offerPage.placement && (e.settings.pega_marketing.offerPage.placement = "Hero,Tile,Tile,Tile"), "undefined" === typeof e.settings.pega_marketing.homePage.clickaction && (e.settings.pega_marketing.homePage.clickaction = "Mashup"), "undefined" === typeof e.settings.pega_marketing.accountPage.clickaction && (e.settings.pega_marketing.accountPage.clickaction = "Mashup"), "undefined" === typeof e.settings.pega_marketing.phonePage.clickaction && (e.settings.pega_marketing.phonePage.clickaction = "Mashup"), "undefined" === typeof e.settings.pega_marketing.offerPage.clickaction && (e.settings.pega_marketing.offerPage.clickaction = "Mashup"), "undefined" === typeof e.settings.pega_marketing.replaceHomePageHeader && (e.settings.pega_marketing.replaceHomePageHeader = !1), "undefined" === typeof e.settings.pega_marketing.channel && (e.settings.pega_marketing.channel = "Web"), "undefined" === typeof e.settings.pega_marketing.showAIOverlay && (e.settings.pega_marketing.showAIOverlay = !1), "undefined" === typeof e.settings.pega_marketing.enableRTS && (e.settings.pega_marketing.enableRTS = !1), "undefined" === typeof e.settings.pega_marketing.enableClickStream && (e.settings.pega_marketing.enableClickStream = !1), "undefined" === typeof e.settings.pega_marketing.showLoadingIndicator && (e.settings.pega_marketing.showLoadingIndicator = !1), "undefined" === typeof e.settings.pega_marketing.useCaptureByChannel && (e.settings.pega_marketing.useCaptureByChannel = !1), "undefined" === typeof e.settings.pega_marketing.apiLevel && (e.settings.pega_marketing.apiLevel = "V2"), "undefined" === typeof e.settings.pega_marketing.contextName && (e.settings.pega_marketing.contextName = "Customer"), "undefined" === typeof e.settings.pega_marketing.requestTimeout && (e.settings.pega_marketing.requestTimeout = 1e4), e.settings.quicklinks) "undefined" === typeof e.settings.quicklinks[a].hide && (e.settings.quicklinks[a].hide = !1), "undefined" === typeof e.settings.quicklinks[a].channelid && (e.settings.quicklinks[a].channelid = ""), "undefined" === typeof e.settings.quicklinks[a].tenantid && (e.settings.quicklinks[a].tenantid = ""), "undefined" === typeof e.settings.quicklinks[a].dataretained && (e.settings.quicklinks[a].dataretained = !0), "undefined" === typeof e.settings.quicklinks[a].hideusers && (e.settings.quicklinks[a].hideusers = "");
                  return "undefined" === typeof e.settings.billpay.channelid && (e.settings.billpay.channelid = ""), "undefined" === typeof e.settings.banner.channelid && (e.settings.banner.channelid = ""), "undefined" === typeof e.settings.homeheroaction.channelid && (e.settings.homeheroaction.channelid = ""), "undefined" === typeof e.settings.offeraction.channelid && (e.settings.offeraction.channelid = ""), "undefined" === typeof e.settings.kmhelp.channelid && (e.settings.kmhelp.channelid = ""), "undefined" === typeof e.settings.todo.channelid && (e.settings.todo.channelid = ""), "undefined" === typeof e.settings.billpay.tenantid && (e.settings.billpay.tenantid = ""), "undefined" === typeof e.settings.banner.tenantid && (e.settings.banner.tenantid = ""), "undefined" === typeof e.settings.homeheroaction.tenantid && (e.settings.homeheroaction.tenantid = ""), "undefined" === typeof e.settings.offeraction.tenantid && (e.settings.offeraction.tenantid = ""), "undefined" === typeof e.settings.kmhelp.tenantid && (e.settings.kmhelp.tenantid = ""), "undefined" === typeof e.settings.todo.tenantid && (e.settings.todo.tenantid = ""), "undefined" === typeof e.settings.billpay.dataretained && (e.settings.billpay.dataretained = !0), "undefined" === typeof e.settings.banner.dataretained && (e.settings.banner.dataretained = !0), "undefined" === typeof e.settings.homeheroaction.dataretained && (e.settings.homeheroaction.dataretained = !0), "undefined" === typeof e.settings.offeraction.dataretained && (e.settings.offeraction.dataretained = !0), "undefined" === typeof e.settings.kmhelp.dataretained && (e.settings.kmhelp.dataretained = !0), "undefined" === typeof e.settings.todo.dataretained && (e.settings.todo.dataretained = !0), "undefined" === typeof e.settings.general && (e.settings.general = {
                      ga: {
                          enabled: !0,
                          trackingid: "G-RJ6VT2L72P"
                      },
                      auth_2fa: {
                          enabled: !1,
                          sendMode: "email",
                          url: "",
                          emailSettings: {
                              correspondenceName: "pyDefaultOTPCorr",
                              emailAccount: "Default",
                              subject: "New OTP Request",
                              validateMaxAge: "false"
                          },
                          smsSettings: {
                              from: "Pega",
                              account: "Default",
                              message: "Uplus OTP login code",
                              validateMaxAge: "false"
                          }
                      }
                  }), "undefined" === typeof e.settings.general.connection && (e.settings.general.connection = {
                      type: "mashup",
                      authtype: "basic",
                      clientid: "",
                      clientsecret: "",
                      webportal: ""
                  }), "undefined" === typeof e.settings.general.connection.c11nserver && (e.settings.general.connection.c11nserver = ""), "undefined" === typeof e.settings.general.theming && (e.settings.general.theming = {
                      override: !1,
                      interactiveColor: "#0076DE",
                      brandColor: "#3C8712"
                  }), e
              },
              handleOutsideClick;
          vue__WEBPACK_IMPORTED_MODULE_0__["a"].directive("clickoutside", {
              bind(e, t, a) {
                  handleOutsideClick = i => {
                      i.stopPropagation();
                      var {
                          handler: s
                      } = t.value;
                      e.contains(i.target) || a.context[s](i)
                  }, document.addEventListener("click", handleOutsideClick), document.addEventListener("touchstart", handleOutsideClick)
              },
              unbind() {
                  document.removeEventListener("click", handleOutsideClick), document.removeEventListener("touchstart", handleOutsideClick)
              }
          }), vue__WEBPACK_IMPORTED_MODULE_0__["a"].use(vue_i18n__WEBPACK_IMPORTED_MODULE_1__["a"]);
          var userLang = navigator.language || navigator.userLanguage,
              i18nTmp, mainconfigTmp;
          if (userLang.length > 2 && (userLang = userLang.substring(0, 1)), "undefined" === typeof settings) window.location.href = "".concat(window.location.href, "/");
          else {
              "browser" === settings.i18n.defaultlocale && (settings.i18n.defaultlocale = userLang);
              var messages = {},
                  dateTimeFormats = {},
                  numberFormats = {},
                  isDefaultLocaleLoaded = !1;
              for (var i in settings.i18n.languages) {
                  var lang = settings.i18n.languages[i];
                  messages[lang] = {
                      message: eval("lang".concat(lang.toUpperCase()))
                  }, dateTimeFormats[lang] = eval("dateFormat".concat(lang.toUpperCase())), numberFormats[lang] = eval("numberFormat".concat(lang.toUpperCase())), lang === settings.i18n.defaultlocale && (isDefaultLocaleLoaded = !0)
              }
              isDefaultLocaleLoaded || ([settings.i18n.defaultlocale] = settings.i18n.languages), i18nTmp = new vue_i18n__WEBPACK_IMPORTED_MODULE_1__["a"]({
                  locale: settings.i18n.defaultlocale,
                  messages: messages,
                  dateTimeFormats: dateTimeFormats,
                  numberFormats: numberFormats
              });
              var isMobilePhone = !1;
              (/iPhone/.test(navigator.userAgent) || /Android/.test(navigator.userAgent)) && (isMobilePhone = !0), isMobilePhone && (document.documentElement.className = "phone"), mainconfigTmp = {
                  settings: settings,
                  app: app,
                  isMobilePhone: isMobilePhone,
                  offerURL: "",
                  offerIndex: 0,
                  homeHeroImg: "",
                  currentPage: "",
                  previousPage: "",
                  intent: "",
                  reloadOffer: 1,
                  reloadMashup: 1,
                  reloadAccountMashup: 1,
                  isAuthenticated: !1,
                  isSidePanelVisible: !1,
                  isDeepLink: !1,
                  deepLinkExtraParam: {},
                  phonePageName: "",
                  userId: -1,
                  quickLinkId: -1,
                  viewBill: -1,
                  viewBanner: -1,
                  toDo: -1,
                  viewKMHelp: -1,
                  KMArticleID: "",
                  logoutURL: {},
                  homeHeroAction: -1,
                  offerAction: -1,
                  isRTSEnabled: !1,
                  currentLocale: settings.i18n.defaultlocale,
                  mainTitle: document.title
              };
              var retrievedObject = localStorage.getItem("config_".concat(mainconfigTmp.app.industry));
              if (null != retrievedObject) {
                  var tmpObj = JSON.parse(retrievedObject);
                  tmpObj.settings && (mainconfigTmp.settings = tmpObj.settings)
              }
              if (mainconfigTmp = upgradeConfig(mainconfigTmp), mainconfigTmp.settings.pega_chat.ShowAsButton && (document.documentElement.className = "".concat(document.documentElement.className, " chat-button")), window.history && null !== window.history.state) {
                  var currentState = window.history.state; - 1 === mainconfigTmp.userId && null !== currentState && "undefined" !== typeof currentState.userId ? (-1 !== currentState.userId && (mainconfigTmp.isAuthenticated = !0), mainconfigTmp.userId = currentState.userId, "undefined" !== typeof currentState.quickLinkId ? (mainconfigTmp.quickLinkId = currentState.quickLinkId, isMobilePhone && (mainconfigTmp.phonePageName = "help"), window.history.replaceState({
                      userId: mainconfigTmp.userId,
                      quickLinkId: mainconfigTmp.quickLinkId
                  }, "", "quicklink".concat(mainconfigTmp.quickLinkId))) : isMobilePhone ? ("undefined" !== typeof currentState.page ? mainconfigTmp.phonePageName = currentState.page : mainconfigTmp.phonePageName = window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1), window.history.replaceState(mainconfigTmp.isAuthenticated ? {} : {
                      userId: mainconfigTmp.userId
                  }, "", mainconfigTmp.phonePageName)) : window.history.replaceState({
                      userId: mainconfigTmp.userId
                  }, "", currentState.page)) : -1 !== window.location.pathname.indexOf("/heroaction") ? (isMobilePhone && (mainconfigTmp.phonePageName = "heroaction"), mainconfigTmp.homeHeroAction = 1, window.history.replaceState({}, "", "heroaction")) : isMobilePhone && ("undefined" !== typeof currentState.page ? mainconfigTmp.phonePageName = currentState.page : mainconfigTmp.phonePageName = window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1), window.history.replaceState({}, "", mainconfigTmp.phonePageName))
              }
              if (!1 === mainconfigTmp.isAuthenticated && "" !== getCookie("UserName")) {
                  var username = getCookie("UserName");
                  for (var _i2 in mainconfigTmp.settings.users)
                      if (mainconfigTmp.settings.users[_i2].username === username) {
                          mainconfigTmp.isAuthenticated = !0, mainconfigTmp.userId = _i2;
                          break
                      }
              }
              var queryDict = {};
              if (window.location.search.substr(1).split("&").forEach(e => {
                      queryDict[e.split("=")[0]] = e.split("=")[1]
                  }), queryDict.username || queryDict.pega_userid) {
                  for (var _i3 in mainconfigTmp.settings.users)
                      if ("undefined" !== typeof queryDict.pega_userid && mainconfigTmp.settings.users[_i3].pega_userid === queryDict.pega_userid || "undefined" !== typeof queryDict.username && mainconfigTmp.settings.users[_i3].username === queryDict.username) {
                          mainconfigTmp.isAuthenticated = !0, mainconfigTmp.userId = _i3, mainconfigTmp.isDeepLink = !0;
                          break
                      } if (queryDict.quicklinkclass)
                      for (var _i4 in mainconfigTmp.settings.quicklinks)
                          if (mainconfigTmp.settings.quicklinks[_i4].objclass === queryDict.quicklinkclass) {
                              mainconfigTmp.quickLinkId = _i4, mainconfigTmp.deepLinkExtraParam = queryDict, delete mainconfigTmp.deepLinkExtraParam.quicklinkclass, delete mainconfigTmp.deepLinkExtraParam.username, delete mainconfigTmp.deepLinkExtraParam.pega_userid, isMobilePhone && (mainconfigTmp.phonePageName = "help"), window.history.replaceState({
                                  userId: mainconfigTmp.userId
                              }, "", "quicklink".concat(mainconfigTmp.quickLinkId));
                              break
                          } mainconfigTmp.settings.todo.objclass === queryDict.todoclass && (mainconfigTmp.deepLinkExtraParam = queryDict, delete mainconfigTmp.deepLinkExtraParam.todoclass, delete mainconfigTmp.deepLinkExtraParam.username, delete mainconfigTmp.deepLinkExtraParam.pega_userid, isMobilePhone && (mainconfigTmp.phonePageName = "account"), window.history.replaceState({
                      userId: mainconfigTmp.userId
                  }, "", "account")), queryDict.viewBill && (mainconfigTmp.viewBill = 1, mainconfigTmp.deepLinkExtraParam = queryDict, delete mainconfigTmp.deepLinkExtraParam.viewBill, delete mainconfigTmp.deepLinkExtraParam.username, delete mainconfigTmp.deepLinkExtraParam.pega_userid), queryDict.viewBanner && (mainconfigTmp.viewBanner = 1, mainconfigTmp.deepLinkExtraParam = queryDict, delete mainconfigTmp.deepLinkExtraParam.viewBanner, delete mainconfigTmp.deepLinkExtraParam.username, delete mainconfigTmp.deepLinkExtraParam.pega_userid), queryDict.viewKMHelp && (mainconfigTmp.viewKMHelp = 1, mainconfigTmp.deepLinkExtraParam = queryDict, delete mainconfigTmp.deepLinkExtraParam.viewKMHelp, delete mainconfigTmp.deepLinkExtraParam.username, delete mainconfigTmp.deepLinkExtraParam.pega_userid)
              }
              if (queryDict.homeHeroAction && (mainconfigTmp.homeHeroAction = 1, isMobilePhone && (mainconfigTmp.phonePageName = "heroaction"), mainconfigTmp.isDeepLink = !0, mainconfigTmp.deepLinkExtraParam = queryDict, delete mainconfigTmp.deepLinkExtraParam.homeHeroAction), queryDict.offerAction && (mainconfigTmp.offerAction = 1, isMobilePhone && (mainconfigTmp.phonePageName = "offer"), mainconfigTmp.isDeepLink = !0, mainconfigTmp.deepLinkExtraParam = queryDict, delete mainconfigTmp.deepLinkExtraParam.offerAction), window.PegaCSWSS = {
                      Cobrowse: {
                          ServerURL: mainconfigTmp.settings.pega_chat.CoBrowseServerURL,
                          Token: mainconfigTmp.settings.pega_chat.CoBrowseToken
                      },
                      WCBConfigName: mainconfigTmp.settings.pega_chat.WCBConfigName,
                      WebChatBotID: mainconfigTmp.settings.pega_chat.WebChatBotID,
                      ApplicationName: mainconfigTmp.settings.pega_chat.ApplicationName,
                      MashupURL: mainconfigTmp.settings.pega_chat.MashupURL,
                      ShowAsButton: mainconfigTmp.settings.pega_chat.ShowAsButton,
                      TenantID: mainconfigTmp.settings.pega_chat.TenantID,
                      MarketingHost: mainconfigTmp.settings.pega_marketing.Host,
                      MarketingPort: mainconfigTmp.settings.pega_marketing.Port,
                      EnableProActiveNotification: mainconfigTmp.settings.pega_chat.EnableProActiveNotification,
                      ProActiveNotificationDismissTime: mainconfigTmp.settings.pega_chat.ProActiveNotificationDismissTime,
                      ContactID: "",
                      AccountNumber: "",
                      UserName: "",
                      UserID: "",
                      DMMSessionID: "",
                      ExtraParams: {}
                  }, -1 !== mainconfigTmp.userId) {
                  var u = mainconfigTmp.settings.users[mainconfigTmp.userId];
                  window.PegaCSWSS.ContactID = u.contactID, window.PegaCSWSS.AccountNumber = u.accountID, window.PegaCSWSS.UserName = u.username, window.PegaCSWSS.UserID = u.pega_userid, "undefined" !== typeof u.extraparam && "" !== u.extraparam && u.extraparam.split(",").forEach(e => {
                      var t = e.split("=");
                      2 === t.length && (window.PegaCSWSS.ExtraParams[t[0].trim()] = t[1].trim())
                  }), "string" === typeof u.dmm_context_data && "" !== u.dmm_context_data && (window.PegaChatTags = {}, u.dmm_context_data.split(",").forEach(e => {
                      var t = e.split("=");
                      window.PegaChatTags[t[0].trim()] = t[1].trim()
                  }))
              }
              if (setCookie("ContactID", window.PegaCSWSS.ContactID, 30), setCookie("AccountNumber", window.PegaCSWSS.AccountNumber, 30), setCookie("UserName", window.PegaCSWSS.UserName, 30), setCookie("UserID", window.PegaCSWSS.UserID, 30), "undefined" !== typeof mainconfigTmp.settings.pega_chat && "" !== mainconfigTmp.settings.pega_chat.MashupURL && !0 === mainconfigTmp.settings.pega_chat.UseLegacyWebChat && -1 === "".concat(window.location).indexOf("/settings.html")) {
                  var scriptLoad = document.createElement("script");
                  scriptLoad.onload = function() {
                      var e = document.createElement("script");
                      e.setAttribute("src", "../js/PegaHelper.js"), document.head.appendChild(e);
                      var t = document.createElement("script");
                      t.setAttribute("src", "../js/PegaHelperExtension.js"), document.head.appendChild(t)
                  }, scriptLoad.setAttribute("src", "../js/jquery-min.js"), document.head.appendChild(scriptLoad)
              }
              if ("" !== mainconfigTmp.settings.general.connection.c11nserver && "embedui" === mainconfigTmp.settings.general.connection.type) {
                  var mashupScript = document.createElement("script");
                  mashupScript.setAttribute("src", "".concat(mainconfigTmp.settings.general.connection.c11nserver, "pega-embed.js")), document.head.appendChild(mashupScript)
              }
              if ("undefined" !== typeof mainconfigTmp.settings.pega_chat && "" !== mainconfigTmp.settings.pega_chat.DMMURL && "" !== mainconfigTmp.settings.pega_chat.DMMID && !1 === mainconfigTmp.settings.pega_chat.UseLegacyWebChat && -1 === "".concat(window.location).indexOf("/settings.html")) {
                  "undefined" === typeof window.PegaUnifiedChatWidget && (window.PegaUnifiedChatWidget = {}), window.PegaUnifiedChatWidget.onSessionInitialized = e => {
                      if (window.PegaCSWSS.DMMSessionID = e, console.log("PegaUnifiedChatWidget onSessionInitialized=".concat(e)), "" !== mainconfigTmp.settings.pega_chat.DMMSecret && -1 !== mainconfigTmp.userId) {
                          var t = {
                                  authenticated: -1 !== mainconfigTmp.userId,
                                  ContactID: window.PegaCSWSS.ContactID,
                                  AccountNumber: window.PegaCSWSS.AccountNumber,
                                  UserName: window.PegaCSWSS.UserName,
                                  UserID: window.PegaCSWSS.UserID
                              },
                              a = Object(_JWTToken__WEBPACK_IMPORTED_MODULE_2__["a"])({
                                  iss: e
                              }, mainconfigTmp.settings.pega_chat.DMMSecret),
                              i = new XMLHttpRequest;
                          i.open("POST", mainconfigTmp.settings.pega_chat.DMMPrivateURL, !0), i.setRequestHeader("Content-type", "application/json;charset=UTF-8"), i.setRequestHeader("authorization", "Bearer ".concat(a)), i.send(JSON.stringify(t))
                      }
                  };
                  var _scriptLoad = document.createElement("script");
                  if (_scriptLoad.setAttribute("id", mainconfigTmp.settings.pega_chat.DMMID), _scriptLoad.setAttribute("src", mainconfigTmp.settings.pega_chat.DMMURL), document.head.appendChild(_scriptLoad), window.fireflyAPI = {}, "" !== mainconfigTmp.settings.pega_chat.CoBrowseServerURL && "" !== mainconfigTmp.settings.pega_chat.CoBrowseToken) {
                      var script = document.createElement("script");
                      script.type = "text/javascript", window.fireflyAPI.token = mainconfigTmp.settings.pega_chat.CoBrowseToken, window.fireflyAPI.serverHostUrl = mainconfigTmp.settings.pega_chat.CoBrowseServerURL, script.src = "".concat(mainconfigTmp.settings.pega_chat.CoBrowseServerURL, "/cobrowse/loadScripts"), script.async = !0, document.head.appendChild(script)
                  }
              }
              isMobilePhone && (window.pegaMashupNavigateBack = function() {
                  var e = document.getElementsByClassName("pi-caret-left");
                  e.length > 0 && e[0].click()
              })
          }
          var mainconfig = mainconfigTmp,
              i18n = i18nTmp;
          if (mainconfig.settings.general.theming.override) {
              var inlineTheming = document.createElement("style");
              inlineTheming.innerHTML = ":root { --brandColor: ".concat(mainconfig.settings.general.theming.brandColor, ";\n  --interactiveColor: ").concat(mainconfig.settings.general.theming.interactiveColor, ";}\n  .front>header, .form>header, .offer header { background-blend-mode: luminosity; }"), document.head.appendChild(inlineTheming)
          }
          window.addEventListener("popstate", () => {
              mainconfig.quickLinkId = -1, mainconfig.currentPage = window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1), "heroaction" === mainconfig.currentPage && (mainconfig.homeHeroAction = 1), 0 === mainconfig.currentPage.indexOf("offer") && 0 !== mainconfig.currentPage.indexOf("offer.html") && (mainconfig.offerIndex = parseInt(mainconfig.currentPage.substring(5).replace(".html", ""), 10)), 0 !== mainconfig.currentPage.indexOf("index.html") && 0 !== mainconfig.currentPage.indexOf("account") || (mainconfig.viewBill = -1, mainconfig.viewBanner = -1, mainconfig.homeHeroAction = -1, mainconfig.offerAction = -1, mainconfig.toDo = -1, mainconfig.viewKMHelp = -1, mainconfig.offerURL = ""), 0 === mainconfig.currentPage.indexOf("index.html") && (mainconfig.isAuthenticated = !1), 0 === mainconfig.currentPage.indexOf("account") && (mainconfig.isAuthenticated = !0)
          });
          var updatePegaChat = function(e) {
              var t = document.querySelector("[data-pega-gadgetname='OnlineHelp'] > iframe");
              if (null != t && "string" === typeof t.src) {
                  var a = "".concat(t.src, "&ContactId=").concat(e.contactID, "&AccountNumber=").concat(e.accountID, "&username=").concat(e.username);
                  "undefined" !== typeof e.extraparam && "" !== e.extraparam && e.extraparam.split(",").forEach(e => {
                      var t = e.split("=");
                      2 === t.length && (a += "&".concat(t[0].trim(), "=").concat(t[1].trim()))
                  }), a.indexOf("timestamp") > -1 ? a = a.replace(/timestamp=[^&]+/, "timestamp=".concat(Date.now())) : a += "&timestamp=".concat(Date.now());
                  var i = t.parentNode;
                  t.remove(), t.src = a, i.appendChild(t)
              }
              if (window.PegaCSWSS.ContactID = e.contactID, window.PegaCSWSS.AccountNumber = e.accountID, window.PegaCSWSS.UserName = e.username, window.PegaCSWSS.UserID = e.pega_userid, "string" === typeof e.dmm_context_data && "" !== e.dmm_context_data && (window.PegaChatTags = {}, e.dmm_context_data.split(",").forEach(e => {
                      var t = e.split("=");
                      window.PegaChatTags[t[0].trim()] = t[1].trim()
                  })), setCookie("ContactID", window.PegaCSWSS.ContactID, 30), setCookie("AccountNumber", window.PegaCSWSS.AccountNumber, 30), setCookie("UserName", window.PegaCSWSS.UserName, 30), setCookie("UserID", window.PegaCSWSS.UserID, 30), "" !== mainconfig.settings.pega_chat.DMMSecret && -1 !== mainconfig.userId && "" !== window.PegaCSWSS.DMMSessionID) {
                  var s = {
                          authenticated: -1 !== mainconfig.userId,
                          ContactID: window.PegaCSWSS.ContactID,
                          AccountNumber: window.PegaCSWSS.AccountNumber,
                          UserName: window.PegaCSWSS.UserName,
                          UserID: window.PegaCSWSS.UserID
                      },
                      n = Object(_JWTToken__WEBPACK_IMPORTED_MODULE_2__["a"])({
                          iss: window.PegaCSWSS.DMMSessionID
                      }, mainconfig.settings.pega_chat.DMMSecret),
                      r = new XMLHttpRequest;
                  r.open("POST", mainconfig.settings.pega_chat.DMMPrivateURL, !0), r.setRequestHeader("Content-type", "application/json;charset=UTF-8"), r.setRequestHeader("authorization", "Bearer ".concat(n)), r.send(JSON.stringify(s))
              }
              if ("undefined" !== typeof e.extraparam && "" !== e.extraparam && e.extraparam.split(",").forEach(e => {
                      var t = e.split("=");
                      2 === t.length && (window.PegaCSWSS.ExtraParams[t[0].trim()] = t[1].trim())
                  }), t = document.querySelector("[data-pega-gadgetname='OnlineHelp']"), null != t) {
                  var o = pega.web.mgr._getGadgetByID("OnlineHelp");
                  if (o && o._oDivAttrs)
                      for (var l in window.PegaCSWSS.ExtraParams) o._oDivAttrs.params[l] = window.PegaCSWSS.ExtraParams[l]
              }
              "function" === typeof sendProactiveNotificationReq && sendProactiveNotificationReq()
          }
      },
      4395: function(e, t, a) {
          "use strict";
          a("a22d")
      },
      "553f": function(e, t, a) {
          "use strict";
          a("d13f")
      },
      "56d7": function(e, t, a) {
          "use strict";
          a.r(t);
          var i = a("2b0e"),
              s = a("a584"),
              n = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return 0 === e.currentPage.indexOf("index.html") ? a("DefaultPage") : 0 === e.currentPage.indexOf("offer") ? a("OfferPage") : 0 === e.currentPage.indexOf("settings.html") ? a("SettingsPage") : 0 === e.currentPage.indexOf("landingpage.html") ? a("LandingPage") : 0 === e.currentPage.indexOf("category.html") ? a("CategoryPage") : a("DefaultPage")
              },
              r = [],
              o = a("2919"),
              l = (e, t, a, i, s) => {
                  var n = a.length;
                  e.settings.pega_marketing[t] && e.settings.pega_marketing[t].placement && (n = e.settings.pega_marketing[t].placement.split(",").length, n > a.length && (n = a.length));
                  for (var r = !1, o = 0; o < n; o++) {
                      var l = a[o].ImageURL.trim();
                      if (l.startsWith("http") || (l = l.replace("webwb/", "./img/").replace("web/", "./img/")), "" === l && (l = "img/option-1.jpg"), r || "Hero" !== a[o].Placement || "object" !== typeof e.hero_offer) e.data.push({
                          img: l,
                          placement: a[o].Placement,
                          title: a[o].Label,
                          message: a[o].ShortDescription,
                          link: "learnmore",
                          url: a[o].ClickThroughURL,
                          name: a[o].Name,
                          treatment: a[o].Treatment,
                          rank: a[o].Rank,
                          propensity: a[o].Propensity,
                          priority: a[o].Priority,
                          reason: a[o].Reason,
                          interactionID: a[o].InteractionID,
                          identifier: a[o].Identifier,
                          category: a[o].Category,
                          group: a[o].Group,
                          campaignID: a[o].CampaignID,
                          issue: a[o].Issue,
                          channel: a[o].Channel,
                          subjectID: a[o].SubjectID,
                          contextName: a[o].ContextName,
                          container: i,
                          customerID: s,
                          showAIoverlay: !1
                      });
                      else {
                          r = !0;
                          var c = "homePage" === t ? "" : a[o].ShortDescription;
                          e.settings.pega_marketing.replaceHomePageHeader && (window.mainconfig.homeHeroImg = l, l = ""), e.hero_offer = {
                              img: l,
                              placement: a[o].Placement,
                              title: a[o].Label,
                              message: c,
                              link: e.hero_offer.link,
                              url: a[o].ClickThroughURL,
                              name: a[o].Name,
                              treatment: a[o].Treatment,
                              rank: a[o].Rank,
                              propensity: a[o].Propensity,
                              priority: a[o].Priority,
                              reason: a[o].Reason,
                              interactionID: a[o].InteractionID,
                              identifier: a[o].Identifier,
                              category: a[o].Category,
                              group: a[o].Group,
                              campaignID: a[o].CampaignID,
                              issue: a[o].Issue,
                              channel: a[o].Channel,
                              subjectID: a[o].SubjectID,
                              contextName: a[o].ContextName,
                              container: i,
                              customerID: s,
                              showAIoverlay: !1
                          }
                      }
                  }
              },
              c = function e(t, a, i) {
                  if ("V3" === t.settings.pega_marketing.apiLevel)
                      if ("undefined" !== typeof window.getNBAMServiceControl) {
                          var s = window.getNBAMServiceControl(t.settings.pega_marketing.apiLevel, !1);
                          s.initialize(t.settings.pega_marketing.Host, t.settings.pega_marketing.Port), s.captureResponse(a.container, a.customerID, a.name, a.issue, a.group, a.interactionID, i, a.channel, "Inbound", a.campaignID, a.rank, a.treatment, a.propensity, a.priority, a.contextName, !1, e => {
                              console.log("send capture information for ".concat(a.name, " rank=").concat(a.rank, " outcome=").concat(i, " response:").concat(e.Status))
                          })
                      } else {
                          var n = document.createElement("script");
                          n.onload = function() {
                              e(t, a, i)
                          }, n.setAttribute("src", "../js/realtimecontainerscript.js"), document.head.appendChild(n)
                      }
              },
              d = function e(t, a, i, s, n) {
                  if ("undefined" !== typeof window.getNBAMServiceControl) {
                      var r = window.getNBAMServiceControl(t.settings.pega_marketing.apiLevel, !1);
                      window.CDHRequestTimeout = t.settings.pega_marketing.requestTimeout, r.initialize(t.settings.pega_marketing.Host, t.settings.pega_marketing.Port);
                      var o = "TopOffers";
                      t.settings.pega_marketing[a] && t.settings.pega_marketing[a].containerName && (o = t.settings.pega_marketing[a].containerName);
                      var c = "Tile";
                      t.settings.pega_marketing[a] && t.settings.pega_marketing[a].placement && (c = t.settings.pega_marketing[a].placement);
                      var d = t.intent.trim();
                      try {
                          r.getOffers(i, t.settings.pega_marketing.contextName, o, "", t.settings.pega_marketing.channel, s, n, e => {
                              e.RankedResults = e.ContainerList[0].RankedResults, e.OffersList && e.OffersList.length > 0 ? l(t, a, e.OffersList, o, i) : e.RankedResults && e.RankedResults.length > 0 ? l(t, a, e.RankedResults, o, i) : t.errorloading = !0, t.loading = !1
                          }, d, c, () => {
                              t.loading = !1, t.errorloading = !0
                          })
                      } catch (p) {
                          t.loading = !1, t.errorloading = !0
                      }
                  } else {
                      var g = document.createElement("script");
                      g.onload = function() {
                          e(t, a, i, s, n)
                      }, g.setAttribute("src", "../js/realtimecontainerscript.js"), document.head.appendChild(g)
                  }
              },
              g = function e(t, a) {
                  if ("" !== t.settings.pega_marketing.Host)
                      if ("undefined" !== typeof window.getNBAMServiceControl) {
                          var i = window.getNBAMServiceControl(t.settings.pega_marketing.apiLevel, !1);
                          i.initialize(t.settings.pega_marketing.Host, t.settings.pega_marketing.Port);
                          var s = a.customerID;
                          "" === s && document.cookie.split("MKTID=") > 1 && (s = document.cookie.split("MKTID=")[1].split(";")[0]), i.sendRTSEvent(s, a, null)
                      } else {
                          var n = document.createElement("script");
                          n.onload = function() {
                              e(t, a)
                          }, n.setAttribute("src", "../js/realtimecontainerscript.js"), document.head.appendChild(n)
                      }
              },
              p = function e(t, a, i, s) {
                  if ("" !== t.settings.pega_marketing.Host && t.settings.pega_marketing.enableClickStream)
                      if ("undefined" !== typeof window.getNBAMServiceControl) {
                          var n = window.getNBAMServiceControl(t.settings.pega_marketing.apiLevel, !1);
                          n.initialize(t.settings.pega_marketing.Host, t.settings.pega_marketing.Port);
                          var r = "";
                          s && (r = parseInt((new Date - s) / 1e3, 10));
                          var o = "",
                              l = "";
                          if (-1 !== t.userId && t.settings.users[t.userId].customerID && (l = t.settings.users[t.userId].customerID), "" === l && document.cookie.split("MKTID=") > 1 && (o = document.cookie.split("MKTID=")[1].split(";")[0]), "" === l && "" === o) return;
                          var c = t.isMobilePhone ? "Mobile" : "PC",
                              d = {
                                  CustomerID: l,
                                  interestedIn: "",
                                  interestLevel: "",
                                  Event: a,
                                  PageType: i,
                                  DeviceType: c,
                                  PageViewActiveTime: r,
                                  CookieID: o
                              };
                          n.sendClickStreamEvent(d, null)
                      } else {
                          var g = document.createElement("script");
                          g.onload = function() {
                              e(t, a, s)
                          }, g.setAttribute("src", "../js/realtimecontainerscript.js"), document.head.appendChild(g)
                      }
              },
              u = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return e.isMobilePhone ? a("PhonePage") : e.isAuthenticated ? a("AccountPage") : a("FrontPage")
              },
              m = [],
              f = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("div", {
                      staticClass: "flex flex-col"
                  }, [a("Aside"), a("Header"), a("Main")], 1)
              },
              h = [],
              v = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("aside", {
                      class: [e.isSidePanelVisible ? "show" : ""],
                      on: {
                          click: e.hideSidePanel
                      }
                  }, [a("div", {
                      staticClass: "panel background-brand"
                  }, [a("header", [a("img", {
                      staticClass: "logo",
                      attrs: {
                          src: "./img/u+-logo.svg",
                          alt: "U+"
                      }
                  })]), a("nav", e._l(e.app.menuitems, (function(e) {
                      return a("MenuItem", {
                          key: e.title,
                          attrs: {
                              pagetype: e.pagetype,
                              title: e.title
                          }
                      })
                  })), 1)])])
              },
              _ = [],
              b = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("li", [a("a", {
                      attrs: {
                          href: "" !== e.href ? e.href : ""
                      },
                      on: {
                          click: e.gotoPage
                      }
                  }, [e._v(e._s(e.$t("message." + e.title)))])])
              },
              y = [],
              k = {
                  props: ["title", "href", "pagetype"],
                  data() {
                      return {
                          mainconfig: o["b"],
                          i18n: o["a"]
                      }
                  },
                  methods: {
                      gotoPage(e) {
                          o["b"].currentPage = this.href, this.$gtag && this.$gtag.pageview({
                              page_path: o["b"].currentPage
                          }), 0 === o["b"].currentPage.indexOf("offer") && (o["b"].offerIndex = parseInt(o["b"].currentPage.substring(5).replace(".html", ""), 10)), p(o["b"], "PageView", this.pagetype, window.loadPage), window.loadPage = new Date;
                          var t = o["b"].isAuthenticated ? {
                              userId: o["b"].userId
                          } : {};
                          window.history.pushState(t, "", o["b"].currentPage), window.scrollTo({
                              top: 0,
                              behavior: "smooth"
                          }), e.preventDefault()
                      }
                  }
              },
              w = k,
              C = a("2877"),
              P = Object(C["a"])(w, b, y, !1, null, null, null),
              x = P.exports,
              O = {
                  data() {
                      return o["b"]
                  },
                  methods: {
                      hideSidePanel() {
                          this.isSidePanelVisible = !1
                      }
                  },
                  components: {
                      MenuItem: x
                  }
              },
              I = O,
              A = Object(C["a"])(I, v, _, !1, null, null, null),
              S = A.exports,
              N = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("header", [a("button", {
                      staticClass: "nav-button",
                      on: {
                          click: e.showSidePanel
                      }
                  }, [a("i", {
                      staticClass: "pi pi-bars"
                  })]), a("a", {
                      staticClass: "logo-link"
                  }, [a("img", {
                      staticClass: "logo",
                      attrs: {
                          src: "./img/u+-logo.svg",
                          alt: "U+"
                      },
                      on: {
                          click: e.goToHome
                      }
                  })]), e.isAuthenticated && "" !== e.settings.kmhelp.url ? a("a", {
                      staticClass: "kmhelp",
                      on: {
                          click: e.showKMHelp
                      }
                  }, [e._v(e._s(e.$t("message.kmhelp")))]) : e._e(), e.isAuthenticated ? a("OperatorButton") : "" === e.phonePageName || "index.html" === e.phonePageName ? a("LoginButton") : e._e()], 1)
              },
              $ = [],
              D = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("div", {
                      staticClass: "flex"
                  }, [e.isNamePresent ? a("div", {
                      staticClass: "flex flex-col margin-r-2x"
                  }, [e.settings.users[e.userId] ? a("span", [e._v(e._s(e.settings.users[e.userId].name))]) : e._e(), e.settings.users[e.userId] ? a("span", [e._v(e._s(e.settings.users[e.userId].company_name))]) : e._e()]) : e._e(), -1 != e.userId ? a("img", {
                      staticClass: "avatar",
                      attrs: {
                          src: "../img/" + e.settings.users[e.userId].img,
                          alt: "Customer image"
                      },
                      on: {
                          click: e.showOverlay
                      }
                  }) : e._e(), a("div", {
                      directives: [{
                          name: "clickoutside",
                          rawName: "v-clickoutside",
                          value: {
                              handler: "onClickOutOverlay"
                          },
                          expression: "{ handler: 'onClickOutOverlay' }"
                      }],
                      staticClass: "overlay logout flex flex-col",
                      class: [e.isActive ? "show" : "hidden"]
                  }, [a("button", {
                      staticClass: "simple",
                      on: {
                          click: e.logOut
                      }
                  }, [e._v(" " + e._s(e.$t("message.logout")) + " ")])])])
              },
              M = [],
              T = a("dda7");

          function j(e, t) {
              var a = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                  var i = Object.getOwnPropertySymbols(e);
                  t && (i = i.filter((function(t) {
                      return Object.getOwnPropertyDescriptor(e, t).enumerable
                  }))), a.push.apply(a, i)
              }
              return a
          }

          function L(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var a = null != arguments[t] ? arguments[t] : {};
                  t % 2 ? j(Object(a), !0).forEach((function(t) {
                      E(e, t, a[t])
                  })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : j(Object(a)).forEach((function(t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                  }))
              }
              return e
          }

          function E(e, t, a) {
              return t in e ? Object.defineProperty(e, t, {
                  value: a,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              }) : e[t] = a, e
          }
          var R = {
                  data() {
                      return L(L({}, o["b"]), {}, {
                          isActive: !1
                      })
                  },
                  methods: {
                      showOverlay() {
                          this.isActive = !this.isActive
                      },
                      onClickOutOverlay(e) {
                          e.target.classList.contains("avatar") || (this.isActive = !1)
                      },
                      logOut() {
                          p(o["b"], "PageView", "Home", window.loadPage), window.loadPage = new Date, o["b"].isAuthenticated = !1, o["b"].userId = -1, o["b"].quickLinkId = -1, o["b"].viewBill = -1, o["b"].homeHeroAction = -1, o["b"].offerAction = -1, o["b"].toDo = -1, o["b"].viewKMHelp = -1, o["b"].viewBanner = -1, o["b"].offerURL = "", o["b"].previousPage = "", o["b"].intent = "", o["b"].isDeepLink = !1, o["b"].deepLinkExtraParam = {}, window.history && (o["b"].isMobilePhone ? (o["b"].phonePageName = "", window.history.pushState({
                              userId: o["b"].userId
                          }, "", "index.html")) : (o["b"].currentPage = "index.html", window.history.replaceState({}, "", o["b"].currentPage), window.scrollTo({
                              top: 0,
                              behavior: "smooth"
                          })));
                          var e = function(e) {
                              var t = document.createElement("iframe"),
                                  a = o["b"].logoutURL[e];
                              t.setAttribute("src", a), t.setAttribute("style", "display:none"), t.onload = function() {
                                  document.body.removeChild(t)
                              }, document.body.appendChild(t)
                          };
                          for (var t in o["b"].logoutURL) e(t);
                          if (o["b"].logoutURL = {}, window.PegaCSWSS.ContactID = "", window.PegaCSWSS.AccountNumber = "", window.PegaCSWSS.UserName = "", window.PegaCSWSS.UserID = "", window.PegaCSWSS.ExtraParams = {}, window.PegaChatTags = {}, Object(o["c"])("ContactID", window.PegaCSWSS.ContactID, 30), Object(o["c"])("AccountNumber", window.PegaCSWSS.AccountNumber, 30), Object(o["c"])("UserName", window.PegaCSWSS.UserName, 30), Object(o["c"])("UserID", window.PegaCSWSS.UserID, 30), "" !== o["b"].settings.pega_chat.DMMSecret && -1 !== o["b"].userId && "" !== window.PegaCSWSS.DMMSessionID) {
                              var a = {
                                      authenticated: -1 !== o["b"].userId,
                                      ContactID: window.PegaCSWSS.ContactID,
                                      AccountNumber: window.PegaCSWSS.AccountNumber,
                                      UserName: window.PegaCSWSS.UserName,
                                      UserID: window.PegaCSWSS.UserID
                                  },
                                  i = Object(T["a"])({
                                      iss: window.PegaCSWSS.DMMSessionID
                                  }, o["b"].settings.pega_chat.DMMSecret),
                                  s = new XMLHttpRequest;
                              s.open("POST", o["b"].settings.pega_chat.DMMPrivateURL, !0), s.setRequestHeader("Content-type", "application/json;charset=UTF-8"), s.setRequestHeader("authorization", "Bearer ".concat(i)), s.send(JSON.stringify(a))
                          }
                          var n = document.querySelector("[data-pega-gadgetname='OnlineHelp'] > iframe");
                          if (null != n && "string" === typeof n.src)
                              if (!0 === o["b"].settings.pega_chat.ResetLogout && "function" === typeof window.resetPegaChat) window.resetPegaChat();
                              else {
                                  var r = n.src.split("&"),
                                      l = "";
                                  for (var c in r) r[c].startsWith("ContactId=") || r[c].startsWith("AccountNumber=") || r[c].startsWith("username=") || (l += ("" !== l ? "&" : "") + r[c]);
                                  l.indexOf("timestamp") > -1 ? l = l.replace(/timestamp=[^&]+/, "timestamp=".concat(Date.now())) : l += "&timestamp=".concat(Date.now());
                                  var d = n.parentNode;
                                  n.remove(), n.src = l, d.appendChild(n)
                              }
                      }
                  },
                  computed: {
                      isNamePresent() {
                          return !o["b"].isMobilePhone && -1 !== o["b"].userId && "" !== o["b"].settings.users[o["b"].userId].name && "" !== o["b"].settings.users[o["b"].userId].company_name
                      }
                  }
              },
              B = R,
              U = Object(C["a"])(B, D, M, !1, null, null, null),
              H = U.exports,
              q = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("div", {
                      staticClass: "login"
                  }, [a("button", {
                      staticClass: "launch-login",
                      on: {
                          click: e.showLoginOverlay
                      }
                  }, [e._v(e._s(e.$t("message.login")))]), a("div", {
                      directives: [{
                          name: "clickoutside",
                          rawName: "v-clickoutside",
                          value: {
                              handler: "onClickOutLoginOverlay"
                          },
                          expression: "{ handler: 'onClickOutLoginOverlay'}"
                      }],
                      staticClass: "overlay flex flex-col",
                      class: [e.isActive ? "show" : "hidden"]
                  }, [e.isOTP ? e._e() : a("div", {
                      staticClass: "field flex flex-col username"
                  }, [a("select", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.username,
                          expression: "username"
                      }],
                      attrs: {
                          id: "username",
                          type: "text"
                      },
                      on: {
                          change: function(t) {
                              var a = Array.prototype.filter.call(t.target.options, (function(e) {
                                  return e.selected
                              })).map((function(e) {
                                  var t = "_value" in e ? e._value : e.value;
                                  return t
                              }));
                              e.username = t.target.multiple ? a : a[0]
                          }
                      }
                  }, e._l(e.settings.users, (function(t, i) {
                      return a("option", {
                          key: i
                      }, [e._v(e._s(t.username))])
                  })), 0), a("label", {
                      attrs: {
                          for: "username"
                      }
                  }, [e._v(e._s(e.$t("message.username")))])]), e.isOTP ? e._e() : a("div", {
                      staticClass: "field flex flex-col password"
                  }, [a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.password,
                          expression: "password"
                      }],
                      attrs: {
                          id: "password",
                          type: "password"
                      },
                      domProps: {
                          value: e.password
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || (e.password = t.target.value)
                          }
                      }
                  }), a("label", {
                      attrs: {
                          for: "password"
                      }
                  }, [e._v(e._s(e.$t("message.password")))])]), e.isOTP ? a("div", {
                      staticClass: "field flex flex-col"
                  }, [a("label", {
                      attrs: {
                          for: "otp"
                      }
                  }, [e._v(e._s(e.$t("message.otp")))]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.otp,
                          expression: "otp"
                      }],
                      attrs: {
                          id: "otp",
                          type: "text",
                          name: "otp"
                      },
                      domProps: {
                          value: e.otp
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || (e.otp = t.target.value)
                          }
                      }
                  })]) : e._e(), e.isOTP ? a("button", {
                      staticClass: "sign-in",
                      on: {
                          click: e.signInOtp
                      }
                  }, [e._v(e._s(e.$t("message.signin")))]) : a("button", {
                      staticClass: "sign-in",
                      on: {
                          click: e.signIn
                      }
                  }, [e._v(e._s(e.$t("message.signin")))]), e.hasErrorMsg ? a("span", {
                      staticClass: "error"
                  }, [e._v(e._s(e.$t("message.invalidLogin")))]) : e._e(), e.isOTPInvalid ? a("span", {
                      staticClass: "error"
                  }, [e._v(e._s(e.$t("message.invalidOTP")))]) : e._e(), e.OTPRequestFailed ? a("span", {
                      staticClass: "error"
                  }, [e._v(e._s(e.$t("message.requestOTPFailed")))]) : e._e()])])
              },
              W = [];

          function F(e, t, a, i, s, n, r) {
              try {
                  var o = e[n](r),
                      l = o.value
              } catch (c) {
                  return void a(c)
              }
              o.done ? t(l) : Promise.resolve(l).then(i, s)
          }

          function K(e) {
              return function() {
                  var t = this,
                      a = arguments;
                  return new Promise((function(i, s) {
                      var n = e.apply(t, a);

                      function r(e) {
                          F(n, i, s, r, o, "next", e)
                      }

                      function o(e) {
                          F(n, i, s, r, o, "throw", e)
                      }
                      r(void 0)
                  }))
              }
          }
          var V = function(e, t) {
                  var a = "";
                  if (!e || !t) throw new Error("Set authentication failed.");
                  return a = btoa("".concat(e, ":").concat(t)), a
              },
              z = function() {
                  var e = K((function*(e, t, a, i) {
                      if ("skip" === a) return !0;
                      var s = {
                              "Content-Type": "application/json;charset=UTF-8",
                              Authorization: "Basic ".concat(i)
                          },
                          n = "".concat(e.url, "/prweb/api/v1/authenticate/OTP/verify?OTPValue=").concat(a, "&ReferenceID=").concat(t),
                          r = {
                              method: "GET",
                              headers: s,
                              mode: "cors"
                          };
                      try {
                          var o = yield fetch(n, r);
                          if (o.ok) {
                              var l = yield o.json();
                              if ("SUCCESS" === l.Status) return !0
                          }
                      } catch (c) {
                          console.error("Error in validateOTP")
                      }
                      return !1
                  }));

                  function t(t, a, i, s) {
                      return e.apply(this, arguments)
                  }
                  return t
              }(),
              J = function() {
                  var e = K((function*(e, t, a) {
                      var i = {
                              referenceID: "",
                              isSuccess: !1
                          },
                          s = Math.floor(Date.now() / 100),
                          n = {
                              "Content-Type": "application/json;charset=UTF-8",
                              Authorization: "Basic ".concat(t)
                          },
                          r = e.sendMode,
                          o = "".concat(e.url, "/prweb/api/v1/authenticate/OTP/").concat(r),
                          l = {
                              method: "POST",
                              headers: n,
                              mode: "cors"
                          },
                          c = {
                              Context: "UplusWSSOtp-".concat(s)
                          };
                      "email" === r ? c.EmailSettings = {
                          CorrespondenceName: e.emailSettings.correspondenceName,
                          EmailAccount: e.emailSettings.emailAccount,
                          Subject: e.emailSettings.subject,
                          ToAddress: a,
                          ValidateMaxAge: e.emailSettings.validateMaxAge
                      } : "sms" === r && (c.SMSSettings = {
                          ToPhoneNumber: a,
                          From: e.smsSettings.from,
                          SMSAccount: e.smsSettings.account,
                          Message: e.smsSettings.message,
                          ValidateMaxAge: e.smsSettings.validateMaxAge
                      }), l.body = JSON.stringify(c);
                      try {
                          var d = yield fetch(o, l);
                          if (d.ok) {
                              var g = yield d.json();
                              "SUCCESS" === g.Status && (i.referenceID = g.ReferenceID, i.isSuccess = !0)
                          }
                      } catch (p) {
                          console.error("Error in requestOTP")
                      }
                      return i
                  }));

                  function t(t, a, i) {
                      return e.apply(this, arguments)
                  }
                  return t
              }();

          function G(e, t, a, i, s, n, r) {
              try {
                  var o = e[n](r),
                      l = o.value
              } catch (c) {
                  return void a(c)
              }
              o.done ? t(l) : Promise.resolve(l).then(i, s)
          }

          function Q(e) {
              return function() {
                  var t = this,
                      a = arguments;
                  return new Promise((function(i, s) {
                      var n = e.apply(t, a);

                      function r(e) {
                          G(n, i, s, r, o, "next", e)
                      }

                      function o(e) {
                          G(n, i, s, r, o, "throw", e)
                      }
                      r(void 0)
                  }))
              }
          }

          function X(e, t) {
              var a = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                  var i = Object.getOwnPropertySymbols(e);
                  t && (i = i.filter((function(t) {
                      return Object.getOwnPropertyDescriptor(e, t).enumerable
                  }))), a.push.apply(a, i)
              }
              return a
          }

          function Y(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var a = null != arguments[t] ? arguments[t] : {};
                  t % 2 ? X(Object(a), !0).forEach((function(t) {
                      Z(e, t, a[t])
                  })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : X(Object(a)).forEach((function(t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                  }))
              }
              return e
          }

          function Z(e, t, a) {
              return t in e ? Object.defineProperty(e, t, {
                  value: a,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              }) : e[t] = a, e
          }
          var ee = {
                  data() {
                      return Y(Y({}, o["b"]), {}, {
                          isActive: !1,
                          hasErrorMsg: !1,
                          username: "",
                          password: "",
                          otp_enabled: o["b"].settings.general.auth_2fa.enabled,
                          isOTPInvalid: !1,
                          OTPRequestFailed: !1,
                          isOTP: !1,
                          userID: -1,
                          otp: "",
                          otpRefId: ""
                      })
                  },
                  methods: {
                      showLoginOverlay() {
                          for (var e in this.isActive = !this.isActive, this.isOTP = !1, this.userID = -1, this.hasErrorMsg = !1, this.isOTPInvalid = !1, this.OTPRequestFailed = !1, this.otp = "", this.otpRefId = "", this.settings.users)
                              if (this.settings.users[e].load_by_default) {
                                  this.username = this.settings.users[e].username, this.password = this.settings.users[e].password;
                                  break
                              }
                      },
                      onClickOutLoginOverlay(e) {
                          e.target.classList.contains("launch-login") || e.target.classList.contains("launch-login-overlay") || (this.isActive = !1)
                      },
                      confirmLogin() {
                          o["b"].isAuthenticated = !0, o["b"].userId = this.userID, Object(o["d"])(this.settings.users[this.userID]), window.history && (o["b"].isMobilePhone ? window.history.pushState({
                              userId: o["b"].userId
                          }, "", "" === o["b"].phonePageName ? "index.html" : o["b"].phonePageName) : (o["b"].currentPage = "account", window.history.pushState({
                              userId: o["b"].userId
                          }, "", "account"))), p(o["b"], "PageView", "Account", window.loadPage), window.loadPage = new Date, this.isActive = !1
                      },
                      signIn() {
                          for (var e in o["b"].userId = -1, this.userID = -1, this.settings.users)
                              if (this.settings.users[e].username === this.username && this.settings.users[e].password === this.password) {
                                  this.userID = e;
                                  break
                              } if (-1 !== this.userID) return this.otp_enabled ? (this.isOTP = !0, void this.sendOTPRequest(this.settings.users[this.userID].otp_send_to)) : void this.confirmLogin();
                          this.hasErrorMsg = !0
                      },
                      sendOTPRequest(e) {
                          var t = this;
                          return Q((function*() {
                              var a = V(t.settings.users[t.userID].pega_userid, t.settings.users[t.userID].pega_pwd);
                              yield J(t.settings.general.auth_2fa, a, e).then(e => {
                                  e.isSuccess ? (t.isOTP = !0, t.otpRefId = e.referenceID, t.OTPRequestFailed = !1) : t.OTPRequestFailed = !0
                              })
                          }))()
                      },
                      signInOtp() {
                          var e = this;
                          return Q((function*() {
                              var t = V(e.settings.users[e.userID].pega_userid, e.settings.users[e.userID].pega_pwd);
                              yield z(e.settings.general.auth_2fa, e.otpRefId, e.otp, t).then(t => {
                                  t ? e.confirmLogin() : e.isOTPInvalid = !0
                              })
                          }))()
                      }
                  }
              },
              te = ee,
              ae = Object(C["a"])(te, q, W, !1, null, null, null),
              ie = ae.exports,
              se = {
                  data() {
                      return o["b"]
                  },
                  mounted() {
                      window.addEventListener("message", this.iFrameMessageListener)
                  },
                  destroyed() {
                      window.removeEventListener("message", this.iFrameMessageListener)
                  },
                  methods: {
                      iFrameMessageListener(e) {
                          if ("pegaMashupNavigateBack" === e.data) "" !== o["b"].offerURL ? o["b"].offerURL = "" : -1 !== o["b"].quickLinkId ? o["b"].quickLinkId = -1 : -1 !== o["b"].viewKMHelp ? o["b"].viewKMHelp = -1 : -1 !== o["b"].viewBill ? o["b"].viewBill = -1 : -1 !== o["b"].viewBanner && (o["b"].viewBanner = -1), o["b"].phonePageName = "";
                          else if ("object" === typeof e.data && "undefined" !== typeof e.data.key) "Intent" === e.data.key && "string" === typeof e.data.value ? (o["b"].intent = e.data.value, o["b"].reloadOffer += 1) : "PreviousPage" === e.data.key && "string" === typeof e.data.value && (o["b"].previousPage = e.data.value, o["b"].reloadOffer += 1);
                          else if (e.data) {
                              var t = {};
                              try {
                                  t = JSON.parse(e.data)
                              } catch (n) {
                                  t = {}
                              }
                              if ("PWMashup" === t.channelName && t.message && t.message.payload && "confirm" === t.message.payload.name && -1 === t.message.uid.indexOf("ProactiveChat") && -1 !== o["b"].quickLinkId) {
                                  var a = o["b"].settings.quicklinks[o["b"].quickLinkId].url,
                                      i = document.createElement("iframe"),
                                      s = "".concat(a, "?pyActivity=LogOff");
                                  i.setAttribute("src", s), i.setAttribute("style", "display:none"), i.onload = function() {
                                      document.body.removeChild(i)
                                  }, document.body.appendChild(i)
                              }
                          }
                      },
                      showSidePanel() {
                          o["b"].isSidePanelVisible = !0
                      },
                      goToHome() {
                          o["b"].homeHeroAction = -1, o["b"].phonePageName = "", o["b"].quickLinkId = -1, o["b"].viewKMHelp = -1, o["b"].viewBill = -1, o["b"].viewBanner = -1, o["b"].offerAction = -1, o["b"].offerURL = "", o["b"].isAuthenticated ? window.history.pushState({
                              userId: o["b"].userId
                          }, "", "" === o["b"].phonePageName ? "index.html" : o["b"].phonePageName) : window.history.pushState({}, "", "" === o["b"].phonePageName ? "index.html" : o["b"].phonePageName), window.scrollTo({
                              top: 0,
                              behavior: "smooth"
                          })
                      },
                      showKMHelp() {
                          o["b"].viewKMHelp = 1, o["b"].logoutURL.kmhelp = "".concat(o["b"].settings.kmhelp.url, "?pyActivity=LogOff"), o["b"].reloadMashup += 1
                      }
                  },
                  components: {
                      OperatorButton: H,
                      LoginButton: ie
                  }
              },
              ne = se,
              re = Object(C["a"])(ne, N, $, !1, null, null, null),
              oe = re.exports,
              le = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return "heroaction" === e.phonePageName || -1 !== e.quickLinkId || -1 !== e.viewKMHelp || -1 !== e.offerAction || -1 !== e.viewBill || -1 !== e.viewBanner ? a("Mashup") : "" === e.phonePageName || "index.html" === e.phonePageName ? a("HomePage", {
                      key: e.isAuthenticated
                  }) : -1 !== e.phonePageName.indexOf("offer") ? a("OfferPage") : e.isAuthenticated ? "intro" === e.phonePageName ? a("IntroQuickLinks") : "help" === e.phonePageName ? a("QuickLinks") : "account" === e.phonePageName ? a("Account") : a("HomePage") : a("LoginPage")
              },
              ce = [],
              de = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("main", {
                      staticClass: "home flex flex-col"
                  }, [a("div", {
                      staticClass: "hero background-brand"
                  }, [a("h1", [e._v(e._s(e.$t("message." + e.app.phone.home_page.title)))])]), a("div", {
                      staticClass: "main-actions primary-card"
                  }, e._l(e.app.phone.home_page.actions, (function(t, i) {
                      return a("button", {
                          key: i,
                          staticClass: "simple",
                          on: {
                              click: function(a) {
                                  return e.showPage(t.page)
                              }
                          }
                      }, [a("i", {
                          class: "pi color-brand " + t.icon
                      }), e._v(" " + e._s(e.$t("message." + t.title)) + " ")])
                  })), 0), a("Offer", {
                      key: e.reloadOffer
                  }), a("MainFooter")], 1)
              },
              ge = [],
              pe = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return "" === e.settings.pega_marketing.Host || "" === e.settings.pega_marketing.phonePage.placement || "" === e.settings.pega_marketing.phonePage.containerName || e.loading && !e.settings.pega_marketing.showLoadingIndicator || e.errorloading ? a("div", {
                      staticClass: "flex home-promo secondary-card"
                  }, [a("div", {
                      staticClass: "image",
                      style: {
                          backgroundImage: "url(./img/" + e.app.phone.home_page.promo.image + ")"
                      }
                  }), a("div", {
                      staticClass: "details"
                  }, [a("p", [e._v(e._s(e.$t("message.phone_home_page_promo_message")))]), a("a", {
                      on: {
                          click: e.showOfferPage
                      }
                  }, [e._v(e._s(e.$t("message.phone_home_page_promo_action")))])])]) : "" !== e.settings.pega_marketing.Host && e.loading && e.settings.pega_marketing.showLoadingIndicator ? a("div", {
                      staticClass: "flex home-promo secondary-card loading-container",
                      staticStyle: {
                          "min-height": "300px"
                      }
                  }, [e._m(0)]) : a("div", {
                      staticClass: "width-100-pct"
                  }, e._l(e.data, (function(t, i) {
                      return a("div", {
                          key: t.title,
                          staticClass: "flex home-promo secondary-card"
                      }, [a("div", {
                          staticClass: "offer-container",
                          attrs: {
                              "data-offer-index": i
                          }
                      }, [a("div", {
                          staticClass: "image",
                          style: {
                              backgroundImage: "url(" + t.img + ")"
                          }
                      }), a("div", {
                          staticClass: "details"
                      }, [a("h4", [e._v(e._s(t.title))]), a("p", [e._v(e._s(t.message))]), "TopURL" === e.settings.pega_marketing.phonePage.clickaction && "" !== t.url ? a("a", {
                          attrs: {
                              href: t.url,
                              title: e.$t("message." + t.link)
                          }
                      }, [e._v(e._s(e.$t("message." + t.link)))]) : "Popup" === e.settings.pega_marketing.phonePage.clickaction && "" !== t.url ? a("a", {
                          attrs: {
                              href: t.url,
                              target: "_blank",
                              title: e.$t("message." + t.link)
                          }
                      }, [e._v(e._s(e.$t("message." + t.link)))]) : a("button", {
                          staticClass: "simple",
                          attrs: {
                              title: e.$t("message." + t.link)
                          },
                          on: {
                              click: function(a) {
                                  return e.showOffer(t)
                              }
                          }
                      }, [e._v(e._s(e.$t("message." + t.link)))])])])])
                  })), 0)
              },
              ue = [function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("span", {
                      staticClass: "loading"
                  }, [a("span", {
                      staticClass: "dot"
                  }), a("span", {
                      staticClass: "dot"
                  }), a("span", {
                      staticClass: "dot"
                  })])
              }];

          function me(e, t) {
              var a = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                  var i = Object.getOwnPropertySymbols(e);
                  t && (i = i.filter((function(t) {
                      return Object.getOwnPropertyDescriptor(e, t).enumerable
                  }))), a.push.apply(a, i)
              }
              return a
          }

          function fe(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var a = null != arguments[t] ? arguments[t] : {};
                  t % 2 ? me(Object(a), !0).forEach((function(t) {
                      he(e, t, a[t])
                  })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : me(Object(a)).forEach((function(t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                  }))
              }
              return e
          }

          function he(e, t, a) {
              return t in e ? Object.defineProperty(e, t, {
                  value: a,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              }) : e[t] = a, e
          }
          var ve = {
                  data() {
                      return fe(fe({}, o["b"]), {}, {
                          errorloading: !1,
                          loading: !0,
                          data: []
                      })
                  },
                  methods: {
                      showOfferPage() {
                          o["b"].phonePageName = "offer";
                          var e = o["b"].isAuthenticated ? {
                              userId: o["b"].userId
                          } : {};
                          window.history.pushState(e, "", "offer.html"), o["b"].offerIndex = 0, window.scrollTo({
                              top: 0,
                              behavior: "smooth"
                          })
                      },
                      showOffer(e) {
                          o["b"].phonePageName = "offer", o["b"].offerURL = e.url, o["b"].previousPage = e.name, !0 === o["b"].settings.pega_marketing.useCaptureByChannel && c(this, e, "Clicked")
                      }
                  },
                  mounted() {
                      if ("" !== this.settings.pega_marketing.Host && "" !== this.settings.pega_marketing.phonePage.placement && "" !== this.settings.pega_marketing.phonePage.containerName) {
                          var e = this,
                              t = ""; - 1 !== this.userId && this.settings.users[this.userId].customerID && (t = this.settings.users[this.userId].customerID), setTimeout(() => {
                              d(e, "phonePage", t, this.previousPage, "index.html")
                          }, 200)
                      }
                  },
                  updated() {
                      if (window.IntersectionObserver && !0 === o["b"].settings.pega_marketing.useCaptureByChannel) {
                          var e = new IntersectionObserver(t => {
                              t.forEach(t => {
                                  if (t.isIntersecting) {
                                      var a = t.target.getAttribute("data-offer-index");
                                      c(this, this.data[a], "Impression"), e.unobserve(t.target)
                                  }
                              })
                          }, {
                              threshold: 1
                          });
                          document.querySelectorAll(".offer-container").forEach(t => {
                              e.observe(t)
                          })
                      }
                  }
              },
              _e = ve,
              be = Object(C["a"])(_e, pe, ue, !1, null, null, null),
              ye = be.exports,
              ke = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("footer", {
                      class: e.isMobilePhone ? "background-brand" : ""
                  }, [a("div", {
                      staticClass: "wrap flex"
                  }, [a("nav", [a("div", {
                      staticClass: "flex"
                  }, [a("a", [e._v(e._s(e.$t("message.aboutus")))]), e.isMobilePhone ? e._e() : a("a", [e._v(e._s(e.$t("message.reviews")))]), e.isMobilePhone ? e._e() : a("a", [e._v(e._s(e.$t("message.privacy")))]), a("a", {
                      attrs: {
                          href: "./settings.html"
                      },
                      on: {
                          click: e.gotoSettingsPage
                      }
                  }, [e._v(" " + e._s(e.$t("message.settings")) + " ")])])]), e.settings.i18n.showLangSwitch ? a("LangSwitch") : e._e(), a("p", {
                      staticClass: "flex-align-r copyright"
                  }, [e._v(e._s("© " + (new Date).getFullYear() + " " + e.$t("message.copyright")))])], 1)])
              },
              we = [],
              Ce = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("button", {
                      staticClass: "simple",
                      attrs: {
                          title: e.$t("message.change_language")
                      },
                      on: {
                          click: e.changeLanguage
                      }
                  }, [e._v(e._s(e.$t("message.lang_" + e.currentLocale)))])
              },
              Pe = [];

          function xe(e, t) {
              var a = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                  var i = Object.getOwnPropertySymbols(e);
                  t && (i = i.filter((function(t) {
                      return Object.getOwnPropertyDescriptor(e, t).enumerable
                  }))), a.push.apply(a, i)
              }
              return a
          }

          function Oe(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var a = null != arguments[t] ? arguments[t] : {};
                  t % 2 ? xe(Object(a), !0).forEach((function(t) {
                      Ie(e, t, a[t])
                  })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : xe(Object(a)).forEach((function(t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                  }))
              }
              return e
          }

          function Ie(e, t, a) {
              return t in e ? Object.defineProperty(e, t, {
                  value: a,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              }) : e[t] = a, e
          }
          var Ae = {
                  data() {
                      return Oe(Oe({}, o["b"]), {}, {
                          currentLocale: o["a"].locale
                      })
                  },
                  methods: {
                      changeLanguage() {
                          for (var e = this.settings.i18n.languages.length - 1, t = 0; t <= e; t++)
                              if (o["a"].locale === this.settings.i18n.languages[t]) {
                                  this.currentLocale = t === e ? this.settings.i18n.languages[0] : this.settings.i18n.languages[t + 1], o["a"].locale = this.currentLocale, o["b"].currentLocale = this.currentLocale;
                                  break
                              }
                      }
                  }
              },
              Se = Ae,
              Ne = Object(C["a"])(Se, Ce, Pe, !1, null, null, null),
              $e = Ne.exports,
              De = {
                  data() {
                      return o["b"]
                  },
                  components: {
                      LangSwitch: $e
                  },
                  methods: {
                      gotoSettingsPage(e) {
                          p(o["b"], "PageView", "Settings", window.loadPage), window.loadPage = new Date, o["b"].currentPage = "settings.html", this.$gtag && this.$gtag.pageview({
                              page_path: o["b"].currentPage
                          }), window.history.pushState({}, "", "settings.html"), window.scrollTo({
                              top: 0,
                              behavior: "smooth"
                          }), e.preventDefault()
                      }
                  }
              },
              Me = De,
              Te = Object(C["a"])(Me, ke, we, !1, null, null, null),
              je = Te.exports,
              Le = {
                  data() {
                      return o["b"]
                  },
                  methods: {
                      showPage(e) {
                          o["b"].phonePageName = e, "heroaction" === e && (o["b"].homeHeroAction = 1), o["b"].isAuthenticated ? window.history.pushState({
                              userId: o["b"].userId
                          }, "", "" === o["b"].phonePageName ? "index.html" : o["b"].phonePageName) : window.history.pushState({}, "", "" === o["b"].phonePageName ? "index.html" : o["b"].phonePageName), window.scrollTo({
                              top: 0,
                              behavior: "smooth"
                          })
                      }
                  },
                  components: {
                      Offer: ye,
                      MainFooter: je
                  }
              },
              Ee = Le,
              Re = Object(C["a"])(Ee, de, ge, !1, null, null, null),
              Be = Re.exports,
              Ue = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("main", {
                      staticClass: "home flex flex-col full-height"
                  }, ["" !== e.offerURL ? a("iframe", {
                      staticStyle: {
                          overflow: "hidden"
                      },
                      attrs: {
                          src: e.offerURL,
                          width: "100%",
                          height: "100%",
                          border: "0",
                          frameborder: "0"
                      }
                  }) : a("MainOffer", {
                      attrs: {
                          offerType: e.offerIndex
                      }
                  })], 1)
              },
              He = [],
              qe = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return "" === e.settings.pega_marketing.Host || "" === e.settings.pega_marketing.offerPage.placement || "" === e.settings.pega_marketing.offerPage.containerName || e.loading && !e.settings.pega_marketing.showLoadingIndicator || e.errorloading ? a("div", [a("div", {
                      staticClass: "main-offer primary-card flex flex-nowrap"
                  }, [a("div", {
                      staticClass: "image",
                      style: {
                          backgroundImage: "url(./img/" + e.app.offer[e.offerType].main_offer.image + ")"
                      }
                  }), a("div", {
                      staticClass: "details"
                  }, [a("h3", {
                      staticClass: "color-brand"
                  }, [e._v(e._s(e.$t("message." + e.app.offer[e.offerType].main_offer.title)))]), a("p", [e._v(e._s(e.$t("message." + e.app.offer[e.offerType].main_offer.message)))]), a("button", {
                      staticClass: "strong",
                      on: {
                          click: e.applyOfferAction
                      }
                  }, [e._v(e._s(e.$t("message." + e.app.offer[e.offerType].main_offer.button_label)))])])]), a("div", {
                      staticClass: "offer-cards promo"
                  }, [a("h4", [e._v(e._s(e.$t("message." + e.app.offer[e.offerType].cards.title)))]), a("div", {
                      staticClass: "flex"
                  }, e._l(e.app.offer[e.offerType].cards.data, (function(t, i) {
                      return a("div", {
                          key: i,
                          staticClass: "flex flex-col primary-card"
                      }, [a("h3", [e._v(e._s(e.$t("message." + t.title)))]), a("p", {
                          staticClass: "flex-grow-1"
                      }, [e._v(e._s(e.$t("message." + t.message)))]), a("span", {
                          staticClass: "highlight border-brand color-brand"
                      }, [e._v(e._s(e.$t("message." + t.highlight)))])])
                  })), 0)])]) : "" !== e.settings.pega_marketing.Host && e.loading && e.settings.pega_marketing.showLoadingIndicator ? a("div", [a("div", {
                      staticStyle: {
                          height: "100px"
                      }
                  }), e._m(0)]) : a("div", ["" !== e.hero_offer.url && "" !== e.hero_offer.img ? a("div", {
                      staticClass: "main-offer primary-card flex flex-nowrap"
                  }, [a("div", {
                      staticClass: "image",
                      style: {
                          backgroundImage: "url(" + e.hero_offer.img + ")"
                      }
                  }), a("div", {
                      staticClass: "details"
                  }, [a("h3", {
                      staticClass: "color-brand"
                  }, [e._v(e._s(e.hero_offer.title))]), a("p", [e._v(e._s(e.hero_offer.message))]), a("button", {
                      staticClass: "strong",
                      on: {
                          click: e.applyOfferAction
                      }
                  }, [e._v(e._s(e.hero_offer.link))])])]) : a("div", {
                      staticStyle: {
                          height: "100px"
                      }
                  }), a("div", {
                      staticClass: "offer-cards promo"
                  }, [a("h4", [e._v(e._s(e.$t("message." + e.app.offer[e.offerType].cards.title)))]), a("div", {
                      staticClass: "flex"
                  }, e._l(e.data, (function(t, i) {
                      return a("div", {
                          key: i,
                          staticClass: "flex flex-col primary-card"
                      }, [a("div", {
                          staticClass: "offer-container",
                          attrs: {
                              "data-offer-index": i
                          }
                      }, [a("h3", [e._v(e._s(t.title))]), a("p", {
                          staticClass: "flex-grow-1"
                      }, [e._v(e._s(t.message))]), "" != t.img ? a("div", {
                          staticClass: "image",
                          style: {
                              backgroundImage: "url(" + t.img + ")"
                          }
                      }) : e._e(), a("span", {
                          staticClass: "highlight border-brand"
                      }, ["TopURL" === e.settings.pega_marketing.offerPage.clickaction && "" != t.url ? a("a", {
                          attrs: {
                              href: t.url,
                              title: e.$t("message." + t.link)
                          }
                      }, [e._v(e._s(e.$t("message." + t.link)))]) : "Popup" === e.settings.pega_marketing.offerPage.clickaction && "" != t.url ? a("a", {
                          attrs: {
                              href: t.url,
                              target: "_blank",
                              title: e.$t("message." + t.link)
                          }
                      }, [e._v(e._s(e.$t("message." + t.link)))]) : a("button", {
                          staticClass: "simple",
                          attrs: {
                              title: e.$t("message." + t.link)
                          },
                          on: {
                              click: function(a) {
                                  return e.showOffer(t)
                              }
                          }
                      }, [e._v(e._s(e.$t("message." + t.link)))])])])])
                  })), 0)])])
              },
              We = [function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("div", {
                      staticClass: "offer-cards promo loading-container",
                      staticStyle: {
                          "min-height": "300px"
                      }
                  }, [a("span", {
                      staticClass: "loading"
                  }, [a("span", {
                      staticClass: "dot"
                  }), a("span", {
                      staticClass: "dot"
                  }), a("span", {
                      staticClass: "dot"
                  })])])
              }];

          function Fe(e, t) {
              var a = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                  var i = Object.getOwnPropertySymbols(e);
                  t && (i = i.filter((function(t) {
                      return Object.getOwnPropertyDescriptor(e, t).enumerable
                  }))), a.push.apply(a, i)
              }
              return a
          }

          function Ke(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var a = null != arguments[t] ? arguments[t] : {};
                  t % 2 ? Fe(Object(a), !0).forEach((function(t) {
                      Ve(e, t, a[t])
                  })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : Fe(Object(a)).forEach((function(t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                  }))
              }
              return e
          }

          function Ve(e, t, a) {
              return t in e ? Object.defineProperty(e, t, {
                  value: a,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              }) : e[t] = a, e
          }
          var ze = {
                  props: ["offerType"],
                  data() {
                      return Ke(Ke({}, o["b"]), {}, {
                          errorloading: !1,
                          loading: !0,
                          data: [],
                          hero_offer: {
                              url: ""
                          }
                      })
                  },
                  mounted() {
                      if ("" !== this.settings.pega_marketing.Host && "" !== this.settings.pega_marketing.offerPage.placement && "" !== this.settings.pega_marketing.offerPage.containerName) {
                          var e = this,
                              t = ""; - 1 !== this.userId && this.settings.users[this.userId].customerID && (t = this.settings.users[this.userId].customerID), setTimeout(() => {
                              d(e, "offerPage".concat(this.offerIndex > 0 ? this.offerIndex : ""), t, this.previousPage, this.currentPage)
                          }, 200)
                      }
                  },
                  updated() {
                      if (window.IntersectionObserver && !0 === o["b"].settings.pega_marketing.useCaptureByChannel) {
                          var e = new IntersectionObserver(t => {
                              t.forEach(t => {
                                  if (t.isIntersecting) {
                                      var a = t.target.getAttribute("data-offer-index");
                                      c(this, this.data[a], "Impression"), e.unobserve(t.target)
                                  }
                              })
                          }, {
                              threshold: 1
                          });
                          document.querySelectorAll(".offer-container").forEach(t => {
                              e.observe(t)
                          })
                      }
                  },
                  methods: {
                      showOffer(e) {
                          o["b"].isMobilePhone && (o["b"].phonePageName = "offer"), o["b"].offerURL = e.url, o["b"].previousPage = e.name, !0 === o["b"].settings.pega_marketing.useCaptureByChannel && c(this, e, "Clicked")
                      },
                      applyOfferAction() {
                          "" === this.hero_offer.url ? o["b"].offerAction = 1 : (o["b"].isMobilePhone && (o["b"].phonePageName = "offer"), o["b"].offerURL = this.hero_offer.url, o["b"].previousPage = this.hero_offer.name)
                      }
                  }
              },
              Je = ze,
              Ge = Object(C["a"])(Je, qe, We, !1, null, null, null),
              Qe = Ge.exports,
              Xe = {
                  data() {
                      return o["b"]
                  },
                  components: {
                      MainOffer: Qe
                  }
              },
              Ye = Xe,
              Ze = Object(C["a"])(Ye, Ue, He, !1, null, null, null),
              et = Ze.exports,
              tt = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("main", {
                      staticClass: "flex flex-col"
                  }, [a("TopNav", {
                      attrs: {
                          previousPhonePage: ""
                      }
                  }, [e.isOTP ? e._e() : a("button", {
                      staticClass: "sign-in",
                      on: {
                          click: e.signIn
                      }
                  }, [e._v(e._s(e.$t("message.signin")))])]), a("div", {
                      staticClass: "layout-stacked primary-card"
                  }, [a("h1", {
                      staticClass: "small"
                  }, [e._v(e._s(e.$t("message.phone_login_title")))]), e.isOTP ? e._e() : a("div", {
                      staticClass: "field-item"
                  }, [a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.username,
                          expression: "username"
                      }],
                      attrs: {
                          id: "username",
                          type: "text",
                          placeholder: e.$t("message.username")
                      },
                      domProps: {
                          value: e.username
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || (e.username = t.target.value)
                          }
                      }
                  }), a("label", {
                      attrs: {
                          for: "username"
                      }
                  }, [e._v(e._s(e.$t("message.username")))])]), e.isOTP ? e._e() : a("div", {
                      staticClass: "field-item"
                  }, [a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.password,
                          expression: "password"
                      }],
                      attrs: {
                          id: "password",
                          type: "password",
                          placeholder: e.$t("message.password")
                      },
                      domProps: {
                          value: e.password
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || (e.password = t.target.value)
                          }
                      }
                  }), a("label", {
                      attrs: {
                          for: "password"
                      }
                  }, [e._v(e._s(e.$t("message.password")))])]), e.isOTP ? a("div", {
                      staticClass: "flex flex-col"
                  }, [a("label", {
                      attrs: {
                          for: "otp"
                      }
                  }, [e._v(e._s(e.$t("message.otp")))]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.otp,
                          expression: "otp"
                      }],
                      attrs: {
                          id: "otp",
                          type: "text",
                          name: "otp"
                      },
                      domProps: {
                          value: e.otp
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || (e.otp = t.target.value)
                          }
                      }
                  })]) : e._e(), e.isOTP ? a("div", {
                      staticClass: "flex flex-col padding-t-2x"
                  }, [a("button", {
                      staticClass: "centered sign-in",
                      on: {
                          click: e.signInOtp
                      }
                  }, [e._v(e._s(e.$t("message.signin")))])]) : e._e(), e.hasErrorMsg ? a("span", {
                      staticClass: "error"
                  }, [e._v(e._s(e.$t("message.invalidLogin")))]) : e._e(), e.isOTPInvalid ? a("span", {
                      staticClass: "error"
                  }, [e._v(e._s(e.$t("message.invalidOTP")))]) : e._e(), e.OTPRequestFailed ? a("span", {
                      staticClass: "error"
                  }, [e._v(e._s(e.$t("message.requestOTPFailed")))]) : e._e()]), a("div", {
                      staticClass: "bottom-banner"
                  }, [a("a", [a("i", {
                      staticClass: "pi pi-phone-out"
                  }), e._v(" " + e._s(e.$t("message.phone_login_speak_agent")) + " ")])])], 1)
              },
              at = [],
              it = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("div", {
                      staticClass: "flex top-nav"
                  }, [a("button", {
                      staticClass: "simple",
                      on: {
                          click: e.goBack
                      }
                  }, [a("i", {
                      staticClass: "pi pi-caret-left"
                  })]), a("div", {
                      staticClass: "flex-align-r"
                  }, [e._t("default")], 2)])
              },
              st = [],
              nt = {
                  props: {
                      previousPhonePage: {
                          required: !0
                      }
                  },
                  data() {
                      return o["b"]
                  },
                  methods: {
                      goBack() {
                          o["b"].phonePageName = this.previousPhonePage, o["b"].homeHeroAction = -1, o["b"].quickLinkId = -1, o["b"].isAuthenticated ? window.history.pushState({
                              userId: o["b"].userId
                          }, "", "" === o["b"].phonePageName ? "index.html" : o["b"].phonePageName) : window.history.pushState({}, "", "" === o["b"].phonePageName ? "index.html" : o["b"].phonePageName)
                      }
                  }
              },
              rt = nt,
              ot = Object(C["a"])(rt, it, st, !1, null, null, null),
              lt = ot.exports;

          function ct(e, t, a, i, s, n, r) {
              try {
                  var o = e[n](r),
                      l = o.value
              } catch (c) {
                  return void a(c)
              }
              o.done ? t(l) : Promise.resolve(l).then(i, s)
          }

          function dt(e) {
              return function() {
                  var t = this,
                      a = arguments;
                  return new Promise((function(i, s) {
                      var n = e.apply(t, a);

                      function r(e) {
                          ct(n, i, s, r, o, "next", e)
                      }

                      function o(e) {
                          ct(n, i, s, r, o, "throw", e)
                      }
                      r(void 0)
                  }))
              }
          }

          function gt(e, t) {
              var a = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                  var i = Object.getOwnPropertySymbols(e);
                  t && (i = i.filter((function(t) {
                      return Object.getOwnPropertyDescriptor(e, t).enumerable
                  }))), a.push.apply(a, i)
              }
              return a
          }

          function pt(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var a = null != arguments[t] ? arguments[t] : {};
                  t % 2 ? gt(Object(a), !0).forEach((function(t) {
                      ut(e, t, a[t])
                  })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : gt(Object(a)).forEach((function(t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                  }))
              }
              return e
          }

          function ut(e, t, a) {
              return t in e ? Object.defineProperty(e, t, {
                  value: a,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              }) : e[t] = a, e
          }
          var mt = {
                  data() {
                      var e = "",
                          t = "";
                      for (var a in o["b"].settings.users)
                          if (o["b"].settings.users[a].load_by_default) {
                              e = o["b"].settings.users[a].username, t = o["b"].settings.users[a].password;
                              break
                          } return pt(pt({}, o["b"]), {}, {
                          isActive: !1,
                          hasErrorMsg: !1,
                          username: e,
                          password: t,
                          otp_enabled: o["b"].settings.general.auth_2fa.enabled,
                          isOTPInvalid: !1,
                          OTPRequestFailed: !1,
                          isOTP: !1,
                          userID: -1,
                          otp: "",
                          otpRefId: ""
                      })
                  },
                  components: {
                      TopNav: lt
                  },
                  methods: {
                      signIn() {
                          for (var e in o["b"].userId = -1, this.userID = -1, this.settings.users)
                              if (this.settings.users[e].username === this.username && this.settings.users[e].password === this.password) {
                                  this.userID = e;
                                  break
                              } if (-1 !== this.userID) return this.otp_enabled ? (this.isOTP = !0, void this.sendOTPRequest(this.settings.users[this.userID].otp_send_to)) : void this.confirmLogin();
                          this.hasErrorMsg = !0
                      },
                      confirmLogin() {
                          o["b"].isAuthenticated = !0, o["b"].userId = this.userID, Object(o["d"])(this.settings.users[this.userID]), window.history && (o["b"].isAuthenticated ? window.history.pushState({
                              userId: o["b"].userId
                          }, "", "" === o["b"].phonePageName ? "index.html" : o["b"].phonePageName) : window.history.pushState({}, "", "" === o["b"].phonePageName ? "index.html" : o["b"].phonePageName))
                      },
                      sendOTPRequest(e) {
                          var t = this;
                          return dt((function*() {
                              var a = V(t.settings.users[t.userID].pega_userid, t.settings.users[t.userID].pega_pwd);
                              yield J(t.settings.general.auth_2fa, a, e).then(e => {
                                  e.isSuccess ? (t.isOTP = !0, t.otpRefId = e.referenceID, t.OTPRequestFailed = !1) : t.OTPRequestFailed = !0
                              })
                          }))()
                      },
                      signInOtp() {
                          var e = this;
                          return dt((function*() {
                              var t = V(e.settings.users[e.userID].pega_userid, e.settings.users[e.userID].pega_pwd);
                              yield z(e.settings.general.auth_2fa, e.otpRefId, e.otp, t).then(t => {
                                  t ? e.confirmLogin() : e.isOTPInvalid = !0
                              })
                          }))()
                      }
                  }
              },
              ft = mt,
              ht = Object(C["a"])(ft, tt, at, !1, null, null, null),
              vt = ht.exports,
              _t = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("main", {
                      staticClass: "flex flex-col"
                  }, [a("TopNav", {
                      attrs: {
                          previousPhonePage: ""
                      }
                  }), a("div", {
                      staticClass: "flex flex-col secondary-card"
                  }, [a("i", {
                      staticClass: "top-icon pi pi-document-data color-brand"
                  }), a("h1", {
                      staticClass: "small"
                  }, [e._v(e._s(e.$t("message.phone_quick_links_title")))]), a("div", {
                      staticClass: "quick-links"
                  }, e._l(e.visibleQuickLinks, (function(t, i) {
                      return a("button", {
                          key: i,
                          staticClass: "simple",
                          on: {
                              click: function(a) {
                                  return e.selectLink(t.originalIndex)
                              }
                          }
                      }, [a("i", {
                          class: "pi background-brand " + ("" == t.icon ? "pi-document-data" : t.icon)
                      }), e._v(" " + e._s(t.title[e.currentLocale]) + " ")])
                  })), 0)])], 1)
              },
              bt = [],
              yt = {
                  data() {
                      return o["b"]
                  },
                  components: {
                      TopNav: lt
                  },
                  computed: {
                      visibleQuickLinks() {
                          return this.settings.quicklinks.filter((e, t) => (e.originalIndex = t, !0 === e.hide || !this.settings.quicklinks[t].hideusers || !this.settings.quicklinks[t].hideusers.split(",").includes(this.settings.users[o["b"].userId].username)))
                      }
                  },
                  methods: {
                      selectLink(e) {
                          this.quickLinkId = e, window.history && (window.history.pushState({
                              userId: o["b"].userId,
                              quickLinkId: o["b"].quickLinkId
                          }, "", "quicklink".concat(e)), window.scrollTo({
                              top: 0,
                              behavior: "smooth"
                          }))
                      }
                  }
              },
              kt = yt,
              wt = Object(C["a"])(kt, _t, bt, !1, null, null, null),
              Ct = wt.exports,
              Pt = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("main", {
                      staticClass: "flex flex-col intro-quicklinks"
                  }, [a("TopNav", {
                      attrs: {
                          previousPhonePage: ""
                      }
                  }, [a("button", {
                      on: {
                          click: e.nextPage
                      }
                  }, [e._v(e._s(e.$t("message.phone_quick_links_intro_action")))])]), a("h1", [e._v(e._s(e.$t("message.phone_quick_links_intro_title")))]), a("p", [e._v(e._s(e.$t("message.phone_quick_links_intro_msg")))]), a("div", {
                      staticClass: "bottom-banner"
                  }, [a("p", [e._v(e._s(e.$t("message.phone_quick_links_intro_banner_msg")))]), a("a", [a("i", {
                      staticClass: "pi pi-ambulance"
                  }), e._v(" " + e._s(e.$t("message.phone_quick_links_intro_banner_action")) + " ")])])], 1)
              },
              xt = [],
              Ot = {
                  data() {
                      return o["b"]
                  },
                  components: {
                      TopNav: lt
                  },
                  methods: {
                      nextPage() {
                          o["b"].phonePageName = "help"
                      }
                  }
              },
              It = Ot,
              At = Object(C["a"])(It, Pt, xt, !1, null, null, null),
              St = At.exports,
              Nt = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("main", {
                      staticClass: "flex flex-col"
                  }, [a("TopNav", {
                      attrs: {
                          previousPhonePage: ""
                      }
                  }), a("AccountMainArea"), "insurance" !== e.app.industry ? a("AccountSecondaryArea", {
                      key: e.reloadOffer
                  }) : e._e()], 1)
              },
              $t = [],
              Dt = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("div", {
                      staticClass: "col col-1 primary-card"
                  }, ["undefined" !== typeof e.settings.banner && "true" !== e.settings.banner.hidebanner && !0 !== e.settings.banner.hidebanner ? a("Banner") : e._e(), "undefined" !== typeof e.settings.todo && "true" !== e.settings.todo.hideaccount && !0 !== e.settings.todo.hideaccount ? a("AccountPicker") : e._e(), "health-pharma" !== e.app.industry && "health-care" !== e.app.industry && "health-payer" !== e.app.industry || "true" === e.settings.todo.hideKPI || !0 === e.settings.todo.hideKPI ? e._e() : a("KPI"), "undefined" !== typeof e.settings.todo && "" !== e.settings.todo.url ? a("MashupMainArea", {
                      key: e.reloadAccountMashup
                  }) : e._e(), "undefined" !== typeof e.settings.billpay && "true" !== e.settings.billpay.hidebillpay && !0 !== e.settings.billpay.hidebillpay ? a("BillPay") : e._e(), "undefined" !== typeof e.settings.todo && "true" !== e.settings.todo.hideactivity && !0 !== e.settings.todo.hideactivity ? a("RecentActivity") : e._e()], 1)
              },
              Mt = [],
              Tt = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return "mashup" === e.settings.general.connection.type ? a("PegaWebMashup") : "embedui" === e.settings.general.connection.type ? a("WebEmbed") : a("WebComponent")
              },
              jt = [],
              Lt = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return e.isMashupInitialized ? a("section", {
                      staticClass: "flex flex-col",
                      class: -1 !== e.viewKMHelp ? "kmhelp" : ""
                  }, ["createNewWork" == e.actionName ? a("div", {
                      attrs: {
                          id: e.mashupid,
                          "data-pega-gadgetname": e.mashupid,
                          "data-pega-action": e.actionName,
                          "data-pega-action-param-classname": e.objClass,
                          "data-pega-action-param-flowname": e.startCase,
                          "data-pega-isdeferloaded": "false",
                          "data-pega-isretained": e.dataretained,
                          "data-pega-applicationname": e.appName,
                          "data-pega-threadname": e.threadName,
                          "data-pega-resizetype": "stretch",
                          "data-pega-channelID": e.channelID,
                          "data-pega-url": e.serverUrl,
                          "data-pega-tenantid": e.tenantID,
                          "data-pega-action-param-parameters": e.actionParam
                      }
                  }) : "display" == e.actionName ? a("div", {
                      attrs: {
                          id: e.mashupid,
                          "data-pega-gadgetname": e.mashupid,
                          "data-pega-action": e.actionName,
                          "data-pega-action-param-harnessname": e.actionNameParam,
                          "data-pega-action-param-classname": e.objClass,
                          "data-pega-isdeferloaded": "false",
                          "data-pega-isretained": e.dataretained,
                          "data-pega-applicationname": e.appName,
                          "data-pega-threadname": e.threadName,
                          "data-pega-resizetype": "stretch",
                          "data-pega-channelID": e.channelID,
                          "data-pega-url": e.serverUrl,
                          "data-pega-tenantid": e.tenantID,
                          "data-pega-action-param-parameters": e.actionParam
                      }
                  }) : "getNextWork" == e.actionName ? a("div", {
                      attrs: {
                          id: e.mashupid,
                          "data-pega-gadgetname": e.mashupid,
                          "data-pega-action": e.actionName,
                          "data-pega-isdeferloaded": "false",
                          "data-pega-isretained": e.dataretained,
                          "data-pega-applicationname": e.appName,
                          "data-pega-threadname": e.threadName,
                          "data-pega-resizetype": "stretch",
                          "data-pega-channelID": e.channelID,
                          "data-pega-url": e.serverUrl,
                          "data-pega-tenantid": e.tenantID,
                          "data-pega-action-param-parameters": e.actionParam
                      }
                  }) : "openAssignment" == e.actionName || "openWorkByHandle" == e.actionName ? a("div", {
                      attrs: {
                          id: e.mashupid,
                          "data-pega-gadgetname": e.mashupid,
                          "data-pega-action": e.actionName,
                          "data-pega-action-param-key": e.actionNameParam,
                          "data-pega-isdeferloaded": "false",
                          "data-pega-isretained": e.dataretained,
                          "data-pega-applicationname": e.appName,
                          "data-pega-threadname": e.threadName,
                          "data-pega-resizetype": "stretch",
                          "data-pega-channelID": e.channelID,
                          "data-pega-url": e.serverUrl,
                          "data-pega-tenantid": e.tenantID,
                          "data-pega-action-param-parameters": e.actionParam
                      }
                  }) : "openWorkItem" == e.actionName ? a("div", {
                      attrs: {
                          id: e.mashupid,
                          "data-pega-gadgetname": e.mashupid,
                          "data-pega-action": e.actionName,
                          "data-pega-action-param-workid": e.actionNameParam,
                          "data-pega-isdeferloaded": "false",
                          "data-pega-isretained": e.dataretained,
                          "data-pega-applicationname": e.appName,
                          "data-pega-threadname": e.threadName,
                          "data-pega-resizetype": "stretch",
                          "data-pega-channelID": e.channelID,
                          "data-pega-url": e.serverUrl,
                          "data-pega-tenantid": e.tenantID,
                          "data-pega-action-param-parameters": e.actionParam
                      }
                  }) : "openWorkByURL" == e.actionName ? a("div", {
                      attrs: {
                          id: e.mashupid,
                          "data-pega-gadgetname": e.mashupid,
                          "data-pega-action": e.actionName,
                          "data-pega-action-param-query": e.actionNameParam,
                          "data-pega-isdeferloaded": "false",
                          "data-pega-isretained": e.dataretained,
                          "data-pega-applicationname": e.appName,
                          "data-pega-threadname": e.threadName,
                          "data-pega-resizetype": "stretch",
                          "data-pega-channelID": e.channelID,
                          "data-pega-url": e.serverUrl,
                          "data-pega-tenantid": e.tenantID,
                          "data-pega-action-param-parameters": e.actionParam
                      }
                  }) : e._e()]) : a("section", {
                      staticClass: "flex flex-col height-100-pct"
                  }, [a("iframe", {
                      staticClass: "pega",
                      class: e.isMobilePhone ? "phone" : "desktop",
                      staticStyle: {
                          overflow: "hidden",
                          height: "600px"
                      },
                      attrs: {
                          "data-attr-title": e.caseTitle,
                          "data-attr-color": e.settings.general.theming.override ? e.settings.general.theming.interactiveColor : "",
                          src: "form-embed.html",
                          width: "100%",
                          height: "100%",
                          border: "0",
                          frameborder: "0"
                      }
                  })])
              },
              Et = [];

          function Rt(e, t) {
              var a = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                  var i = Object.getOwnPropertySymbols(e);
                  t && (i = i.filter((function(t) {
                      return Object.getOwnPropertyDescriptor(e, t).enumerable
                  }))), a.push.apply(a, i)
              }
              return a
          }

          function Bt(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var a = null != arguments[t] ? arguments[t] : {};
                  t % 2 ? Rt(Object(a), !0).forEach((function(t) {
                      Ut(e, t, a[t])
                  })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : Rt(Object(a)).forEach((function(t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                  }))
              }
              return e
          }

          function Ut(e, t, a) {
              return t in e ? Object.defineProperty(e, t, {
                  value: a,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              }) : e[t] = a, e
          }
          var Ht = {
                  data() {
                      return Bt(Bt({}, o["b"]), {}, {
                          mashupid: "wss".concat(Date.now()),
                          mashupScript: "",
                          isMashupInitialized: !1,
                          serverUrl: "",
                          actionName: "",
                          actionNameParam: "",
                          objClass: "",
                          startCase: "",
                          threadName: "",
                          channelID: "",
                          appName: "",
                          actionParam: "",
                          caseTitle: "",
                          extraParam: "",
                          tenantID: "",
                          dataretained: !0
                      })
                  },
                  created() {
                      var e = !1;
                      if (this.mashupScript = document.createElement("script"), -1 !== this.quickLinkId) this.actionName = this.settings.quicklinks[this.quickLinkId].action, this.actionNameParam = this.settings.quicklinks[this.quickLinkId].actionparam, this.serverUrl = this.settings.quicklinks[this.quickLinkId].url, this.objClass = this.settings.quicklinks[this.quickLinkId].objclass, this.startCase = this.settings.quicklinks[this.quickLinkId].startcase, this.appName = this.settings.quicklinks[this.quickLinkId].application, this.channelID = this.settings.quicklinks[this.quickLinkId].channelid, this.tenantID = this.settings.quicklinks[this.quickLinkId].tenantid, this.dataretained = this.settings.quicklinks[this.quickLinkId].dataretained, this.extraParam = this.settings.quicklinks[this.quickLinkId].extraparam, this.caseTitle = this.settings.quicklinks[this.quickLinkId].title[this.currentLocale];
                      else if (-1 !== this.viewBill) this.actionName = this.settings.billpay.action, this.actionNameParam = this.settings.billpay.actionparam, this.serverUrl = this.settings.billpay.url, this.objClass = this.settings.billpay.objclass, this.startCase = this.settings.billpay.startcase, this.appName = this.settings.billpay.application, this.channelID = this.settings.billpay.channelid, this.tenantID = this.settings.billpay.tenantid, this.dataretained = this.settings.billpay.dataretained, this.extraParam = this.settings.billpay.extraparam;
                      else if (-1 !== this.viewBanner) this.actionName = this.settings.banner.action, this.actionNameParam = this.settings.banner.actionparam, this.serverUrl = this.settings.banner.url, this.objClass = this.settings.banner.objclass, this.startCase = this.settings.banner.startcase, this.appName = this.settings.banner.application, this.channelID = this.settings.banner.channelid, this.tenantID = this.settings.banner.tenantid, this.dataretained = this.settings.banner.dataretained, this.extraParam = this.settings.banner.extraparam;
                      else if (-1 !== this.homeHeroAction) this.actionName = this.settings.homeheroaction.action, this.actionNameParam = this.settings.homeheroaction.actionparam, this.serverUrl = this.settings.homeheroaction.url, this.objClass = this.settings.homeheroaction.objclass, this.startCase = this.settings.homeheroaction.startcase, this.appName = this.settings.homeheroaction.application, this.channelID = this.settings.homeheroaction.channelid, this.tenantID = this.settings.homeheroaction.tenantid, this.dataretained = this.settings.homeheroaction.dataretained, this.extraParam = this.settings.homeheroaction.extraparam;
                      else if (-1 !== this.offerAction) {
                          this.actionName = this.settings.offeraction.action, this.actionNameParam = this.settings.offeraction.actionparam, this.serverUrl = this.settings.offeraction.url, this.objClass = this.settings.offeraction.objclass, this.startCase = this.settings.offeraction.startcase, this.appName = this.settings.offeraction.application, this.channelID = this.settings.offeraction.channelid, this.tenantID = this.settings.offeraction.tenantid, this.dataretained = this.settings.offeraction.dataretained, this.extraParam = this.settings.offeraction.extraparam;
                          var t = {};
                          for (var a in window.location.search.substr(1).split("&").forEach(e => {
                                  t[e.split("=")[0]] = e.split("=")[1]
                              }), t) "undefined" !== typeof t[a] && "" !== t[a] && (this.extraParam += "".concat(("" !== this.extraParam ? "," : "") + a, "=").concat(t[a]))
                      } else -1 !== this.viewKMHelp ? (this.actionName = this.settings.kmhelp.action, this.actionNameParam = this.settings.kmhelp.actionparam, this.serverUrl = this.settings.kmhelp.url, this.objClass = this.settings.kmhelp.objclass, this.startCase = this.settings.kmhelp.startcase, this.appName = this.settings.kmhelp.application, this.channelID = this.settings.kmhelp.channelid, this.tenantID = this.settings.kmhelp.tenantid, this.dataretained = this.settings.kmhelp.dataretained, this.extraParam = this.settings.kmhelp.extraparam, "" !== o["b"].KMArticleID && (this.extraParam += "".concat("" !== this.extraParam ? "," : "", "ArticleID=").concat(o["b"].KMArticleID, ',preActivityParams={"ArticleID":"').concat(o["b"].KMArticleID, '"}'), o["b"].KMArticleID = "")) : (e = !0, this.actionName = this.settings.todo.action, this.actionNameParam = this.settings.todo.actionparam, this.serverUrl = this.settings.todo.url, this.objClass = this.settings.todo.objclass, this.startCase = this.settings.todo.startcase, this.appName = this.settings.todo.application, this.channelID = this.settings.todo.channelid, this.tenantID = this.settings.todo.tenantid, this.dataretained = this.settings.todo.dataretained, this.extraParam = this.settings.todo.extraparam, this.logoutURL.todo = "".concat(this.settings.todo.url, "?pyActivity=LogOff"));
                      if ("" !== this.serverUrl) {
                          this.threadName = this.objClass.replace(/-/g, ""), this.mashupScript.setAttribute("src", "".concat(this.serverUrl, "?pyActivity=pzIncludeMashupScripts&id=").concat(this.mashupid));
                          var i = {
                              pzSkinName: "ClaritySkin"
                          };
                          if ("comms" === this.app.industry ? i.pzSkinName = "ClaritySkin_HoneyFlower" : 0 === this.app.industry.indexOf("health") ? i.pzSkinName = "PAR" : "gov" === this.app.industry ? i.pzSkinName = "ClaritySkin_PictonBlue" : "retail_bank" === this.app.industry || "commercial_bank" === this.app.industry ? i.pzSkinName = "ClaritySkin_Mantis" : "insurance" === this.app.industry ? i.pzSkinName = "ClaritySkin_Flame" : "manufacturing" === this.app.industry && (i.pzSkinName = "ClaritySkin_DeepCerise"), i.pyMashupSkeletonName = "pyDefaultMashupSkeleton", -1 !== this.userId ? (i.UserIdentifier = this.settings.users[this.userId].pega_userid, i.Password = encodeURI(btoa(this.settings.users[this.userId].pega_pwd)), this.settings.users[this.userId].accountID && (i.AccountNumber = this.settings.users[this.userId].accountID), this.settings.users[this.userId].customerID && (i.customerID = this.settings.users[this.userId].customerID), this.settings.users[this.userId].contactID && (i.ContactId = this.settings.users[this.userId].contactID)) : -1 !== this.viewKMHelp ? (i.UserIdentifier = this.settings.kmhelp.username, i.Password = encodeURI(btoa(this.settings.kmhelp.password))) : -1 !== this.homeHeroAction ? (i.UserIdentifier = this.settings.homeheroaction.pega_userid, i.Password = encodeURI(btoa(this.settings.homeheroaction.pega_pwd))) : -1 !== this.offerAction && (i.UserIdentifier = this.settings.offeraction.pega_userid, i.Password = encodeURI(btoa(this.settings.offeraction.pega_pwd))), !0 === this.isDeepLink) {
                              for (var s in i.isDeepLink = "true", this.deepLinkExtraParam) i[s] = this.deepLinkExtraParam[s];
                              o["b"].isDeepLink = !1, o["b"].deepLinkExtraParam = {}
                          }
                          e && (i.isMashupInContainer = "true"), "undefined" !== typeof this.extraParam && "" !== this.extraParam && this.extraParam.split(",").forEach(e => {
                              var t = e.split("=");
                              2 === t.length && (i[t[0].trim()] = t[1].trim())
                          }), -1 !== this.userId && "undefined" !== typeof this.settings.users[this.userId].extraparam && "" !== this.settings.users[this.userId].extraparam && this.settings.users[this.userId].extraparam.split(",").forEach(e => {
                              var t = e.split("=");
                              2 === t.length && (i[t[0].trim()] = t[1].trim())
                          }), i.pySkipCookieConsent = "true", this.actionParam = JSON.stringify(i), this.isMashupInitialized = !0, "undefined" !== typeof pega && "undefined" !== typeof pega.Mashup && "undefined" !== typeof pega.Mashup.Communicator || (this.mashupScript.onload = function() {
                              pega.Mashup.Communicator.register(pega.Mashup.hostActionsProcessor), _initAllPegaObjects()
                          }, document.head.appendChild(this.mashupScript))
                      }
                  },
                  mounted() {
                      "undefined" !== typeof pega && "undefined" !== typeof pega.Mashup && "undefined" !== typeof pega.Mashup.Communicator && pega.web.mgr._initGadgets(window)
                  }
              },
              qt = Ht,
              Wt = Object(C["a"])(qt, Lt, Et, !1, null, null, null),
              Ft = Wt.exports,
              Kt = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return "dxv2" === this.settings.general.connection.type ? a("pega-mashup-light-v2", {
                      ref: "mycomp",
                      staticClass: "pega-mashup"
                  }) : a("pega-mashup-light", {
                      ref: "mycomp",
                      staticClass: "pega-mashup"
                  })
              },
              Vt = [],
              zt = {
                  data() {
                      return o["b"]
                  },
                  mounted() {
                      var e = this.$refs.mycomp,
                          t = "",
                          a = "";
                      if (-1 !== this.quickLinkId ? (e.action = this.settings.quicklinks[this.quickLinkId].action, e.url = this.settings.quicklinks[this.quickLinkId].url, t = this.settings.quicklinks[this.quickLinkId].objclass, a = this.settings.quicklinks[this.quickLinkId].title[this.currentLocale]) : -1 !== this.viewBill ? (e.action = this.settings.billpay.action, e.url = this.settings.billpay.url, t = this.settings.billpay.objclass) : -1 !== this.viewBanner ? (e.action = this.settings.banner.action, e.url = this.settings.banner.url, t = this.settings.banner.objclass) : -1 !== this.homeHeroAction ? (e.action = this.settings.homeheroaction.action, e.url = this.settings.homeheroaction.url, t = this.settings.homeheroaction.objclass) : -1 !== this.offerAction ? (e.action = this.settings.offeraction.action, e.url = this.settings.offeraction.url, t = this.settings.offeraction.objclass) : (e.action = this.settings.todo.action, e.url = this.settings.todo.url, t = this.settings.todo.objclass), "display" === e.action && (e.action = "workList"), "createNewWork" === e.action && (e.casetype = t), e.bShowCreate = "false", e.bShowSave = "false", e.bShowAttachments = "true", "" === e.url) {
                          var i = e.parentElement;
                          i.removeChild(e);
                          var s = document.createElement("section");
                          return s.className = "flex flex-col height-100-pct", s.innerHTML = '<iframe\n      class="pega '.concat(this.isMobilePhone ? "phone" : "desktop", '"\n      src="form-embed.html"\n      style="overflow: hidden; height: 600px"\n      data-attr-title="').concat(a, '"\n      data-attr-color="').concat(o["b"].settings.general.theming.override ? o["b"].settings.general.theming.interactiveColor : "", '"\n      width="100%"\n      height="100%"\n      border="0"\n      frameborder="0"\n    ></iframe>'), void i.appendChild(s)
                      }
                      if (0 !== e.url.indexOf("/prweb/") && (e.url = e.url.substring(0, e.url.indexOf("/prweb") + 6)), -1 !== this.userId ? (e.username = this.settings.users[this.userId].pega_userid, e.password = this.settings.users[this.userId].pega_pwd) : -1 !== this.homeHeroAction ? (e.username = this.settings.homeheroaction.pega_userid, e.password = this.settings.homeheroaction.pega_pwd) : -1 !== this.offerAction && (e.username = this.settings.offeraction.pega_userid, e.password = this.settings.offeraction.pega_pwd), "dxv2" === this.settings.general.connection.type && (e.portalName = this.settings.general.connection.webportal), "oauth2password" === this.settings.general.connection.authtype && (e.clientid = this.settings.general.connection.clientid, e.clientsecret = this.settings.general.connection.clientsecret), e.authentication = this.settings.general.connection.authtype, e.addEventListener("message", e => {
                              "cancel" === e.detail.type && this.goHomePage()
                          }), "undefined" === typeof litElementVersions) {
                          var n = document.createElement("script");
                          n.setAttribute("src", "../js/pega-mashup-webcomponent-light-all.js"), document.head.appendChild(n)
                      }
                  },
                  methods: {
                      goHomePage() {
                          o["b"].quickLinkId = -1, o["b"].viewBill = -1, o["b"].viewBanner = -1, o["b"].homeHeroAction = -1, o["b"].offerAction = -1, o["b"].toDo = -1, o["b"].viewKMHelp = -1, o["b"].offerURL = "", o["b"].offerIndex = 0, window.history && (o["b"].isAuthenticated ? (o["b"].currentPage = "account", window.history.pushState({
                              userId: o["b"].userId
                          }, "", o["b"].currentPage)) : (o["b"].currentPage = "index.html", window.history.pushState({}, "", o["b"].currentPage)), window.scrollTo({
                              top: 0,
                              behavior: "smooth"
                          })), p(o["b"], "PageView", "Home", window.loadPage), window.loadPage = new Date
                      }
                  }
              },
              Jt = zt,
              Gt = Object(C["a"])(Jt, Kt, Vt, !1, null, null, null),
              Qt = Gt.exports,
              Xt = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return e.isWebEmbedInitialized ? a("div", [a("h1", [e._v(e._s(e.caseTitle))]), "openPage" === e.action ? a("pega-embed", {
                      attrs: {
                          popupReauth: "true",
                          casePage: "assignment",
                          action: e.action,
                          pageID: e.actionparam,
                          pageClass: e.objClass,
                          appAlias: e.application,
                          pegaServerUrl: e.url,
                          staticContentUrl: e.staticContentUrl,
                          authService: "pega",
                          clientId: e.clientId,
                          userIdentifier: e.UserIdentifier,
                          password: e.Password,
                          theme: e.theme
                      }
                  }) : "createCase" === e.action ? a("pega-embed", {
                      attrs: {
                          popupReauth: "true",
                          action: e.action,
                          caseTypeID: e.objClass,
                          startingFields: e.startingFields,
                          appAlias: e.application,
                          pegaServerUrl: e.url,
                          staticContentUrl: e.staticContentUrl,
                          authService: "pega",
                          clientId: e.clientId,
                          userIdentifier: e.UserIdentifier,
                          password: e.Password,
                          theme: e.theme
                      }
                  }) : "openAssignment" === e.action ? a("pega-embed", {
                      attrs: {
                          popupReauth: "true",
                          action: e.action,
                          assignmentID: e.actionparam,
                          appAlias: e.application,
                          pegaServerUrl: e.url,
                          staticContentUrl: e.staticContentUrl,
                          authService: "pega",
                          clientId: e.clientId,
                          userIdentifier: e.UserIdentifier,
                          password: e.Password,
                          theme: e.theme
                      }
                  }) : "openCase" === e.action ? a("pega-embed", {
                      attrs: {
                          popupReauth: "true",
                          action: e.action,
                          caseID: e.actionparam,
                          appAlias: e.application,
                          pegaServerUrl: e.url,
                          staticContentUrl: e.staticContentUrl,
                          authService: "pega",
                          clientId: e.clientId,
                          userIdentifier: e.UserIdentifier,
                          password: e.Password,
                          theme: e.theme
                      }
                  }) : e._e()], 1) : a("div", [e._v("Loading....")])
              },
              Yt = [];

          function Zt(e, t) {
              var a = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                  var i = Object.getOwnPropertySymbols(e);
                  t && (i = i.filter((function(t) {
                      return Object.getOwnPropertyDescriptor(e, t).enumerable
                  }))), a.push.apply(a, i)
              }
              return a
          }

          function ea(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var a = null != arguments[t] ? arguments[t] : {};
                  t % 2 ? Zt(Object(a), !0).forEach((function(t) {
                      ta(e, t, a[t])
                  })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : Zt(Object(a)).forEach((function(t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                  }))
              }
              return e
          }

          function ta(e, t, a) {
              return t in e ? Object.defineProperty(e, t, {
                  value: a,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              }) : e[t] = a, e
          }
          var aa = {
                  data() {
                      return ea(ea({}, o["b"]), {}, {
                          action: "",
                          actionparam: "",
                          objClass: "",
                          application: "",
                          url: "",
                          staticContentUrl: "",
                          clientId: "",
                          caseTitle: "",
                          isWebEmbedInitialized: !1,
                          UserIdentifier: "",
                          Password: "",
                          theme: "",
                          startingFields: {},
                          extraParam: ""
                      })
                  },
                  mounted() {
                      -1 !== this.quickLinkId ? (this.action = this.settings.quicklinks[this.quickLinkId].action, this.url = this.settings.quicklinks[this.quickLinkId].url, this.actionparam = this.settings.quicklinks[this.quickLinkId].actionparam, this.application = this.settings.quicklinks[this.quickLinkId].application, this.objClass = this.settings.quicklinks[this.quickLinkId].objclass, this.caseTitle = this.settings.quicklinks[this.quickLinkId].title[this.currentLocale], this.extraParam = this.settings.quicklinks[this.quickLinkId].extraparam) : -1 !== this.viewBill ? (this.action = this.settings.billpay.action, this.actionparam = this.settings.billpay.actionparam, this.application = this.settings.billpay.application, this.url = this.settings.billpay.url, this.objClass = this.settings.billpay.objclass, this.extraParam = this.settings.billpay.extraparam) : -1 !== this.viewBanner ? (this.action = this.settings.banner.action, this.actionparam = this.settings.banner.actionparam, this.application = this.settings.banner.application, this.url = this.settings.banner.url, this.objClass = this.settings.banner.objclass, this.extraParam = this.settings.banner.extraparam) : -1 !== this.homeHeroAction ? (this.action = this.settings.homeheroaction.action, this.actionparam = this.settings.homeheroaction.actionparam, this.application = this.settings.homeheroaction.application, this.url = this.settings.homeheroaction.url, this.objClass = this.settings.homeheroaction.objclass, this.extraParam = this.settings.homeheroaction.extraparam) : -1 !== this.offerAction ? (this.action = this.settings.offeraction.action, this.actionparam = this.settings.offeraction.actionparam, this.application = this.settings.offeraction.application, this.url = this.settings.offeraction.url, this.objClass = this.settings.offeraction.objclass, this.extraParam = this.settings.offeraction.extraparam) : (this.action = this.settings.todo.action, this.actionparam = this.settings.todo.actionparam, this.application = this.settings.todo.application, this.url = this.settings.todo.url, this.objClass = this.settings.todo.objclass, this.extraParam = this.settings.todo.extraparam), "display" === this.action ? this.action = "openPage" : "createNewWork" === this.action ? this.action = "createCase" : "openAssignment" === this.action ? this.action = "openAssignment" : "openWorkByHandle" === this.action && (this.action = "openCase"), -1 !== this.userId ? (this.UserIdentifier = this.settings.users[this.userId].pega_userid, this.Password = encodeURI(btoa(this.settings.users[this.userId].pega_pwd))) : -1 !== this.viewKMHelp ? (this.UserIdentifier = this.settings.kmhelp.username, this.Password = encodeURI(btoa(this.settings.kmhelp.password))) : -1 !== this.homeHeroAction ? (this.UserIdentifier = this.settings.homeheroaction.pega_userid, this.Password = encodeURI(btoa(this.settings.homeheroaction.pega_pwd))) : -1 !== this.offerAction && (this.UserIdentifier = this.settings.offeraction.pega_userid, this.Password = encodeURI(btoa(this.settings.offeraction.pega_pwd))), "comms" === this.app.industry ? this.theme = '{"base":{"palette":{"brand-primary":"#5F257E","app-background": "#FFFFFF"}}}' : 0 === this.app.industry.indexOf("health") ? this.theme = '{"base":{"palette":{"brand-primary":"#0C8487","app-background": "#FFFFFF"}}}' : "gov" === this.app.industry ? this.theme = '{"base":{"palette":{"brand-primary":"#0076DE","app-background": "#FFFFFF"}}}' : "retail_bank" === this.app.industry || "commercial_bank" === this.app.industry ? this.theme = '{"base":{"palette":{"brand-primary":"#3C8712","app-background": "#FFFFFF"}}}' : "insurance" === this.app.industry ? this.theme = '{"base":{"palette":{"brand-primary":"#DF3603","app-background": "#FFFFFF"}}}' : "manufacturing" === this.app.industry && (this.theme = '{"base":{"palette":{"brand-primary":"#D31D36","app-background": "#FFFFFF"}}}'), this.settings.general.theming.override && (this.theme = '{"base":{"palette":{"brand-primary":"'.concat(this.settings.general.theming.brandColor, '","interactive":"').concat(this.settings.general.theming.interactiveColor, '","app-background": "#FFFFFF"}}}')), this.extraParam.split(",").forEach(e => {
                          var t = e.split("=");
                          2 === t.length && (this.startingFields[t[0].trim()] = t[1].trim())
                      }), -1 !== this.userId && "undefined" !== typeof this.settings.users[this.userId].extraparam && "" !== this.settings.users[this.userId].extraparam && this.settings.users[this.userId].extraparam.split(",").forEach(e => {
                          var t = e.split("=");
                          2 === t.length && (this.startingFields[t[0].trim()] = t[1].trim())
                      }), this.startingFields = JSON.stringify(this.startingFields), this.staticContentUrl = this.settings.general.connection.c11nserver, this.clientId = this.settings.general.connection.clientid, this.isWebEmbedInitialized = "true"
                  },
                  methods: {
                      goHomePage() {
                          o["b"].quickLinkId = -1, o["b"].viewBill = -1, o["b"].viewBanner = -1, o["b"].homeHeroAction = -1, o["b"].offerAction = -1, o["b"].toDo = -1, o["b"].viewKMHelp = -1, o["b"].offerURL = "", o["b"].offerIndex = 0, window.history && (o["b"].isAuthenticated ? (o["b"].currentPage = "account", window.history.pushState({
                              userId: o["b"].userId
                          }, "", o["b"].currentPage)) : (o["b"].currentPage = "index.html", window.history.pushState({}, "", o["b"].currentPage)), window.scrollTo({
                              top: 0,
                              behavior: "smooth"
                          })), p(o["b"], "PageView", "Home", window.loadPage), window.loadPage = new Date
                      }
                  }
              },
              ia = aa,
              sa = Object(C["a"])(ia, Xt, Yt, !1, null, null, null),
              na = sa.exports,
              ra = {
                  data() {
                      return o["b"]
                  },
                  components: {
                      PegaWebMashup: Ft,
                      WebComponent: Qt,
                      WebEmbed: na
                  }
              },
              oa = ra,
              la = Object(C["a"])(oa, Tt, jt, !1, null, null, null),
              ca = la.exports,
              da = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("section", {
                      staticClass: "account-picker"
                  }, [a("h2", [e._v(e._s(e.$t("message.youraccount")))]), a("div", {
                      staticClass: "flex"
                  }, e._l(e.app.accountpicker, (function(t) {
                      return a("div", {
                          key: t.title,
                          staticClass: "content-card flex flex-mid-align"
                      }, [a("i", {
                          staticClass: "product-icon pi",
                          class: t.icon
                      }), a("div", {
                          staticClass: "list-box"
                      }, [a("h3", [e._v(e._s(e.$t("message." + t.title)))]), "undefined" != typeof t.desc && "" != t.desc ? a("span", [e._v(e._s(e.$t("message." + t.desc)))]) : e._e(), "" != t.id ? a("p", [e._v(e._s(t.id))]) : e._e()])])
                  })), 0)])
              },
              ga = [],
              pa = {
                  data() {
                      return o["b"]
                  }
              },
              ua = pa,
              ma = Object(C["a"])(ua, da, ga, !1, null, null, null),
              fa = ma.exports,
              ha = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return -1 != e.userId ? a("section", {
                      staticClass: "account-kpi"
                  }, [a("h2", [e._v(e._s(e.$t("message.yourkpi")))]), a("div", {
                      staticClass: "content-card flex flex-wrap"
                  }, e._l(e.settings.users[e.userId].kpi, (function(t) {
                      return a("div", {
                          key: t.name,
                          staticClass: "kpi-item"
                      }, [a("i", {
                          staticClass: "pi color-brand",
                          class: t.icon
                      }), a("div", {
                          staticClass: "list-box"
                      }, [a("h3", [e._v(e._s(e.$t("message." + t.name)))]), a("span", {
                          staticClass: "scorecard"
                      }, [e._v(e._s(t.value))])])])
                  })), 0)]) : e._e()
              },
              va = [],
              _a = {
                  data() {
                      return o["b"]
                  }
              },
              ba = _a,
              ya = Object(C["a"])(ba, ha, va, !1, null, null, null),
              ka = ya.exports,
              wa = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("section", {
                      staticClass: "banner"
                  }, [a("div", {
                      staticClass: "content-card flex",
                      style: {
                          backgroundColor: e.settings.banner.color
                      }
                  }, [a("div", {
                      staticClass: "flex flex-grow-1 flex-mid-align"
                  }, [a("i", {
                      class: "pi pi-3x " + e.$t("message.banner_icon")
                  }), a("div", {
                      staticClass: "flex flex-col flex-grow-1"
                  }, [a("h3", [e._v(e._s(e.$t("message.banner_title")))]), a("p", [e._v(e._s(e.$t("message.banner_desc")))])]), 1 != e.settings.banner.hidebanner_button ? a("button", {
                      on: {
                          click: function(t) {
                              return e.openBanner()
                          }
                      }
                  }, [e._v(e._s(e.$t("message.banner_action")))]) : e._e()])])])
              },
              Ca = [],
              Pa = {
                  data() {
                      return o["b"]
                  },
                  methods: {
                      openBanner() {
                          o["b"].viewBanner = 1
                      }
                  }
              },
              xa = Pa,
              Oa = Object(C["a"])(xa, wa, Ca, !1, null, null, null),
              Ia = Oa.exports,
              Aa = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return "wealth" !== e.app.industry ? a("section", {
                      staticClass: "bill-pay"
                  }, [a("h2", [e._v(e._s(e.$t("message.billpay")))]), a("div", {
                      staticClass: "content-card flex flex-col-3"
                  }, [a("div", {
                      staticClass: "list-box"
                  }, [a("h3", [e._v(e._s(e.$t("message.amountdue")))]), e.settings.users[e.userId] ? a("p", [e._v(e._s(e.$n(e.settings.users[e.userId].billpay, "currency")))]) : e._e(), a("button", {
                      on: {
                          click: function(t) {
                              return e.openBill()
                          }
                      }
                  }, [e._v(e._s(e.$t("message.paynow")))])]), a("div", {
                      staticClass: "list-box"
                  }, [a("h3", [e._v(e._s(e.$t("message.billdue")))]), a("p", [e._v(e._s(e.$d(e.getDueBillDate(), "short")))]), a("button", {
                      staticClass: "simple",
                      on: {
                          click: function(t) {
                              return e.openBill()
                          }
                      }
                  }, [e._v(e._s(e.$t("message.viewbill")))])]), a("div", {
                      staticClass: "list-box"
                  }, [a("h3", [e._v(e._s(e.$t("message.autopay")))]), e.isBillPayActive ? a("p", [a("i", {
                      staticClass: "pi pi-cancel pi-grey"
                  }), e._v(" " + e._s(e.$t("message.off")) + " ")]) : a("p", [a("i", {
                      staticClass: "pi pi-circle-check pi-grey"
                  }), e._v(" " + e._s(e.$t("message.on")) + " ")]), a("button", {
                      staticClass: "simple",
                      on: {
                          click: function(t) {
                              return e.enrollInBillPay()
                          }
                      }
                  }, [e._v(e._s(e.$t("message.autopay_enroll")))])])])]) : a("section", {
                      staticClass: "bill-pay"
                  }, [a("h2", [e._v(e._s(e.$t("message.billpay")))]), a("div", {
                      staticClass: "content-card flex flex-col-3"
                  }, [a("div", {
                      staticClass: "list-box"
                  }, [a("h3", [e._v(e._s(e.$t("message.amountdue")))]), e.settings.users[e.userId] ? a("p", [e._v(e._s(e.$n(e.settings.users[e.userId].billpay, "currency")))]) : e._e()]), a("div", {
                      staticClass: "list-box"
                  }, [a("h3", [e._v(e._s(e.$t("message.billdue")))]), a("p", [e._v(e._s(e.$d(e.getDueBillDate(), "short")))])]), a("div", {
                      staticClass: "list-box"
                  }, [a("h3", [e._v(e._s(e.$t("message.autopay")))]), e.settings.users[e.userId] ? a("p", [e._v(e._s(e.settings.users[e.userId].roi) + "%")]) : e._e()])])])
              },
              Sa = [];

          function Na(e, t) {
              var a = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                  var i = Object.getOwnPropertySymbols(e);
                  t && (i = i.filter((function(t) {
                      return Object.getOwnPropertyDescriptor(e, t).enumerable
                  }))), a.push.apply(a, i)
              }
              return a
          }

          function $a(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var a = null != arguments[t] ? arguments[t] : {};
                  t % 2 ? Na(Object(a), !0).forEach((function(t) {
                      Da(e, t, a[t])
                  })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : Na(Object(a)).forEach((function(t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                  }))
              }
              return e
          }

          function Da(e, t, a) {
              return t in e ? Object.defineProperty(e, t, {
                  value: a,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              }) : e[t] = a, e
          }
          var Ma = {
                  data() {
                      return $a($a({}, o["b"]), {}, {
                          isBillPayActive: !1
                      })
                  },
                  methods: {
                      getDueBillDate() {
                          var e = new Date;
                          return e.getDate() > 16 && e.setMonth((e.getMonth() + 1) % 12), e.setDate(15), e
                      },
                      enrollInBillPay() {
                          this.isBillPayActive = !this.isBillPayActive
                      },
                      openBill() {
                          o["b"].viewBill = 1
                      }
                  }
              },
              Ta = Ma,
              ja = Object(C["a"])(Ta, Aa, Sa, !1, null, null, null),
              La = ja.exports,
              Ea = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("section", {
                      staticClass: "recent-activity"
                  }, [a("h2", [e._v(e._s(e.$t("message.recentactivity")))]), a("ul", {
                      staticClass: "fatlist"
                  }, e._l(e.app.recentactivity, (function(t, i) {
                      return a("li", {
                          key: t.message,
                          staticClass: "flex"
                      }, [t.date ? a("time", {
                          staticClass: "fatlist-item"
                      }, [e._v(e._s(e.$d(new Date(t.date), "short")))]) : a("time", {
                          staticClass: "fatlist-item"
                      }, [e._v(e._s(e.$d(e.getdate(i), "short")))]), a("p", {
                          staticClass: "fatlist-item activity"
                      }, [e._v(e._s(e.$t("message." + t.message)))]), t.cost ? a("p", {
                          staticClass: "fatlist-item flex-align-r"
                      }, [e._v(e._s(e.$n(t.cost, "currency")))]) : a("a", {
                          staticClass: "fatlist-item flex-align-r"
                      }, [e._v(e._s(e.$t("message.viewmore")))])])
                  })), 0)])
              },
              Ra = [],
              Ba = {
                  data() {
                      return o["b"]
                  },
                  methods: {
                      getdate(e) {
                          var t = new Date;
                          return t.getDate() <= 16 && t.setMonth((t.getMonth() - 1) % 12), t.setDate(15 - 2 * e), t
                      }
                  }
              },
              Ua = Ba,
              Ha = Object(C["a"])(Ua, Ea, Ra, !1, null, null, null),
              qa = Ha.exports,
              Wa = {
                  data() {
                      return o["b"]
                  },
                  components: {
                      MashupMainArea: ca,
                      AccountPicker: fa,
                      KPI: ka,
                      BillPay: La,
                      RecentActivity: qa,
                      Banner: Ia
                  }
              },
              Fa = Wa,
              Ka = Object(C["a"])(Fa, Dt, Mt, !1, null, null, null),
              Va = Ka.exports,
              za = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("div", [a("div", {
                      staticClass: "secondary-card margin-t-0 quick-links-account"
                  }, [a("h2", [e._v(e._s(e.$t("message.phone_quick_links_title")))]), a("nav", [a("ul", e._l(e.visibleQuickLinks, (function(t, i) {
                      return a("li", {
                          key: i
                      }, [a("a", {
                          on: {
                              click: function(a) {
                                  return e.selectLink(t.originalIndex)
                              }
                          }
                      }, [e._v(e._s(t.title[e.currentLocale]))])])
                  })), 0)])]), "" === e.settings.pega_marketing.Host || "" === e.settings.pega_marketing.accountPage.placement || "" === e.settings.pega_marketing.accountPage.containerName || e.loading && !e.settings.pega_marketing.showLoadingIndicator || e.errorloading ? a("div", {
                      staticClass: "secondary-card"
                  }, e._l(e.app.offers, (function(t) {
                      return a("section", {
                          key: t.title,
                          staticClass: "offer-card-col"
                      }, [a("img", {
                          staticClass: "offer-img",
                          attrs: {
                              src: "./img/" + t.img,
                              alt: e.$t("message." + t.title)
                          }
                      }), a("div", {
                          staticClass: "content"
                      }, [a("h3", [e._v(e._s(e.$t("message." + t.title)))]), a("p", [e._v(e._s(e.$t("message." + t.message)))]), a("a", {
                          attrs: {
                              href: "./offer.html"
                          },
                          on: {
                              click: e.gotoOfferPage
                          }
                      }, [e._v(e._s(e.$t("message.learnmore")))])])])
                  })), 0) : "" !== e.settings.pega_marketing.Host && e.loading && e.settings.pega_marketing.showLoadingIndicator ? a("div", {
                      staticClass: "secondary-card loading-container",
                      staticStyle: {
                          "min-height": "300px"
                      }
                  }, [e._m(0)]) : a("div", {
                      staticClass: "secondary-card"
                  }, e._l(e.data, (function(e) {
                      return a("Offer", {
                          key: e.title,
                          attrs: {
                              offer: e
                          }
                      })
                  })), 1)])
              },
              Ja = [function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("span", {
                      staticClass: "loading"
                  }, [a("span", {
                      staticClass: "dot"
                  }), a("span", {
                      staticClass: "dot"
                  }), a("span", {
                      staticClass: "dot"
                  })])
              }],
              Ga = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("section", {
                      staticClass: "offer-card-col flex flex-col"
                  }, [e.settings.pega_marketing.showAIOverlay ? a("button", {
                      staticClass: "pi pi-polaris-solid ai-toggle",
                      attrs: {
                          title: "toggle AI"
                      },
                      on: {
                          click: function(t) {
                              return e.toggleAIOverlay(e.offer)
                          }
                      }
                  }) : e._e(), a("div", {
                      staticClass: "offer-card"
                  }, [a("img", {
                      staticClass: "offer-img",
                      attrs: {
                          src: e.offer.img,
                          alt: e.offer.title
                      }
                  }), a("div", {
                      staticClass: "content"
                  }, [a("h3", [e._v(e._s(e.offer.title))]), a("p", [e._v(e._s(e.offer.message))]), "#" === e.offer.url ? a("a", {
                      attrs: {
                          href: "./offer.html"
                      },
                      on: {
                          click: e.gotoOfferPage
                      }
                  }, [e._v(e._s(e.offer.link))]) : "TopURL" === e.settings.pega_marketing.accountPage.clickaction && "" != e.offer.url ? a("a", {
                      attrs: {
                          href: e.offer.url
                      }
                  }, [e._v(e._s(e.$t("message." + e.offer.link)))]) : "Popup" === e.settings.pega_marketing.accountPage.clickaction && "" != e.offer.url ? a("a", {
                      attrs: {
                          href: e.offer.url,
                          target: "_blank"
                      }
                  }, [e._v(e._s(e.$t("message." + e.offer.link)))]) : a("button", {
                      staticClass: "simple",
                      on: {
                          click: function(t) {
                              return e.showOffer(e.offer)
                          }
                      }
                  }, [e._v(e._s(e.$t("message." + e.offer.link)))]), e.settings.pega_marketing.showAIOverlay ? a("AIOverlay", {
                      class: e.offer.showAIoverlay ? "show" : "",
                      attrs: {
                          offer: e.offer
                      }
                  }) : e._e()], 1)])])
              },
              Qa = [],
              Xa = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("div", {
                      staticClass: "ai-overlay"
                  }, [a("ul", [a("li", [a("label", [e._v("Real-time container")]), a("span", [e._v(e._s(e.offer.container))])]), a("li", [a("label", [e._v("Customer ID")]), a("span", [e._v(e._s(e.offer.customerID))])]), a("li", [a("label", [e._v("Interaction ID")]), a("span", [e._v(e._s(e.offer.interactionID))])]), a("li", [a("label", [e._v("Action")]), a("span", [e._v(e._s(e.offer.identifier))])]), a("li", [a("label", [e._v("Treatment")]), a("span", [e._v(e._s(e.offer.treatment))])]), a("li", [a("label", [e._v("Category")]), a("span", [e._v(e._s(e.offer.category))])]), a("li", [a("label", [e._v("Propensity")]), a("span", [e._v(e._s(e.$n(e.offer.propensity, "score")))])]), a("li", [a("label", [e._v("Priority (P*C*V*L)")]), a("span", [e._v(e._s(e.$n(e.offer.priority, "score")))])]), a("li", [a("label", [e._v("Rank")]), a("span", [e._v(e._s(e.offer.rank))])]), a("li", [a("label", [e._v("Placement type")]), a("span", [e._v(e._s(e.offer.placement))])])]), e._m(0)])
              },
              Ya = [function() {
                  var e = this,
                      t = e.$createElement,
                      i = e._self._c || t;
                  return i("div", {
                      staticClass: "footer-img"
                  }, [i("img", {
                      attrs: {
                          src: a("f1f6")
                      }
                  })])
              }],
              Za = {
                  props: {
                      offer: {
                          required: !0,
                          type: Object
                      }
                  }
              },
              ei = Za,
              ti = Object(C["a"])(ei, Xa, Ya, !1, null, null, null),
              ai = ti.exports,
              ii = {
                  props: {
                      offer: {
                          required: !0,
                          type: Object
                      }
                  },
                  data() {
                      return o["b"]
                  },
                  methods: {
                      showOffer(e) {
                          o["b"].isMobilePhone && (o["b"].phonePageName = "offer"), o["b"].offerURL = e.url, o["b"].previousPage = e.name, !0 === o["b"].settings.pega_marketing.useCaptureByChannel && c(this, e, "Clicked")
                      },
                      toggleAIOverlay(e) {
                          e.showAIoverlay = !e.showAIoverlay
                      },
                      gotoOfferPage(e) {
                          p(o["b"], "PageView", "Offer", window.loadPage), window.loadPage = new Date, o["b"].currentPage = "offer.html";
                          var t = o["b"].isAuthenticated ? {
                              userId: o["b"].userId
                          } : {};
                          window.history.pushState(t, "", "offer.html"), this.$gtag && this.$gtag.pageview({
                              page_path: o["b"].currentPage
                          }), o["b"].offerIndex = 0, window.scrollTo({
                              top: 0,
                              behavior: "smooth"
                          }), e.preventDefault()
                      }
                  },
                  components: {
                      AIOverlay: ai
                  }
              },
              si = ii,
              ni = Object(C["a"])(si, Ga, Qa, !1, null, null, null),
              ri = ni.exports;

          function oi(e, t) {
              var a = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                  var i = Object.getOwnPropertySymbols(e);
                  t && (i = i.filter((function(t) {
                      return Object.getOwnPropertyDescriptor(e, t).enumerable
                  }))), a.push.apply(a, i)
              }
              return a
          }

          function li(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var a = null != arguments[t] ? arguments[t] : {};
                  t % 2 ? oi(Object(a), !0).forEach((function(t) {
                      ci(e, t, a[t])
                  })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : oi(Object(a)).forEach((function(t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                  }))
              }
              return e
          }

          function ci(e, t, a) {
              return t in e ? Object.defineProperty(e, t, {
                  value: a,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              }) : e[t] = a, e
          }
          var di = {
                  data() {
                      return li(li({}, o["b"]), {}, {
                          errorloading: !1,
                          loading: !0,
                          data: []
                      })
                  },
                  mounted() {
                      if ("" !== this.settings.pega_marketing.Host && "" !== this.settings.pega_marketing.accountPage.placement && "" !== this.settings.pega_marketing.accountPage.containerName) {
                          var e = this,
                              t = ""; - 1 !== this.userId && this.settings.users[this.userId].customerID && (t = this.settings.users[this.userId].customerID), setTimeout(() => {
                              d(e, "accountPage", t, e.previousPage, "account.html")
                          }, 200)
                      }
                  },
                  computed: {
                      visibleQuickLinks() {
                          return this.settings.quicklinks.filter((e, t) => (e.originalIndex = t, !0 !== e.hide))
                      }
                  },
                  methods: {
                      selectLink(e) {
                          o["b"].quickLinkId = e
                      },
                      gotoOfferPage(e) {
                          o["b"].phonePageName = "offer.html", this.$gtag && this.$gtag.pageview({
                              page_path: o["b"].phonePageName
                          });
                          var t = o["b"].isAuthenticated ? {
                              userId: o["b"].userId
                          } : {};
                          window.history.pushState(t, "", "offer.html"), o["b"].offerIndex = 0, window.scrollTo({
                              top: 0,
                              behavior: "smooth"
                          }), e.preventDefault()
                      }
                  },
                  components: {
                      Offer: ri
                  }
              },
              gi = di,
              pi = Object(C["a"])(gi, za, Ja, !1, null, null, null),
              ui = pi.exports,
              mi = {
                  data() {
                      return o["b"]
                  },
                  components: {
                      TopNav: lt,
                      AccountMainArea: Va,
                      AccountSecondaryArea: ui
                  }
              },
              fi = mi,
              hi = Object(C["a"])(fi, Nt, $t, !1, null, null, null),
              vi = hi.exports,
              _i = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("div", {
                      staticClass: "height-100-pct"
                  }, [a("TopNav", {
                      staticStyle: {
                          display: "none"
                      },
                      attrs: {
                          previousPhonePage: "heroaction" === e.phonePageName ? "" : "help"
                      }
                  }), a("main", [a("MashupMainArea")], 1)], 1)
              },
              bi = [],
              yi = {
                  data() {
                      return o["b"]
                  },
                  components: {
                      TopNav: lt,
                      MashupMainArea: ca
                  }
              },
              ki = yi,
              wi = Object(C["a"])(ki, _i, bi, !1, null, null, null),
              Ci = wi.exports,
              Pi = {
                  data() {
                      return o["b"]
                  },
                  components: {
                      HomePage: Be,
                      OfferPage: et,
                      LoginPage: vt,
                      IntroQuickLinks: St,
                      QuickLinks: Ct,
                      Account: vi,
                      Mashup: Ci
                  }
              },
              xi = Pi,
              Oi = Object(C["a"])(xi, le, ce, !1, null, null, null),
              Ii = Oi.exports,
              Ai = {
                  data() {
                      return o["b"]
                  },
                  components: {
                      Header: oe,
                      Main: Ii,
                      Aside: S
                  }
              },
              Si = Ai,
              Ni = Object(C["a"])(Si, f, h, !1, null, null, null),
              $i = Ni.exports,
              Di = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return 1 == e.homeHeroAction || 1 == e.viewKMHelp ? a("div", {
                      staticClass: "form flex flex-col"
                  }, [a("MainHeader"), a("main", {
                      staticClass: "wrap flex flex-col"
                  }, [a("MashupMainArea")], 1), a("MainFooter")], 1) : "" !== e.offerURL ? a("div", {
                      staticClass: "form flex flex-col"
                  }, [a("MainHeader"), a("main", {
                      staticClass: "wrap flex flex-col"
                  }, [a("MicroSiteMainArea")], 1), a("MainFooter")], 1) : a("div", {
                      staticClass: "front"
                  }, [e.settings.pega_marketing.enableRTS ? a("RTSOverlay") : e._e(), a("MainHeader"), a("main", {
                      class: "flex flex-col" + (e.isRTSEnabled ? " rts-enabled" : "")
                  }, [a("FrontMainArea"), a("FrontSecondaryArea")], 1), a("MainFooter")], 1)
              },
              Mi = [],
              Ti = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("header", {
                      staticClass: "flex flex-col",
                      style: e.isAuthenticated || "" != e.offerURL || "" == e.homeHeroImg ? {} : {
                          backgroundImage: "url(" + e.homeHeroImg + ")"
                      }
                  }, [a("div", {
                      staticClass: "wrap header flex"
                  }, [a("a", [a("img", {
                      staticClass: "logo",
                      attrs: {
                          src: "./img/u+-logo.svg",
                          alt: "U+"
                      },
                      on: {
                          click: e.goHomePage
                      }
                  })]), a("nav", {
                      staticClass: "flex-grow-1"
                  }, [a("ul", {
                      staticClass: "flex flex-mid-align flex-grow-1"
                  }, e._l(e.app.menuitems, (function(t, i) {
                      return a("MenuItem", {
                          key: i,
                          attrs: {
                              pagetype: t.pagetype,
                              title: t.title,
                              href: e.app.offer.length > 1 ? "offer" + (i + 1) + ".html" : null
                          }
                      })
                  })), 1)]), !e.isAuthenticated && "" === e.settings.kmhelp.username || "" === e.settings.kmhelp.url ? e._e() : a("a", {
                      staticClass: "kmhelp",
                      on: {
                          click: e.showKMHelp
                      }
                  }, [e._v(e._s(e.$t("message.kmhelp")))]), e.isAuthenticated ? a("OperatorButton") : a("LoginButton"), a("MainHeaderMenu")], 1), 0 === e.currentPage.indexOf("offer") ? a("div", [a("h1", [e._v(e._s(e.$t("message." + e.app.offer[e.offerIndex].header.title)))]), a("p", [e._v(e._s(e.$t("message." + e.app.offer[e.offerIndex].header.msg)))])]) : e._e()])
              },
              ji = [],
              Li = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("div", {
                      staticClass: "menu"
                  }, [a("button", {
                      staticClass: "launch-menu",
                      on: {
                          click: e.showMenuOverlay
                      }
                  }, [e._v("Menu")]), a("div", {
                      directives: [{
                          name: "clickoutside",
                          rawName: "v-clickoutside",
                          value: {
                              handler: "onClickOutMenuOverlay"
                          },
                          expression: "{ handler: 'onClickOutMenuOverlay' }"
                      }],
                      staticClass: "menu-overlay flex flex-col",
                      style: {
                          height: e.isActive ? e.heightVal : ""
                      }
                  }, [a("ul", [e._l(e.app.menuitems, (function(e) {
                      return a("MenuItem", {
                          key: e.title,
                          attrs: {
                              pagetype: e.pagetype,
                              title: e.title
                          }
                      })
                  })), e.isAuthenticated ? e._e() : a("li", [a("a", {
                      staticClass: "launch-login-overlay",
                      on: {
                          click: e.showlogin
                      }
                  }, [e._v(e._s(e.$t("message.login")))])])], 2)])])
              },
              Ei = [];

          function Ri(e, t) {
              var a = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                  var i = Object.getOwnPropertySymbols(e);
                  t && (i = i.filter((function(t) {
                      return Object.getOwnPropertyDescriptor(e, t).enumerable
                  }))), a.push.apply(a, i)
              }
              return a
          }

          function Bi(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var a = null != arguments[t] ? arguments[t] : {};
                  t % 2 ? Ri(Object(a), !0).forEach((function(t) {
                      Ui(e, t, a[t])
                  })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : Ri(Object(a)).forEach((function(t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                  }))
              }
              return e
          }

          function Ui(e, t, a) {
              return t in e ? Object.defineProperty(e, t, {
                  value: a,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              }) : e[t] = a, e
          }
          var Hi = {
                  data() {
                      return Bi(Bi({}, o["b"]), {}, {
                          isActive: !1,
                          heightVal: "204px"
                      })
                  },
                  methods: {
                      showlogin() {
                          this.isActive = !1, this.toggleLoginOverlay(!0)
                      },
                      toggleLoginOverlay(e) {
                          var t = document.getElementsByClassName("launch-login");
                          Array.prototype.forEach.call(t, t => {
                              (e && t.nextElementSibling.classList.contains("hidden") || !e && t.nextElementSibling.classList.contains("show")) && t.click()
                          })
                      },
                      showMenuOverlay(e) {
                          this.isActive = !this.isActive, !0 === this.isActive && (this.heightVal = "".concat(e.target.nextElementSibling.firstElementChild.clientHeight, "px"), this.toggleLoginOverlay(!1))
                      },
                      onClickOutMenuOverlay(e) {
                          e.target.classList.contains("launch-menu") || (this.isActive = !1)
                      }
                  },
                  components: {
                      MenuItem: x
                  }
              },
              qi = Hi,
              Wi = Object(C["a"])(qi, Li, Ei, !1, null, null, null),
              Fi = Wi.exports,
              Ki = {
                  data() {
                      return o["b"]
                  },
                  mounted() {
                      window.addEventListener("message", this.iFrameMessageListener)
                  },
                  destroyed() {
                      window.removeEventListener("message", this.iFrameMessageListener)
                  },
                  methods: {
                      iFrameMessageListener(e) {
                          if ("pegaMashupNavigateBack" === e.data) o["b"].reloadAccountMashup += 1, this.goHomePage();
                          else if ("object" === typeof e.data && "undefined" !== typeof e.data.key) "Intent" === e.data.key && "string" === typeof e.data.value ? (o["b"].intent = e.data.value, o["b"].reloadOffer += 1) : "PreviousPage" === e.data.key && "string" === typeof e.data.value && (o["b"].previousPage = e.data.value, o["b"].reloadOffer += 1);
                          else if ("object" === typeof e.data && "undefined" !== typeof e.data.action) "showkmarticle" === e.data.action && "string" === typeof e.data.articleid && (o["b"].KMArticleID = e.data.articleid, this.showKMHelp());
                          else if (e.data) {
                              var t = {};
                              try {
                                  t = JSON.parse(e.data)
                              } catch (n) {
                                  t = {}
                              }
                              if ("PWMashup" === t.channelName && t.message && t.message.payload && "confirm" === t.message.payload.name && -1 === t.message.uid.indexOf("ProactiveChat") && -1 !== o["b"].quickLinkId) {
                                  var a = o["b"].settings.quicklinks[o["b"].quickLinkId].url,
                                      i = document.createElement("iframe"),
                                      s = "".concat(a, "?pyActivity=LogOff");
                                  i.setAttribute("src", s), i.setAttribute("style", "display:none"), i.onload = function() {
                                      document.body.removeChild(i)
                                  }, document.body.appendChild(i)
                              }
                          }
                      },
                      goHomePage() {
                          o["b"].quickLinkId = -1, o["b"].viewBill = -1, o["b"].viewBanner = -1, o["b"].homeHeroAction = -1, o["b"].offerAction = -1, o["b"].toDo = -1, o["b"].viewKMHelp = -1, o["b"].offerURL = "", o["b"].offerIndex = 0, window.history && (o["b"].isAuthenticated ? (o["b"].currentPage = "account", window.history.pushState({
                              userId: o["b"].userId
                          }, "", o["b"].currentPage)) : (o["b"].currentPage = "index.html", window.history.pushState({}, "", o["b"].currentPage)), window.scrollTo({
                              top: 0,
                              behavior: "smooth"
                          })), p(o["b"], "PageView", "Home", window.loadPage), window.loadPage = new Date
                      },
                      showKMHelp() {
                          this.goHomePage(), o["b"].viewKMHelp = 1, o["b"].logoutURL.kmhelp = "".concat(o["b"].settings.kmhelp.url, "?pyActivity=LogOff"), o["b"].reloadMashup += 1
                      }
                  },
                  components: {
                      MenuItem: x,
                      LoginButton: ie,
                      OperatorButton: H,
                      MainHeaderMenu: Fi
                  }
              },
              Vi = Ki,
              zi = Object(C["a"])(Vi, Ti, ji, !1, null, null, null),
              Ji = zi.exports,
              Gi = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return "" === e.settings.pega_marketing.Host || "" === e.settings.pega_marketing.homePage.placement || "" === e.settings.pega_marketing.homePage.containerName || e.loading && !e.settings.pega_marketing.showLoadingIndicator || e.errorloading ? a("div", {
                      staticClass: "flex flex-col"
                  }, [a("div", {
                      staticClass: "wrap hero-wrap flex"
                  }, [a("div", {
                      staticClass: "flex flex-col"
                  }, [a("h1", {
                      staticClass: "hero"
                  }, [e._v(" " + e._s(e.$t("message." + e.app.herotext.title)) + " "), a("span", [e._v(e._s(e.$t("message." + e.app.herotext.titlespan)))])]), a("button", {
                      staticClass: "more",
                      on: {
                          click: e.applyHeroAction
                      }
                  }, [e._v(" " + e._s(e.$t("message." + e.app.herotext.buttonlabel)) + " ")])])]), a("div", {
                      staticClass: "wrap options primary-options"
                  }, e._l(e.app.primarydetails, (function(t, i) {
                      return a("section", {
                          key: i,
                          staticClass: "front-option"
                      }, [a("div", [a("img", {
                          staticClass: "option",
                          attrs: {
                              src: t.img,
                              alt: e.$t("message." + t.title)
                          }
                      })]), a("div", {
                          staticClass: "details"
                      }, [a("h2", {
                          staticClass: "option-header"
                      }, [e._v(e._s(e.$t("message." + t.title)))]), a("p", [e._v(e._s(e.$t("message." + t.message)))]), a("a", {
                          attrs: {
                              href: "./offer.html"
                          },
                          on: {
                              click: e.gotoOfferPage
                          }
                      }, [e._v(e._s(e.$t("message." + t.link)))])])])
                  })), 0)]) : "" !== e.settings.pega_marketing.Host && e.loading && e.settings.pega_marketing.showLoadingIndicator ? a("div", {
                      staticClass: "flex flex-col"
                  }, [e._m(0), a("div", {
                      staticClass: "wrap options primary-options",
                      staticStyle: {
                          "min-height": "400px"
                      }
                  }, e._l(e.app.primarydetails, (function(t, i) {
                      return a("section", {
                          key: i,
                          staticClass: "front-option loading-container"
                      }, [e._m(1, !0)])
                  })), 0)]) : a("div", {
                      staticClass: "flex flex-col"
                  }, [e.isAuthenticated || 1 == e.homeHeroAction || "" !== e.offerURL ? e._e() : a("div", {
                      staticClass: "wrap flex flex-col"
                  }, [!e.settings.pega_marketing.showAIOverlay || "" === e.hero_offer.url && "" === e.hero_offer.img ? e._e() : a("button", {
                      staticClass: "pi pi-polaris-solid ai-toggle",
                      attrs: {
                          title: "toggle AI"
                      },
                      on: {
                          click: function(t) {
                              return e.toggleAIOverlay(e.hero_offer)
                          }
                      }
                  }), a("div", {
                      staticClass: "flex hero-wrap",
                      class: "" !== e.hero_offer.img ? "hero-with-img" : ""
                  }, [a("div", {
                      staticClass: "flex flex-col"
                  }, [a("h1", {
                      staticClass: "hero"
                  }, [e._v(" " + e._s(e.hero_offer.title) + " "), a("span", [e._v(e._s(e.hero_offer.message))])]), "TopURL" === e.settings.pega_marketing.homePage.clickaction && "" !== e.hero_offer.url ? a("a", {
                      attrs: {
                          href: e.hero_offer.url
                      }
                  }, [e._v(e._s(e.hero_offer.link))]) : "Popup" === e.settings.pega_marketing.homePage.clickaction && "" !== e.hero_offer.url ? a("a", {
                      attrs: {
                          href: e.hero_offer.url,
                          target: "_blank"
                      }
                  }, [e._v(e._s(e.hero_offer.link))]) : a("button", {
                      staticClass: "more",
                      on: {
                          click: e.applyHeroAction
                      }
                  }, [e._v(" " + e._s(e.hero_offer.link) + " ")])]), "" !== e.hero_offer.img ? a("div", [a("img", {
                      attrs: {
                          src: e.hero_offer.img,
                          alt: e.hero_offer.title
                      }
                  })]) : e._e(), e.settings.pega_marketing.showAIOverlay ? a("AIOverlay", {
                      class: e.hero_offer.showAIoverlay ? "show" : "",
                      attrs: {
                          offer: e.hero_offer
                      }
                  }) : e._e()], 1)]), a("div", {
                      staticClass: "wrap options primary-options"
                  }, e._l(e.data, (function(t, i) {
                      return a("section", {
                          key: i,
                          staticClass: "front-option cdh-offer",
                          on: {
                              mouseover: function(a) {
                                  return e.checkRTSEventHover(i, t, !0)
                              },
                              mouseleave: function(a) {
                                  return e.checkRTSEventHover(i, t, !1)
                              }
                          }
                      }, [e.settings.pega_marketing.showAIOverlay ? a("button", {
                          staticClass: "pi pi-polaris-solid ai-toggle",
                          attrs: {
                              title: "toggle AI"
                          },
                          on: {
                              click: function(a) {
                                  return e.toggleAIOverlay(t)
                              }
                          }
                      }) : e._e(), a("div", {
                          staticClass: "offer-card",
                          attrs: {
                              "data-offer-index": i
                          }
                      }, [a("div", [a("img", {
                          staticClass: "option",
                          attrs: {
                              src: t.img,
                              alt: t.title
                          }
                      })]), a("div", {
                          staticClass: "details"
                      }, [a("h2", {
                          staticClass: "option-header"
                      }, [e._v(e._s(t.title))]), a("p", [e._v(e._s(t.message))]), "TopURL" === e.settings.pega_marketing.homePage.clickaction && "" != t.url ? a("a", {
                          attrs: {
                              href: t.url
                          }
                      }, [e._v(e._s(e.$t("message." + t.link)))]) : "Popup" === e.settings.pega_marketing.homePage.clickaction && "" != t.url ? a("a", {
                          attrs: {
                              href: t.url,
                              target: "_blank"
                          }
                      }, [e._v(e._s(e.$t("message." + t.link)))]) : a("button", {
                          staticClass: "simple",
                          on: {
                              click: function(a) {
                                  return e.showOffer(t)
                              }
                          }
                      }, [e._v(" " + e._s(e.$t("message." + t.link)) + " ")])]), e.settings.pega_marketing.showAIOverlay ? a("AIOverlay", {
                          class: t.showAIoverlay ? "show" : "",
                          attrs: {
                              offer: t
                          }
                      }) : e._e()], 1)])
                  })), 0)])
              },
              Qi = [function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("div", {
                      staticClass: "wrap hero-wrap flex"
                  }, [a("div", {
                      staticClass: "flex flex-col"
                  })])
              }, function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("span", {
                      staticClass: "loading"
                  }, [a("span", {
                      staticClass: "dot"
                  }), a("span", {
                      staticClass: "dot"
                  }), a("span", {
                      staticClass: "dot"
                  })])
              }];

          function Xi(e, t) {
              var a = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                  var i = Object.getOwnPropertySymbols(e);
                  t && (i = i.filter((function(t) {
                      return Object.getOwnPropertyDescriptor(e, t).enumerable
                  }))), a.push.apply(a, i)
              }
              return a
          }

          function Yi(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var a = null != arguments[t] ? arguments[t] : {};
                  t % 2 ? Xi(Object(a), !0).forEach((function(t) {
                      Zi(e, t, a[t])
                  })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : Xi(Object(a)).forEach((function(t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                  }))
              }
              return e
          }

          function Zi(e, t, a) {
              return t in e ? Object.defineProperty(e, t, {
                  value: a,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              }) : e[t] = a, e
          }
          var es = {
                  data() {
                      return Yi(Yi({}, o["b"]), {}, {
                          errorloading: !1,
                          loading: !0,
                          data: [],
                          RTSstate: {
                              index: -1,
                              id: 0
                          },
                          hero_offer: {
                              img: "",
                              url: "",
                              title: this.$t("message.".concat(o["b"].app.herotext.title)),
                              message: this.$t("message.".concat(o["b"].app.herotext.titlespan)),
                              link: this.$t("message.".concat(o["b"].app.herotext.buttonlabel))
                          }
                      })
                  },
                  mounted() {
                      if ("" !== this.settings.pega_marketing.Host && "" !== this.settings.pega_marketing.homePage.placement && "" !== this.settings.pega_marketing.homePage.containerName) {
                          var e = this;
                          setTimeout(() => {
                              d(e, "homePage", "", e.previousPage, o["b"].currentPage)
                          }, 200)
                      }
                  },
                  updated() {
                      if (window.IntersectionObserver && !0 === o["b"].settings.pega_marketing.useCaptureByChannel) {
                          var e = new IntersectionObserver(t => {
                              t.forEach(t => {
                                  if (t.isIntersecting) {
                                      var a = t.target.getAttribute("data-offer-index");
                                      c(this, this.data[a], "Impression"), e.unobserve(t.target)
                                  }
                              })
                          }, {
                              threshold: 1
                          });
                          document.querySelectorAll(".offer-card").forEach(t => {
                              e.observe(t)
                          })
                      }
                  },
                  methods: {
                      checkRTSEventHover(e, t, a) {
                          !0 === o["b"].isRTSEnabled && (-1 === this.RTSstate.index ? (this.RTSstate.index = e, this.RTSstate.id = setTimeout(() => {
                              this.generateRTSEvent(t)
                          }, 3e3)) : this.RTSstate.index === e && !1 === a && (clearTimeout(this.RTSstate.id), this.RTSstate.id = 0, this.RTSstate.index = -1))
                      },
                      generateRTSEvent(e) {
                          var t = document.querySelector(".comment"),
                              a = new Date,
                              i = a.getMonth() + 1;
                          i < 10 && (i = "0".concat(i));
                          var s = "".concat(a.getFullYear(), "-").concat(i, "-").concat(a.getDate()),
                              n = "".concat(a.getHours(), ":").concat(a.getMinutes(), ":").concat(a.getSeconds());
                          t.innerHTML += "<p>".concat(s, " ").concat(n, " - Sending event - group:").concat(e.category, " - value:").concat(e.name, "</p"), t.scrollTop = t.scrollHeight, g(this, e)
                      },
                      showOffer(e) {
                          o["b"].offerURL = e.url, o["b"].previousPage = e.name, !0 === o["b"].settings.pega_marketing.useCaptureByChannel && c(this, e, "Clicked")
                      },
                      applyHeroAction() {
                          "" === this.hero_offer.url ? (o["b"].homeHeroAction = 1, window.history.pushState({}, "", "heroaction"), window.scrollTo({
                              top: 0,
                              behavior: "smooth"
                          })) : (o["b"].offerURL = this.hero_offer.url, o["b"].previousPage = this.hero_offer.name), p(o["b"], "PegaView", "HeroOffer", window.loadPage), window.loadPage = new Date
                      },
                      toggleAIOverlay(e) {
                          e.showAIoverlay = !e.showAIoverlay
                      },
                      gotoOfferPage(e) {
                          o["b"].currentPage = "offer.html", this.$gtag && this.$gtag.pageview({
                              page_path: o["b"].currentPage
                          }), p(o["b"], "PegaView", "Offer", window.loadPage), window.loadPage = new Date;
                          var t = o["b"].isAuthenticated ? {
                              userId: o["b"].userId
                          } : {};
                          window.history.pushState(t, "", "offer.html"), o["b"].offerIndex = 0, window.scrollTo({
                              top: 0,
                              behavior: "smooth"
                          }), e.preventDefault()
                      }
                  },
                  components: {
                      AIOverlay: ai
                  }
              },
              ts = es,
              as = Object(C["a"])(ts, Gi, Qi, !1, null, null, null),
              is = as.exports,
              ss = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("div", {
                      staticClass: "secondary-options"
                  }, [a("div", {
                      staticClass: "banner",
                      style: {
                          backgroundImage: "url(img/secondary-options.jpg)"
                      }
                  }), a("div", {
                      staticClass: "wrap options"
                  }, e._l(e.app.secondarydetails, (function(t) {
                      return a("section", {
                          key: t.className,
                          staticClass: "front-option",
                          class: t.className
                      }, [a("h2", {
                          staticClass: "option-header"
                      }, [e._v(e._s(e.$t("message." + t.title)))]), a("p", [e._v(e._s(e.$t("message." + t.message)))]), a("a", [e._v(e._s(e.$t("message." + t.link)))])])
                  })), 0)])
              },
              ns = [],
              rs = {
                  data() {
                      return o["b"]
                  }
              },
              os = rs,
              ls = Object(C["a"])(os, ss, ns, !1, null, null, null),
              cs = ls.exports,
              ds = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("section", {
                      staticClass: "flex flex-col full-height"
                  }, [a("iframe", {
                      staticStyle: {
                          overflow: "hidden"
                      },
                      attrs: {
                          src: e.offerURL,
                          width: "100%",
                          height: "100%",
                          border: "0",
                          frameborder: "0"
                      }
                  })])
              },
              gs = [],
              ps = {
                  data() {
                      return o["b"]
                  }
              },
              us = ps,
              ms = Object(C["a"])(us, ds, gs, !1, null, null, null),
              fs = ms.exports,
              hs = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("div", {
                      class: "rts-overlay" + (e.isExpanded ? " expanded" : "")
                  }, [a("button", {
                      staticClass: "pi pi-stopwatch-solid rts-toggle rts-overlay-toggle",
                      attrs: {
                          title: "toggle RTS overlay"
                      },
                      on: {
                          click: function(t) {
                              return e.toggleRTSOverlay()
                          }
                      }
                  }), a("div", {
                      staticClass: "flex"
                  }, [a("div", {
                      staticClass: "flex flex-1"
                  }, [e._m(0), a("button", {
                      class: "pi rts-enable rts-toggle" + (e.isEnabled ? " pi-pause-solid pi-rts-error" : " pi-play-solid"),
                      attrs: {
                          title: "toggle RTS feature"
                      },
                      on: {
                          click: function(t) {
                              return e.toggleRTSFeature()
                          }
                      }
                  })]), a("div", {
                      staticClass: "comment"
                  }, [e._v(e._s(e.msg))])])])
              },
              vs = [function() {
                  var e = this,
                      t = e.$createElement,
                      i = e._self._c || t;
                  return i("div", {
                      staticClass: "flex flex-col"
                  }, [i("img", {
                      attrs: {
                          width: "120",
                          src: a("f1f6")
                      }
                  }), i("span", [e._v("Real-time data streaming")])])
              }];

          function _s(e, t) {
              var a = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                  var i = Object.getOwnPropertySymbols(e);
                  t && (i = i.filter((function(t) {
                      return Object.getOwnPropertyDescriptor(e, t).enumerable
                  }))), a.push.apply(a, i)
              }
              return a
          }

          function bs(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var a = null != arguments[t] ? arguments[t] : {};
                  t % 2 ? _s(Object(a), !0).forEach((function(t) {
                      ys(e, t, a[t])
                  })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : _s(Object(a)).forEach((function(t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                  }))
              }
              return e
          }

          function ys(e, t, a) {
              return t in e ? Object.defineProperty(e, t, {
                  value: a,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              }) : e[t] = a, e
          }
          var ks = {
                  data() {
                      return bs(bs({}, o["b"]), {}, {
                          isExpanded: !1,
                          isEnabled: !1,
                          msg: "Click play to enable detection of user patterns."
                      })
                  },
                  methods: {
                      toggleRTSOverlay() {
                          this.isExpanded = !this.isExpanded
                      },
                      toggleRTSFeature() {
                          this.isEnabled = !this.isEnabled, o["b"].isRTSEnabled = this.isEnabled
                      }
                  }
              },
              ws = ks,
              Cs = Object(C["a"])(ws, hs, vs, !1, null, null, null),
              Ps = Cs.exports,
              xs = {
                  data() {
                      return o["b"]
                  },
                  components: {
                      MainHeader: Ji,
                      FrontMainArea: is,
                      MashupMainArea: ca,
                      FrontSecondaryArea: cs,
                      MainFooter: je,
                      MicroSiteMainArea: fs,
                      RTSOverlay: Ps
                  }
              },
              Os = xs,
              Is = Object(C["a"])(Os, Di, Mi, !1, null, null, null),
              As = Is.exports,
              Ss = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("div", {
                      staticClass: "form flex flex-col"
                  }, [a("MainHeader"), "" !== e.offerURL ? a("main", {
                      staticClass: "wrap"
                  }, [a("MicroSiteMainArea")], 1) : -1 === e.quickLinkId && -1 === e.viewBill && -1 === e.viewKMHelp && -1 === e.viewBanner ? a("main", {
                      class: "flex flex-col" + (e.isRTSEnabled ? " rts-enabled" : "")
                  }, [e.settings.pega_marketing.enableRTS ? a("RTSOverlay") : e._e(), "commercial_bank" === e.app.industry ? a("div", [-1 != e.userId ? a("h1", {
                      staticClass: "wrap"
                  }, [e._v(e._s(e.$t("message.hello") + e.showWelcomeMessage()))]) : a("h1", {
                      staticClass: "wrap"
                  }, [e._v(e._s(e.$t("message.hello")))]), a("div", {
                      staticClass: "wrap cols flex flex-wrap"
                  }, [a("BankAccountMainArea"), a("AccountSecondaryArea", {
                      key: e.reloadOffer
                  })], 1)]) : a("div", [a("h1", {
                      staticClass: "wrap"
                  }, [e._v(e._s(e.$t("message.accountoverview")))]), a("div", {
                      staticClass: "wrap cols flex flex-wrap"
                  }, [a("AccountMainArea"), a("AccountSecondaryArea", {
                      key: e.reloadOffer
                  })], 1)])], 1) : a("main", {
                      key: e.reloadMashup,
                      staticClass: "wrap"
                  }, [a("MashupMainArea")], 1), a("MainFooter")], 1)
              },
              Ns = [],
              $s = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("div", {
                      staticClass: "col col-1 primary-card"
                  }, ["undefined" !== typeof e.settings.banner && !0 !== e.settings.banner.hidebanner && "true" !== e.settings.banner.hidebanner ? a("Banner") : e._e(), "undefined" !== typeof e.settings.todo && "" !== e.settings.todo.url ? a("MashupMainArea", {
                      key: e.reloadAccountMashup
                  }) : e._e(), a("section", {
                      staticClass: "content cash-projections"
                  }, [a("div", {
                      staticClass: "flex"
                  }, [a("h2", [e._v(e._s(e.$t("message.cash_projections")))]), a("div", [a("h4", [e._v(e._s(e.$t("message.income")))]), e._m(0)]), a("div", [a("h4", [e._v(e._s(e.$t("message.cost")))]), e._m(1)]), a("div", [a("h4", [e._v(e._s(e.$t("message.balance")))]), e._m(2)])]), a("div", [a("h4", {
                      staticClass: "dropdown"
                  }, [e._v(" " + e._s(e.$t("message.cash_projections_dropdown")) + " "), a("i", {
                      staticClass: "pi pi-caret-down"
                  })])]), a("svg", {
                      attrs: {
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 880 305"
                      }
                  }, [a("g", {
                      attrs: {
                          transform: "translate(80,40)"
                      }
                  }, [a("g", {
                      staticClass: "axis",
                      attrs: {
                          color: "#7b7b7b",
                          fill: "#7b7b7b",
                          "font-size": "18",
                          "font-family": "Open Sans",
                          "text-anchor": "end",
                          transform: "rotate(270)"
                      }
                  }, [a("text", {
                      attrs: {
                          x: "-165",
                          y: "-43",
                          dy: "0.32em",
                          "text-anchor": "start"
                      }
                  }, [e._v(e._s(e.$t("message.income_and_cost")))]), a("text", {
                      attrs: {
                          x: "-155",
                          y: "745",
                          dy: "0.32em",
                          "text-anchor": "start"
                      }
                  }, [e._v(e._s(e.$t("message.cash_and_balance")))])]), a("g", {
                      staticClass: "axis",
                      attrs: {
                          transform: "translate(0,200)",
                          fill: "none",
                          "font-size": "14",
                          "font-family": "Open Sans",
                          "text-anchor": "middle"
                      }
                  }, [a("path", {
                      staticClass: "domain",
                      attrs: {
                          stroke: "#e4e7eb",
                          d: "M0,0V0.5H700.0V0"
                      }
                  }), a("text", {
                      attrs: {
                          fill: "#7b7b7b",
                          x: "-10",
                          dy: "0.4em"
                      }
                  }, [e._v("0")]), a("text", {
                      attrs: {
                          fill: "#7b7b7b",
                          x: "710",
                          dy: "0.4em"
                      }
                  }, [e._v("0")])]), a("g", {
                      staticClass: "axis",
                      attrs: {
                          transform: "translate(0,150)",
                          fill: "none",
                          "font-size": "14",
                          "font-family": "Open Sans",
                          "text-anchor": "middle"
                      }
                  }, [a("path", {
                      staticClass: "domain",
                      attrs: {
                          stroke: "#e4e7eb",
                          d: "M0,0V0.5H700.0V0"
                      }
                  }), a("text", {
                      attrs: {
                          fill: "#7b7b7b",
                          x: "-15",
                          dy: "0.4em"
                      }
                  }, [e._v(".5M")]), a("text", {
                      attrs: {
                          fill: "#7b7b7b",
                          x: "715",
                          dy: "0.4em"
                      }
                  }, [e._v("50k")])]), a("g", {
                      staticClass: "axis",
                      attrs: {
                          transform: "translate(0,100)",
                          fill: "none",
                          "font-size": "14",
                          "font-family": "Open Sans",
                          "text-anchor": "middle"
                      }
                  }, [a("path", {
                      staticClass: "domain",
                      attrs: {
                          stroke: "#e4e7eb",
                          d: "M0,0V0.5H700.0V0"
                      }
                  }), a("text", {
                      attrs: {
                          fill: "#7b7b7b",
                          x: "-15",
                          dy: "0.4em"
                      }
                  }, [e._v("1M")]), a("text", {
                      attrs: {
                          fill: "#7b7b7b",
                          x: "715",
                          dy: "0.4em"
                      }
                  }, [e._v("100k")])]), a("g", {
                      staticClass: "axis",
                      attrs: {
                          transform: "translate(0,50)",
                          fill: "none",
                          "font-size": "14",
                          "font-family": "Open Sans",
                          "text-anchor": "middle"
                      }
                  }, [a("path", {
                      staticClass: "domain",
                      attrs: {
                          stroke: "#e4e7eb",
                          d: "M0,0V0.5H700.0V0"
                      }
                  }), a("text", {
                      attrs: {
                          fill: "#7b7b7b",
                          x: "-15",
                          dy: "0.4em"
                      }
                  }, [e._v("1.5M")]), a("text", {
                      attrs: {
                          fill: "#7b7b7b",
                          x: "715",
                          dy: "0.4em"
                      }
                  }, [e._v("150k")])]), a("g", {
                      staticClass: "axis",
                      attrs: {
                          transform: "translate(0,0)",
                          fill: "none",
                          "font-size": "14",
                          "font-family": "Open Sans",
                          "text-anchor": "middle"
                      }
                  }, [a("path", {
                      staticClass: "domain",
                      attrs: {
                          stroke: "#e4e7eb",
                          d: "M0,0V0.5H700.0V0"
                      }
                  }), a("text", {
                      attrs: {
                          fill: "#7b7b7b",
                          x: "-15",
                          dy: "0.4em"
                      }
                  }, [e._v("2M")]), a("text", {
                      attrs: {
                          fill: "#7b7b7b",
                          x: "715",
                          dy: "0.4em"
                      }
                  }, [e._v("200k")])]), a("g", [a("g", {
                      attrs: {
                          transform: "translate(15,0)"
                      }
                  }, [a("rect", {
                      attrs: {
                          x: "19",
                          y: "103",
                          width: "22",
                          height: "97",
                          fill: "#67c100"
                      }
                  }), a("rect", {
                      attrs: {
                          x: "41",
                          y: "115",
                          width: "22",
                          height: "85",
                          fill: "#ea5959"
                      }
                  })]), a("g", {
                      attrs: {
                          transform: "translate(130,0)"
                      }
                  }, [a("rect", {
                      attrs: {
                          x: "19",
                          y: "86",
                          width: "22",
                          height: "114",
                          fill: "#67c100"
                      }
                  }), a("rect", {
                      attrs: {
                          x: "41",
                          y: "100",
                          width: "22",
                          height: "100",
                          fill: "#ea5959"
                      }
                  })]), a("g", {
                      attrs: {
                          transform: "translate(245,0)"
                      }
                  }, [a("rect", {
                      attrs: {
                          x: "19",
                          y: "90",
                          width: "22",
                          height: "110",
                          fill: "#67c100"
                      }
                  }), a("rect", {
                      attrs: {
                          x: "41",
                          y: "103",
                          width: "22",
                          height: "97",
                          fill: "#ea5959"
                      }
                  })]), a("g", {
                      attrs: {
                          transform: "translate(360,0)"
                      }
                  }, [a("rect", {
                      attrs: {
                          x: "19",
                          y: "103",
                          width: "22",
                          height: "97",
                          fill: "#67c100"
                      }
                  }), a("rect", {
                      attrs: {
                          x: "41",
                          y: "80",
                          width: "22",
                          height: "120",
                          fill: "#ea5959"
                      }
                  })]), a("g", {
                      attrs: {
                          transform: "translate(475,0)"
                      }
                  }, [a("rect", {
                      attrs: {
                          x: "19",
                          y: "140",
                          width: "22",
                          height: "60",
                          fill: "#67c100"
                      }
                  }), a("rect", {
                      attrs: {
                          x: "41",
                          y: "130",
                          width: "22",
                          height: "70",
                          fill: "#ea5959"
                      }
                  })]), a("g", {
                      attrs: {
                          transform: "translate(590,0)"
                      }
                  }, [a("rect", {
                      attrs: {
                          x: "19",
                          y: "103",
                          width: "22",
                          height: "97",
                          fill: "#67c100"
                      }
                  }), a("rect", {
                      attrs: {
                          x: "41",
                          y: "110",
                          width: "22",
                          height: "90",
                          fill: "#ea5959"
                      }
                  })])]), a("g", {
                      staticClass: "axis",
                      attrs: {
                          transform: "translate(0,205)",
                          fill: "none",
                          "font-size": "16",
                          "font-family": "Open Sans",
                          "text-anchor": "middle"
                      }
                  }, [a("g", {
                      staticClass: "tick",
                      attrs: {
                          opacity: "1",
                          transform: "translate(55,0)"
                      }
                  }, [a("text", {
                      attrs: {
                          fill: "#7b7b7b",
                          y: "9",
                          dy: "0.71em"
                      }
                  }, [e._v(e._s(e.$d(e.getMonth(-4), "month_only")))])]), a("g", {
                      staticClass: "tick",
                      attrs: {
                          opacity: "1",
                          transform: "translate(170,0)"
                      }
                  }, [a("text", {
                      attrs: {
                          fill: "#7b7b7b",
                          y: "9",
                          dy: "0.71em"
                      }
                  }, [e._v(e._s(e.$d(e.getMonth(-3), "month_only")))])]), a("g", {
                      staticClass: "tick",
                      attrs: {
                          opacity: "1",
                          transform: "translate(285,0)"
                      }
                  }, [a("text", {
                      attrs: {
                          fill: "#7b7b7b",
                          y: "9",
                          dy: "0.71em"
                      }
                  }, [e._v(e._s(e.$d(e.getMonth(-2), "month_only")))])]), a("g", {
                      staticClass: "tick",
                      attrs: {
                          opacity: "1",
                          transform: "translate(400,0)"
                      }
                  }, [a("text", {
                      attrs: {
                          fill: "#7b7b7b",
                          y: "9",
                          dy: "0.71em"
                      }
                  }, [e._v(e._s(e.$d(e.getMonth(-1), "month_only")))])]), a("g", {
                      staticClass: "tick",
                      attrs: {
                          opacity: "1",
                          transform: "translate(515,0)"
                      }
                  }, [a("text", {
                      attrs: {
                          fill: "#7b7b7b",
                          y: "9",
                          dy: "0.71em"
                      }
                  }, [e._v(e._s(e.$d(e.getMonth(0), "month_only")))])]), a("g", {
                      staticClass: "tick",
                      attrs: {
                          opacity: "1",
                          transform: "translate(630,0)"
                      }
                  }, [a("text", {
                      attrs: {
                          fill: "#7b7b7b",
                          y: "9",
                          dy: "0.71em"
                      }
                  }, [e._v(e._s(e.$d(e.getMonth(1), "month_only")))])])]), a("g", {
                      attrs: {
                          "font-family": "Open Sans",
                          "font-size": "15",
                          "text-anchor": "end"
                      }
                  }, [a("g", {
                      attrs: {
                          transform: "translate(-55,5)"
                      }
                  }, [a("circle", {
                      attrs: {
                          cx: "170",
                          cy: "240",
                          r: "5",
                          fill: "#67c100"
                      }
                  }), a("text", {
                      attrs: {
                          fill: "#7b7b7b",
                          x: "235",
                          y: "240",
                          dy: "0.32em"
                      }
                  }, [e._v(e._s(e.$t("message.income")))]), a("circle", {
                      attrs: {
                          cx: "275",
                          cy: "240",
                          r: "5",
                          fill: "#ea5959"
                      }
                  }), a("text", {
                      attrs: {
                          fill: "#7b7b7b",
                          x: "320",
                          y: "240",
                          dy: "0.32em"
                      }
                  }, [e._v(e._s(e.$t("message.cost")))]), a("g", {
                      attrs: {
                          transform: "translate(365,240)"
                      }
                  }, [a("line", {
                      attrs: {
                          stroke: "#3171e1",
                          x2: "15"
                      }
                  }), a("line", {
                      attrs: {
                          stroke: "#3171e1",
                          x2: "-15"
                      }
                  }), a("circle", {
                      attrs: {
                          r: "5",
                          stroke: "#3171e1",
                          fill: "#fff"
                      }
                  }), a("text", {
                      attrs: {
                          fill: "#7b7b7b",
                          x: "115",
                          dy: "0.32em"
                      }
                  }, [e._v(e._s(e.$t("message.cash_balance")))])]), a("g", {
                      attrs: {
                          transform: "translate(520,240)"
                      }
                  }, [a("line", {
                      attrs: {
                          stroke: "#3171e1",
                          x2: "15",
                          "stroke-dasharray": "3 3"
                      }
                  }), a("line", {
                      attrs: {
                          stroke: "#3171e1",
                          x2: "-15",
                          "stroke-dasharray": "3 3"
                      }
                  }), a("circle", {
                      attrs: {
                          r: "5",
                          stroke: "#3171e1",
                          fill: "#fff"
                      }
                  }), a("text", {
                      attrs: {
                          fill: "#7b7b7b",
                          x: "135",
                          dy: "0.32em"
                      }
                  }, [e._v(e._s(e.$t("message.cash_predition")))])])])]), a("g", {
                      attrs: {
                          stroke: "#3171e1",
                          "stroke-width": "2"
                      }
                  }, [a("line", {
                      attrs: {
                          x1: "3",
                          y1: "147",
                          x2: "56",
                          y2: "132"
                      }
                  }), a("line", {
                      attrs: {
                          x1: "56",
                          y1: "132",
                          x2: "171",
                          y2: "147"
                      }
                  }), a("line", {
                      attrs: {
                          x1: "171",
                          y1: "147",
                          x2: "286",
                          y2: "118"
                      }
                  }), a("line", {
                      attrs: {
                          x1: "286",
                          y1: "118",
                          x2: "401",
                          y2: "110"
                      }
                  }), a("line", {
                      attrs: {
                          x1: "401",
                          y1: "110",
                          x2: "516",
                          y2: "110"
                      }
                  }), a("line", {
                      attrs: {
                          x1: "516",
                          y1: "110",
                          x2: "631",
                          y2: "90",
                          "stroke-dasharray": "3 3"
                      }
                  }), a("circle", {
                      attrs: {
                          cx: "56",
                          cy: "132",
                          r: "5",
                          fill: "#fff"
                      }
                  }), a("circle", {
                      attrs: {
                          cx: "171",
                          cy: "147",
                          r: "5",
                          fill: "#fff"
                      }
                  }), a("circle", {
                      attrs: {
                          cx: "286",
                          cy: "118",
                          r: "5",
                          fill: "#fff"
                      }
                  }), a("circle", {
                      attrs: {
                          cx: "401",
                          cy: "110",
                          r: "5",
                          fill: "#fff"
                      }
                  }), a("circle", {
                      attrs: {
                          cx: "516",
                          cy: "110",
                          r: "5",
                          fill: "#fff"
                      }
                  }), a("circle", {
                      attrs: {
                          cx: "631",
                          cy: "90",
                          r: "5",
                          fill: "#fff"
                      }
                  })])])])]), a("AccountDetails")], 1)
              },
              Ds = [function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("span", [a("i", {
                      staticClass: "pi pi-arrow-down pi-error"
                  }), e._v("17.4% ")])
              }, function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("span", [a("i", {
                      staticClass: "pi pi-arrow-up pi-success"
                  }), e._v("12.2% ")])
              }, function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("span", [a("i", {
                      staticClass: "pi pi-arrow-down pi-error"
                  }), e._v("2.1% ")])
              }],
              Ms = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("section", [a("div", {
                      staticClass: "header flex flex-mid-align search-bar"
                  }, [a("h2", [e._v(e._s(e.$t("message.accounts")))]), a("input", {
                      staticClass: "filter",
                      attrs: {
                          type: "text",
                          placeholder: e.$t("message.search_past_services")
                      },
                      domProps: {
                          value: e.$t("message.search")
                      }
                  }), a("i", {
                      staticClass: "pi pi-dark pi-search"
                  })]), -1 != e.userId ? a("table", {
                      staticClass: "content responsive color-heading"
                  }, [a("thead", [a("tr", [a("th", {
                      attrs: {
                          scope: "col"
                      }
                  }, [e._v(e._s(e.$t("message.accounts_header1")))]), a("th", {
                      attrs: {
                          scope: "col"
                      }
                  }, [e._v(e._s(e.$t("message.accounts_header2")))]), a("th", {
                      attrs: {
                          scope: "col"
                      }
                  }, [e._v(e._s(e.$t("message.accounts_header3")))]), a("th", {
                      staticClass: "align-r",
                      attrs: {
                          scope: "col"
                      }
                  }, [e._v(e._s(e.$t("message.accounts_header4")))])])]), a("tbody", [a("tr", {
                      staticClass: "heading"
                  }, [a("td", {
                      staticClass: "hide-collapsed",
                      attrs: {
                          colspan: "2"
                      }
                  }, [e._v(e._s(e.$t("message.accounts_header_col1")))]), a("td", {
                      staticClass: "align-r",
                      attrs: {
                          "data-title": e.$t("message.accounts_header_col1"),
                          colspan: "2"
                      }
                  }, [e._v("$1,679,072.63")])]), e._l(e.settings.users[e.userId].accounts, (function(t) {
                      return a("tr", {
                          key: t.id,
                          attrs: {
                              title: t.id
                          }
                      }, [a("td", {
                          attrs: {
                              "data-title": e.$t("message.accounts_header1")
                          }
                      }, [a("a", [e._v(e._s(t.number))])]), a("td", {
                          attrs: {
                              "data-title": e.$t("message.accounts_header2")
                          }
                      }, [e._v(e._s(t.name))]), a("td", {
                          attrs: {
                              "data-title": e.$t("message.accounts_header3")
                          }
                      }, [e._v(e._s(t.type))]), a("td", {
                          staticClass: "align-r",
                          attrs: {
                              "data-title": e.$t("message.accounts_header4")
                          }
                      }, [e._v(e._s(e.$n(t.balance, "currency")))])])
                  })), a("tr", {
                      staticClass: "heading"
                  }, [a("td", {
                      staticClass: "hide-collapsed",
                      attrs: {
                          colspan: "2"
                      }
                  }, [e._v(e._s(e.$t("message.investmentaccounts_header_col1")))]), a("td", {
                      staticClass: "align-r",
                      attrs: {
                          "data-title": e.$t("message.investmentaccounts_header_col1"),
                          colspan: "2"
                      }
                  }, [e._v("$141,216,865.42")])]), e._l(e.settings.users[e.userId].investmentaccounts, (function(t) {
                      return a("tr", {
                          key: t.id,
                          attrs: {
                              title: t.id
                          }
                      }, [a("td", {
                          attrs: {
                              "data-title": e.$t("message.accounts_header1")
                          }
                      }, [a("a", [e._v(e._s(t.number))])]), a("td", {
                          attrs: {
                              "data-title": e.$t("message.accounts_header2")
                          }
                      }, [e._v(e._s(t.name))]), a("td", {
                          attrs: {
                              "data-title": e.$t("message.accounts_header3")
                          }
                      }, [e._v(e._s(t.type))]), a("td", {
                          staticClass: "align-r",
                          attrs: {
                              "data-title": e.$t("message.accounts_header4")
                          }
                      }, ["green" === t.trend ? a("span", {
                          staticClass: "trend trend-success"
                      }, [a("i", {
                          staticClass: "pi pi-arrow-up pi-success"
                      }), e._v(" " + e._s(t.trendvalue) + "% ")]) : a("span", {
                          staticClass: "trend trend-error"
                      }, [a("i", {
                          staticClass: "pi pi-arrow-down pi-error"
                      }), e._v(" " + e._s(t.trendvalue) + "% ")]), a("span", {
                          staticClass: "investmentamount"
                      }, [e._v(e._s(e.$n(t.balance, "currency")))])])])
                  })), a("tr", {
                      staticClass: "footer"
                  }, [a("td", {
                      attrs: {
                          colspan: "4"
                      }
                  }, [a("a", [e._v(e._s(e.$t("message.addaccount")))])])])], 2)]) : e._e()])
              },
              Ts = [],
              js = {
                  data() {
                      return o["b"]
                  }
              },
              Ls = js,
              Es = Object(C["a"])(Ls, Ms, Ts, !1, null, null, null),
              Rs = Es.exports,
              Bs = {
                  data() {
                      return o["b"]
                  },
                  components: {
                      MashupMainArea: ca,
                      AccountDetails: Rs,
                      Banner: Ia
                  },
                  methods: {
                      getMonth(e) {
                          var t = new Date((new Date).getFullYear(), (new Date).getMonth(), 1);
                          return t.setMonth((t.getMonth() + e) % 12), t
                      }
                  }
              },
              Us = Bs,
              Hs = Object(C["a"])(Us, $s, Ds, !1, null, null, null),
              qs = Hs.exports,
              Ws = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("div", {
                      staticClass: "col col-2"
                  }, ["" === e.settings.pega_marketing.Host || "" === e.settings.pega_marketing.accountPage.placement || "" === e.settings.pega_marketing.accountPage.containerName || e.loading && !e.settings.pega_marketing.showLoadingIndicator || e.errorloading ? a("div", {
                      staticClass: "secondary-card"
                  }, e._l(e.app.offers, (function(t) {
                      return a("section", {
                          key: t.title,
                          staticClass: "offer-card-col"
                      }, [a("img", {
                          staticClass: "offer-img",
                          attrs: {
                              src: "./img/" + t.img,
                              alt: e.$t("message." + t.title)
                          }
                      }), a("div", {
                          staticClass: "content"
                      }, [a("h3", [e._v(e._s(e.$t("message." + t.title)))]), a("p", [e._v(e._s(e.$t("message." + t.message)))]), a("a", {
                          attrs: {
                              href: "./offer.html"
                          },
                          on: {
                              click: e.gotoOfferPage
                          }
                      }, [e._v(e._s(e.$t("message.learnmore")))])])])
                  })), 0) : "" !== e.settings.pega_marketing.Host && e.loading && e.settings.pega_marketing.showLoadingIndicator ? a("div", {
                      staticClass: "secondary-card loading-container",
                      staticStyle: {
                          "min-height": "300px"
                      }
                  }, [e._m(0)]) : a("div", {
                      staticClass: "secondary-card"
                  }, e._l(e.data, (function(t, i) {
                      return a("div", {
                          key: t.title,
                          on: {
                              mouseover: function(a) {
                                  return e.checkRTSEventHover(i, t, !0)
                              },
                              mouseleave: function(a) {
                                  return e.checkRTSEventHover(i, t, !1)
                              }
                          }
                      }, [a("Offer", {
                          staticClass: "offer-container",
                          attrs: {
                              offer: t,
                              "data-offer-index": i
                          }
                      })], 1)
                  })), 0), "commercial_bank" === e.app.industry && "undefined" !== typeof e.settings.keyrates ? a("KeyRates") : e._e(), a("QuickLinks")], 1)
              },
              Fs = [function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("span", {
                      staticClass: "loading"
                  }, [a("span", {
                      staticClass: "dot"
                  }), a("span", {
                      staticClass: "dot"
                  }), a("span", {
                      staticClass: "dot"
                  })])
              }],
              Ks = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return e.hasQuicklinks() ? a("section", {
                      staticClass: "secondary-card container"
                  }, [a("h3", [e._v(e._s(e.$t("message.quicklinks")))]), a("nav", [a("ul", {
                      staticClass: "quick-links"
                  }, e._l(e.settings.quicklinks, (function(t, i) {
                      return a("li", {
                          key: i
                      }, [!0 !== t.hide && e.showQuickLink(i) ? a("a", {
                          on: {
                              click: function(t) {
                                  return e.selectLink(i)
                              }
                          }
                      }, [e._v(e._s(e.settings.quicklinks[i].title[e.currentLocale]))]) : e._e()])
                  })), 0)])]) : e._e()
              },
              Vs = [],
              zs = {
                  data() {
                      return o["b"]
                  },
                  methods: {
                      selectLink(e) {
                          this.quickLinkId = e, this.previousPage = this.settings.quicklinks[e].objclass, window.history && (window.history.pushState({
                              userId: o["b"].userId,
                              quickLinkId: o["b"].quickLinkId
                          }, "", "quicklink".concat(e)), window.scrollTo({
                              top: 0,
                              behavior: "smooth"
                          })), this.$gtag && this.$gtag.pageview({
                              page_path: "quicklink".concat(e)
                          }), p(o["b"], "PageView", "quicklink".concat(e), window.loadPage), window.loadPage = new Date
                      },
                      hasQuicklinks() {
                          for (var e in this.settings.quicklinks)
                              if (!0 !== this.settings.quicklinks[e].hide) return !0;
                          return !1
                      },
                      showQuickLink(e) {
                          return !this.settings.quicklinks[e].hideusers || !this.settings.quicklinks[e].hideusers.split(",").includes(this.settings.users[o["b"].userId].username)
                      }
                  }
              },
              Js = zs,
              Gs = Object(C["a"])(Js, Ks, Vs, !1, null, null, null),
              Qs = Gs.exports,
              Xs = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("section", {
                      staticClass: "secondary-card container keyrates"
                  }, [a("h3", [e._v(e._s(e.$t("message.keyrates_title")))]), a("table", {
                      staticClass: "align-center color-light"
                  }, [a("tr", {
                      staticClass: "heading"
                  }, [a("td", [e._v(e._s(e.$t("message.keyrates_header_col1")))]), a("td", [e._v(e._s(e.$t("message.keyrates_header_col2")))]), a("td", [e._v(e._s(e.$t("message.keyrates_header_col3")))])])]), e._l(e.settings.keyrates, (function(t) {
                      return a("div", {
                          key: t.name,
                          attrs: {
                              title: e.$t("message." + t.name)
                          }
                      }, [a("h4", [e._v(e._s(e.$t("message." + t.name)))]), a("table", {
                          staticClass: "align-center color-light"
                      }, [a("tr", [a("td", {
                          staticClass: "space-nowrap"
                      }, ["green" === t.trend ? a("i", {
                          staticClass: "pi pi-arrow-up pi-success"
                      }) : e._e(), "red" === t.trend ? a("i", {
                          staticClass: "pi pi-arrow-down pi-error"
                      }) : e._e(), e._v(" " + e._s(e.$n(t.current, "keyrates")) + " ")]), a("td", [e._v(e._s(e.$n(t.high, "keyrates")))]), a("td", [e._v(e._s(e.$n(t.low, "keyrates")))])])])])
                  }))], 2)
              },
              Ys = [],
              Zs = {
                  data() {
                      return o["b"]
                  }
              },
              en = Zs,
              tn = Object(C["a"])(en, Xs, Ys, !1, null, null, null),
              an = tn.exports;

          function sn(e, t) {
              var a = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                  var i = Object.getOwnPropertySymbols(e);
                  t && (i = i.filter((function(t) {
                      return Object.getOwnPropertyDescriptor(e, t).enumerable
                  }))), a.push.apply(a, i)
              }
              return a
          }

          function nn(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var a = null != arguments[t] ? arguments[t] : {};
                  t % 2 ? sn(Object(a), !0).forEach((function(t) {
                      rn(e, t, a[t])
                  })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : sn(Object(a)).forEach((function(t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                  }))
              }
              return e
          }

          function rn(e, t, a) {
              return t in e ? Object.defineProperty(e, t, {
                  value: a,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              }) : e[t] = a, e
          }
          var on = {
                  data() {
                      return nn(nn({}, o["b"]), {}, {
                          errorloading: !1,
                          loading: !0,
                          data: [],
                          RTSstate: {
                              index: -1,
                              id: 0
                          }
                      })
                  },
                  mounted() {
                      if ("" !== this.settings.pega_marketing.Host && "" !== this.settings.pega_marketing.accountPage.placement && "" !== this.settings.pega_marketing.accountPage.containerName) {
                          var e = this,
                              t = ""; - 1 !== this.userId && this.settings.users[this.userId].customerID && (t = this.settings.users[this.userId].customerID), setTimeout(() => {
                              d(e, "accountPage", t, e.previousPage, "account.html")
                          }, 200)
                      }
                  },
                  updated() {
                      if (window.IntersectionObserver && !0 === o["b"].settings.pega_marketing.useCaptureByChannel) {
                          var e = new IntersectionObserver(t => {
                              t.forEach(t => {
                                  if (t.isIntersecting) {
                                      var a = t.target.getAttribute("data-offer-index");
                                      c(this, this.data[a], "Impression"), e.unobserve(t.target)
                                  }
                              })
                          }, {
                              threshold: 1
                          });
                          document.querySelectorAll(".offer-container").forEach(t => {
                              e.observe(t)
                          })
                      }
                  },
                  components: {
                      Offer: ri,
                      QuickLinks: Qs,
                      KeyRates: an
                  },
                  methods: {
                      gotoOfferPage(e) {
                          o["b"].currentPage = "offer.html", this.$gtag && this.$gtag.pageview({
                              page_path: o["b"].currentPage
                          }), p(o["b"], "PageView", "Offer", window.loadPage), window.loadPage = new Date;
                          var t = o["b"].isAuthenticated ? {
                              userId: o["b"].userId
                          } : {};
                          window.history.pushState(t, "", "offer.html"), o["b"].offerIndex = 0, window.scrollTo({
                              top: 0,
                              behavior: "smooth"
                          }), e.preventDefault()
                      },
                      checkRTSEventHover(e, t, a) {
                          !0 === o["b"].isRTSEnabled && (-1 === this.RTSstate.index ? (this.RTSstate.index = e, this.RTSstate.id = setTimeout(() => {
                              this.generateRTSEvent(t)
                          }, 3e3)) : this.RTSstate.index === e && !1 === a && (clearTimeout(this.RTSstate.id), this.RTSstate.id = 0, this.RTSstate.index = -1))
                      },
                      generateRTSEvent(e) {
                          var t = document.querySelector(".comment"),
                              a = new Date,
                              i = a.getMonth() + 1;
                          i < 10 && (i = "0".concat(i));
                          var s = "".concat(a.getFullYear(), "-").concat(i, "-").concat(a.getDate()),
                              n = "".concat(a.getHours(), ":").concat(a.getMinutes(), ":").concat(a.getSeconds());
                          t.innerHTML += "<p>".concat(s, " ").concat(n, " - Sending event - group:").concat(e.category, " - value:").concat(e.name, "</p"), t.scrollTop = t.scrollHeight, g(this, e)
                      }
                  }
              },
              ln = on,
              cn = Object(C["a"])(ln, Ws, Fs, !1, null, null, null),
              dn = cn.exports,
              gn = {
                  data() {
                      return o["b"]
                  },
                  components: {
                      MainHeader: Ji,
                      AccountMainArea: Va,
                      BankAccountMainArea: qs,
                      AccountSecondaryArea: dn,
                      MashupMainArea: ca,
                      MainFooter: je,
                      MicroSiteMainArea: fs,
                      RTSOverlay: Ps
                  },
                  methods: {
                      showWelcomeMessage() {
                          var e = this.settings.users[this.userId].name;
                          return e.substring(0, e.lastIndexOf(" "))
                      }
                  }
              },
              pn = gn,
              un = Object(C["a"])(pn, Ss, Ns, !1, null, null, null),
              mn = un.exports,
              fn = {
                  data() {
                      return o["b"]
                  },
                  components: {
                      FrontPage: As,
                      AccountPage: mn,
                      PhonePage: $i
                  }
              },
              hn = fn,
              vn = (a("4395"), Object(C["a"])(hn, u, m, !1, null, null, null)),
              _n = vn.exports,
              bn = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return e.isMobilePhone ? a("PhonePage") : a("div", {
                      staticClass: "form offer",
                      attrs: {
                          id: "app"
                      }
                  }, [a("Header"), a("Main"), a("Footer")], 1)
              },
              yn = [],
              kn = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return -1 != e.offerAction ? a("main", {
                      staticClass: "wrap flex flex-col"
                  }, [a("MashupMainArea")], 1) : "" !== e.offerURL ? a("main", {
                      staticClass: "wrap flex flex-col"
                  }, [a("MicroSiteMainArea")], 1) : a("main", {
                      staticClass: "wrap flex flex-col static-offer"
                  }, [a("MainOffer", {
                      attrs: {
                          offerType: e.offerIndex
                      }
                  }), a("Details"), a("Highlight")], 1)
              },
              wn = [],
              Cn = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("div", {
                      staticClass: "flex flex-col offer-details"
                  }, e._l(e.app.offer[e.offerIndex].details, (function(t, i) {
                      return a("div", {
                          key: i,
                          staticClass: "flex flex-nowrap"
                      }, [a("div", {
                          staticClass: "details"
                      }, [a("div", {
                          staticClass: "image",
                          style: {
                              backgroundImage: "url(./img/" + t.image + ")",
                              order: "" + i % 2
                          }
                      })]), a("div", {
                          staticClass: "details"
                      }, [a("h2", [e._v(e._s(e.$t("message." + t.title)))]), a("span", {
                          staticClass: "background-brand line"
                      }), a("span", [e._v(e._s(e.$t("message." + t.message)))])])])
                  })), 0)
              },
              Pn = [],
              xn = {
                  data() {
                      return o["b"]
                  }
              },
              On = xn,
              In = Object(C["a"])(On, Cn, Pn, !1, null, null, null),
              An = In.exports,
              Sn = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("div", {
                      staticClass: "offer-highlights"
                  }, e._l(e.app.offer[e.offerIndex].highlights.data, (function(t, i) {
                      return a("div", {
                          key: i,
                          staticClass: "flex"
                      }, [a("i", {
                          class: "pi color-brand " + t.icon
                      }), a("div", {
                          staticClass: "flex flex-col flex-grow-1"
                      }, [a("p", [e._v(e._s(e.$t("message." + t.title)))]), a("span", [e._v(e._s(e.$t("message." + t.message)))])])])
                  })), 0)
              },
              Nn = [],
              $n = {
                  data() {
                      return o["b"]
                  }
              },
              Dn = $n,
              Mn = Object(C["a"])(Dn, Sn, Nn, !1, null, null, null),
              Tn = Mn.exports,
              jn = {
                  data() {
                      return o["b"]
                  },
                  components: {
                      MainOffer: Qe,
                      Details: An,
                      Highlight: Tn,
                      MicroSiteMainArea: fs,
                      MashupMainArea: ca
                  }
              },
              Ln = jn,
              En = Object(C["a"])(Ln, kn, wn, !1, null, null, null),
              Rn = En.exports,
              Bn = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("div", {
                      staticClass: "background-brand offer-footer"
                  }, [a("div", {
                      staticClass: "promo"
                  }, [a("h4", [e._v(e._s(e.$t("message." + e.app.offer[e.offerIndex].footer.title)))]), a("button", {
                      staticClass: "secondary",
                      staticStyle: {
                          "pointer-events": "none"
                      }
                  }, [e._v(e._s(e.$t("message." + e.app.offer[e.offerIndex].footer.button_label)))])]), a("MainFooter")], 1)
              },
              Un = [],
              Hn = {
                  data() {
                      return o["b"]
                  },
                  components: {
                      MainFooter: je
                  }
              },
              qn = Hn,
              Wn = Object(C["a"])(qn, Bn, Un, !1, null, null, null),
              Fn = Wn.exports,
              Kn = {
                  data() {
                      return o["b"]
                  },
                  components: {
                      Header: Ji,
                      Main: Rn,
                      Footer: Fn,
                      PhonePage: $i
                  }
              },
              Vn = Kn,
              zn = Object(C["a"])(Vn, bn, yn, !1, null, null, null),
              Jn = zn.exports,
              Gn = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("div", {
                      staticClass: "flex flex-col",
                      attrs: {
                          id: "app"
                      }
                  }, [a("Header"), a("main", {
                      staticClass: "flex flex-col"
                  }, [a("Main")], 1)], 1)
              },
              Qn = [],
              Xn = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("header", {
                      staticClass: "flex flex-mid-align settings"
                  }, [a("a", {
                      attrs: {
                          href: "./index.html"
                      }
                  }, [a("img", {
                      staticClass: "logo",
                      attrs: {
                          src: "./img/u+-logo.svg",
                          alt: "U+"
                      }
                  })]), e.isMobilePhone ? e._e() : a("h1", [e._v(e._s(e.$t("message.settings")))])])
              },
              Yn = [],
              Zn = {
                  data() {
                      return o["b"]
                  }
              },
              er = Zn,
              tr = Object(C["a"])(er, Xn, Yn, !1, null, null, null),
              ar = tr.exports,
              ir = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("form", {
                      attrs: {
                          id: "settings"
                      },
                      on: {
                          submit: e.processForm
                      }
                  }, [e.isMobilePhone ? a("TopNav", {
                      attrs: {
                          previousPhonePage: "index.html"
                      }
                  }, [a("button", {
                      staticClass: "simple margin-r-2x",
                      on: {
                          click: e.clearAll
                      }
                  }, [e._v("Reset to default")]), a("button", {
                      attrs: {
                          type: "submit"
                      }
                  }, [e._v("Save")])]) : e._e(), a("Navigation", {
                      on: {
                          clearall: e.clearAll
                      }
                  }, [a("tab", {
                      attrs: {
                          name: "Getting Started",
                          selected: !0
                      }
                  }, [a("GettingStarted")], 1), "undefined" != typeof e.settings.general ? a("tab", {
                      attrs: {
                          name: "General"
                      }
                  }, [a("General")], 1) : e._e(), a("tab", {
                      attrs: {
                          name: "Users"
                      }
                  }, [a("UsersSettings")], 1), a("tab", {
                      attrs: {
                          name: "Quick Links"
                      }
                  }, [a("QuickLinksSettings")], 1), "undefined" != typeof e.settings.todo ? a("tab", {
                      attrs: {
                          name: "To Do component"
                      }
                  }, [a("ToDoSettings")], 1) : e._e(), "undefined" != typeof e.settings.billpay ? a("tab", {
                      attrs: {
                          name: "Bill Pay component"
                      }
                  }, [a("BillPaySettings")], 1) : e._e(), "undefined" != typeof e.settings.banner ? a("tab", {
                      attrs: {
                          name: "Banner component"
                      }
                  }, [a("BannerSettings")], 1) : e._e(), "undefined" != typeof e.settings.pega_chat ? a("tab", {
                      attrs: {
                          name: "Messaging and Co-Browse"
                      }
                  }, [a("ChatSettings")], 1) : e._e(), "undefined" != typeof e.settings.pega_marketing ? a("tab", {
                      attrs: {
                          name: "Customer Decision Hub"
                      }
                  }, [a("NBAMSettings")], 1) : e._e(), "undefined" != typeof e.settings.kmhelp ? a("tab", {
                      attrs: {
                          name: "Knowledge Management"
                      }
                  }, [a("KMHelpSettings")], 1) : e._e(), a("tab", {
                      attrs: {
                          name: "Home Hero Action"
                      }
                  }, [a("HomeHeroActionSettings")], 1), "undefined" != typeof e.settings.offeraction ? a("tab", {
                      attrs: {
                          name: "Offer Action"
                      }
                  }, [a("OfferActionSettings")], 1) : e._e()], 1)], 1)
              },
              sr = [],
              nr = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("section", {
                      attrs: {
                          id: e.href,
                          role: "tabpanel",
                          "aria-labelledby": e.href + "-tab",
                          "aria-hidden": e.isActive ? "false" : "true"
                      }
                  }, [e._t("default")], 2)
              },
              rr = [],
              or = {
                  props: {
                      name: {
                          required: !0
                      },
                      selected: {
                          default: !1
                      }
                  },
                  data() {
                      return {
                          isActive: !1
                      }
                  },
                  computed: {
                      href() {
                          return "#".concat(this.name.toLowerCase().replace(/ /g, "-"))
                      }
                  },
                  mounted() {
                      this.isActive = this.selected
                  }
              },
              lr = or,
              cr = Object(C["a"])(lr, nr, rr, !1, null, null, null),
              dr = cr.exports,
              gr = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("div", {
                      staticClass: "tab-vertical-menu"
                  }, [a("div", {
                      staticClass: "tab-interface"
                  }, [a("Container", {
                      attrs: {
                          title: "Menu",
                          expanded: e.expanded
                      },
                      on: {
                          toggleExpand: e.toggleExpand
                      }
                  }, [a("ul", {
                      attrs: {
                          role: "tablist"
                      }
                  }, e._l(e.tabs, (function(t, i) {
                      return a("li", {
                          key: i,
                          attrs: {
                              role: "presentation"
                          }
                      }, ["tab" === t.$vnode.componentOptions.tag ? a("a", {
                          attrs: {
                              role: "tab",
                              tabindex: t.isActive ? "0" : "-1",
                              "aria-controls": t.href,
                              "aria-selected": t.isActive ? "true" : "false",
                              id: t.href + "-tab"
                          },
                          on: {
                              click: function(a) {
                                  return e.selectTab(t)
                              }
                          }
                      }, [e._v(e._s(t.name))]) : e._e()])
                  })), 0)]), e.isMobilePhone ? e._e() : a("div", {
                      staticClass: "tab-action"
                  }, [a("button", {
                      staticClass: "simple",
                      attrs: {
                          type: "submit"
                      },
                      on: {
                          click: e.clearAll
                      }
                  }, [e._v("Reset to default")]), a("button", {
                      attrs: {
                          type: "submit"
                      }
                  }, [e._v("Save")])])], 1), a("div", {
                      staticClass: "tabs-details"
                  }, [e._t("default")], 2)])
              },
              pr = [],
              ur = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("div", {
                      class: "flex flex-col container" + (e.isExpanded ? "" : " collapsed") + " " + e.format
                  }, [a("div", {
                      staticClass: "header flex",
                      on: {
                          click: function(t) {
                              return t.stopPropagation(), e.toggleExpand.apply(null, arguments)
                          }
                      }
                  }, [a("h3", [e._v(e._s(e.title))]), a("button", {
                      staticClass: "simple",
                      attrs: {
                          title: "click to expand or collapse"
                      }
                  }, [a("i", {
                      class: "pi" + (e.isExpanded ? " pi-caret-down" : " pi-caret-right")
                  })])]), a("div", {
                      staticClass: "body"
                  }, [e._t("default")], 2)])
              },
              mr = [],
              fr = {
                  props: {
                      title: {
                          required: !0
                      },
                      expanded: {
                          type: Boolean,
                          default: !1
                      },
                      format: {
                          default: ""
                      }
                  },
                  data() {
                      return {
                          isExpanded: !1
                      }
                  },
                  methods: {
                      toggleExpand(e) {
                          this.isExpanded = !this.isExpanded, this.$emit("toggleExpand"), e.preventDefault()
                      }
                  },
                  watch: {
                      expanded: {
                          handler(e) {
                              this.isExpanded = e
                          }
                      }
                  },
                  mounted() {
                      this.isExpanded = this.expanded
                  }
              },
              hr = fr,
              vr = Object(C["a"])(hr, ur, mr, !1, null, null, null),
              _r = vr.exports;

          function br(e, t) {
              var a = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                  var i = Object.getOwnPropertySymbols(e);
                  t && (i = i.filter((function(t) {
                      return Object.getOwnPropertyDescriptor(e, t).enumerable
                  }))), a.push.apply(a, i)
              }
              return a
          }

          function yr(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var a = null != arguments[t] ? arguments[t] : {};
                  t % 2 ? br(Object(a), !0).forEach((function(t) {
                      kr(e, t, a[t])
                  })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : br(Object(a)).forEach((function(t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                  }))
              }
              return e
          }

          function kr(e, t, a) {
              return t in e ? Object.defineProperty(e, t, {
                  value: a,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              }) : e[t] = a, e
          }
          var wr = {
                  data() {
                      return yr(yr({}, o["b"]), {}, {
                          tabs: [],
                          expanded: !1
                      })
                  },
                  created() {
                      this.tabs = this.$children
                  },
                  methods: {
                      clearAll() {
                          this.$emit("clearall")
                      },
                      selectTab(e) {
                          this.tabs.forEach(t => {
                              t.isActive = t.name === e.name
                          }), this.isMobilePhone && (this.expanded = !1)
                      },
                      toggleExpand() {
                          this.expanded = !this.expanded
                      }
                  },
                  components: {
                      Container: _r
                  }
              },
              Cr = wr,
              Pr = Object(C["a"])(Cr, gr, pr, !1, null, null, null),
              xr = Pr.exports,
              Or = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("div", [a("h2", [e._v("Welcome to the U+ demo website")]), a("div", {
                      staticClass: "container-transparent"
                  }, [a("h3", [e._v("Step 1")]), a("p", [e._v("Start by downloading the settings config file template provided here:")]), a("FileDownload")], 1), e._m(0), a("div", {
                      staticClass: "container-transparent"
                  }, [a("h3", [e._v("Step 3")]), a("p", [e._v("Upload your updated config file here:")]), a("FileUpload")], 1), e._m(1)])
              },
              Ir = [function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("div", {
                      staticClass: "container-transparent"
                  }, [a("h3", [e._v("Step 2")]), a("p", [e._v("Update this file to include information from your Pega application including users, quick links, chat...")])])
              }, function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("div", {
                      staticClass: "container-transparent"
                  }, [a("h3", [e._v("Step 4")]), a("p", [e._v(" After uploading the file, the changes are automatically saved. You will be able to review your settings by navigating to each section on the panel to the left. Any changes made here can be saved and redownloaded. Click on the 'Reset to default' to reset back your configuration to the default config. ")])])
              }],
              Ar = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("div", {
                      staticClass: "file-upload"
                  }, [a("input", {
                      staticClass: "inputfile",
                      attrs: {
                          type: "file",
                          name: "file",
                          id: "file",
                          title: "Upload configuration"
                      },
                      on: {
                          change: e.onFileChange
                      }
                  }), e._m(0)])
              },
              Sr = [function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("label", {
                      attrs: {
                          for: "file",
                          title: "Upload configuration"
                      }
                  }, [a("i", {
                      staticClass: "pi pi-document-upload-solid"
                  }), e._v("Upload config file ")])
              }],
              Nr = {
                  data() {
                      return o["b"]
                  },
                  methods: {
                      onFileChange(e) {
                          var t = e.target,
                              a = new FileReader;
                          a.onload = function() {
                              var t = a.result;
                              try {
                                  var i = {
                                      settings: JSON.parse(t)
                                  };
                                  i = Object(o["e"])(i), o["b"].settings = i.settings, localStorage.setItem("config_".concat(o["b"].app.industry), JSON.stringify(i)), alert("The file was successfully uploaded.")
                              } catch (s) {
                                  alert("Error when trying to parse the configuration file - ".concat(e))
                              }
                          }, a.readAsText(t.files[0])
                      }
                  }
              },
              $r = Nr,
              Dr = Object(C["a"])($r, Ar, Sr, !1, null, null, null),
              Mr = Dr.exports,
              Tr = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("button", {
                      staticClass: "file-download",
                      attrs: {
                          title: "Download configuration"
                      },
                      on: {
                          click: e.downloadFile
                      }
                  }, [a("i", {
                      staticClass: "pi pi-document-download-solid"
                  }), e._v("Download config file ")])
              },
              jr = [],
              Lr = {
                  data() {
                      return o["b"]
                  },
                  methods: {
                      downloadFile() {
                          var e = JSON.stringify(o["b"].settings),
                              t = "config-text.json",
                              a = new Blob([e], {
                                  type: "text/plain;charset=utf-8;"
                              });
                          if (window.navigator.msSaveOrOpenBlob) window.navigator.msSaveBlob(a, t);
                          else {
                              var i = window.document.createElement("a");
                              i.href = window.URL.createObjectURL(a), i.download = t, document.body.appendChild(i), i.click(), document.body.removeChild(i)
                          }
                      }
                  }
              },
              Er = Lr,
              Rr = Object(C["a"])(Er, Tr, jr, !1, null, null, null),
              Br = Rr.exports,
              Ur = {
                  data() {
                      return o["b"]
                  },
                  components: {
                      FileUpload: Mr,
                      FileDownload: Br
                  }
              },
              Hr = Ur,
              qr = Object(C["a"])(Hr, Or, Ir, !1, null, null, null),
              Wr = qr.exports,
              Fr = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("div", {
                      staticClass: "container-transparent"
                  }, [a("h2", [e._v("General")]), e._m(0), a("div", {
                      staticClass: "container"
                  }, [a("div", {
                      staticClass: "body"
                  }, [a("Container", {
                      attrs: {
                          title: "Theming",
                          expanded: ""
                      }
                  }, [a("div", {
                      staticClass: "layout-labels-left layout-inline-grid-double"
                  }, [a("div", {
                      staticClass: "field-item"
                  }, [a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.general.theming.override,
                          expression: "settings.general.theming.override"
                      }],
                      attrs: {
                          id: "theming-override",
                          type: "checkbox"
                      },
                      domProps: {
                          checked: Array.isArray(e.settings.general.theming.override) ? e._i(e.settings.general.theming.override, null) > -1 : e.settings.general.theming.override
                      },
                      on: {
                          change: function(t) {
                              var a = e.settings.general.theming.override,
                                  i = t.target,
                                  s = !!i.checked;
                              if (Array.isArray(a)) {
                                  var n = null,
                                      r = e._i(a, n);
                                  i.checked ? r < 0 && e.$set(e.settings.general.theming, "override", a.concat([n])) : r > -1 && e.$set(e.settings.general.theming, "override", a.slice(0, r).concat(a.slice(r + 1)))
                              } else e.$set(e.settings.general.theming, "override", s)
                          }
                      }
                  }), a("label", {
                      attrs: {
                          for: "theming-override"
                      }
                  }, [e._v("Override default theme")])]), e.settings.general.theming.override ? a("div", {
                      staticClass: "field-item"
                  }, [a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.general.theming.brandColor,
                          expression: "settings.general.theming.brandColor"
                      }],
                      attrs: {
                          id: "branding-color",
                          type: "color"
                      },
                      domProps: {
                          value: e.settings.general.theming.brandColor
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.general.theming, "brandColor", t.target.value)
                          }
                      }
                  }), a("label", {
                      attrs: {
                          for: "branding-color"
                      }
                  }, [e._v("Branding color")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.general.theming.interactiveColor,
                          expression: "settings.general.theming.interactiveColor"
                      }],
                      attrs: {
                          id: "interactive-color",
                          type: "color"
                      },
                      domProps: {
                          value: e.settings.general.theming.interactiveColor
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.general.theming, "interactiveColor", t.target.value)
                          }
                      }
                  }), a("label", {
                      attrs: {
                          for: "interactive-color"
                      }
                  }, [e._v("Interactive color")])]) : e._e()])]), a("Container", {
                      attrs: {
                          title: "Pega Platform access",
                          expanded: ""
                      }
                  }, [a("div", {
                      staticClass: "layout-labels-left"
                  }, [a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "ga-connection-type"
                      }
                  }, [e._v("Type")]), a("select", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.general.connection.type,
                          expression: "settings.general.connection.type"
                      }],
                      attrs: {
                          id: "ga-connection-type"
                      },
                      on: {
                          change: function(t) {
                              var a = Array.prototype.filter.call(t.target.options, (function(e) {
                                  return e.selected
                              })).map((function(e) {
                                  var t = "_value" in e ? e._value : e.value;
                                  return t
                              }));
                              e.$set(e.settings.general.connection, "type", t.target.multiple ? a : a[0])
                          }
                      }
                  }, [a("option", {
                      attrs: {
                          value: "mashup"
                      }
                  }, [e._v("Web Mashup (Infinity UI with sections)")]), a("option", {
                      attrs: {
                          value: "embedui"
                      }
                  }, [e._v("Embed UI (Cosmos React - 8.7)")]), a("option", {
                      attrs: {
                          value: "dxv1"
                      }
                  }, [e._v("DX API v1 (Mashup Web component - 8.1+)")]), a("option", {
                      attrs: {
                          value: "dxv2"
                      }
                  }, [e._v("DX API v2 (Mashup Web component - 8.5+)")])])]), a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "ga-connection-authtype"
                      }
                  }, [e._v("Authentication")]), a("select", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.general.connection.authtype,
                          expression: "settings.general.connection.authtype"
                      }],
                      attrs: {
                          id: "ga-connection-authtype"
                      },
                      on: {
                          change: function(t) {
                              var a = Array.prototype.filter.call(t.target.options, (function(e) {
                                  return e.selected
                              })).map((function(e) {
                                  var t = "_value" in e ? e._value : e.value;
                                  return t
                              }));
                              e.$set(e.settings.general.connection, "authtype", t.target.multiple ? a : a[0])
                          }
                      }
                  }, [a("option", {
                      attrs: {
                          value: "basic"
                      }
                  }, [e._v("Basic authentication")]), a("option", {
                      attrs: {
                          value: "oauth2password"
                      }
                  }, [e._v("OAuth 2.0 Password Grant Type")]), a("option", {
                      attrs: {
                          value: "oauth2clientcredentials"
                      }
                  }, [e._v("OAuth 2.0 Client Credentials Type")])])]), "oauth2password" === e.settings.general.connection.authtype || "oauth2clientcredentials" === e.settings.general.connection.authtype ? a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "ga-connection-clientid"
                      }
                  }, [e._v("Client ID")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.general.connection.clientid,
                          expression: "settings.general.connection.clientid"
                      }],
                      attrs: {
                          type: "text",
                          id: "ga-connection-clientid"
                      },
                      domProps: {
                          value: e.settings.general.connection.clientid
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.general.connection, "clientid", t.target.value)
                          }
                      }
                  })]) : e._e(), "oauth2password" === e.settings.general.connection.authtype ? a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "ga-connection-clientsecret"
                      }
                  }, [e._v("Client secret")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.general.connection.clientsecret,
                          expression: "settings.general.connection.clientsecret"
                      }],
                      attrs: {
                          type: "text",
                          id: "ga-connection-clientsecret"
                      },
                      domProps: {
                          value: e.settings.general.connection.clientsecret
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.general.connection, "clientsecret", t.target.value)
                          }
                      }
                  })]) : e._e(), "dxv2" === e.settings.general.connection.type ? a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "ga-connection-webportal"
                      }
                  }, [e._v("Web portal")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.general.connection.webportal,
                          expression: "settings.general.connection.webportal"
                      }],
                      attrs: {
                          type: "text",
                          id: "ga-connection-webportal"
                      },
                      domProps: {
                          value: e.settings.general.connection.webportal
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.general.connection, "webportal", t.target.value)
                          }
                      }
                  })]) : e._e(), "embedui" === e.settings.general.connection.type ? a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "ga-connection-c11nserver"
                      }
                  }, [e._v("C11n URL (staticContentUrl)")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.general.connection.c11nserver,
                          expression: "settings.general.connection.c11nserver"
                      }],
                      attrs: {
                          type: "text",
                          id: "ga-connection-c11nserver"
                      },
                      domProps: {
                          value: e.settings.general.connection.c11nserver
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.general.connection, "c11nserver", t.target.value)
                          }
                      }
                  })]) : e._e()])]), a("Container", {
                      attrs: {
                          title: "Google Analytics",
                          expanded: ""
                      }
                  }, [a("div", {
                      staticClass: "layout-labels-left"
                  }, [a("div", {
                      staticClass: "field-item"
                  }, [a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.general.ga.enabled,
                          expression: "settings.general.ga.enabled"
                      }],
                      attrs: {
                          id: "ga-enabled",
                          type: "checkbox"
                      },
                      domProps: {
                          checked: Array.isArray(e.settings.general.ga.enabled) ? e._i(e.settings.general.ga.enabled, null) > -1 : e.settings.general.ga.enabled
                      },
                      on: {
                          change: function(t) {
                              var a = e.settings.general.ga.enabled,
                                  i = t.target,
                                  s = !!i.checked;
                              if (Array.isArray(a)) {
                                  var n = null,
                                      r = e._i(a, n);
                                  i.checked ? r < 0 && e.$set(e.settings.general.ga, "enabled", a.concat([n])) : r > -1 && e.$set(e.settings.general.ga, "enabled", a.slice(0, r).concat(a.slice(r + 1)))
                              } else e.$set(e.settings.general.ga, "enabled", s)
                          }
                      }
                  }), a("label", {
                      attrs: {
                          for: "ga-enabled"
                      }
                  }, [e._v("Enable")])]), a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "ga-trackingid"
                      }
                  }, [e._v("Tracking ID")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.general.ga.trackingid,
                          expression: "settings.general.ga.trackingid"
                      }],
                      attrs: {
                          id: "ga-trackingid",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.general.ga.trackingid
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.general.ga, "trackingid", t.target.value)
                          }
                      }
                  })])])]), a("Container", {
                      attrs: {
                          title: "Two-factor authentication",
                          expanded: ""
                      }
                  }, [a("div", {
                      staticClass: "layout-labels-left"
                  }, [a("div", {
                      staticClass: "field-item"
                  }, [a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.general.auth_2fa.enabled,
                          expression: "settings.general.auth_2fa.enabled"
                      }],
                      attrs: {
                          id: "2fa-enabled",
                          type: "checkbox"
                      },
                      domProps: {
                          checked: Array.isArray(e.settings.general.auth_2fa.enabled) ? e._i(e.settings.general.auth_2fa.enabled, null) > -1 : e.settings.general.auth_2fa.enabled
                      },
                      on: {
                          change: function(t) {
                              var a = e.settings.general.auth_2fa.enabled,
                                  i = t.target,
                                  s = !!i.checked;
                              if (Array.isArray(a)) {
                                  var n = null,
                                      r = e._i(a, n);
                                  i.checked ? r < 0 && e.$set(e.settings.general.auth_2fa, "enabled", a.concat([n])) : r > -1 && e.$set(e.settings.general.auth_2fa, "enabled", a.slice(0, r).concat(a.slice(r + 1)))
                              } else e.$set(e.settings.general.auth_2fa, "enabled", s)
                          }
                      }
                  }), a("label", {
                      attrs: {
                          for: "2fa-enabled"
                      }
                  }, [e._v("Enable")])]), a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "2fa-url"
                      }
                  }, [e._v("Server Base URL")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.general.auth_2fa.url,
                          expression: "settings.general.auth_2fa.url"
                      }],
                      attrs: {
                          id: "2fa-url",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.general.auth_2fa.url
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.general.auth_2fa, "url", t.target.value)
                          }
                      }
                  })]), a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "2fa-sendMode"
                      }
                  }, [e._v("OTP send mode")]), a("select", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.general.auth_2fa.sendMode,
                          expression: "settings.general.auth_2fa.sendMode"
                      }],
                      attrs: {
                          id: "2fa-sendMode"
                      },
                      on: {
                          change: function(t) {
                              var a = Array.prototype.filter.call(t.target.options, (function(e) {
                                  return e.selected
                              })).map((function(e) {
                                  var t = "_value" in e ? e._value : e.value;
                                  return t
                              }));
                              e.$set(e.settings.general.auth_2fa, "sendMode", t.target.multiple ? a : a[0])
                          }
                      }
                  }, [a("option", {
                      attrs: {
                          value: "email"
                      }
                  }, [e._v("Email")]), a("option", {
                      attrs: {
                          value: "sms"
                      }
                  }, [e._v("SMS")])])])]), a("h4", [e._v("Email")]), a("div", {
                      staticClass: "layout-labels-top layout-inline-grid-double"
                  }, [a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "2fa-email-correspondenceName"
                      }
                  }, [e._v("Correspondence name")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.general.auth_2fa.emailSettings.correspondenceName,
                          expression: "settings.general.auth_2fa.emailSettings.correspondenceName"
                      }],
                      attrs: {
                          id: "2fa-email-correspondenceName",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.general.auth_2fa.emailSettings.correspondenceName
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.general.auth_2fa.emailSettings, "correspondenceName", t.target.value)
                          }
                      }
                  })]), a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "2fa-email-emailAccount"
                      }
                  }, [e._v("Email account")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.general.auth_2fa.emailSettings.emailAccount,
                          expression: "settings.general.auth_2fa.emailSettings.emailAccount"
                      }],
                      attrs: {
                          id: "2fa-email-emailAccount",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.general.auth_2fa.emailSettings.emailAccount
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.general.auth_2fa.emailSettings, "emailAccount", t.target.value)
                          }
                      }
                  })]), a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "2fa-email-subject"
                      }
                  }, [e._v("Subject")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.general.auth_2fa.emailSettings.subject,
                          expression: "settings.general.auth_2fa.emailSettings.subject"
                      }],
                      attrs: {
                          id: "2fa-email-subject",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.general.auth_2fa.emailSettings.subject
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.general.auth_2fa.emailSettings, "subject", t.target.value)
                          }
                      }
                  })]), a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "2fa-email-validateMaxAge"
                      }
                  }, [e._v("Validate max age")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.general.auth_2fa.emailSettings.validateMaxAge,
                          expression: "settings.general.auth_2fa.emailSettings.validateMaxAge"
                      }],
                      attrs: {
                          id: "2fa-email-validateMaxAge",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.general.auth_2fa.emailSettings.validateMaxAge
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.general.auth_2fa.emailSettings, "validateMaxAge", t.target.value)
                          }
                      }
                  })])]), a("h4", [e._v("SMS")]), a("div", {
                      staticClass: "layout-labels-top layout-inline-grid-double"
                  }, [a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "2fa-sms-from"
                      }
                  }, [e._v("From")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.general.auth_2fa.smsSettings.from,
                          expression: "settings.general.auth_2fa.smsSettings.from"
                      }],
                      attrs: {
                          id: "2fa-sms-from",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.general.auth_2fa.smsSettings.from
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.general.auth_2fa.smsSettings, "from", t.target.value)
                          }
                      }
                  })]), a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "2fa-sms-account"
                      }
                  }, [e._v("Account")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.general.auth_2fa.smsSettings.account,
                          expression: "settings.general.auth_2fa.smsSettings.account"
                      }],
                      attrs: {
                          id: "2fa-sms-account",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.general.auth_2fa.smsSettings.account
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.general.auth_2fa.smsSettings, "account", t.target.value)
                          }
                      }
                  })]), a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "2fa-sms-message"
                      }
                  }, [e._v("Message")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.general.auth_2fa.smsSettings.message,
                          expression: "settings.general.auth_2fa.smsSettings.message"
                      }],
                      attrs: {
                          id: "2fa-sms-message",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.general.auth_2fa.smsSettings.message
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.general.auth_2fa.smsSettings, "message", t.target.value)
                          }
                      }
                  })]), a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "2fa-sms-validateMaxAge"
                      }
                  }, [e._v("Validate max age")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.general.auth_2fa.smsSettings.validateMaxAge,
                          expression: "settings.general.auth_2fa.smsSettings.validateMaxAge"
                      }],
                      attrs: {
                          id: "2fa-sms-validateMaxAge",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.general.auth_2fa.smsSettings.validateMaxAge
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.general.auth_2fa.smsSettings, "validateMaxAge", t.target.value)
                          }
                      }
                  })])])])], 1)])])
              },
              Kr = [function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("p", [e._v("General configuration settings. For more details on how to configure two-factor authentication, click "), a("a", {
                      attrs: {
                          href: "https://github.com/pegasystems/uplus-wss/wiki/How-to-configure-two-factor-authentication"
                      }
                  }, [e._v("here")]), e._v(".")])
              }],
              Vr = {
                  data() {
                      return o["b"]
                  },
                  components: {
                      Container: _r
                  }
              },
              zr = Vr,
              Jr = Object(C["a"])(zr, Fr, Kr, !1, null, null, null),
              Gr = Jr.exports,
              Qr = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("div", {
                      staticClass: "container-transparent"
                  }, [a("h2", [e._v("Quick links")]), a("p", [e._v("Configuration of each of the mashup cases that can be accessed through the quick links component.")]), e._l(e.settings.quicklinks, (function(t, i) {
                      return a("div", {
                          key: i
                      }, [a("Container", {
                          attrs: {
                              title: "Mashup Case " + (i + 1),
                              expanded: 0 === i
                          }
                      }, [a("div", {
                          staticClass: "layout-labels-left layout-inline-grid-double"
                      }, [a("div", {
                          staticClass: "field-item"
                      }, [a("input", {
                          directives: [{
                              name: "model",
                              rawName: "v-model",
                              value: t.hide,
                              expression: "item.hide"
                          }],
                          attrs: {
                              id: "quicklinks-" + i + "-hideaccount",
                              type: "checkbox"
                          },
                          domProps: {
                              checked: Array.isArray(t.hide) ? e._i(t.hide, null) > -1 : t.hide
                          },
                          on: {
                              change: function(a) {
                                  var i = t.hide,
                                      s = a.target,
                                      n = !!s.checked;
                                  if (Array.isArray(i)) {
                                      var r = null,
                                          o = e._i(i, r);
                                      s.checked ? o < 0 && e.$set(t, "hide", i.concat([r])) : o > -1 && e.$set(t, "hide", i.slice(0, o).concat(i.slice(o + 1)))
                                  } else e.$set(t, "hide", n)
                              }
                          }
                      }), a("label", {
                          staticClass: "width-auto",
                          attrs: {
                              for: "quicklinks-" + i + "-hideaccount"
                          }
                      }, [e._v("Hide from account page")])]), "mashup" === e.settings.general.connection.type ? a("div", {
                          staticClass: "field-item field-checkbox"
                      }, [a("input", {
                          directives: [{
                              name: "model",
                              rawName: "v-model",
                              value: t.dataretained,
                              expression: "item.dataretained"
                          }],
                          attrs: {
                              id: "quicklinks-" + i + "-dataretained",
                              type: "checkbox"
                          },
                          domProps: {
                              checked: Array.isArray(t.dataretained) ? e._i(t.dataretained, null) > -1 : t.dataretained
                          },
                          on: {
                              change: function(a) {
                                  var i = t.dataretained,
                                      s = a.target,
                                      n = !!s.checked;
                                  if (Array.isArray(i)) {
                                      var r = null,
                                          o = e._i(i, r);
                                      s.checked ? o < 0 && e.$set(t, "dataretained", i.concat([r])) : o > -1 && e.$set(t, "dataretained", i.slice(0, o).concat(i.slice(o + 1)))
                                  } else e.$set(t, "dataretained", n)
                              }
                          }
                      }), a("label", {
                          staticClass: "width-auto",
                          attrs: {
                              for: "quicklinks-" + i + "-dataretained"
                          }
                      }, [e._v("Retain state on reload")])]) : e._e()]), a("div", {
                          staticClass: "layout-inline-grid-double layout-labels-top"
                      }, e._l(e.settings.i18n.languages, (function(s) {
                          return a("div", {
                              key: s,
                              staticClass: "field-item"
                          }, [a("label", {
                              attrs: {
                                  for: "quicklinks-" + i + "-" + s
                              }
                          }, [e._v("Case name in '" + e._s(s) + "'")]), a("input", {
                              directives: [{
                                  name: "model",
                                  rawName: "v-model",
                                  value: t.title[s],
                                  expression: "item.title[titlel]"
                              }],
                              attrs: {
                                  id: "quicklinks-" + i + "-" + s,
                                  type: "text"
                              },
                              domProps: {
                                  value: t.title[s]
                              },
                              on: {
                                  input: function(a) {
                                      a.target.composing || e.$set(t.title, s, a.target.value)
                                  }
                              }
                          })])
                      })), 0), a("div", {
                          staticClass: "layout-inline-grid-double layout-labels-top"
                      }, [a("div", {
                          staticClass: "field-item"
                      }, [a("label", {
                          attrs: {
                              for: "quicklinks-" + i + "-action"
                          }
                      }, [e._v("Action")]), a("select", {
                          directives: [{
                              name: "model",
                              rawName: "v-model",
                              value: t.action,
                              expression: "item.action"
                          }],
                          attrs: {
                              id: "quicklinks-" + i + "-action"
                          },
                          on: {
                              change: function(a) {
                                  var i = Array.prototype.filter.call(a.target.options, (function(e) {
                                      return e.selected
                                  })).map((function(e) {
                                      var t = "_value" in e ? e._value : e.value;
                                      return t
                                  }));
                                  e.$set(t, "action", a.target.multiple ? i : i[0])
                              }
                          }
                      }, [a("option", [e._v("createNewWork")]), a("option", [e._v("display")]), "mashup" === e.settings.general.connection.type ? a("option", [e._v("getNextWork")]) : e._e(), a("option", [e._v("openAssignment")]), "mashup" === e.settings.general.connection.type ? a("option", [e._v("openWorkItem")]) : e._e(), a("option", [e._v("openWorkByHandle")])])]), a("div", {
                          staticClass: "field-item"
                      }, [a("label", {
                          attrs: {
                              for: "quicklinks-" + i + "-actionparam"
                          }
                      }, [e._v("Action parameter")]), a("input", {
                          directives: [{
                              name: "model",
                              rawName: "v-model",
                              value: t.actionparam,
                              expression: "item.actionparam"
                          }],
                          attrs: {
                              id: "quicklinks-" + i + "-actionparam",
                              type: "text"
                          },
                          domProps: {
                              value: t.actionparam
                          },
                          on: {
                              input: function(a) {
                                  a.target.composing || e.$set(t, "actionparam", a.target.value)
                              }
                          }
                      })]), a("div", {
                          staticClass: "field-item"
                      }, [a("label", {
                          attrs: {
                              for: "quicklinks-" + i + "-url"
                          }
                      }, [e._v("URL")]), a("input", {
                          directives: [{
                              name: "model",
                              rawName: "v-model",
                              value: t.url,
                              expression: "item.url"
                          }],
                          attrs: {
                              id: "quicklinks-" + i + "-url",
                              type: "text"
                          },
                          domProps: {
                              value: t.url
                          },
                          on: {
                              input: function(a) {
                                  a.target.composing || e.$set(t, "url", a.target.value)
                              }
                          }
                      })]), a("div", {
                          staticClass: "field-item"
                      }, [a("label", {
                          attrs: {
                              for: "quicklinks-" + i + "-objclass"
                          }
                      }, [e._v("Classname")]), a("input", {
                          directives: [{
                              name: "model",
                              rawName: "v-model",
                              value: t.objclass,
                              expression: "item.objclass"
                          }],
                          attrs: {
                              id: "quicklinks-" + i + "-objclass",
                              type: "text"
                          },
                          domProps: {
                              value: t.objclass
                          },
                          on: {
                              input: function(a) {
                                  a.target.composing || e.$set(t, "objclass", a.target.value)
                              }
                          }
                      })]), "mashup" === e.settings.general.connection.type ? a("div", {
                          staticClass: "field-item"
                      }, [a("label", {
                          attrs: {
                              for: "quicklinks-" + i + "-startcase"
                          }
                      }, [e._v("Start case")]), a("input", {
                          directives: [{
                              name: "model",
                              rawName: "v-model",
                              value: t.startcase,
                              expression: "item.startcase"
                          }],
                          attrs: {
                              id: "quicklinks-" + i + "-startcase",
                              type: "text"
                          },
                          domProps: {
                              value: t.startcase
                          },
                          on: {
                              input: function(a) {
                                  a.target.composing || e.$set(t, "startcase", a.target.value)
                              }
                          }
                      })]) : e._e(), a("div", {
                          staticClass: "field-item"
                      }, [a("label", {
                          attrs: {
                              for: "quicklinks-" + i + "-application"
                          }
                      }, [e._v("Application name")]), a("input", {
                          directives: [{
                              name: "model",
                              rawName: "v-model",
                              value: t.application,
                              expression: "item.application"
                          }],
                          attrs: {
                              id: "quicklinks-" + i + "-application",
                              type: "text"
                          },
                          domProps: {
                              value: t.application
                          },
                          on: {
                              input: function(a) {
                                  a.target.composing || e.$set(t, "application", a.target.value)
                              }
                          }
                      })]), "mashup" === e.settings.general.connection.type ? a("div", {
                          staticClass: "field-item"
                      }, [a("label", {
                          attrs: {
                              for: "quicklinks-" + i + "-channelid"
                          }
                      }, [e._v("Channel ID")]), a("input", {
                          directives: [{
                              name: "model",
                              rawName: "v-model",
                              value: t.channelid,
                              expression: "item.channelid"
                          }],
                          attrs: {
                              id: "quicklinks-" + i + "-channelid",
                              type: "text"
                          },
                          domProps: {
                              value: t.channelid
                          },
                          on: {
                              input: function(a) {
                                  a.target.composing || e.$set(t, "channelid", a.target.value)
                              }
                          }
                      })]) : e._e(), "mashup" === e.settings.general.connection.type ? a("div", {
                          staticClass: "field-item"
                      }, [a("label", {
                          attrs: {
                              for: "quicklinks-" + i + "-tenantid"
                          }
                      }, [e._v("Tenant ID")]), a("input", {
                          directives: [{
                              name: "model",
                              rawName: "v-model",
                              value: t.tenantid,
                              expression: "item.tenantid"
                          }],
                          attrs: {
                              id: "quicklinks-" + i + "-tenantid",
                              type: "text"
                          },
                          domProps: {
                              value: t.tenantid
                          },
                          on: {
                              input: function(a) {
                                  a.target.composing || e.$set(t, "tenantid", a.target.value)
                              }
                          }
                      })]) : e._e(), a("div", {
                          staticClass: "field-item"
                      }, [a("label", {
                          attrs: {
                              for: "quicklinks-" + i + "-icon"
                          }
                      }, [e._v("Icon (for mobile)")]), a("input", {
                          directives: [{
                              name: "model",
                              rawName: "v-model",
                              value: t.icon,
                              expression: "item.icon"
                          }],
                          attrs: {
                              id: "quicklinks-" + i + "-icon",
                              type: "text"
                          },
                          domProps: {
                              value: t.icon
                          },
                          on: {
                              input: function(a) {
                                  a.target.composing || e.$set(t, "icon", a.target.value)
                              }
                          }
                      })]), a("div", {
                          staticClass: "field-item"
                      }, [a("label", {
                          attrs: {
                              for: "quicklinks-" + i + "-hideusers"
                          }
                      }, [e._v("Hide for below users (for example User1,User2)")]), a("input", {
                          directives: [{
                              name: "model",
                              rawName: "v-model",
                              value: t.hideusers,
                              expression: "item.hideusers"
                          }],
                          attrs: {
                              id: "quicklinks-" + i + "-hideusers",
                              type: "text"
                          },
                          domProps: {
                              value: t.hideusers
                          },
                          on: {
                              input: function(a) {
                                  a.target.composing || e.$set(t, "hideusers", a.target.value)
                              }
                          }
                      })])]), a("div", {
                          staticClass: "layout-labels-top"
                      }, [a("div", {
                          staticClass: "field-item"
                      }, [a("label", {
                          attrs: {
                              for: "quicklinks-" + i + "-extraparam"
                          }
                      }, [e._v("Extra parameters (for example 'key1=value1,key2=value2')")]), a("textarea", {
                          directives: [{
                              name: "model",
                              rawName: "v-model",
                              value: t.extraparam,
                              expression: "item.extraparam"
                          }],
                          attrs: {
                              id: "quicklinks-" + i + "-extraparam"
                          },
                          domProps: {
                              value: t.extraparam
                          },
                          on: {
                              input: function(a) {
                                  a.target.composing || e.$set(t, "extraparam", a.target.value)
                              }
                          }
                      })])])])], 1)
                  }))], 2)
              },
              Xr = [],
              Yr = {
                  data() {
                      return o["b"]
                  },
                  components: {
                      Container: _r
                  }
              },
              Zr = Yr,
              eo = Object(C["a"])(Zr, Qr, Xr, !1, null, null, null),
              to = eo.exports,
              ao = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("div", {
                      staticClass: "container-transparent"
                  }, [a("h2", [e._v("Bill Pay component")]), a("p", [e._v("Configuration of the mashup displayed when clicking on the 'Pay now' action inside the account page.")]), a("div", {
                      staticClass: "container"
                  }, [a("div", {
                      staticClass: "body"
                  }, [a("div", {
                      staticClass: "layout-labels-left"
                  }, [a("div", {
                      staticClass: "field-item"
                  }, [a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.billpay.hidebillpay,
                          expression: "settings.billpay.hidebillpay"
                      }],
                      attrs: {
                          id: "bill-pay-hidebillpay",
                          type: "checkbox"
                      },
                      domProps: {
                          checked: Array.isArray(e.settings.billpay.hidebillpay) ? e._i(e.settings.billpay.hidebillpay, null) > -1 : e.settings.billpay.hidebillpay
                      },
                      on: {
                          change: function(t) {
                              var a = e.settings.billpay.hidebillpay,
                                  i = t.target,
                                  s = !!i.checked;
                              if (Array.isArray(a)) {
                                  var n = null,
                                      r = e._i(a, n);
                                  i.checked ? r < 0 && e.$set(e.settings.billpay, "hidebillpay", a.concat([n])) : r > -1 && e.$set(e.settings.billpay, "hidebillpay", a.slice(0, r).concat(a.slice(r + 1)))
                              } else e.$set(e.settings.billpay, "hidebillpay", s)
                          }
                      }
                  }), a("label", {
                      staticClass: "width-auto",
                      attrs: {
                          for: "bill-pay-hidebillpay"
                      }
                  }, [e._v("Hide Bill Pay")])])]), a("div", {
                      staticClass: "layout-labels-top layout-inline-grid-double"
                  }, [a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "bill-pay-action"
                      }
                  }, [e._v("Action")]), a("select", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.billpay.action,
                          expression: "settings.billpay.action"
                      }],
                      attrs: {
                          id: "bill-pay-action"
                      },
                      on: {
                          change: function(t) {
                              var a = Array.prototype.filter.call(t.target.options, (function(e) {
                                  return e.selected
                              })).map((function(e) {
                                  var t = "_value" in e ? e._value : e.value;
                                  return t
                              }));
                              e.$set(e.settings.billpay, "action", t.target.multiple ? a : a[0])
                          }
                      }
                  }, [a("option", [e._v("createNewWork")]), a("option", [e._v("display")]), "mashup" === e.settings.general.connection.type ? a("option", [e._v("getNextWork")]) : e._e(), a("option", [e._v("openAssignment")]), "mashup" === e.settings.general.connection.type ? a("option", [e._v("openWorkItem")]) : e._e(), a("option", [e._v("openWorkByHandle")])])]), a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "bill-pay-actionparam"
                      }
                  }, [e._v("Action parameter")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.billpay.actionparam,
                          expression: "settings.billpay.actionparam"
                      }],
                      attrs: {
                          id: "bill-pay-actionparam",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.billpay.actionparam
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.billpay, "actionparam", t.target.value)
                          }
                      }
                  })]), a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "bill-pay-url"
                      }
                  }, [e._v("URL")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.billpay.url,
                          expression: "settings.billpay.url"
                      }],
                      attrs: {
                          id: "bill-pay-url",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.billpay.url
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.billpay, "url", t.target.value)
                          }
                      }
                  })]), a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "bill-pay-objclass"
                      }
                  }, [e._v("Classname")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.billpay.objclass,
                          expression: "settings.billpay.objclass"
                      }],
                      attrs: {
                          id: "bill-pay-objclass",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.billpay.objclass
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.billpay, "objclass", t.target.value)
                          }
                      }
                  })]), "mashup" === e.settings.general.connection.type ? a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "bill-pay-startcase"
                      }
                  }, [e._v("Start case")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.billpay.startcase,
                          expression: "settings.billpay.startcase"
                      }],
                      attrs: {
                          id: "bill-pay-startcase",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.billpay.startcase
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.billpay, "startcase", t.target.value)
                          }
                      }
                  })]) : e._e(), a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "bill-pay-application"
                      }
                  }, [e._v("Application name")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.billpay.application,
                          expression: "settings.billpay.application"
                      }],
                      attrs: {
                          id: "bill-pay-application",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.billpay.application
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.billpay, "application", t.target.value)
                          }
                      }
                  })]), "mashup" === e.settings.general.connection.type ? a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "bill-pay-channelid"
                      }
                  }, [e._v("Channel ID")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.billpay.channelid,
                          expression: "settings.billpay.channelid"
                      }],
                      attrs: {
                          id: "bill-pay-channelid",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.billpay.channelid
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.billpay, "channelid", t.target.value)
                          }
                      }
                  })]) : e._e(), "mashup" === e.settings.general.connection.type ? a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "bill-pay-tenantid"
                      }
                  }, [e._v("Tenant ID")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.billpay.tenantid,
                          expression: "settings.billpay.tenantid"
                      }],
                      attrs: {
                          id: "bill-pay-tenantid",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.billpay.tenantid
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.billpay, "tenantid", t.target.value)
                          }
                      }
                  })]) : e._e(), "mashup" === e.settings.general.connection.type ? a("div", {
                      staticClass: "field-item field-checkbox"
                  }, [a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.billpay.dataretained,
                          expression: "settings.billpay.dataretained"
                      }],
                      attrs: {
                          id: "bill-pay-dataretained",
                          type: "checkbox"
                      },
                      domProps: {
                          checked: Array.isArray(e.settings.billpay.dataretained) ? e._i(e.settings.billpay.dataretained, null) > -1 : e.settings.billpay.dataretained
                      },
                      on: {
                          change: function(t) {
                              var a = e.settings.billpay.dataretained,
                                  i = t.target,
                                  s = !!i.checked;
                              if (Array.isArray(a)) {
                                  var n = null,
                                      r = e._i(a, n);
                                  i.checked ? r < 0 && e.$set(e.settings.billpay, "dataretained", a.concat([n])) : r > -1 && e.$set(e.settings.billpay, "dataretained", a.slice(0, r).concat(a.slice(r + 1)))
                              } else e.$set(e.settings.billpay, "dataretained", s)
                          }
                      }
                  }), a("label", {
                      staticClass: "width-auto",
                      attrs: {
                          for: "bill-pay-dataretained"
                      }
                  }, [e._v("Retain state on reload")])]) : e._e()]), a("div", {
                      staticClass: "layout-labels-top"
                  }, [a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "bill-pay-extraparam"
                      }
                  }, [e._v("Extra parameters (for example 'key1=value1,key2=value2')")]), a("textarea", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.billpay.extraparam,
                          expression: "settings.billpay.extraparam"
                      }],
                      attrs: {
                          id: "bill-pay-extraparam"
                      },
                      domProps: {
                          value: e.settings.billpay.extraparam
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.billpay, "extraparam", t.target.value)
                          }
                      }
                  })])])])])])
              },
              io = [],
              so = {
                  data() {
                      return o["b"]
                  }
              },
              no = so,
              ro = Object(C["a"])(no, ao, io, !1, null, null, null),
              oo = ro.exports,
              lo = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("div", {
                      staticClass: "container-transparent"
                  }, [a("h2", [e._v("Banner component")]), a("p", [e._v("Configuration of the banner component inside the account page.")]), a("div", {
                      staticClass: "container"
                  }, [a("div", {
                      staticClass: "body"
                  }, [a("div", {
                      staticClass: "layout-labels-left layout-inline-grid-double"
                  }, [a("div", {
                      staticClass: "field-item"
                  }, [a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.banner.hidebanner,
                          expression: "settings.banner.hidebanner"
                      }],
                      attrs: {
                          id: "banner-hidebanner",
                          type: "checkbox"
                      },
                      domProps: {
                          checked: Array.isArray(e.settings.banner.hidebanner) ? e._i(e.settings.banner.hidebanner, null) > -1 : e.settings.banner.hidebanner
                      },
                      on: {
                          change: function(t) {
                              var a = e.settings.banner.hidebanner,
                                  i = t.target,
                                  s = !!i.checked;
                              if (Array.isArray(a)) {
                                  var n = null,
                                      r = e._i(a, n);
                                  i.checked ? r < 0 && e.$set(e.settings.banner, "hidebanner", a.concat([n])) : r > -1 && e.$set(e.settings.banner, "hidebanner", a.slice(0, r).concat(a.slice(r + 1)))
                              } else e.$set(e.settings.banner, "hidebanner", s)
                          }
                      }
                  }), a("label", {
                      attrs: {
                          for: "banner-hidebanner"
                      }
                  }, [e._v("Hide banner")])]), a("div", {
                      staticClass: "field-item"
                  }, [a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.banner.hidebanner_button,
                          expression: "settings.banner.hidebanner_button"
                      }],
                      attrs: {
                          id: "banner-hidebanner-button",
                          type: "checkbox"
                      },
                      domProps: {
                          checked: Array.isArray(e.settings.banner.hidebanner_button) ? e._i(e.settings.banner.hidebanner_button, null) > -1 : e.settings.banner.hidebanner_button
                      },
                      on: {
                          change: function(t) {
                              var a = e.settings.banner.hidebanner_button,
                                  i = t.target,
                                  s = !!i.checked;
                              if (Array.isArray(a)) {
                                  var n = null,
                                      r = e._i(a, n);
                                  i.checked ? r < 0 && e.$set(e.settings.banner, "hidebanner_button", a.concat([n])) : r > -1 && e.$set(e.settings.banner, "hidebanner_button", a.slice(0, r).concat(a.slice(r + 1)))
                              } else e.$set(e.settings.banner, "hidebanner_button", s)
                          }
                      }
                  }), a("label", {
                      attrs: {
                          for: "banner-hidebanner-button"
                      }
                  }, [e._v("Hide banner button")])]), a("div", {
                      staticClass: "field-item"
                  }, [a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.banner.color,
                          expression: "settings.banner.color"
                      }],
                      attrs: {
                          id: "banner-background-color",
                          type: "color"
                      },
                      domProps: {
                          value: e.settings.banner.color
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.banner, "color", t.target.value)
                          }
                      }
                  }), a("label", {
                      attrs: {
                          for: "banner-background-color"
                      }
                  }, [e._v("Background color")])])]), a("div", {
                      staticClass: "layout-labels-top layout-inline-grid-double"
                  }, [a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "banner-action"
                      }
                  }, [e._v("Action")]), a("select", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.banner.action,
                          expression: "settings.banner.action"
                      }],
                      attrs: {
                          id: "banner-action"
                      },
                      on: {
                          change: function(t) {
                              var a = Array.prototype.filter.call(t.target.options, (function(e) {
                                  return e.selected
                              })).map((function(e) {
                                  var t = "_value" in e ? e._value : e.value;
                                  return t
                              }));
                              e.$set(e.settings.banner, "action", t.target.multiple ? a : a[0])
                          }
                      }
                  }, [a("option", [e._v("createNewWork")]), a("option", [e._v("display")]), "mashup" === e.settings.general.connection.type ? a("option", [e._v("getNextWork")]) : e._e(), a("option", [e._v("openAssignment")]), "mashup" === e.settings.general.connection.type ? a("option", [e._v("openWorkItem")]) : e._e(), a("option", [e._v("openWorkByHandle")])])]), a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "banner-actionparam"
                      }
                  }, [e._v("Action parameter")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.banner.actionparam,
                          expression: "settings.banner.actionparam"
                      }],
                      attrs: {
                          id: "banner-actionparam",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.banner.actionparam
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.banner, "actionparam", t.target.value)
                          }
                      }
                  })]), a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "banner-url"
                      }
                  }, [e._v("URL")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.banner.url,
                          expression: "settings.banner.url"
                      }],
                      attrs: {
                          id: "banner-url",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.banner.url
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.banner, "url", t.target.value)
                          }
                      }
                  })]), a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "banner-objclass"
                      }
                  }, [e._v("Classname")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.banner.objclass,
                          expression: "settings.banner.objclass"
                      }],
                      attrs: {
                          id: "banner-objclass",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.banner.objclass
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.banner, "objclass", t.target.value)
                          }
                      }
                  })]), "mashup" === e.settings.general.connection.type ? a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "banner-startcase"
                      }
                  }, [e._v("Start case")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.banner.startcase,
                          expression: "settings.banner.startcase"
                      }],
                      attrs: {
                          id: "banner-startcase",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.banner.startcase
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.banner, "startcase", t.target.value)
                          }
                      }
                  })]) : e._e(), a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "banner-application"
                      }
                  }, [e._v("Application name")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.banner.application,
                          expression: "settings.banner.application"
                      }],
                      attrs: {
                          id: "banner-application",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.banner.application
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.banner, "application", t.target.value)
                          }
                      }
                  })]), "mashup" === e.settings.general.connection.type ? a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "banner-channelid"
                      }
                  }, [e._v("Channel ID")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.banner.channelid,
                          expression: "settings.banner.channelid"
                      }],
                      attrs: {
                          id: "banner-channelid",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.banner.channelid
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.banner, "channelid", t.target.value)
                          }
                      }
                  })]) : e._e(), "mashup" === e.settings.general.connection.type ? a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "banner-tenantid"
                      }
                  }, [e._v("Tenant ID")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.banner.tenantid,
                          expression: "settings.banner.tenantid"
                      }],
                      attrs: {
                          id: "banner-tenantid",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.banner.tenantid
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.banner, "tenantid", t.target.value)
                          }
                      }
                  })]) : e._e(), "mashup" === e.settings.general.connection.type ? a("div", {
                      staticClass: "field-item field-checkbox"
                  }, [a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.banner.dataretained,
                          expression: "settings.banner.dataretained"
                      }],
                      attrs: {
                          id: "banner-dataretained",
                          type: "checkbox"
                      },
                      domProps: {
                          checked: Array.isArray(e.settings.banner.dataretained) ? e._i(e.settings.banner.dataretained, null) > -1 : e.settings.banner.dataretained
                      },
                      on: {
                          change: function(t) {
                              var a = e.settings.banner.dataretained,
                                  i = t.target,
                                  s = !!i.checked;
                              if (Array.isArray(a)) {
                                  var n = null,
                                      r = e._i(a, n);
                                  i.checked ? r < 0 && e.$set(e.settings.banner, "dataretained", a.concat([n])) : r > -1 && e.$set(e.settings.banner, "dataretained", a.slice(0, r).concat(a.slice(r + 1)))
                              } else e.$set(e.settings.banner, "dataretained", s)
                          }
                      }
                  }), a("label", {
                      staticClass: "width-auto",
                      attrs: {
                          for: "banner-dataretained"
                      }
                  }, [e._v("Retain state on reload")])]) : e._e()]), a("div", {
                      staticClass: "layout-labels-top"
                  }, [a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "banner-extraparam"
                      }
                  }, [e._v("Extra parameters (for example 'key1=value1,key2=value2')")]), a("textarea", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.banner.extraparam,
                          expression: "settings.banner.extraparam"
                      }],
                      attrs: {
                          id: "banner-extraparam"
                      },
                      domProps: {
                          value: e.settings.banner.extraparam
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.banner, "extraparam", t.target.value)
                          }
                      }
                  })])])])])])
              },
              co = [],
              go = {
                  data() {
                      return o["b"]
                  }
              },
              po = go,
              uo = Object(C["a"])(po, lo, co, !1, null, null, null),
              mo = uo.exports,
              fo = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("div", {
                      staticClass: "container-transparent"
                  }, [a("h2", [e._v("Knowledge Management")]), a("p", [e._v(" Configuration of the mashup used for Knowledge Management and displayed when clicking on the \"Help\" link in the header. Enter an empty 'URL' to disable this functionality. ")]), a("div", {
                      staticClass: "container"
                  }, [a("div", {
                      staticClass: "body"
                  }, [a("div", {
                      staticClass: "layout-labels-top layout-inline-grid-double"
                  }, [a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "kmhelp-action"
                      }
                  }, [e._v("Action")]), a("select", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.kmhelp.action,
                          expression: "settings.kmhelp.action"
                      }],
                      attrs: {
                          id: "kmhelp-action"
                      },
                      on: {
                          change: function(t) {
                              var a = Array.prototype.filter.call(t.target.options, (function(e) {
                                  return e.selected
                              })).map((function(e) {
                                  var t = "_value" in e ? e._value : e.value;
                                  return t
                              }));
                              e.$set(e.settings.kmhelp, "action", t.target.multiple ? a : a[0])
                          }
                      }
                  }, [a("option", [e._v("createNewWork")]), a("option", [e._v("display")]), "mashup" === e.settings.general.connection.type ? a("option", [e._v("getNextWork")]) : e._e(), a("option", [e._v("openAssignment")]), "mashup" === e.settings.general.connection.type ? a("option", [e._v("openWorkItem")]) : e._e(), a("option", [e._v("openWorkByHandle")])])]), a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "kmhelp-actionparam"
                      }
                  }, [e._v("Action parameter")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.kmhelp.actionparam,
                          expression: "settings.kmhelp.actionparam"
                      }],
                      attrs: {
                          id: "kmhelp-actionparam",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.kmhelp.actionparam
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.kmhelp, "actionparam", t.target.value)
                          }
                      }
                  })]), a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "kmhelp-url"
                      }
                  }, [e._v("URL")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.kmhelp.url,
                          expression: "settings.kmhelp.url"
                      }],
                      attrs: {
                          id: "kmhelp-url",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.kmhelp.url
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.kmhelp, "url", t.target.value)
                          }
                      }
                  })]), a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "kmhelp-objclass"
                      }
                  }, [e._v("Classname")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.kmhelp.objclass,
                          expression: "settings.kmhelp.objclass"
                      }],
                      attrs: {
                          id: "kmhelp-objclass",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.kmhelp.objclass
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.kmhelp, "objclass", t.target.value)
                          }
                      }
                  })]), "mashup" === e.settings.general.connection.type ? a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "kmhelp-startcase"
                      }
                  }, [e._v("Start case")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.kmhelp.startcase,
                          expression: "settings.kmhelp.startcase"
                      }],
                      attrs: {
                          id: "kmhelp-startcase",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.kmhelp.startcase
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.kmhelp, "startcase", t.target.value)
                          }
                      }
                  })]) : e._e(), a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "kmhelp-application"
                      }
                  }, [e._v("Application name")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.kmhelp.application,
                          expression: "settings.kmhelp.application"
                      }],
                      attrs: {
                          id: "kmhelp-application",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.kmhelp.application
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.kmhelp, "application", t.target.value)
                          }
                      }
                  })]), a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "kmhelp-username"
                      }
                  }, [e._v("Username (for unauthenticated access)")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.kmhelp.username,
                          expression: "settings.kmhelp.username"
                      }],
                      attrs: {
                          id: "kmhelp-username",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.kmhelp.username
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.kmhelp, "username", t.target.value)
                          }
                      }
                  })]), a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "kmhelp-password"
                      }
                  }, [e._v("Password (for unauthenticated access)")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.kmhelp.password,
                          expression: "settings.kmhelp.password"
                      }],
                      attrs: {
                          id: "kmhelp-password",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.kmhelp.password
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.kmhelp, "password", t.target.value)
                          }
                      }
                  })]), "mashup" === e.settings.general.connection.type ? a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "kmhelp-channelid"
                      }
                  }, [e._v("Channel ID")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.kmhelp.channelid,
                          expression: "settings.kmhelp.channelid"
                      }],
                      attrs: {
                          id: "kmhelp-channelid",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.kmhelp.channelid
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.kmhelp, "channelid", t.target.value)
                          }
                      }
                  })]) : e._e(), "mashup" === e.settings.general.connection.type ? a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "kmhelp-tenantid"
                      }
                  }, [e._v("Tenant ID")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.kmhelp.tenantid,
                          expression: "settings.kmhelp.tenantid"
                      }],
                      attrs: {
                          id: "kmhelp-tenantid",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.kmhelp.tenantid
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.kmhelp, "tenantid", t.target.value)
                          }
                      }
                  })]) : e._e(), "mashup" === e.settings.general.connection.type ? a("div", {
                      staticClass: "field-item field-checkbox"
                  }, [a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.kmhelp.dataretained,
                          expression: "settings.kmhelp.dataretained"
                      }],
                      attrs: {
                          id: "kmhelp-dataretained",
                          type: "checkbox"
                      },
                      domProps: {
                          checked: Array.isArray(e.settings.kmhelp.dataretained) ? e._i(e.settings.kmhelp.dataretained, null) > -1 : e.settings.kmhelp.dataretained
                      },
                      on: {
                          change: function(t) {
                              var a = e.settings.kmhelp.dataretained,
                                  i = t.target,
                                  s = !!i.checked;
                              if (Array.isArray(a)) {
                                  var n = null,
                                      r = e._i(a, n);
                                  i.checked ? r < 0 && e.$set(e.settings.kmhelp, "dataretained", a.concat([n])) : r > -1 && e.$set(e.settings.kmhelp, "dataretained", a.slice(0, r).concat(a.slice(r + 1)))
                              } else e.$set(e.settings.kmhelp, "dataretained", s)
                          }
                      }
                  }), a("label", {
                      staticClass: "width-auto",
                      attrs: {
                          for: "kmhelp-dataretained"
                      }
                  }, [e._v("Retain state on reload")])]) : e._e()]), a("div", {
                      staticClass: "layout-labels-top"
                  }, [a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "kmhelp-extraparam"
                      }
                  }, [e._v("Extra parameters (for example 'key1=value1,key2=value2')")]), a("textarea", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.kmhelp.extraparam,
                          expression: "settings.kmhelp.extraparam"
                      }],
                      attrs: {
                          id: "kmhelp-extraparam"
                      },
                      domProps: {
                          value: e.settings.kmhelp.extraparam
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.kmhelp, "extraparam", t.target.value)
                          }
                      }
                  })])])])])])
              },
              ho = [],
              vo = {
                  data() {
                      return o["b"]
                  }
              },
              _o = vo,
              bo = Object(C["a"])(_o, fo, ho, !1, null, null, null),
              yo = bo.exports,
              ko = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("div", {
                      staticClass: "container-transparent"
                  }, [a("h2", [e._v("To Do component")]), a("p", [e._v("Configuration of the mashup displayed as the To Do list inside the account page.")]), a("div", {
                      staticClass: "container"
                  }, [a("div", {
                      staticClass: "body"
                  }, [a("div", {
                      staticClass: "layout-labels-top layout-inline-grid-double"
                  }, [a("div", {
                      staticClass: "field-item field-checkbox"
                  }, [a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.todo.hideactivity,
                          expression: "settings.todo.hideactivity"
                      }],
                      attrs: {
                          id: "todo-hideactivity",
                          type: "checkbox"
                      },
                      domProps: {
                          checked: Array.isArray(e.settings.todo.hideactivity) ? e._i(e.settings.todo.hideactivity, null) > -1 : e.settings.todo.hideactivity
                      },
                      on: {
                          change: function(t) {
                              var a = e.settings.todo.hideactivity,
                                  i = t.target,
                                  s = !!i.checked;
                              if (Array.isArray(a)) {
                                  var n = null,
                                      r = e._i(a, n);
                                  i.checked ? r < 0 && e.$set(e.settings.todo, "hideactivity", a.concat([n])) : r > -1 && e.$set(e.settings.todo, "hideactivity", a.slice(0, r).concat(a.slice(r + 1)))
                              } else e.$set(e.settings.todo, "hideactivity", s)
                          }
                      }
                  }), a("label", {
                      staticClass: "width-auto",
                      attrs: {
                          for: "todo-hideactivity"
                      }
                  }, [e._v("Hide recent activity")])]), a("div", {
                      staticClass: "field-item field-checkbox"
                  }, [a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.todo.hideaccount,
                          expression: "settings.todo.hideaccount"
                      }],
                      attrs: {
                          id: "todo-hideaccount",
                          type: "checkbox"
                      },
                      domProps: {
                          checked: Array.isArray(e.settings.todo.hideaccount) ? e._i(e.settings.todo.hideaccount, null) > -1 : e.settings.todo.hideaccount
                      },
                      on: {
                          change: function(t) {
                              var a = e.settings.todo.hideaccount,
                                  i = t.target,
                                  s = !!i.checked;
                              if (Array.isArray(a)) {
                                  var n = null,
                                      r = e._i(a, n);
                                  i.checked ? r < 0 && e.$set(e.settings.todo, "hideaccount", a.concat([n])) : r > -1 && e.$set(e.settings.todo, "hideaccount", a.slice(0, r).concat(a.slice(r + 1)))
                              } else e.$set(e.settings.todo, "hideaccount", s)
                          }
                      }
                  }), a("label", {
                      staticClass: "width-auto",
                      attrs: {
                          for: "todo-hideaccount"
                      }
                  }, [e._v("Hide account details")])])]), a("div", {
                      staticClass: "layout-labels-top layout-inline-grid-double"
                  }, ["health-pharma" === e.app.industry || "health-care" === e.app.industry || "health-payer" === e.app.industry ? a("div", {
                      staticClass: "field-item field-checkbox"
                  }, [a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.todo.hideKPI,
                          expression: "settings.todo.hideKPI"
                      }],
                      attrs: {
                          id: "todo-hidekpi",
                          type: "checkbox"
                      },
                      domProps: {
                          checked: Array.isArray(e.settings.todo.hideKPI) ? e._i(e.settings.todo.hideKPI, null) > -1 : e.settings.todo.hideKPI
                      },
                      on: {
                          change: function(t) {
                              var a = e.settings.todo.hideKPI,
                                  i = t.target,
                                  s = !!i.checked;
                              if (Array.isArray(a)) {
                                  var n = null,
                                      r = e._i(a, n);
                                  i.checked ? r < 0 && e.$set(e.settings.todo, "hideKPI", a.concat([n])) : r > -1 && e.$set(e.settings.todo, "hideKPI", a.slice(0, r).concat(a.slice(r + 1)))
                              } else e.$set(e.settings.todo, "hideKPI", s)
                          }
                      }
                  }), a("label", {
                      staticClass: "width-auto",
                      attrs: {
                          for: "todo-hidekpi"
                      }
                  }, [e._v("Hide KPI details")])]) : e._e()]), a("div", {
                      staticClass: "layout-labels-top layout-inline-grid-double"
                  }, [a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "todo-action"
                      }
                  }, [e._v("Action")]), a("select", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.todo.action,
                          expression: "settings.todo.action"
                      }],
                      attrs: {
                          id: "todo-action"
                      },
                      on: {
                          change: function(t) {
                              var a = Array.prototype.filter.call(t.target.options, (function(e) {
                                  return e.selected
                              })).map((function(e) {
                                  var t = "_value" in e ? e._value : e.value;
                                  return t
                              }));
                              e.$set(e.settings.todo, "action", t.target.multiple ? a : a[0])
                          }
                      }
                  }, [a("option", [e._v("createNewWork")]), a("option", [e._v("display")]), "mashup" === e.settings.general.connection.type ? a("option", [e._v("getNextWork")]) : e._e(), a("option", [e._v("openAssignment")]), "mashup" === e.settings.general.connection.type ? a("option", [e._v("openWorkItem")]) : e._e(), a("option", [e._v("openWorkByHandle")])])]), a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "todo-actionparam"
                      }
                  }, [e._v("Action parameter")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.todo.actionparam,
                          expression: "settings.todo.actionparam"
                      }],
                      attrs: {
                          id: "todo-actionparam",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.todo.actionparam
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.todo, "actionparam", t.target.value)
                          }
                      }
                  })]), a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "todo-url"
                      }
                  }, [e._v("URL")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.todo.url,
                          expression: "settings.todo.url"
                      }],
                      attrs: {
                          id: "todo-url",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.todo.url
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.todo, "url", t.target.value)
                          }
                      }
                  })]), a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "todo-objclass"
                      }
                  }, [e._v("Classname")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.todo.objclass,
                          expression: "settings.todo.objclass"
                      }],
                      attrs: {
                          id: "todo-objclass",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.todo.objclass
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.todo, "objclass", t.target.value)
                          }
                      }
                  })]), "mashup" === e.settings.general.connection.type ? a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "todo-startcase"
                      }
                  }, [e._v("Start case")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.todo.startcase,
                          expression: "settings.todo.startcase"
                      }],
                      attrs: {
                          id: "todo-startcase",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.todo.startcase
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.todo, "startcase", t.target.value)
                          }
                      }
                  })]) : e._e(), a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "todo-application"
                      }
                  }, [e._v("Application name")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.todo.application,
                          expression: "settings.todo.application"
                      }],
                      attrs: {
                          id: "todo-application",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.todo.application
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.todo, "application", t.target.value)
                          }
                      }
                  })]), "mashup" === e.settings.general.connection.type ? a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "todo-channelid"
                      }
                  }, [e._v("Channel ID")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.todo.channelid,
                          expression: "settings.todo.channelid"
                      }],
                      attrs: {
                          id: "todo-channelid",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.todo.channelid
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.todo, "channelid", t.target.value)
                          }
                      }
                  })]) : e._e(), "mashup" === e.settings.general.connection.type ? a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "todo-tenantid"
                      }
                  }, [e._v("Tenant ID")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.todo.tenantid,
                          expression: "settings.todo.tenantid"
                      }],
                      attrs: {
                          id: "todo-tenantid",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.todo.tenantid
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.todo, "tenantid", t.target.value)
                          }
                      }
                  })]) : e._e(), "mashup" === e.settings.general.connection.type ? a("div", {
                      staticClass: "field-item field-checkbox"
                  }, [a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.todo.dataretained,
                          expression: "settings.todo.dataretained"
                      }],
                      attrs: {
                          id: "todo-dataretained",
                          type: "checkbox"
                      },
                      domProps: {
                          checked: Array.isArray(e.settings.todo.dataretained) ? e._i(e.settings.todo.dataretained, null) > -1 : e.settings.todo.dataretained
                      },
                      on: {
                          change: function(t) {
                              var a = e.settings.todo.dataretained,
                                  i = t.target,
                                  s = !!i.checked;
                              if (Array.isArray(a)) {
                                  var n = null,
                                      r = e._i(a, n);
                                  i.checked ? r < 0 && e.$set(e.settings.todo, "dataretained", a.concat([n])) : r > -1 && e.$set(e.settings.todo, "dataretained", a.slice(0, r).concat(a.slice(r + 1)))
                              } else e.$set(e.settings.todo, "dataretained", s)
                          }
                      }
                  }), a("label", {
                      staticClass: "width-auto",
                      attrs: {
                          for: "todo-dataretained"
                      }
                  }, [e._v("Retain state on reload")])]) : e._e()]), a("div", {
                      staticClass: "layout-labels-top"
                  }, [a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "todo-extraparam"
                      }
                  }, [e._v("Extra parameters (for example 'key1=value1,key2=value2')")]), a("textarea", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.todo.extraparam,
                          expression: "settings.todo.extraparam"
                      }],
                      attrs: {
                          id: "todo-extraparam"
                      },
                      domProps: {
                          value: e.settings.todo.extraparam
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.todo, "extraparam", t.target.value)
                          }
                      }
                  })])])])])])
              },
              wo = [],
              Co = {
                  data() {
                      return o["b"]
                  }
              },
              Po = Co,
              xo = Object(C["a"])(Po, ko, wo, !1, null, null, null),
              Oo = xo.exports,
              Io = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("div", {
                      staticClass: "container-transparent"
                  }, [a("h2", [e._v("Home Hero Action")]), a("p", [e._v('Configuration of the mashup displayed when clicking on the "Learn more" button inside the Hero placement of the Home page')]), a("div", {
                      staticClass: "container"
                  }, [a("div", {
                      staticClass: "body"
                  }, [a("div", {
                      staticClass: "layout-labels-top layout-inline-grid-double"
                  }, [a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "hero-action-action"
                      }
                  }, [e._v("Action")]), a("select", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.homeheroaction.action,
                          expression: "settings.homeheroaction.action"
                      }],
                      attrs: {
                          id: "hero-action-action"
                      },
                      on: {
                          change: function(t) {
                              var a = Array.prototype.filter.call(t.target.options, (function(e) {
                                  return e.selected
                              })).map((function(e) {
                                  var t = "_value" in e ? e._value : e.value;
                                  return t
                              }));
                              e.$set(e.settings.homeheroaction, "action", t.target.multiple ? a : a[0])
                          }
                      }
                  }, [a("option", [e._v("createNewWork")]), a("option", [e._v("display")]), "mashup" === e.settings.general.connection.type ? a("option", [e._v("getNextWork")]) : e._e(), a("option", [e._v("openAssignment")]), "mashup" === e.settings.general.connection.type ? a("option", [e._v("openWorkItem")]) : e._e(), a("option", [e._v("openWorkByHandle")])])]), a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "hero-action-actionparam"
                      }
                  }, [e._v("Action parameter")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.homeheroaction.actionparam,
                          expression: "settings.homeheroaction.actionparam"
                      }],
                      attrs: {
                          id: "hero-action-actionparam",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.homeheroaction.actionparam
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.homeheroaction, "actionparam", t.target.value)
                          }
                      }
                  })]), a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "hero-action-url"
                      }
                  }, [e._v("URL")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.homeheroaction.url,
                          expression: "settings.homeheroaction.url"
                      }],
                      attrs: {
                          id: "hero-action-url",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.homeheroaction.url
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.homeheroaction, "url", t.target.value)
                          }
                      }
                  })]), a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "hero-action-objclass"
                      }
                  }, [e._v("Classname")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.homeheroaction.objclass,
                          expression: "settings.homeheroaction.objclass"
                      }],
                      attrs: {
                          id: "hero-action-objclass",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.homeheroaction.objclass
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.homeheroaction, "objclass", t.target.value)
                          }
                      }
                  })]), "mashup" === e.settings.general.connection.type ? a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "hero-action-startcase"
                      }
                  }, [e._v("Start case")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.homeheroaction.startcase,
                          expression: "settings.homeheroaction.startcase"
                      }],
                      attrs: {
                          id: "hero-action-startcase",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.homeheroaction.startcase
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.homeheroaction, "startcase", t.target.value)
                          }
                      }
                  })]) : e._e(), a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "hero-action-application"
                      }
                  }, [e._v("Application name")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.homeheroaction.application,
                          expression: "settings.homeheroaction.application"
                      }],
                      attrs: {
                          id: "hero-action-application",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.homeheroaction.application
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.homeheroaction, "application", t.target.value)
                          }
                      }
                  })]), a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "hero-action-pega_userid"
                      }
                  }, [e._v("Pega userid")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.homeheroaction.pega_userid,
                          expression: "settings.homeheroaction.pega_userid"
                      }],
                      attrs: {
                          id: "hero-action-pega_userid",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.homeheroaction.pega_userid
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.homeheroaction, "pega_userid", t.target.value)
                          }
                      }
                  })]), a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "hero-action-pega_pwd"
                      }
                  }, [e._v("Pega password")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.homeheroaction.pega_pwd,
                          expression: "settings.homeheroaction.pega_pwd"
                      }],
                      attrs: {
                          id: "hero-action-pega_pwd",
                          type: "password"
                      },
                      domProps: {
                          value: e.settings.homeheroaction.pega_pwd
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.homeheroaction, "pega_pwd", t.target.value)
                          }
                      }
                  })]), "mashup" === e.settings.general.connection.type ? a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "hero-action-channelid"
                      }
                  }, [e._v("Channel ID")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.homeheroaction.channelid,
                          expression: "settings.homeheroaction.channelid"
                      }],
                      attrs: {
                          id: "hero-action-channelid",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.homeheroaction.channelid
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.homeheroaction, "channelid", t.target.value)
                          }
                      }
                  })]) : e._e(), "mashup" === e.settings.general.connection.type ? a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "hero-action-tenantid"
                      }
                  }, [e._v("Tenant ID")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.homeheroaction.tenantid,
                          expression: "settings.homeheroaction.tenantid"
                      }],
                      attrs: {
                          id: "hero-action-tenantid",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.homeheroaction.tenantid
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.homeheroaction, "tenantid", t.target.value)
                          }
                      }
                  })]) : e._e(), "mashup" === e.settings.general.connection.type ? a("div", {
                      staticClass: "field-item field-checkbox"
                  }, [a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.homeheroaction.dataretained,
                          expression: "settings.homeheroaction.dataretained"
                      }],
                      attrs: {
                          id: "hero-action-dataretained",
                          type: "checkbox"
                      },
                      domProps: {
                          checked: Array.isArray(e.settings.homeheroaction.dataretained) ? e._i(e.settings.homeheroaction.dataretained, null) > -1 : e.settings.homeheroaction.dataretained
                      },
                      on: {
                          change: function(t) {
                              var a = e.settings.homeheroaction.dataretained,
                                  i = t.target,
                                  s = !!i.checked;
                              if (Array.isArray(a)) {
                                  var n = null,
                                      r = e._i(a, n);
                                  i.checked ? r < 0 && e.$set(e.settings.homeheroaction, "dataretained", a.concat([n])) : r > -1 && e.$set(e.settings.homeheroaction, "dataretained", a.slice(0, r).concat(a.slice(r + 1)))
                              } else e.$set(e.settings.homeheroaction, "dataretained", s)
                          }
                      }
                  }), a("label", {
                      staticClass: "width-auto",
                      attrs: {
                          for: "hero-action-dataretained"
                      }
                  }, [e._v("Retain state on reload")])]) : e._e()]), a("div", {
                      staticClass: "layout-labels-top"
                  }, [a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "hero-action-extraparam"
                      }
                  }, [e._v("Extra parameters (for example 'key1=value1,key2=value2')")]), a("textarea", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.homeheroaction.extraparam,
                          expression: "settings.homeheroaction.extraparam"
                      }],
                      attrs: {
                          id: "hero-action-extraparam"
                      },
                      domProps: {
                          value: e.settings.homeheroaction.extraparam
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.homeheroaction, "extraparam", t.target.value)
                          }
                      }
                  })])])])])])
              },
              Ao = [],
              So = {
                  data() {
                      return o["b"]
                  }
              },
              No = So,
              $o = Object(C["a"])(No, Io, Ao, !1, null, null, null),
              Do = $o.exports,
              Mo = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("div", {
                      staticClass: "container-transparent"
                  }, [a("h2", [e._v("Users")]), a("p", [e._v("Configuration of the credentials for the users that can login into the application. Each user is mapped to a Pega Platform user.")]), e._l(e.settings.users, (function(t, i) {
                      return a("div", {
                          key: i
                      }, [a("Container", {
                          attrs: {
                              title: "User " + (i + 1),
                              expanded: 0 === i
                          }
                      }, [a("div", {
                          staticClass: "layout-labels-left"
                      }, [a("div", {
                          staticClass: "field-item"
                      }, [a("label", {
                          staticClass: "width-auto",
                          attrs: {
                              for: "user-" + i + "-load_by_default"
                          }
                      }, [e._v("Loaded by default")]), a("input", {
                          directives: [{
                              name: "model",
                              rawName: "v-model",
                              value: t.load_by_default,
                              expression: "item.load_by_default"
                          }],
                          attrs: {
                              type: "checkbox",
                              id: "user-" + i + "-load_by_default"
                          },
                          domProps: {
                              checked: Array.isArray(t.load_by_default) ? e._i(t.load_by_default, null) > -1 : t.load_by_default
                          },
                          on: {
                              change: function(a) {
                                  var i = t.load_by_default,
                                      s = a.target,
                                      n = !!s.checked;
                                  if (Array.isArray(i)) {
                                      var r = null,
                                          o = e._i(i, r);
                                      s.checked ? o < 0 && e.$set(t, "load_by_default", i.concat([r])) : o > -1 && e.$set(t, "load_by_default", i.slice(0, o).concat(i.slice(o + 1)))
                                  } else e.$set(t, "load_by_default", n)
                              }
                          }
                      })])]), a("div", {
                          staticClass: "layout-inline-grid-double layout-labels-top"
                      }, [a("div", {
                          staticClass: "field-item"
                      }, [a("label", {
                          attrs: {
                              for: "user-" + i + "-username"
                          }
                      }, [e._v("Username")]), a("input", {
                          directives: [{
                              name: "model",
                              rawName: "v-model",
                              value: t.username,
                              expression: "item.username"
                          }],
                          attrs: {
                              id: "user-" + i + "-username",
                              type: "text"
                          },
                          domProps: {
                              value: t.username
                          },
                          on: {
                              input: function(a) {
                                  a.target.composing || e.$set(t, "username", a.target.value)
                              }
                          }
                      })]), a("div", {
                          staticClass: "field-item"
                      }, [a("label", {
                          attrs: {
                              for: "user-" + i + "-password"
                          }
                      }, [e._v("Password")]), a("input", {
                          directives: [{
                              name: "model",
                              rawName: "v-model",
                              value: t.password,
                              expression: "item.password"
                          }],
                          attrs: {
                              id: "user-" + i + "-password",
                              type: "password"
                          },
                          domProps: {
                              value: t.password
                          },
                          on: {
                              input: function(a) {
                                  a.target.composing || e.$set(t, "password", a.target.value)
                              }
                          }
                      })]), a("div", {
                          staticClass: "field-item"
                      }, [a("label", {
                          attrs: {
                              for: "user-" + i + "-img"
                          }
                      }, [e._v("Image")]), a("input", {
                          directives: [{
                              name: "model",
                              rawName: "v-model",
                              value: t.img,
                              expression: "item.img"
                          }],
                          attrs: {
                              id: "user-" + i + "-img",
                              type: "text"
                          },
                          domProps: {
                              value: t.img
                          },
                          on: {
                              input: function(a) {
                                  a.target.composing || e.$set(t, "img", a.target.value)
                              }
                          }
                      })]), a("div", {
                          staticClass: "field-item"
                      }, [a("label", {
                          attrs: {
                              for: "user-" + i + "-company_name"
                          }
                      }, [e._v("Company")]), a("input", {
                          directives: [{
                              name: "model",
                              rawName: "v-model",
                              value: t.company_name,
                              expression: "item.company_name"
                          }],
                          attrs: {
                              id: "user-" + i + "-company_name",
                              type: "text"
                          },
                          domProps: {
                              value: t.company_name
                          },
                          on: {
                              input: function(a) {
                                  a.target.composing || e.$set(t, "company_name", a.target.value)
                              }
                          }
                      })]), a("div", {
                          staticClass: "field-item"
                      }, [a("label", {
                          attrs: {
                              for: "user-" + i + "-name"
                          }
                      }, [e._v("Name")]), a("input", {
                          directives: [{
                              name: "model",
                              rawName: "v-model",
                              value: t.name,
                              expression: "item.name"
                          }],
                          attrs: {
                              id: "user-" + i + "-name",
                              type: "text"
                          },
                          domProps: {
                              value: t.name
                          },
                          on: {
                              input: function(a) {
                                  a.target.composing || e.$set(t, "name", a.target.value)
                              }
                          }
                      })]), a("div", {
                          staticClass: "field-item"
                      }, [a("label", {
                          attrs: {
                              for: "user-" + i + "-billpay"
                          }
                      }, [e._v("Bill amount")]), a("input", {
                          directives: [{
                              name: "model",
                              rawName: "v-model",
                              value: t.billpay,
                              expression: "item.billpay"
                          }],
                          attrs: {
                              id: "user-" + i + "-billpay",
                              type: "text"
                          },
                          domProps: {
                              value: t.billpay
                          },
                          on: {
                              input: function(a) {
                                  a.target.composing || e.$set(t, "billpay", a.target.value)
                              }
                          }
                      })]), a("div", {
                          staticClass: "field-item"
                      }, [a("label", {
                          attrs: {
                              for: "user-" + i + "-pega_userid"
                          }
                      }, [e._v("Pega userid")]), a("input", {
                          directives: [{
                              name: "model",
                              rawName: "v-model",
                              value: t.pega_userid,
                              expression: "item.pega_userid"
                          }],
                          attrs: {
                              id: "user-" + i + "-pega_userid",
                              type: "text"
                          },
                          domProps: {
                              value: t.pega_userid
                          },
                          on: {
                              input: function(a) {
                                  a.target.composing || e.$set(t, "pega_userid", a.target.value)
                              }
                          }
                      })]), a("div", {
                          staticClass: "field-item"
                      }, [a("label", {
                          attrs: {
                              for: "user-" + i + "-pega_pwd"
                          }
                      }, [e._v("Pega password")]), a("input", {
                          directives: [{
                              name: "model",
                              rawName: "v-model",
                              value: t.pega_pwd,
                              expression: "item.pega_pwd"
                          }],
                          attrs: {
                              id: "user-" + i + "-pega_pwd",
                              type: "password"
                          },
                          domProps: {
                              value: t.pega_pwd
                          },
                          on: {
                              input: function(a) {
                                  a.target.composing || e.$set(t, "pega_pwd", a.target.value)
                              }
                          }
                      })]), a("div", {
                          staticClass: "field-item"
                      }, [a("label", {
                          attrs: {
                              for: "user-" + i + "-otp_send_to"
                          }
                      }, [e._v("OTP send to (email or phone)")]), a("input", {
                          directives: [{
                              name: "model",
                              rawName: "v-model",
                              value: t.otp_send_to,
                              expression: "item.otp_send_to"
                          }],
                          attrs: {
                              id: "user-" + i + "-otp_send_to",
                              type: "text"
                          },
                          domProps: {
                              value: t.otp_send_to
                          },
                          on: {
                              input: function(a) {
                                  a.target.composing || e.$set(t, "otp_send_to", a.target.value)
                              }
                          }
                      })]), a("div", {
                          staticClass: "field-item"
                      }, [a("label", {
                          attrs: {
                              for: "user-" + i + "-accountid"
                          }
                      }, [e._v("Account ID (Mashup Chat)")]), a("input", {
                          directives: [{
                              name: "model",
                              rawName: "v-model",
                              value: t.accountID,
                              expression: "item.accountID"
                          }],
                          attrs: {
                              id: "user-" + i + "-accountid",
                              type: "text"
                          },
                          domProps: {
                              value: t.accountID
                          },
                          on: {
                              input: function(a) {
                                  a.target.composing || e.$set(t, "accountID", a.target.value)
                              }
                          }
                      })]), a("div", {
                          staticClass: "field-item"
                      }, [a("label", {
                          attrs: {
                              for: "user-" + i + "-contactid"
                          }
                      }, [e._v("Contact ID (Mashup Chat)")]), a("input", {
                          directives: [{
                              name: "model",
                              rawName: "v-model",
                              value: t.contactID,
                              expression: "item.contactID"
                          }],
                          attrs: {
                              id: "user-" + i + "-contactid",
                              type: "text"
                          },
                          domProps: {
                              value: t.contactID
                          },
                          on: {
                              input: function(a) {
                                  a.target.composing || e.$set(t, "contactID", a.target.value)
                              }
                          }
                      })]), a("div", {
                          staticClass: "field-item"
                      }, [a("label", {
                          attrs: {
                              for: "user-" + i + "-customerid"
                          }
                      }, [e._v("Customer ID (Customer Decision Hub)")]), a("input", {
                          directives: [{
                              name: "model",
                              rawName: "v-model",
                              value: t.customerID,
                              expression: "item.customerID"
                          }],
                          attrs: {
                              id: "user-" + i + "-customerid",
                              type: "text"
                          },
                          domProps: {
                              value: t.customerID
                          },
                          on: {
                              input: function(a) {
                                  a.target.composing || e.$set(t, "customerID", a.target.value)
                              }
                          }
                      })])]), a("div", {
                          staticClass: "layout-labels-top"
                      }, [a("div", {
                          staticClass: "field-item"
                      }, [a("label", {
                          attrs: {
                              for: "user-" + i + "-extraparam"
                          }
                      }, [e._v("Extra parameters (for example 'key1=value1,key2=value2')")]), a("textarea", {
                          directives: [{
                              name: "model",
                              rawName: "v-model",
                              value: t.extraparam,
                              expression: "item.extraparam"
                          }],
                          attrs: {
                              id: "user-" + i + "-extraparam"
                          },
                          domProps: {
                              value: t.extraparam
                          },
                          on: {
                              input: function(a) {
                                  a.target.composing || e.$set(t, "extraparam", a.target.value)
                              }
                          }
                      })]), a("div", {
                          staticClass: "field-item"
                      }, [a("label", {
                          attrs: {
                              for: "user-" + i + "-dmm_context_data"
                          }
                      }, [e._v("Additional context data for Digital Messaging Manager (format: first_name=john,last_name=smith)")]), a("textarea", {
                          directives: [{
                              name: "model",
                              rawName: "v-model",
                              value: t.dmm_context_data,
                              expression: "item.dmm_context_data"
                          }],
                          attrs: {
                              id: "user-" + i + "-dmm_context_data"
                          },
                          domProps: {
                              value: t.dmm_context_data
                          },
                          on: {
                              input: function(a) {
                                  a.target.composing || e.$set(t, "dmm_context_data", a.target.value)
                              }
                          }
                      })])])])], 1)
                  }))], 2)
              },
              To = [],
              jo = {
                  data() {
                      return o["b"]
                  },
                  components: {
                      Container: _r
                  }
              },
              Lo = jo,
              Eo = Object(C["a"])(Lo, Mo, To, !1, null, null, null),
              Ro = Eo.exports,
              Bo = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("div", {
                      staticClass: "container-transparent"
                  }, [a("h2", [e._v("Messaging and Co-Browse")]), e._m(0), a("Container", {
                      attrs: {
                          title: "Messaging",
                          expanded: ""
                      }
                  }, [a("div", {
                      staticClass: "layout-labels-left"
                  }, [a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      staticClass: "width-auto",
                      attrs: {
                          for: "chat-ShowAsButton"
                      }
                  }, [e._v("Connect using legacy Web Chat Mashup")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.pega_chat.UseLegacyWebChat,
                          expression: "settings.pega_chat.UseLegacyWebChat"
                      }],
                      attrs: {
                          id: "chat-ShowAsButton",
                          type: "checkbox"
                      },
                      domProps: {
                          checked: Array.isArray(e.settings.pega_chat.UseLegacyWebChat) ? e._i(e.settings.pega_chat.UseLegacyWebChat, null) > -1 : e.settings.pega_chat.UseLegacyWebChat
                      },
                      on: {
                          change: function(t) {
                              var a = e.settings.pega_chat.UseLegacyWebChat,
                                  i = t.target,
                                  s = !!i.checked;
                              if (Array.isArray(a)) {
                                  var n = null,
                                      r = e._i(a, n);
                                  i.checked ? r < 0 && e.$set(e.settings.pega_chat, "UseLegacyWebChat", a.concat([n])) : r > -1 && e.$set(e.settings.pega_chat, "UseLegacyWebChat", a.slice(0, r).concat(a.slice(r + 1)))
                              } else e.$set(e.settings.pega_chat, "UseLegacyWebChat", s)
                          }
                      }
                  })])]), !1 === e.settings.pega_chat.UseLegacyWebChat ? a("div", {
                      staticClass: "layout-labels-top"
                  }, [a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "chat-DMMID"
                      }
                  }, [e._v("ID of the widget")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.pega_chat.DMMID,
                          expression: "settings.pega_chat.DMMID"
                      }],
                      attrs: {
                          id: "chat-DMMID",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.pega_chat.DMMID
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.pega_chat, "DMMID", t.target.value)
                          }
                      }
                  })]), a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "chat-DMMURL"
                      }
                  }, [e._v("URL of the Digital Messaging Server")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.pega_chat.DMMURL,
                          expression: "settings.pega_chat.DMMURL"
                      }],
                      attrs: {
                          id: "chat-DMMURL",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.pega_chat.DMMURL
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.pega_chat, "DMMURL", t.target.value)
                          }
                      }
                  })]), a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "chat-DMMSecret"
                      }
                  }, [e._v("Secret to generate JWT Token for authentication")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.pega_chat.DMMSecret,
                          expression: "settings.pega_chat.DMMSecret"
                      }],
                      attrs: {
                          id: "chat-DMMSecret",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.pega_chat.DMMSecret
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.pega_chat, "DMMSecret", t.target.value)
                          }
                      }
                  })]), a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "chat-DMMPrivateURL"
                      }
                  }, [e._v("URL of the DM server to send private data")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.pega_chat.DMMPrivateURL,
                          expression: "settings.pega_chat.DMMPrivateURL"
                      }],
                      attrs: {
                          id: "chat-DMMPrivateURL",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.pega_chat.DMMPrivateURL
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.pega_chat, "DMMPrivateURL", t.target.value)
                          }
                      }
                  })])]) : a("div", [a("div", {
                      staticClass: "layout-labels-top layout-inline-grid-double"
                  }, [a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "chat-MashupURL"
                      }
                  }, [e._v("URL")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.pega_chat.MashupURL,
                          expression: "settings.pega_chat.MashupURL"
                      }],
                      attrs: {
                          id: "chat-MashupURL",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.pega_chat.MashupURL
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.pega_chat, "MashupURL", t.target.value)
                          }
                      }
                  })]), a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "chat-WCBConfigName"
                      }
                  }, [e._v("Config name")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.pega_chat.WCBConfigName,
                          expression: "settings.pega_chat.WCBConfigName"
                      }],
                      attrs: {
                          id: "chat-WCBConfigName",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.pega_chat.WCBConfigName
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.pega_chat, "WCBConfigName", t.target.value)
                          }
                      }
                  })]), a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "chat-WebChatBotID"
                      }
                  }, [e._v("Bot ID")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.pega_chat.WebChatBotID,
                          expression: "settings.pega_chat.WebChatBotID"
                      }],
                      attrs: {
                          id: "chat-WebChatBotID",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.pega_chat.WebChatBotID
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.pega_chat, "WebChatBotID", t.target.value)
                          }
                      }
                  })]), a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "chat-ApplicationName"
                      }
                  }, [e._v("Application name")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.pega_chat.ApplicationName,
                          expression: "settings.pega_chat.ApplicationName"
                      }],
                      attrs: {
                          id: "chat-ApplicationName",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.pega_chat.ApplicationName
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.pega_chat, "ApplicationName", t.target.value)
                          }
                      }
                  })]), a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "chat-TenantID"
                      }
                  }, [e._v("Tenant ID")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.pega_chat.TenantID,
                          expression: "settings.pega_chat.TenantID"
                      }],
                      attrs: {
                          id: "chat-TenantID",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.pega_chat.TenantID
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.pega_chat, "TenantID", t.target.value)
                          }
                      }
                  })])]), a("div", {
                      staticClass: "layout-labels-left"
                  }, [a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      staticClass: "width-auto",
                      attrs: {
                          for: "chat-ShowAsButton"
                      }
                  }, [e._v("Show the launch icon as button")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.pega_chat.ShowAsButton,
                          expression: "settings.pega_chat.ShowAsButton"
                      }],
                      attrs: {
                          id: "chat-ShowAsButton",
                          type: "checkbox"
                      },
                      domProps: {
                          checked: Array.isArray(e.settings.pega_chat.ShowAsButton) ? e._i(e.settings.pega_chat.ShowAsButton, null) > -1 : e.settings.pega_chat.ShowAsButton
                      },
                      on: {
                          change: function(t) {
                              var a = e.settings.pega_chat.ShowAsButton,
                                  i = t.target,
                                  s = !!i.checked;
                              if (Array.isArray(a)) {
                                  var n = null,
                                      r = e._i(a, n);
                                  i.checked ? r < 0 && e.$set(e.settings.pega_chat, "ShowAsButton", a.concat([n])) : r > -1 && e.$set(e.settings.pega_chat, "ShowAsButton", a.slice(0, r).concat(a.slice(r + 1)))
                              } else e.$set(e.settings.pega_chat, "ShowAsButton", s)
                          }
                      }
                  })]), a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      staticClass: "width-auto",
                      attrs: {
                          for: "chat-EnableProActiveNotification"
                      }
                  }, [e._v("Enable Customer Decision Hub proactive notifications (must be configured)")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.pega_chat.EnableProActiveNotification,
                          expression: "settings.pega_chat.EnableProActiveNotification"
                      }],
                      attrs: {
                          id: "chat-EnableProActiveNotification",
                          type: "checkbox"
                      },
                      domProps: {
                          checked: Array.isArray(e.settings.pega_chat.EnableProActiveNotification) ? e._i(e.settings.pega_chat.EnableProActiveNotification, null) > -1 : e.settings.pega_chat.EnableProActiveNotification
                      },
                      on: {
                          change: function(t) {
                              var a = e.settings.pega_chat.EnableProActiveNotification,
                                  i = t.target,
                                  s = !!i.checked;
                              if (Array.isArray(a)) {
                                  var n = null,
                                      r = e._i(a, n);
                                  i.checked ? r < 0 && e.$set(e.settings.pega_chat, "EnableProActiveNotification", a.concat([n])) : r > -1 && e.$set(e.settings.pega_chat, "EnableProActiveNotification", a.slice(0, r).concat(a.slice(r + 1)))
                              } else e.$set(e.settings.pega_chat, "EnableProActiveNotification", s)
                          }
                      }
                  })]), a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      staticClass: "width-auto",
                      attrs: {
                          for: "chat-ResetLogout"
                      }
                  }, [e._v("Reset chat when user logs out")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.pega_chat.ResetLogout,
                          expression: "settings.pega_chat.ResetLogout"
                      }],
                      attrs: {
                          id: "chat-ResetLogout",
                          type: "checkbox"
                      },
                      domProps: {
                          checked: Array.isArray(e.settings.pega_chat.ResetLogout) ? e._i(e.settings.pega_chat.ResetLogout, null) > -1 : e.settings.pega_chat.ResetLogout
                      },
                      on: {
                          change: function(t) {
                              var a = e.settings.pega_chat.ResetLogout,
                                  i = t.target,
                                  s = !!i.checked;
                              if (Array.isArray(a)) {
                                  var n = null,
                                      r = e._i(a, n);
                                  i.checked ? r < 0 && e.$set(e.settings.pega_chat, "ResetLogout", a.concat([n])) : r > -1 && e.$set(e.settings.pega_chat, "ResetLogout", a.slice(0, r).concat(a.slice(r + 1)))
                              } else e.$set(e.settings.pega_chat, "ResetLogout", s)
                          }
                      }
                  })])]), a("div", {
                      staticClass: "layout-labels-top layout-inline-grid-double"
                  }, [a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      staticClass: "width-auto",
                      attrs: {
                          for: "chat-ProActiveNotificationDismissTime"
                      }
                  }, [e._v("Proactive notifications dismiss time (in ms)")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.pega_chat.ProActiveNotificationDismissTime,
                          expression: "settings.pega_chat.ProActiveNotificationDismissTime"
                      }],
                      attrs: {
                          id: "chat-ProActiveNotificationDismissTime",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.pega_chat.ProActiveNotificationDismissTime
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.pega_chat, "ProActiveNotificationDismissTime", t.target.value)
                          }
                      }
                  })])])])]), a("Container", {
                      attrs: {
                          title: "Co-Browse",
                          expanded: ""
                      }
                  }, [a("div", {
                      staticClass: "layout-labels-top layout-inline-grid-double"
                  }, [a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "chat-CoBrowseServerURL"
                      }
                  }, [e._v("URL")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.pega_chat.CoBrowseServerURL,
                          expression: "settings.pega_chat.CoBrowseServerURL"
                      }],
                      attrs: {
                          id: "chat-CoBrowseServerURL",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.pega_chat.CoBrowseServerURL
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.pega_chat, "CoBrowseServerURL", t.target.value)
                          }
                      }
                  })]), a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "chat-CoBrowseToken"
                      }
                  }, [e._v("Token")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.pega_chat.CoBrowseToken,
                          expression: "settings.pega_chat.CoBrowseToken"
                      }],
                      attrs: {
                          id: "chat-CoBrowseToken",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.pega_chat.CoBrowseToken
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.pega_chat, "CoBrowseToken", t.target.value)
                          }
                      }
                  })])])])], 1)
              },
              Uo = [function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("p", [e._v("Configuration of the messaging and Co-Browse components. Enter an empty 'URL' to disable the functionality. For more details, click "), a("a", {
                      attrs: {
                          href: "https://github.com/pegasystems/uplus-wss/wiki/How-to-configure-the-Pega-Chat-bot"
                      }
                  }, [e._v("here")]), e._v(".")])
              }],
              Ho = {
                  data() {
                      return o["b"]
                  },
                  components: {
                      Container: _r
                  }
              },
              qo = Ho,
              Wo = Object(C["a"])(qo, Bo, Uo, !1, null, null, null),
              Fo = Wo.exports,
              Ko = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("div", {
                      staticClass: "container-transparent"
                  }, [a("h2", [e._v("Customer Decision Hub")]), e._m(0), a("Container", {
                      attrs: {
                          title: "General",
                          expanded: ""
                      }
                  }, [a("div", {
                      staticClass: "layout-labels-top layout-inline-grid-double"
                  }, [a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "NBAM-Host"
                      }
                  }, [e._v("Host")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.pega_marketing.Host,
                          expression: "settings.pega_marketing.Host"
                      }],
                      attrs: {
                          id: "NBAM-Host",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.pega_marketing.Host
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.pega_marketing, "Host", t.target.value)
                          }
                      }
                  })]), a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "NBAM-Port"
                      }
                  }, [e._v("Port")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.pega_marketing.Port,
                          expression: "settings.pega_marketing.Port"
                      }],
                      attrs: {
                          id: "NBAM-Port",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.pega_marketing.Port
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.pega_marketing, "Port", t.target.value)
                          }
                      }
                  })]), a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "NBAM-Channel"
                      }
                  }, [e._v("Channel")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.pega_marketing.channel,
                          expression: "settings.pega_marketing.channel"
                      }],
                      attrs: {
                          id: "NBAM-Channel",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.pega_marketing.channel
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.pega_marketing, "channel", t.target.value)
                          }
                      }
                  })]), a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "NBAM-requestTimeout"
                      }
                  }, [e._v("Timeout for XHR request (in ms)")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.pega_marketing.requestTimeout,
                          expression: "settings.pega_marketing.requestTimeout"
                      }],
                      attrs: {
                          id: "NBAM-requestTimeout",
                          type: "integer"
                      },
                      domProps: {
                          value: e.settings.pega_marketing.requestTimeout
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.pega_marketing, "requestTimeout", t.target.value)
                          }
                      }
                  })]), a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "NBAM-APILevel"
                      }
                  }, [e._v("API level")]), a("select", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.pega_marketing.apiLevel,
                          expression: "settings.pega_marketing.apiLevel"
                      }],
                      attrs: {
                          id: "NBAM-APILevel"
                      },
                      on: {
                          change: function(t) {
                              var a = Array.prototype.filter.call(t.target.options, (function(e) {
                                  return e.selected
                              })).map((function(e) {
                                  var t = "_value" in e ? e._value : e.value;
                                  return t
                              }));
                              e.$set(e.settings.pega_marketing, "apiLevel", t.target.multiple ? a : a[0])
                          }
                      }
                  }, [a("option", [e._v("V2")]), a("option", [e._v("V3")])])]), "V3" === e.settings.pega_marketing.apiLevel ? a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "NBAM-contextName"
                      }
                  }, [e._v("Context name")]), a("select", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.pega_marketing.contextName,
                          expression: "settings.pega_marketing.contextName"
                      }],
                      attrs: {
                          id: "NBAM-contextName"
                      },
                      on: {
                          change: function(t) {
                              var a = Array.prototype.filter.call(t.target.options, (function(e) {
                                  return e.selected
                              })).map((function(e) {
                                  var t = "_value" in e ? e._value : e.value;
                                  return t
                              }));
                              e.$set(e.settings.pega_marketing, "contextName", t.target.multiple ? a : a[0])
                          }
                      }
                  }, [a("option", [e._v("Account")]), a("option", [e._v("Customer")])])]) : e._e()]), a("div", {
                      staticClass: "layout-labels-left"
                  }, ["V3" === e.settings.pega_marketing.apiLevel ? a("div", {
                      staticClass: "field-item field-checkbox"
                  }, [a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.pega_marketing.useCaptureByChannel,
                          expression: "settings.pega_marketing.useCaptureByChannel"
                      }],
                      attrs: {
                          id: "NBAM-useCaptureByChannel",
                          type: "checkbox"
                      },
                      domProps: {
                          checked: Array.isArray(e.settings.pega_marketing.useCaptureByChannel) ? e._i(e.settings.pega_marketing.useCaptureByChannel, null) > -1 : e.settings.pega_marketing.useCaptureByChannel
                      },
                      on: {
                          change: function(t) {
                              var a = e.settings.pega_marketing.useCaptureByChannel,
                                  i = t.target,
                                  s = !!i.checked;
                              if (Array.isArray(a)) {
                                  var n = null,
                                      r = e._i(a, n);
                                  i.checked ? r < 0 && e.$set(e.settings.pega_marketing, "useCaptureByChannel", a.concat([n])) : r > -1 && e.$set(e.settings.pega_marketing, "useCaptureByChannel", a.slice(0, r).concat(a.slice(r + 1)))
                              } else e.$set(e.settings.pega_marketing, "useCaptureByChannel", s)
                          }
                      }
                  }), a("label", {
                      staticClass: "width-auto",
                      attrs: {
                          for: "NBAM-useCaptureByChannel"
                      }
                  }, [e._v("Enable capturing responses to actions")])]) : e._e(), a("div", {
                      staticClass: "field-item field-checkbox"
                  }, [a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.pega_marketing.showAIOverlay,
                          expression: "settings.pega_marketing.showAIOverlay"
                      }],
                      attrs: {
                          id: "NBAM-showAIOverlay",
                          type: "checkbox"
                      },
                      domProps: {
                          checked: Array.isArray(e.settings.pega_marketing.showAIOverlay) ? e._i(e.settings.pega_marketing.showAIOverlay, null) > -1 : e.settings.pega_marketing.showAIOverlay
                      },
                      on: {
                          change: function(t) {
                              var a = e.settings.pega_marketing.showAIOverlay,
                                  i = t.target,
                                  s = !!i.checked;
                              if (Array.isArray(a)) {
                                  var n = null,
                                      r = e._i(a, n);
                                  i.checked ? r < 0 && e.$set(e.settings.pega_marketing, "showAIOverlay", a.concat([n])) : r > -1 && e.$set(e.settings.pega_marketing, "showAIOverlay", a.slice(0, r).concat(a.slice(r + 1)))
                              } else e.$set(e.settings.pega_marketing, "showAIOverlay", s)
                          }
                      }
                  }), a("label", {
                      staticClass: "width-auto",
                      attrs: {
                          for: "NBAM-showAIOverlay"
                      }
                  }, [e._v("Show AI overlay")])]), a("div", {
                      staticClass: "field-item field-checkbox"
                  }, [a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.pega_marketing.enableRTS,
                          expression: "settings.pega_marketing.enableRTS"
                      }],
                      attrs: {
                          id: "NBAM-enableRTS",
                          type: "checkbox"
                      },
                      domProps: {
                          checked: Array.isArray(e.settings.pega_marketing.enableRTS) ? e._i(e.settings.pega_marketing.enableRTS, null) > -1 : e.settings.pega_marketing.enableRTS
                      },
                      on: {
                          change: function(t) {
                              var a = e.settings.pega_marketing.enableRTS,
                                  i = t.target,
                                  s = !!i.checked;
                              if (Array.isArray(a)) {
                                  var n = null,
                                      r = e._i(a, n);
                                  i.checked ? r < 0 && e.$set(e.settings.pega_marketing, "enableRTS", a.concat([n])) : r > -1 && e.$set(e.settings.pega_marketing, "enableRTS", a.slice(0, r).concat(a.slice(r + 1)))
                              } else e.$set(e.settings.pega_marketing, "enableRTS", s)
                          }
                      }
                  }), a("label", {
                      staticClass: "width-auto",
                      attrs: {
                          for: "NBAM-enableRTS"
                      }
                  }, [e._v("Enable Real-time data streaming")])]), a("div", {
                      staticClass: "field-item field-checkbox"
                  }, [a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.pega_marketing.enableClickStream,
                          expression: "settings.pega_marketing.enableClickStream"
                      }],
                      attrs: {
                          id: "NBAM-enableClickStream",
                          type: "checkbox"
                      },
                      domProps: {
                          checked: Array.isArray(e.settings.pega_marketing.enableClickStream) ? e._i(e.settings.pega_marketing.enableClickStream, null) > -1 : e.settings.pega_marketing.enableClickStream
                      },
                      on: {
                          change: function(t) {
                              var a = e.settings.pega_marketing.enableClickStream,
                                  i = t.target,
                                  s = !!i.checked;
                              if (Array.isArray(a)) {
                                  var n = null,
                                      r = e._i(a, n);
                                  i.checked ? r < 0 && e.$set(e.settings.pega_marketing, "enableClickStream", a.concat([n])) : r > -1 && e.$set(e.settings.pega_marketing, "enableClickStream", a.slice(0, r).concat(a.slice(r + 1)))
                              } else e.$set(e.settings.pega_marketing, "enableClickStream", s)
                          }
                      }
                  }), a("label", {
                      staticClass: "width-auto",
                      attrs: {
                          for: "NBAM-enableClickStream"
                      }
                  }, [e._v("Enable Click Stream")])]), a("div", {
                      staticClass: "field-item"
                  }, [a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.pega_marketing.replaceHomePageHeader,
                          expression: "settings.pega_marketing.replaceHomePageHeader"
                      }],
                      attrs: {
                          id: "NBAM-replaceHomePageHeader",
                          type: "checkbox"
                      },
                      domProps: {
                          checked: Array.isArray(e.settings.pega_marketing.replaceHomePageHeader) ? e._i(e.settings.pega_marketing.replaceHomePageHeader, null) > -1 : e.settings.pega_marketing.replaceHomePageHeader
                      },
                      on: {
                          change: function(t) {
                              var a = e.settings.pega_marketing.replaceHomePageHeader,
                                  i = t.target,
                                  s = !!i.checked;
                              if (Array.isArray(a)) {
                                  var n = null,
                                      r = e._i(a, n);
                                  i.checked ? r < 0 && e.$set(e.settings.pega_marketing, "replaceHomePageHeader", a.concat([n])) : r > -1 && e.$set(e.settings.pega_marketing, "replaceHomePageHeader", a.slice(0, r).concat(a.slice(r + 1)))
                              } else e.$set(e.settings.pega_marketing, "replaceHomePageHeader", s)
                          }
                      }
                  }), a("label", {
                      staticClass: "width-auto",
                      attrs: {
                          for: "NBAM-replaceHomePageHeader"
                      }
                  }, [e._v("Replace Home Page header with Hero placement")])]), a("div", {
                      staticClass: "field-item"
                  }, [a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.pega_marketing.showLoadingIndicator,
                          expression: "settings.pega_marketing.showLoadingIndicator"
                      }],
                      attrs: {
                          id: "NBAM-showLoadingIndicator",
                          type: "checkbox"
                      },
                      domProps: {
                          checked: Array.isArray(e.settings.pega_marketing.showLoadingIndicator) ? e._i(e.settings.pega_marketing.showLoadingIndicator, null) > -1 : e.settings.pega_marketing.showLoadingIndicator
                      },
                      on: {
                          change: function(t) {
                              var a = e.settings.pega_marketing.showLoadingIndicator,
                                  i = t.target,
                                  s = !!i.checked;
                              if (Array.isArray(a)) {
                                  var n = null,
                                      r = e._i(a, n);
                                  i.checked ? r < 0 && e.$set(e.settings.pega_marketing, "showLoadingIndicator", a.concat([n])) : r > -1 && e.$set(e.settings.pega_marketing, "showLoadingIndicator", a.slice(0, r).concat(a.slice(r + 1)))
                              } else e.$set(e.settings.pega_marketing, "showLoadingIndicator", s)
                          }
                      }
                  }), a("label", {
                      staticClass: "width-auto",
                      attrs: {
                          for: "NBAM-showLoadingIndicator"
                      }
                  }, [e._v("Display progress indicator while loading the offers")])])])]), a("Container", {
                      attrs: {
                          title: "Home Page",
                          expanded: ""
                      }
                  }, [a("div", {
                      staticClass: "layout-labels-top layout-inline-grid-double"
                  }, [a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "NBAM-HomePage-ContainerName"
                      }
                  }, [e._v("Container name")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.pega_marketing.homePage.containerName,
                          expression: "settings.pega_marketing.homePage.containerName"
                      }],
                      attrs: {
                          id: "NBAM-HomePage-ContainerName",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.pega_marketing.homePage.containerName
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.pega_marketing.homePage, "containerName", t.target.value)
                          }
                      }
                  })]), a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "NBAM-HomePage-Placement"
                      }
                  }, [e._v("Placement (Hero or Tile)")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.pega_marketing.homePage.placement,
                          expression: "settings.pega_marketing.homePage.placement"
                      }],
                      attrs: {
                          id: "NBAM-HomePage-Placement",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.pega_marketing.homePage.placement
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.pega_marketing.homePage, "placement", t.target.value)
                          }
                      }
                  })]), a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "NBAM-HomePage-ClickAction"
                      }
                  }, [e._v("Click action")]), a("select", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.pega_marketing.homePage.clickaction,
                          expression: "settings.pega_marketing.homePage.clickaction"
                      }],
                      attrs: {
                          id: "NBAM-HomePage-ClickAction"
                      },
                      on: {
                          change: function(t) {
                              var a = Array.prototype.filter.call(t.target.options, (function(e) {
                                  return e.selected
                              })).map((function(e) {
                                  var t = "_value" in e ? e._value : e.value;
                                  return t
                              }));
                              e.$set(e.settings.pega_marketing.homePage, "clickaction", t.target.multiple ? a : a[0])
                          }
                      }
                  }, [a("option", [e._v("Mashup")]), a("option", [e._v("Popup")]), a("option", [e._v("TopURL")])])])])]), a("Container", {
                      attrs: {
                          title: "Account Page"
                      }
                  }, [a("div", {
                      staticClass: "layout-labels-top layout-inline-grid-double"
                  }, [a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "NBAM-AccountPage-ContainerName"
                      }
                  }, [e._v("Container name")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.pega_marketing.accountPage.containerName,
                          expression: "settings.pega_marketing.accountPage.containerName"
                      }],
                      attrs: {
                          id: "NBAM-AccountPage-ContainerName",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.pega_marketing.accountPage.containerName
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.pega_marketing.accountPage, "containerName", t.target.value)
                          }
                      }
                  })]), a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "NBAM-AccountPage-Placement"
                      }
                  }, [e._v("Placement (Hero or Tile)")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.pega_marketing.accountPage.placement,
                          expression: "settings.pega_marketing.accountPage.placement"
                      }],
                      attrs: {
                          id: "NBAM-AccountPage-Placement",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.pega_marketing.accountPage.placement
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.pega_marketing.accountPage, "placement", t.target.value)
                          }
                      }
                  })]), a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "NBAM-AccountPage-ClickAction"
                      }
                  }, [e._v("Click action")]), a("select", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.pega_marketing.accountPage.clickaction,
                          expression: "settings.pega_marketing.accountPage.clickaction"
                      }],
                      attrs: {
                          id: "NBAM-AccountPage-ClickAction"
                      },
                      on: {
                          change: function(t) {
                              var a = Array.prototype.filter.call(t.target.options, (function(e) {
                                  return e.selected
                              })).map((function(e) {
                                  var t = "_value" in e ? e._value : e.value;
                                  return t
                              }));
                              e.$set(e.settings.pega_marketing.accountPage, "clickaction", t.target.multiple ? a : a[0])
                          }
                      }
                  }, [a("option", [e._v("Mashup")]), a("option", [e._v("Popup")]), a("option", [e._v("TopURL")])])])])]), a("Container", {
                      attrs: {
                          title: "Home Page for mobile"
                      }
                  }, [a("div", {
                      staticClass: "layout-labels-top layout-inline-grid-double"
                  }, [a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "NBAM-PhonePage-ContainerName"
                      }
                  }, [e._v("Container name")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.pega_marketing.phonePage.containerName,
                          expression: "settings.pega_marketing.phonePage.containerName"
                      }],
                      attrs: {
                          id: "NBAM-PhonePage-ContainerName",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.pega_marketing.phonePage.containerName
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.pega_marketing.phonePage, "containerName", t.target.value)
                          }
                      }
                  })]), a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "NBAM-PhonePage-Placement"
                      }
                  }, [e._v("Placement (Hero or Tile)")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.pega_marketing.phonePage.placement,
                          expression: "settings.pega_marketing.phonePage.placement"
                      }],
                      attrs: {
                          id: "NBAM-PhonePage-Placement",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.pega_marketing.phonePage.placement
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.pega_marketing.phonePage, "placement", t.target.value)
                          }
                      }
                  })]), a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "NBAM-PhonePage-ClickAction"
                      }
                  }, [e._v("Click action")]), a("select", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.pega_marketing.phonePage.clickaction,
                          expression: "settings.pega_marketing.phonePage.clickaction"
                      }],
                      attrs: {
                          id: "NBAM-PhonePage-ClickAction"
                      },
                      on: {
                          change: function(t) {
                              var a = Array.prototype.filter.call(t.target.options, (function(e) {
                                  return e.selected
                              })).map((function(e) {
                                  var t = "_value" in e ? e._value : e.value;
                                  return t
                              }));
                              e.$set(e.settings.pega_marketing.phonePage, "clickaction", t.target.multiple ? a : a[0])
                          }
                      }
                  }, [a("option", [e._v("Mashup")]), a("option", [e._v("Popup")]), a("option", [e._v("TopURL")])])])])]), a("Container", {
                      attrs: {
                          title: "Offer Page"
                      }
                  }, [a("div", {
                      staticClass: "layout-labels-top layout-inline-grid-double"
                  }, [a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "NBAM-OfferPage-ContainerName"
                      }
                  }, [e._v("Container name")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.pega_marketing.offerPage.containerName,
                          expression: "settings.pega_marketing.offerPage.containerName"
                      }],
                      attrs: {
                          id: "NBAM-OfferPage-ContainerName",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.pega_marketing.offerPage.containerName
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.pega_marketing.offerPage, "containerName", t.target.value)
                          }
                      }
                  })]), a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "NBAM-OfferPage-Placement"
                      }
                  }, [e._v("Placement (Hero or Tile)")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.pega_marketing.offerPage.placement,
                          expression: "settings.pega_marketing.offerPage.placement"
                      }],
                      attrs: {
                          id: "NBAM-OfferPage-Placement",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.pega_marketing.offerPage.placement
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.pega_marketing.offerPage, "placement", t.target.value)
                          }
                      }
                  })]), a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "NBAM-OfferPage-ClickAction"
                      }
                  }, [e._v("Click action")]), a("select", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.pega_marketing.offerPage.clickaction,
                          expression: "settings.pega_marketing.offerPage.clickaction"
                      }],
                      attrs: {
                          id: "NBAM-OfferPage-ClickAction"
                      },
                      on: {
                          change: function(t) {
                              var a = Array.prototype.filter.call(t.target.options, (function(e) {
                                  return e.selected
                              })).map((function(e) {
                                  var t = "_value" in e ? e._value : e.value;
                                  return t
                              }));
                              e.$set(e.settings.pega_marketing.offerPage, "clickaction", t.target.multiple ? a : a[0])
                          }
                      }
                  }, [a("option", [e._v("Mashup")]), a("option", [e._v("Popup")]), a("option", [e._v("TopURL")])])])])])], 1)
              },
              Vo = [function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("p", [e._v(" Configuration to use Customer Decision Hub to generate offers. Enter an empty 'Host' to disable this functionality. For more details, click "), a("a", {
                      attrs: {
                          href: "https://github.com/pegasystems/uplus-wss/wiki/Integration-with-the-Customer-Decision-Hub"
                      }
                  }, [e._v("here")]), e._v(". ")])
              }],
              zo = {
                  data() {
                      return o["b"]
                  },
                  components: {
                      Container: _r
                  }
              },
              Jo = zo,
              Go = Object(C["a"])(Jo, Ko, Vo, !1, null, null, null),
              Qo = Go.exports,
              Xo = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("div", {
                      staticClass: "container-transparent"
                  }, [a("h2", [e._v("Offer Action")]), a("p", [e._v('Configuration of the mashup displayed when clicking on the "Apply now" button inside the main offer of the offer page (offer.html)')]), a("div", {
                      staticClass: "container"
                  }, [a("div", {
                      staticClass: "body"
                  }, [a("div", {
                      staticClass: "layout-labels-top layout-inline-grid-double"
                  }, [a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "offer-action-action"
                      }
                  }, [e._v("Action")]), a("select", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.offeraction.action,
                          expression: "settings.offeraction.action"
                      }],
                      attrs: {
                          id: "offer-action-action"
                      },
                      on: {
                          change: function(t) {
                              var a = Array.prototype.filter.call(t.target.options, (function(e) {
                                  return e.selected
                              })).map((function(e) {
                                  var t = "_value" in e ? e._value : e.value;
                                  return t
                              }));
                              e.$set(e.settings.offeraction, "action", t.target.multiple ? a : a[0])
                          }
                      }
                  }, [a("option", [e._v("createNewWork")]), a("option", [e._v("display")]), "mashup" === e.settings.general.connection.type ? a("option", [e._v("getNextWork")]) : e._e(), a("option", [e._v("openAssignment")]), "mashup" === e.settings.general.connection.type ? a("option", [e._v("openWorkItem")]) : e._e(), a("option", [e._v("openWorkByHandle")])])]), a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "offer-action-actionparam"
                      }
                  }, [e._v("Action parameter")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.offeraction.actionparam,
                          expression: "settings.offeraction.actionparam"
                      }],
                      attrs: {
                          id: "offer-action-actionparam",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.offeraction.actionparam
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.offeraction, "actionparam", t.target.value)
                          }
                      }
                  })]), a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "offer-action-url"
                      }
                  }, [e._v("URL")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.offeraction.url,
                          expression: "settings.offeraction.url"
                      }],
                      attrs: {
                          id: "offer-action-url",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.offeraction.url
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.offeraction, "url", t.target.value)
                          }
                      }
                  })]), a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "offer-action-objclass"
                      }
                  }, [e._v("Classname")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.offeraction.objclass,
                          expression: "settings.offeraction.objclass"
                      }],
                      attrs: {
                          id: "offer-action-objclass",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.offeraction.objclass
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.offeraction, "objclass", t.target.value)
                          }
                      }
                  })]), "mashup" === e.settings.general.connection.type ? a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "offer-action-startcase"
                      }
                  }, [e._v("Start case")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.offeraction.startcase,
                          expression: "settings.offeraction.startcase"
                      }],
                      attrs: {
                          id: "offer-action-startcase",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.offeraction.startcase
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.offeraction, "startcase", t.target.value)
                          }
                      }
                  })]) : e._e(), a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "offer-action-application"
                      }
                  }, [e._v("Application name")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.offeraction.application,
                          expression: "settings.offeraction.application"
                      }],
                      attrs: {
                          id: "offer-action-application",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.offeraction.application
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.offeraction, "application", t.target.value)
                          }
                      }
                  })]), a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "offer-action-pega_userid"
                      }
                  }, [e._v("Pega userid")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.offeraction.pega_userid,
                          expression: "settings.offeraction.pega_userid"
                      }],
                      attrs: {
                          id: "offer-action-pega_userid",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.offeraction.pega_userid
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.offeraction, "pega_userid", t.target.value)
                          }
                      }
                  })]), a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "offer-action-pega_pwd"
                      }
                  }, [e._v("Pega password")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.offeraction.pega_pwd,
                          expression: "settings.offeraction.pega_pwd"
                      }],
                      attrs: {
                          id: "offer-action-pega_pwd",
                          type: "password"
                      },
                      domProps: {
                          value: e.settings.offeraction.pega_pwd
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.offeraction, "pega_pwd", t.target.value)
                          }
                      }
                  })]), "mashup" === e.settings.general.connection.type ? a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "offer-action-channelid"
                      }
                  }, [e._v("Channel ID")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.offeraction.channelid,
                          expression: "settings.offeraction.channelid"
                      }],
                      attrs: {
                          id: "offer-action-channelid",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.offeraction.channelid
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.offeraction, "channelid", t.target.value)
                          }
                      }
                  })]) : e._e(), "mashup" === e.settings.general.connection.type ? a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "offer-action-tenantid"
                      }
                  }, [e._v("Tenant ID")]), a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.offeraction.tenantid,
                          expression: "settings.offeraction.tenantid"
                      }],
                      attrs: {
                          id: "offer-action-tenantid",
                          type: "text"
                      },
                      domProps: {
                          value: e.settings.offeraction.tenantid
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.offeraction, "tenantid", t.target.value)
                          }
                      }
                  })]) : e._e(), "mashup" === e.settings.general.connection.type ? a("div", {
                      staticClass: "field-item field-checkbox"
                  }, [a("input", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.offeraction.dataretained,
                          expression: "settings.offeraction.dataretained"
                      }],
                      attrs: {
                          id: "offer-action-dataretained",
                          type: "checkbox"
                      },
                      domProps: {
                          checked: Array.isArray(e.settings.offeraction.dataretained) ? e._i(e.settings.offeraction.dataretained, null) > -1 : e.settings.offeraction.dataretained
                      },
                      on: {
                          change: function(t) {
                              var a = e.settings.offeraction.dataretained,
                                  i = t.target,
                                  s = !!i.checked;
                              if (Array.isArray(a)) {
                                  var n = null,
                                      r = e._i(a, n);
                                  i.checked ? r < 0 && e.$set(e.settings.offeraction, "dataretained", a.concat([n])) : r > -1 && e.$set(e.settings.offeraction, "dataretained", a.slice(0, r).concat(a.slice(r + 1)))
                              } else e.$set(e.settings.offeraction, "dataretained", s)
                          }
                      }
                  }), a("label", {
                      staticClass: "width-auto",
                      attrs: {
                          for: "offer-action-dataretained"
                      }
                  }, [e._v("Retain state on reload")])]) : e._e()]), a("div", {
                      staticClass: "layout-labels-top"
                  }, [a("div", {
                      staticClass: "field-item"
                  }, [a("label", {
                      attrs: {
                          for: "offer-action-extraparam"
                      }
                  }, [e._v("Extra parameters (for example 'key1=value1,key2=value2')")]), a("textarea", {
                      directives: [{
                          name: "model",
                          rawName: "v-model",
                          value: e.settings.offeraction.extraparam,
                          expression: "settings.offeraction.extraparam"
                      }],
                      attrs: {
                          id: "offer-action-extraparam"
                      },
                      domProps: {
                          value: e.settings.offeraction.extraparam
                      },
                      on: {
                          input: function(t) {
                              t.target.composing || e.$set(e.settings.offeraction, "extraparam", t.target.value)
                          }
                      }
                  })])])])])])
              },
              Yo = [],
              Zo = {
                  data() {
                      return o["b"]
                  }
              },
              el = Zo,
              tl = Object(C["a"])(el, Xo, Yo, !1, null, null, null),
              al = tl.exports;

          function il(e, t) {
              var a = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                  var i = Object.getOwnPropertySymbols(e);
                  t && (i = i.filter((function(t) {
                      return Object.getOwnPropertyDescriptor(e, t).enumerable
                  }))), a.push.apply(a, i)
              }
              return a
          }

          function sl(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var a = null != arguments[t] ? arguments[t] : {};
                  t % 2 ? il(Object(a), !0).forEach((function(t) {
                      nl(e, t, a[t])
                  })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : il(Object(a)).forEach((function(t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                  }))
              }
              return e
          }

          function nl(e, t, a) {
              return t in e ? Object.defineProperty(e, t, {
                  value: a,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              }) : e[t] = a, e
          }
          var rl, ol = {
                  data() {
                      return sl(sl({}, o["b"]), {}, {
                          isClearAll: !1
                      })
                  },
                  methods: {
                      processForm() {
                          this.isClearAll || localStorage.setItem("config_".concat(this.app.industry), JSON.stringify(o["b"]))
                      },
                      clearAll() {
                          localStorage.clear(), this.isClearAll = !0
                      }
                  },
                  components: {
                      Navigation: xr,
                      Tab: dr,
                      GettingStarted: Wr,
                      General: Gr,
                      QuickLinksSettings: to,
                      BillPaySettings: oo,
                      BannerSettings: mo,
                      ToDoSettings: Oo,
                      HomeHeroActionSettings: Do,
                      UsersSettings: Ro,
                      KMHelpSettings: yo,
                      ChatSettings: Fo,
                      NBAMSettings: Qo,
                      OfferActionSettings: al,
                      TopNav: lt
                  }
              },
              ll = ol,
              cl = Object(C["a"])(ll, ir, sr, !1, null, null, null),
              dl = cl.exports,
              gl = {
                  components: {
                      Header: ar,
                      Main: dl
                  }
              },
              pl = gl,
              ul = Object(C["a"])(pl, Gn, Qn, !1, null, null, null),
              ml = ul.exports,
              fl = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return e.isMobilePhone ? a("PhonePage") : a("div", {
                      staticClass: "form landing",
                      attrs: {
                          id: "app"
                      }
                  }, [a("Header"), a("Main"), a("Footer")], 1)
              },
              hl = [],
              vl = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("main", {
                      staticClass: "flex flex-col"
                  }, [a("OfferRequest"), a("Details"), a("Benefits")], 1)
              },
              _l = [],
              bl = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("div", {
                      staticClass: "landing-benefits promo"
                  }, [a("h4", [e._v(e._s(e.$t("message." + e.app.landing.benefits.title)))]), a("div", {
                      staticClass: "flex"
                  }, e._l(e.app.landing.benefits.data, (function(t, i) {
                      return a("div", {
                          key: i
                      }, [a("i", {
                          class: "pi " + t.icon
                      }), a("span", [e._v(e._s(e.$t("message." + t.message)))])])
                  })), 0)])
              },
              yl = [],
              kl = {
                  data() {
                      return o["b"]
                  }
              },
              wl = kl,
              Cl = Object(C["a"])(wl, bl, yl, !1, null, null, null),
              Pl = Cl.exports,
              xl = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("div", {
                      staticClass: "flex flex-col wrap"
                  }, [a("div", {
                      staticClass: "flex landing-request"
                  }, [a("Highlight"), a("OfferForm")], 1), a("Cards")], 1)
              },
              Ol = [],
              Il = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("div", {
                      staticClass: "landing-cards promo"
                  }, [a("h4", [e._v(e._s(e.$t("message." + e.app.landing.cards.title)))]), a("div", {
                      staticClass: "flex"
                  }, e._l(e.app.landing.cards.data, (function(t, i) {
                      return a("div", {
                          key: i,
                          staticClass: "flex flex-col"
                      }, [a("i", {
                          class: "pi color-brand " + t.icon
                      }), a("p", [e._v(e._s(e.$t("message." + t.title)))]), a("span", [e._v(e._s(e.$t("message." + t.message)))])])
                  })), 0)])
              },
              Al = [],
              Sl = {
                  data() {
                      return o["b"]
                  }
              },
              Nl = Sl,
              $l = Object(C["a"])(Nl, Il, Al, !1, null, null, null),
              Dl = $l.exports,
              Ml = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("div", {
                      staticClass: "primary-card"
                  }, [a("form", [a("h3", [e._v(e._s(e.$t("message." + e.app.landing.main_form.title)))]), a("div", {
                      staticClass: "layout-stacked"
                  }, [e._l(e.app.landing.main_form.data, (function(t, i) {
                      return a("div", {
                          key: i,
                          staticClass: "field-item"
                      }, [a("input", {
                          attrs: {
                              id: "landing_main_form_data_" + i,
                              type: "text",
                              name: e.$t("message." + t.label),
                              placeholder: e.$t("message." + t.label)
                          }
                      }), a("label", {
                          attrs: {
                              for: "landing_main_form_data_" + i
                          }
                      }, [e._v(e._s(e.$t("message." + t.label)))])])
                  })), a("button", {
                      staticClass: "strong width-100-pct margin-t-2x"
                  }, [e._v(e._s(e.$t("message." + e.app.landing.main_form.button_label)))])], 2)])])
              },
              Tl = [],
              jl = {
                  data() {
                      return o["b"]
                  }
              },
              Ll = jl,
              El = Object(C["a"])(Ll, Ml, Tl, !1, null, null, null),
              Rl = El.exports,
              Bl = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("div", {
                      staticClass: "landing-intro"
                  }, [a("h1", [e._v(e._s(e.$t("message." + e.app.landing.header.title)))]), a("ul", e._l(e.app.landing.header.promotions, (function(t, i) {
                      return a("li", {
                          key: i
                      }, [a("i", {
                          class: "pi color-brand " + t.icon
                      }), e._v(" " + e._s(e.$t("message." + t.message)) + " ")])
                  })), 0)])
              },
              Ul = [],
              Hl = {
                  data() {
                      return o["b"]
                  }
              },
              ql = Hl,
              Wl = Object(C["a"])(ql, Bl, Ul, !1, null, null, null),
              Fl = Wl.exports,
              Kl = {
                  data() {
                      return o["b"]
                  },
                  components: {
                      Highlight: Fl,
                      Cards: Dl,
                      OfferForm: Rl
                  }
              },
              Vl = Kl,
              zl = Object(C["a"])(Vl, xl, Ol, !1, null, null, null),
              Jl = zl.exports,
              Gl = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("div", {
                      staticClass: "flex flex-col landing-details"
                  }, e._l(e.app.landing.details, (function(t, i) {
                      return a("div", {
                          key: i,
                          staticClass: "flex flex-nowrap"
                      }, [a("div", {
                          staticClass: "image",
                          style: {
                              backgroundImage: "url(./img/" + t.image + ")",
                              order: "" + i % 2
                          }
                      }), a("div", {
                          staticClass: "details"
                      }, [a("h4", [e._v(e._s(e.$t("message." + t.title)))]), a("span", {
                          staticClass: "background-brand line"
                      }), a("span", [e._v(e._s(e.$t("message." + t.message)))])])])
                  })), 0)
              },
              Ql = [],
              Xl = {
                  data() {
                      return o["b"]
                  }
              },
              Yl = Xl,
              Zl = Object(C["a"])(Yl, Gl, Ql, !1, null, null, null),
              ec = Zl.exports,
              tc = {
                  data() {
                      return o["b"]
                  },
                  components: {
                      Benefits: Pl,
                      OfferRequest: Jl,
                      Details: ec
                  }
              },
              ac = tc,
              ic = Object(C["a"])(ac, vl, _l, !1, null, null, null),
              sc = ic.exports,
              nc = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("div", {
                      staticClass: "background-brand landing-footer"
                  }, [a("div", {
                      staticClass: "promo"
                  }, [a("h4", [e._v(e._s(e.$t("message." + e.app.landing.footer.title)))]), a("button", {
                      staticClass: "secondary"
                  }, [e._v(e._s(e.$t("message." + e.app.landing.footer.button_label)))])]), a("MainFooter")], 1)
              },
              rc = [],
              oc = {
                  data() {
                      return o["b"]
                  },
                  components: {
                      MainFooter: je
                  }
              },
              lc = oc,
              cc = Object(C["a"])(lc, nc, rc, !1, null, null, null),
              dc = cc.exports,
              gc = {
                  data() {
                      return o["b"]
                  },
                  components: {
                      Header: Ji,
                      Main: sc,
                      Footer: dc,
                      PhonePage: $i
                  }
              },
              pc = gc,
              uc = Object(C["a"])(pc, fl, hl, !1, null, null, null),
              mc = uc.exports,
              fc = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return e.isMobilePhone ? a("PhonePage") : a("MainPage", {
                      attrs: {
                          id: "app"
                      }
                  })
              },
              hc = [],
              vc = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("div", {
                      staticClass: "form category"
                  }, [a("MainHeader"), a("main", {
                      staticClass: "flex flex-col"
                  }, [a("h1", [e._v(e._s(e.$t("message." + e.app.category.header.title)))]), a("p", [e._v(e._s(e.$t("message." + e.app.category.header.msg)))]), a("div", {
                      staticClass: "wrap"
                  }, [a("div", {
                      staticClass: "primary-card"
                  }, [a("h2", [e._v(e._s(e.$t("message." + e.app.category.cards.title)))]), a("div", {
                      staticClass: "flex separator"
                  }, e._l(e.app.category.cards.data, (function(t, i) {
                      return a("section", {
                          key: i,
                          staticClass: "front-option category-option"
                      }, [a("div", [a("img", {
                          staticClass: "option",
                          attrs: {
                              src: "./img/" + t.image
                          }
                      })]), a("div", {
                          staticClass: "flex flex-col flex-grow-1"
                      }, [a("h3", [e._v(e._s(e.$t("message." + t.title)))]), a("p", {
                          staticClass: "flex-grow-1"
                      }, [e._v(e._s(e.$t("message." + t.message)))]), a("button", {
                          staticClass: "strong"
                      }, [e._v(e._s(e.$t("message." + t.applylabel)))]), a("button", {
                          staticClass: "simple"
                      }, [e._v(e._s(e.$t("message." + t.detailslabel)))])])])
                  })), 0)]), a("Details")], 1), a("Highlight")], 1), a("Footer")], 1)
              },
              _c = [],
              bc = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("div", {
                      staticClass: "category-highlights offer-highlights promo"
                  }, [a("h2", [e._v(e._s(e.$t("message." + e.app.category.highlights.title)))]), a("div", {
                      staticClass: "flex"
                  }, e._l(e.app.category.highlights.data, (function(t, i) {
                      return a("section", {
                          key: i,
                          staticClass: "flex"
                      }, [a("i", {
                          class: "pi color-brand " + t.icon
                      }), a("div", {
                          staticClass: "flex flex-col flex-grow-1"
                      }, [a("p", [e._v(e._s(e.$t("message." + t.title)))]), a("span", [e._v(e._s(e.$t("message." + t.message)))])])])
                  })), 0)])
              },
              yc = [],
              kc = {
                  data() {
                      return o["b"]
                  }
              },
              wc = kc,
              Cc = Object(C["a"])(wc, bc, yc, !1, null, null, null),
              Pc = Cc.exports,
              xc = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("div", {
                      staticClass: "flex flex-col offer-details"
                  }, e._l(e.app.category.details, (function(t, i) {
                      return a("div", {
                          key: i,
                          staticClass: "flex flex-nowrap"
                      }, [a("div", {
                          staticClass: "details"
                      }, [a("div", {
                          staticClass: "image",
                          style: {
                              backgroundImage: "url(./img/" + t.image + ")",
                              order: "" + i % 2
                          }
                      })]), a("div", {
                          staticClass: "details"
                      }, [a("h3", [e._v(e._s(e.$t("message." + t.title)))]), a("span", {
                          staticClass: "background-brand line"
                      }), a("span", [e._v(e._s(e.$t("message." + t.message)))])])])
                  })), 0)
              },
              Oc = [],
              Ic = {
                  data() {
                      return o["b"]
                  }
              },
              Ac = Ic,
              Sc = Object(C["a"])(Ac, xc, Oc, !1, null, null, null),
              Nc = Sc.exports,
              $c = function() {
                  var e = this,
                      t = e.$createElement,
                      a = e._self._c || t;
                  return a("div", {
                      staticClass: "background-brand offer-footer"
                  }, [a("div", {
                      staticClass: "promo"
                  }, [a("h4", [e._v(e._s(e.$t("message." + e.app.category.footer.title)))])]), a("MainFooter")], 1)
              },
              Dc = [],
              Mc = {
                  data() {
                      return o["b"]
                  },
                  components: {
                      MainFooter: je
                  }
              },
              Tc = Mc,
              jc = Object(C["a"])(Tc, $c, Dc, !1, null, null, null),
              Lc = jc.exports,
              Ec = {
                  data() {
                      return o["b"]
                  },
                  components: {
                      MainHeader: Ji,
                      Details: Nc,
                      Highlight: Pc,
                      Footer: Lc
                  }
              },
              Rc = Ec,
              Bc = Object(C["a"])(Rc, vc, _c, !1, null, null, null),
              Uc = Bc.exports,
              Hc = {
                  data() {
                      return o["b"]
                  },
                  components: {
                      MainPage: Uc,
                      PhonePage: $i
                  }
              },
              qc = Hc,
              Wc = Object(C["a"])(qc, fc, hc, !1, null, null, null),
              Fc = Wc.exports,
              Kc = {
                  data() {
                      return o["b"]
                  },
                  created() {
                      this.currentPage = window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1), window.history && null !== window.history.state && "undefined" !== typeof window.history.state.page && (this.currentPage = window.history.state.page, window.history.replaceState({}, "", this.currentPage + window.location.search), window.scrollTo({
                          top: 0,
                          behavior: "smooth"
                      })), "heroaction" === this.currentPage && (o["b"].homeHeroAction = 1), 0 === this.currentPage.indexOf("offer") && 0 !== this.currentPage.indexOf("offer.html") && (o["b"].offerIndex = parseInt(this.currentPage.substring(5).replace(".html", ""), 10)), o["b"].currentPage = this.currentPage, this.$gtag && this.$gtag.pageview({
                          page_path: o["b"].currentPage
                      }), p(o["b"], "Access"), window.loadPage = new Date
                  },
                  components: {
                      DefaultPage: _n,
                      OfferPage: Jn,
                      SettingsPage: ml,
                      LandingPage: mc,
                      CategoryPage: Fc
                  }
              },
              Vc = Kc,
              zc = (a("553f"), Object(C["a"])(Vc, n, r, !1, null, null, null)),
              Jc = zc.exports,
              Gc = a("9483"),
              Qc = e => {
                  e.postMessage({
                      action: "skipWaiting"
                  })
              };
          Object(Gc["a"])("".concat("../", "service-worker.js"), {
              ready() {
                  console.log("App is being served from cache by a service worker")
              },
              registered() {
                  console.log("Service worker has been registered.")
              },
              cached() {
                  console.log("Content has been cached for offline use.")
              },
              updatefound() {
                  console.log("New content is downloading.")
              },
              updated(e) {
                  console.log("New content is available; please refresh."), Qc(e.waiting)
              },
              offline() {
                  console.log("No internet connection found. App is running in offline mode.")
              },
              error(e) {
                  console.error("Error during service worker registration:", e)
              }
          }), navigator.serviceWorker && navigator.serviceWorker.addEventListener("controllerchange", () => {
              rl || (window.location.reload(), rl = !0)
          }), !0 === o["b"].settings.general.ga.enabled && i["a"].use(s["a"], {
              config: {
                  id: o["b"].settings.general.ga.trackingid
              },
              appName: "Uplus",
              enabled: !0
          });
          var Xc = new i["a"]({
              el: "#app",
              i18n: o["a"],
              computed: {
                  ViewComponent() {
                      return Jc
                  }
              },
              render(e) {
                  return e(this.ViewComponent)
              }
          });
          t["default"] = Xc
      },
      a22d: function(e, t, a) {},
      d13f: function(e, t, a) {},
      dda7: function(e, t, a) {
          "use strict";
          var i = a("3452"),
              s = a.n(i);

          function n(e) {
              var t = s.a.enc.Base64.stringify(e);
              return t = t.replace(/=+$/, ""), t = t.replace(/\+/g, "-"), t = t.replace(/\//g, "_"), t
          }
          var r = (e, t) => {
              var a = {
                      alg: "HS256",
                      typ: "JWT"
                  },
                  i = s.a.enc.Utf8.parse(JSON.stringify(a)),
                  r = n(i),
                  o = s.a.enc.Utf8.parse(JSON.stringify(e)),
                  l = n(o),
                  c = "".concat(r, ".").concat(l),
                  d = s.a.HmacSHA256(c, t);
              d = n(d);
              var g = "".concat(c, ".").concat(d);
              return g
          };
          t["a"] = r
      },
      f1f6: function(e, t, a) {
          e.exports = a.p + "img/pega-logo.dadf5610.png"
      }
  }
]);

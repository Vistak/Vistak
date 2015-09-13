(function($){var selectors=[];var check_binded=false;var check_lock=false;var defaults={interval:250,force_process:false}
var $window=$(window);var $prior_appeared;function process(){check_lock=false;for(var index=0;index<selectors.length;index++){var $appeared=$(selectors[index]).filter(function(){return $(this).is(':appeared');});$appeared.trigger('appear',[$appeared]);if($prior_appeared){var $disappeared=$prior_appeared.not($appeared);$disappeared.trigger('disappear',[$disappeared]);}
$prior_appeared=$appeared;}}
$.expr[':']['appeared']=function(element){var $element=$(element);if(!$element.is(':visible')){return false;}
var window_left=$window.scrollLeft();var window_top=$window.scrollTop();var offset=$element.offset();var left=offset.left;var top=offset.top;if(top+$element.height()>=window_top&&top-($element.data('appear-top-offset')||0)<=window_top+$window.height()&&left+$element.width()>=window_left&&left-($element.data('appear-left-offset')||0)<=window_left+$window.width()){return true;}else{return false;}}
$.fn.extend({appear:function(options){var opts=$.extend({},defaults,options||{});var selector=this.selector||this;if(!check_binded){var on_check=function(){if(check_lock){return;}
check_lock=true;setTimeout(process,opts.interval);};$(window).scroll(on_check).resize(on_check);check_binded=true;}
if(opts.force_process){setTimeout(process,opts.interval);}
selectors.push(selector);return $(selector);}});$.extend({force_appear:function(){if(check_binded){process();return true;};return false;}});})(jQuery);_satellite.notify('00 top Init jQueryPlugin__appear - seq JS',1);(function(){function decimalAdjust(type,value,exp){if(typeof exp==='undefined'||+exp===0){return Math[type](value);}
value=+value;exp=+exp;if(isNaN(value)||!(typeof exp==='number'&&exp%1===0)){return NaN;}
value=value.toString().split('e');value=Math[type](+(value[0]+'e'+(value[1]?(+value[1]-exp):-exp)));value=value.toString().split('e');return+(value[0]+'e'+(value[1]?(+value[1]+exp):exp));}
if(!Math.round10){Math.round10=function(value,exp){return decimalAdjust('round',value,exp);};}
if(!Math.floor10){Math.floor10=function(value,exp){return decimalAdjust('floor',value,exp);};}
if(!Math.ceil10){Math.ceil10=function(value,exp){return decimalAdjust('ceil',value,exp);};}})();_satellite.notify('00 top Init jQueryPlugin_decimalAdjust - seq JS',1);if(typeof acncm=='undefined'){window.acncm={};acncm.Visitor={detectedVisitorGroup:function(num){switch(num){case 1:acncm.CacheManager.write(acncm.CacheManager.Authentication.VisitorGroups.key,acncm.CacheManager.Authentication.VisitorGroups.value.RegisteredUsers);break;case 2:acncm.CacheManager.write(acncm.CacheManager.Authentication.VisitorGroups.key,acncm.CacheManager.Authentication.VisitorGroups.value.Client);break;case 3:acncm.CacheManager.write(acncm.CacheManager.Authentication.VisitorGroups.key,acncm.CacheManager.Authentication.VisitorGroups.value.Salesforce);break;case 4:acncm.CacheManager.write(acncm.CacheManager.Authentication.VisitorGroups.key,acncm.CacheManager.Authentication.VisitorGroups.value.SocialSignOnUsers);break;}},detectedRegisteredUser:function(userProfileID){acncm.CacheManager.write(acncm.CacheManager.Authentication.RegisteredUser.ID.key,userProfileID);},detectedRegisteredUserIndustry:function(industries){acncm.CacheManager.write(acncm.CacheManager.Authentication.RegisteredUser.Industry.key,industries);},detectedAuthType:function(loginType){acncm.CacheManager.write(acncm.CacheManager.Authentication.Type.key,loginType);}};acncm.EA={detectedSignUp:function(){acncm.CacheManager.write(acncm.CacheManager.EmailAlerts.key,acncm.CacheManager.EmailAlerts.value.Complete);}};acncm.Forms={detectedFormStart:function(){acncm.CacheManager.append(acncm.CacheManager.Forms.key,acncm.CacheManager.Forms.value.Start);},detectedFormComplete:function(){acncm.CacheManager.append(acncm.CacheManager.Forms.key,acncm.CacheManager.Forms.value.Complete);},detectedFormError:function(){acncm.CacheManager.append(acncm.CacheManager.Forms.key,acncm.CacheManager.Forms.value.Error);},detectedLoginFormStart:function(){acncm.CacheManager.append(acncm.CacheManager.Forms.key,acncm.CacheManager.Forms.value.LoginStart);},detectedLoginFormComplete:function(){acncm.CacheManager.append(acncm.CacheManager.Forms.key,acncm.CacheManager.Forms.value.LoginComplete);},detectedLoginFormError:function(){acncm.CacheManager.append(acncm.CacheManager.Forms.key,acncm.CacheManager.Forms.value.LoginError);},detectedRegistrationFormStart:function(){acncm.CacheManager.append(acncm.CacheManager.Forms.key,acncm.CacheManager.Forms.value.RegistrationStart);},detectedRegistrationFormComplete:function(){acncm.CacheManager.append(acncm.CacheManager.Forms.key,acncm.CacheManager.Forms.value.RegistrationComplete);},detectedRegistrationFormError:function(){acncm.CacheManager.append(acncm.CacheManager.Forms.key,acncm.CacheManager.Forms.value.RegistrationError);}};acncm.CacheManager={LinkAnalysis:{key:"_ss_LINKS"},Authentication:{VisitorGroups:{key:"_ss_vg",value:{RegisteredUsers:"G1",Client:"G2",Salesforce:"G3",SocialSignOnUsers:"G4"}},RegisteredUser:{ID:{key:"_ss_uid"},Industry:{key:"_ss_ui"}},Type:{key:"_ss_acn",value:{FederatedLogin:"fed",SiteLogin:"site",SocialLogin:"soc"}}},Forms:{key:"_ss_fa",value:{Start:"s",Complete:"c",Error:"e",LoginStart:"sl",LoginComplete:"cl",LoginError:"el",RegistrationStart:"sr",RegistrationComplete:"cr",RegistrationError:"er"}},EmailAlerts:{key:"_ss_ea",value:{Complete:"c",Edit:"e",Unsubscribe:"u"}},Jobs:{key:"_ss_js",value:{JobSave:"c"}},isLocalStorageSupported:function(){var isSupported=false;if(typeof Modernizr!='undefined'&&typeof Modernizr.localstorage!='undefined'){isSupported=Modernizr.localstorage;};return isSupported;},isCookieSupported:function(){return typeof jQuery.cookie!='undefined';},write:function(key,value,secure){var isSuccessful=false;if(typeof key!='undefined'&&typeof value!='undefined'&&key.length>0){if(this.isLocalStorageSupported()){localStorage.setItem(key,value);isSuccessful=true;}else if(this.isCookieSupported()){if(typeof secure!='undefined'){jQuery.cookie(key,value,{secure:secure});}else{jQuery.cookie(key,value,{secure:true});}
isSuccessful=true;}}
return isSuccessful;},read:function(key){var value=key;if(typeof key!='undefined'&&key.length>0){if(this.isLocalStorageSupported()){value=localStorage.getItem(key)}
if(this.isCookieSupported()&&(value==key||value==null)){value=jQuery.cookie(key);}}
return value;},append:function(key,value){var readValue=this.read(key);if(readValue&&readValue.length>0&&readValue.indexOf(value)<0){value=readValue+","+value;}
return this.write(key,value);},writeUrl:function(key,value){var isSuccessful=false;if(typeof key!='undefined'&&typeof value!='undefined'&&key.length>0&&value.length>0){var LastUrl=[];if(this.read(key)!=undefined){LastUrl=JSON.parse(this.read(key));if(LastUrl==null){LastUrl=[''];}}else{LastUrl=[''];}
LastUrl.unshift(value);if(LastUrl.length>=7){LastUrl.pop();}
this.write(key,JSON.stringify(LastUrl));isSuccessful=true;}
return isSuccessful;},readUrl:function(key){var value=[];if(typeof key!='undefined'&&key.length>0){value=this.read(key);if((value==undefined)||(value==null)){value=[];}}
return value;},getKeyStorageLocation:function(key){var value=key;if(this.isLocalStorageSupported()){value=localStorage.getItem(key)
if(value!==null){return"localstorage";}}
if(this.isCookieSupported()){value=jQuery.cookie(key);if(value){return"cookie";}}
return"Cached key location not found.";},remove:function(key){var keyLocation=this.getKeyStorageLocation(key);if(keyLocation=="localstorage"){localStorage.removeItem(key);}else if(keyLocation=="cookie"){document.cookie=key+'=; expires=Thu, 01-Jan-70 00:00:01 GMT;';}}};_satellite.notify('00 top Init Ensure ACN CacheManager - seq JS',1);}
if(typeof digitalData=='undefined'||!digitalData){window.digitalData={"pageInstanceId":"pageInstanceId","version":"1.0","page":{"category":{"primaryCategory":"3rd"},"pageInfo":{"pageId":":::","pageName":"Page Title","destinationUrl":"","referringUrl":"","author":"","issueDate":"","effectiveDate":"","expiryDate":"","language":"en","geoRegion":"","countryLanguage":"","subfolder":"","uniquePageName":"","template":"","reportingSuiteIDs":"accnextthirdstage"},"attributes":{"metadata":[{"category":{"primaryCategory":""},"metadataInfo":{"metadataID":"","metadataName":""}},{"category":{"primaryCategory":""},"metadataInfo":{"metadataID":"","metadataName":""}}]}},"product":null,"events":[],"component":[{"componentInfo":{"componentID":"","componentName":""}},{"componentInfo":{"componentID":"","componentName":""}}],"user":null,"privacy":{"accessCategories":[]}}
_satellite.notify('00 top Init Ensure ACN digitalData - seq JS',1);}
digitalData.Overrides={ensurePageName:function(){var _ACCENTURE_ONLINE_LIBRARY_NAME="satelliteLib-4d57359bad9b64543801e70b6391e8db879b10d3";var _3RD_PARTY_WEBSITES_LIBRARY_NAME="satelliteLib-4863dcf998aa4bb22a533e7a4bd8f5988560691b";var currentDTMLibraryName=_satellite.configurationSettings.settings.libraryName;var pageUrl=document.location.pathname.toLowerCase();var primaryCategory,countryLanguage,subfolder,uniquePageName,pageId,pageScheme;var length=0;var expectedCount=4;pageId=digitalData.page.pageInfo.pageId;primaryCategory=digitalData.page.category.primaryCategory;countryLanguage=digitalData.page.pageInfo.countryLanguage;subfolder=digitalData.page.pageInfo.subfolder;uniquePageName=digitalData.page.pageInfo.uniquePageName;if(!pageUrl||pageUrl=='/'){pageUrl='/'+countryLanguage;}
if(currentDTMLibraryName===_ACCENTURE_ONLINE_LIBRARY_NAME){forAccentureOnline();}else if(currentDTMLibraryName===_3RD_PARTY_WEBSITES_LIBRARY_NAME){for3rdParty();}
pageId=primaryCategory+":"+countryLanguage+":"+subfolder+":"+uniquePageName;if(pageId.length>70){pageId=pageId.substr(0,70);}
digitalData.page.category.primaryCategory=primaryCategory;digitalData.page.pageInfo.countryLanguage=countryLanguage;digitalData.page.pageInfo.subfolder=subfolder;digitalData.page.pageInfo.uniquePageName=uniquePageName;digitalData.page.pageInfo.pageId=pageId;_satellite.notify('digitalData.Overrides.ensurePageName() executed',1);function forAccentureOnline(){if(pageId){pageScheme=pageId.split(':');length=pageScheme.length;}
if(pageScheme[2]=="secure"){expectedCount=5;}
pageScheme=pageUrl.split('/');length=pageScheme.length;if(pageUrl.indexOf('/careers')>-1){primaryCategory="car";}else{primaryCategory="acn";}
countryLanguage=pageScheme[1];if(pageUrl.indexOf('/secure/')>-1){subfolder="secure:"+pageScheme[3];}else if(pageUrl.indexOf('/blogs/')>-1){subfolder="blogs";}else{subfolder="page";};if(!uniquePageName){uniquePageName=pageScheme[length-1].replace(".aspx","").replace(".html","").replace(".htm","");}}
function for3rdParty(){var hostname=_satellite.getVar("hostname");if(pageId){pageScheme=pageId.split(':');length=pageScheme.length;}
if(!pageId||length<expectedCount||!pageScheme[0]||!pageScheme[1]||!pageScheme[2]||!pageScheme[3]){pageScheme=pageUrl.split('/');length=pageScheme.length;pageScheme[0]=hostname;}
primaryCategory=pageScheme[0];countryLanguage=pageScheme[1];subfolder=pageScheme[2];if(!uniquePageName){uniquePageName=pageScheme[length-1].replace(".aspx","").replace(".html","").replace(".htm","");}}},ensurePageInstanceId:function(){if(!digitalData.pageInstanceId||digitalData.pageInstanceId==="pageInstanceId"){digitalData.pageInstanceId=digitalData.page.pageInfo.pageId;_satellite.notify('digitalData.Overrides.ensurePageInstanceId() executed',1);}}};digitalData.events=[];digitalData.Overrides.ensurePageName();digitalData.Overrides.ensurePageInstanceId();_satellite.notify('00 top Init Ensure ACN Correct PageName Format - seq JS',1);
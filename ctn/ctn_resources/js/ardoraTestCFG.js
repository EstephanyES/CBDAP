//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=200; timeIni=200; timeBon=0;
var successes=0; successesMax=8; attempts=0; attemptsMax=3;
var score=0; scoreMax=32; scoreInc=4; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#928EB3"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=1; scoWrong=0; scoOkDo=1; scoWrongDo=1; scoMessage=""; scoPtos=10;
var fMenssage="'Courier New', Courier, mono";
var fActi="Verdana, Geneva, sans-serif";
var fResp="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Felicidades eres muy inteligente 🎊"; messageTime=" :c sigue intentando :3"; messageError=":/ sintax error"; messageErrorG=":/ sintax error"; messageAttempts=":c ya nimodo se acabo "; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="Y3Ru"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tags=["¿Qué es un dato?","¿Que es una base de datos?","¿Que es una llave primaria?","¿Que es la cardinalidad?","Primera forma normal :","Segunda forma normal :","Tercera forma normal :","Cuarta forma normal :"];
var answers1=["MUVzIHVuIGF0cmlidXRvIChkZSBpbmZvcm1hY2nDs24pIHF1ZSByZWZsZWphIGVsIHZhbG9yIGRlIHVuYSBjYXJhY3RlcsOtc3RpY2EgZXNwZXNpZmljYW1lbnRlIGRlIHVuIG9iamV0bw==","MEVzIGVsIG7Dum1lcm8gZGUgZW50aWRhZGVzIGNvbiBsYSBjdWFsIG90cmEgZW50aWRhZCBzZSBwdWVkZSBhc29jaWFyIG1lZGlhbnRlIHVuYSByZWxhY2nDs24u","MEVzIGVsIHByb2Nlc28gZGUgYXBsaWNhciBub3JtYXMgcGFyYSBvcmdhbml6YXIgeSBtZWpvcmFyIHVuYSBiYXNlIGRlIGRhdG9zLg=="];
var answers2=["MVNlIGxlIGNvbm9jZSBjb21vIHVuIGNvbmp1bnRvIGRlIGRhdG9zIGFsbWFjb25hZG9zLCBvcmdhbml6YWRvcyB5IHJlbGFjaW9uYWRvcyBlbnRyZSBzw60u","MENvbW8gc3Ugbm9tYnJlIGxvIGRpY2Ugc29uIGFxdWVsbG9zIHF1ZSBwb2RlbW9zIGNvbnRhciwgcHJlY2lzYW1lbnRlIGxvcyBuw7ptZXJvcy4=","MEVzIHVuYSBjb2x1bW5hIGRlIGlkZW50aWZpY2FjaW9uIGRlIGZvcm1hIFVuaWNhIGVuIGVsIHJlZ2lzdHJvIGRlIHVuYSB0YWJsYSB5IGVzIG11eSBpbXBvcnRhbnRlIHNlbGVjY2lvbmFyIGxhIGNvcnJlY3Rh"];
var answers3=["MXVuYSBjb2x1bW5hIGRlIGlkZW50aWZpY2FjaW9uIGRlIGZvcm1hIFVuaWNhIGVuIGVsIHJlZ2lzdHJvIGRlIHVuYSB0YWJsYSB5IGVzIG11eSBpbXBvcnRhbnRlIHNlbGVjY2lvbmFyIGxhIGNvcnJlY3RhLg==","MHNvbiBhcXVlbGxvcyBxdWUgcHVlZGVuIGNhbWJpYXIsIHBvciBlamVtcGxvIGVsIGlkaW9tYSBxdWUgZXMgdW5hIGluZm9ybWFjaW9uIHF1ZSBzZSB0aWVuZSBkZXBlbmRpZW5kbyBlbCBsdWdhciBvIGxhIHBlcnNvbmEgcGVybyBhbCBmaW5hbCBzaWd1ZSBzaWVuZG8gdW4gbWlzbW8gY29uY2VwdG8gY29uY3JldG8=","MGlkZW50aWRhZCBkZSBsYSBwcmltZXJhIHJlbGFjaW9uIHNlIHZhIGEgcmVsYWNpb25hciBjb24gdW5hIGVudGlkYWQgZGUgbGEgc2VndW5kYSByZWxhY2lvbiB5IHZpY2V2ZXJzYS4="];
var answers4=["MWVzIGVsIG7Dum1lcm8gZGUgZW50aWRhZGVzIGNvbiBsYSBjdWFsIG90cmEgZW50aWRhZCBzZSBwdWVkZSBhc29jaWFyIG1lZGlhbnRlIHVuYSByZWxhY2nDs24u","MHJlbGFjaW9uZXMgcHVlZGVuIGFzb2NpYXJzZSBjb24gdmFyaWFzIGVudGlkYWRlcyBkZSBsYSBjb250cmFyaWEu","MHNvbiBuZWNlc2FyaWFzIHBhcmEgbGEgYmFzZSBkZSBkYXRvcywgYWRlbWFzIGRlIHF1ZSBhIGNhZGEgdGFibGEgc2UgbGUgZGVmaW5lbiBsb3MgYXRyaWJ1dG9zIG5lY2VzYXJpb3MgeSBjb3JyZXNwb25kaWVudGVzLg=="];
var answers5=["MWRhdG9zIGF0b21pY29z","MHF1aXRhciByZWR1bmRhbmNpYQ==","MGVzY2FsYWJpbGlkYWQ="];
var answers6=["MXF1aXRhciByZWR1bmRhbmNpYQ==","MGRhdG9zIGF0b21pY29z","MGVzY2FsYWJpbGlkYWQ="];
var answers7=["MXF1aXRhciBzZWd1bmRhcyByZWR1bmRhbmNpYXM=","MGVzY2FsYWJpbGlkYWQ=","MGRhdG9zIGF0b21pY29z"];
var answers8=["MWVzY2FsYWJpbGlkYWQ=","MHF1aXRhciBzZWd1bmRhcyByZWR1bmRhbmNpYXM=","MHF1aXRhciByZWR1bmRhbmNpYQ=="];
var ans=[answers1,answers2,answers3,answers4,answers5,answers6,answers7,answers8];
var err=[":c esa no era",":c esa no era",":c esa no era",":c esa no era",":c esa no era",":c esa no era",":c esa no era",":c esa no era"];
var ima=["","","","","","","",""];
var mp4=["","","","","","","",""];
var ogv=["","","","","","","",""];
var alt=["","","","","","","",""];
var info=["","","","","","","",""];
var indexTag=0; actualAnswers=[]; dirMedia="ctn_resources/media/";
var tiRandOrder=true;
var iT=0;var r_order=[];
var r_ans=[];var r_pos=[];var r_checks=[];var minSuccesses=8;

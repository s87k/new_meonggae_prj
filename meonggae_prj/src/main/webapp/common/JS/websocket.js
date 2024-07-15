/**
 * 
 */
 let websocket;
 
 function connect() {
 
 var wsUrl = "ws://${pageContext.request.serverName}:http://stu8.sist.co.kr/meonggae_prj/meonggae_talk/talk_page.do";
 
 websocket = new WebSocket(wsUrl);
 
 websocket.on
 
 }
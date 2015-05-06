// variables to use
var trait1 = 0;
var trait2 = 0;
var trait3 = 0;
var trait4 = 0;
var trait5 = 0;

var MAX_TRAITS_POINTS = 14;


/**
 * httpGet
 * 
 * sends a get request and returns the text response
 *
 * @param url   the url for the GET request
 * @return      the response in text form
 */
function httpGet(url)
{
    var xml = new XMLHttpRequest();
    xml.open("GET", url, false);
    xml.send(null);
    return xml.responseText;
}//httpGet


/**
 * dragMove
 * 
 * moves the window
 */
function dragMove()
{
    overwolf.windows.getCurrentWindow(function (result) {
        if (result.status == "success") {
            overwolf.windows.dragMove(result.window.id);
        }
    });
};


/**
 * closeWindow
 * 
 * closes the window
 */
function closeWindow()
{
    overwolf.windows.getCurrentWindow(function (result) {
        if (result.status == "success") {
            overwolf.windows.close(result.window.id);
        }
    });
};


/**
 * viewBuild
 * 
 * Shows a given build.
 *
 * @param build     the name of the build to be viewed
 */
function viewBuild(build)
{
    overwolf.windows.obtainDeclaredWindow("SubWindow", function (result) {
        if (result.status == "success") {
            overwolf.windows.restore(result.window.id, function (result) {
                console.log(result);
            });
        }
    });
};

function showQuaggan()
{
    // pick a quaggan
    var quaggans = httpGet("https://api.guildwars2.com/v2/quaggans");
    var jsonQuag = JSON.parse(quaggans);
    var count = 0;
    for(var i in jsonQuag)
    {
        count++;
    }
    var quaggan = jsonQuag[Math.floor(Math.random() * count)];
    //alert(quaggan)
    
    // get the image
    var quagganUrl = "https://api.guildwars2.com/v2/quaggans/" + quaggan;
    var response = JSON.parse(httpGet(quagganUrl));

    // display the image
    var img = document.getElementById("quaggan");
    img.setAttribute("src", response.url);
}

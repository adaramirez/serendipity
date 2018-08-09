// Construct the request
var url = "http://svcs.ebay.com/services/search/FindingService/v1";
url += "?OPERATION-NAME=findItemsByKeywords";
url += "&SERVICE-VERSION=1.0.0";
url += "&SECURITY-APPNAME=AdaRamir-Products-PRD-2ed602901-a458add9";
url += "&GLOBAL-ID=EBAY-US";
url += "&RESPONSE-DATA-FORMAT=JSON";
url += "&callback=_cb_findItemsByKeywords";
url += "&REST-PAYLOAD";
url += "&keywords=opi";
url += "&paginationInput.entriesPerPage=80";
// Submit the request
s = document.createElement('script'); // create script element
s.src = url;
document.body.appendChild(s);

// Parse the response and build an HTML table to display search results
function _cb_findItemsByKeywords(root) {
    var items = root.findItemsByKeywordsResponse[0].searchResult[0].item || [];
    var html = [];
    // html.push('<div class="col-sm-4" id="results"></div>');
    for (var i = 0; i < items.length; ++i) {
        var item = items[i];
        var title = item.title;
        var pic = item.galleryURL;
        var viewitem = item.viewItemURL;
        console.log(viewitem);
        if (null != title && null != viewitem) {
            html.push('<div class="col-sm-3 col-md-3 col-3 products">' + '<img src="' + pic + '" border="0">' + '</div>');
        }
    }
    // html.push('</tbody></table>');
    document.getElementById("results").innerHTML = html.join("");
}  // End _cb_findItemsByKeywords() function

//MODALS
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })







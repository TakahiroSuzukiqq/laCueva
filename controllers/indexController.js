// const Index = require('')
const mongoose = require('mongoose');
const Post = require('../models/Post');

// Middleware
exports.myMiddleware = (req, res, next) => {
    req.name = "ラクエバ";
    res.cookie('name', 'La Cueva is cool', { maxAccomodation: 9800});
    if(req.name != "ラクエバ") {
        throw Error('Eat yum-yum La Cueva foods');
    }
    next();
}

//#####################
// Index
exports.getIndexpage = (req, res) => {     //this function will be called after the myMiddleware function is called
    console.log(req.name);
    res.render('index', {                  //'index' is name for a file in views folder
        title: 'Welcome to La Cueva',
        subtitle: 'The best spanish cuisine restaurant in Japan',
        supersubtitle: 'Recommendation of the month'
    })
};
// // Get Post
// exports.getPost = (req, res) => {
//     Post.find()
//         .then((post) => {
// 			res.render('index', {
//                 title: 'La Cueva Menu Page',
//                 subtitle: 'Enjoy Your Meal'
// 			})
// 		})
// };
// Test
exports.getTestId = (req, res, next) => {
    res.render('index', {
        output: req.params.id                          //pass the object = 'output' property to the view
    }); 
};
//######################

exports.getGoogleMap = (req, res) => {
    console.log(req.name);
    res.render('googleMap', {                
        title: 'Google Map Page',
    })
};

//##################################
// {<script>
//     export.getGoogleMap = (req, res) => {
//         var options = {
//         zoom: 11,
//         center: {lat: 35.701217, lng: 139.561559}
//     }
//     function initMap () {
        
//     }
//     var map = new google.maps.Map(document.getElementById("GoogleMap"), options)


//     addMarker({
//         coords: {lat: 35.701217, lng: 139.561559},
//         content: "<h2>La Cueva</h2>"
//     });
//     addMarker({
//         coords: {lat: 35.700374, lng: 139.662572},
//         iconImage: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
//         content: "<h2>Si o No</h2>"
//     });
//     addMarker({
//         coords: {lat: 35.627878, lng: 139.722372},
//         iconImage: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
//         content: "<h2>ばる・あらら</h2>"
//     });





//     function addMarker(props) {
//         var marker = new google.maps.Marker({
//         position: props.coords,
//         map: map,
       
//     });
//         if (props.iconImage){
//             marker.setIcon(props.iconImage);        }
//         if(props.content){
//             var infoWindow = new google.maps.InfoWindow({
//                 content: props.content
//             });
//             marker.addListener('click', function(){
//                 infoWindow.open(map, marker);
//             });
//         }
//     }

//     }
//     </script>
    
//     <script>
//     var gmapApi = process.env.GOOGLE_MAP_API
//     </script>
//     <script src="https://maps.googleapis.com/maps/api/js?key=gmapApi&callback=initMap" async defer></script>}

    //#############################################
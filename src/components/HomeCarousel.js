// import React from 'react';
// import Slider from 'rc-slider'
// var cards = [
//     {
//         "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg",
//         "title": "Burgundy Flemming",
//         "subtitle": "Advertising"
//     },
//     {
//         "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample119.jpg",
//         "title": "Nigel Nigel",
//         "subtitle": "Sound & Vision"
//     },
//     {
//         "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample120.jpg",
//         "title": "Caspian Bellevedere",
//         "subtitle": "Accounting"
//     }
// ];
// var Article = React.createClass({
//     render: function () {
//         var image = this.props.data.image,
//             title = this.props.data.title,
//             subtitle = this.props.data.subtitle;
//         return (
//             <figure className="snip1584">
//                 <img src={image} />
//                 <figcaption>
//                     <h3>{title}</h3>
//                     <h5>{subtitle}</h5>
//                 </figcaption><a href="#"></a>
//             </figure>
//         )
//     }
// });
// var News = React.createClass({
//     render: function () {
//         var data = this.props.data;
//         var newsTemplate;
//         var settings = {
//             dots: true,
//             infinite: true,
//             slidesToShow: 3,
//             slidesToScroll: 1,
//         }
//         if (data.length > 0) {
//             newsTemplate = data.map(function (item, index) {
//                 return (
//                     <div key={index}>
//                         <Article data={item} />
//                     </div>
//                 )
//             })
//         } else {
//             newsTemplate = <p>Please add some cards</p>
//         }
//         return (
//             <div className='news'>
//                 <Slider {...settings}>{newsTemplate}</Slider>
//                 <strong className={'news__count ' + (data.length > 0 ? '' : 'none')}>
//                     Total cards: {data.length}
//                 </strong>
//             </div>
//         );
//     }
// });
// var App = React.createClass({
//     render: function () {

//         return (
//             <div className='app'>
//                 <h3>Cards</h3>
//                 <News data={cards} />
//             </div>
//         );
//     }
// });
// // ReactDOM.render(
// //     <App />, document.getElementById('root')
// // );
// export default {
//     Article, News, App
// }
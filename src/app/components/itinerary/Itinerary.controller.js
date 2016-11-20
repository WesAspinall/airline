var ItineraryCtrl = function() {
  this.data = {
    "passengers": [{
      'Name': 'Dana White',
      'img': 'img/dana.jpg',
      'lead': true,
      'DOB': '01/11/1980',
      'Weight': 170,
      'Docs': true
    }, {
      'Name': 'Conor McGregor',
      'img': 'img/conor.jpeg',
      'lead': false,
      'DOB': '04/27/1970',
      'Weight': 155,
      'Docs': true
    }, {
      'Name': '',
      'img': 'img/khaled.png',
      'lead': false,
      'DOB': '',
      'Weight': '',
      'Docs': true
    }],
    "flight": {
      "flight_time": "2 hrs 36 mins",
      "departure": {
        "airport": "KATL",
        "date": 1457911920000,
        "FBO": "Signature Flight Support",
        "address": "1200 Tuttle Terrace",
        "city": "Atlanta",
        "state": "GA",
        "zip": "30354",
        "phone": "(404) 761-1960"
      },
      "arrival": {
        "airport": "KHOU",
        "FBO": "Signature Flight Support",
        "address": "1200 Tuttle Terrace",
        "city": "Houston",
        "state": "TX",
        "zip": "77061",
        "phone": "(713) 353-5300"
      }
    },
    "aircraft": {
      "tail_number": "N92TH",
      "model": "Citation X",
      "crew": {
        "pilot": "Burner, Kevin Gene",
        "second": "Moer, Hunter Thomas"
      }
    },
    "notes": [{

      "date": 1457911920000,
      "text": "Hello",
      "from": "JetSmarter"
    }, {

      "date": 1457911920000,
      "text": "Hello",
      "from": "Delta"
    }],
    "messages": [{

      "date": 1457911920000,
      "text": "Hello",
      "from": "JetSmarter"
    }, {
      "date": 1457911920000,
      "text": "Hello",
      "from": "Delta"
    }],
    "checklist": {
      "flight info": true,
      "aircraft details": true,
      "crew": false,
      "passengers": false
    }
  }

};

angular
  .module('components.itinerary')
  .controller('ItineraryCtrl', ItineraryCtrl);
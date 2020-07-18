if (!('remove' in Element.prototype)) {
        Element.prototype.remove = function() {
          if (this.parentNode) {
            this.parentNode.removeChild(this);
          }
        };
      }

mapboxgl.accessToken = 'pk.eyJ1IjoiZWR3YWFycmRkIiwiYSI6ImNrYzczaGRmcTB4a3gycnRpejY2eXBzZjgifQ.WvaL4NzCSwFjrmg63tow6A';

// Initiates map (note: lng, lat format rather than lat, lng)
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v10',
  center: [144.9728477, -37.807357],
  zoom: 13
});

// geoJSON data for rehab centres
var rehabs = {
  'type': 'FeatureCollection',
  'features': [
   {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [144.9728424, -37.8073527]
      },
      'properties': {
        'building': 'St Vincent\'s Hospital',
        'address': '41 Victoria Parade',
        'suburb': 'Fitzroy',
        'postalCode': '3065',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [144.953976, -37.798911]
      },
      'properties': {
        'building': 'The Royal Melbourne Hospital',
        'address': '300 Grattan St',
        'suburb': 'Parkville',
        'postalCode': '3050',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [144.957532, -37.774376]
      },
      'properties': {
        'building': 'Pronia (Australian Greek Welfare Society)',
        'address': '7 Union St',
        'suburb': 'Brunswick',
        'postalCode': '3056',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [144.9634851, -37.7413909]
      },
      'properties': {
        'building': 'Merri Health (Coburg)',
        'address': '93 Bell St',
        'suburb': 'Coburg',
        'postalCode': '3058',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [145.0570728, -37.7565803]
      },
      'properties': {
        'building': 'Austin Hospital',
        'address': '145 Studley Rd',
        'suburb': 'Heidelburg',
        'postalCode': '3084',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [145.013706, -37.8839611]
      },
      'properties': {
        'building': 'Caulfield Hospital',
        'address': '260-294 Kooyong Rd',
        'suburb': 'Caulfield',
        'postalCode': '3162',
        'state': 'VIC'
      }
    },
  // North West
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [144.2785803, -36.7496127]
      },
      'properties': {
        'building': 'Bendigo Health',
        'address': '133-145 Lily St',
        'suburb': 'Bendigo',
        'postalCode': '3550',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [142.9133853, -35.9801558]
      },
      'properties': {
        'building': 'East Wimmera Health Service (Birchip)',
        'address': '26 Duncan St',
        'suburb': 'Birchip',
        'postalCode': '3483',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [144.2094879, -37.0542619]
      },
      'properties': {
        'building': 'Castlemaine Health',
        'address': '142 Cornish St',
        'suburb': 'Castlemaine',
        'postalCode': '3450',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [143.3508117, -36.2687741]
      },
      'properties': {
        'building': 'East Wimmera Health Service (Charlton)',
        'address': '4 Learmonth St',
        'suburb': 'Charlton',
        'postalCode': '3525',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [144.9580284, -35.5270637]
      },
      'properties': {
        'building': 'Deniliquin Hospital and Health Services',
        'address': '411 Charlotte St',
        'suburb': 'Deniliquin',
        'postalCode': '2710',
        'state': 'NSW'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [142.9743264, -36.3666644]
      },
      'properties': {
        'building': 'East Wimmera Health Service (Donald)',
        'address': '3480/1 Aitken Ave',
        'suburb': 'Donald',
        'postalCode': '3480',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [144.2483583, -36.7188126]
      },
      'properties': {
        'building': 'Stewart Cowen Rehabilitation Centre',
        'address': '1 Market St',
        'suburb': 'Eaglehawk',
        'postalCode': '3556',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [144.7460428, -36.1391991]
      },
      'properties': {
        'building': 'Echuca Regional Health',
        'address': '226 Service St',
        'suburb': 'Echuca',
        'postalCode': '3564',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [143.8717459, -36.5721868]
      },
      'properties': {
        'building': 'Inglewood & Districts Health Service',
        'address': '3 Hospital St',
        'suburb': 'Inglewood',
        'postalCode': '3517',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [143.9163496, -35.7335736]
      },
      'properties': {
        'building': 'Northern District Community Health',
        'address': '30 Fitzroy St',
        'suburb': 'Kerang',
        'postalCode': '3579',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [144.453003, -37.2499697]
      },
      'properties': {
        'building': 'Cobaw Community Health Service (Kyneton)',
        'address': '47 High St',
        'suburb': 'Kyneton',
        'postalCode': '3444',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [143.7358361, -37.0448863]
      },
      'properties': {
        'building': 'Maryborough District Health Service',
        'address': '75/87 Clarendon St',
        'suburb': 'Maryborough',
        'postalCode': '3465',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [142.1414789, -34.1859633]
      },
      'properties': {
        'building': 'Mildura Base Hospital',
        'address': 'Ontario Ave & Thirteenth St',
        'suburb': 'Mildura',
        'postalCode': '3500',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [142.7792297, -34.5843309]
      },
      'properties': {
        'building': 'Robinvale District Health Services',
        'address': '128-132 Latje Rd',
        'suburb': 'Robinvale',
        'postalCode': '3549',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [144.6957476, -36.3658092]
      },
      'properties': {
        'building': 'Rochester & Elmore District Health Service',
        'address': '1 Pascoe St',
        'suburb': 'Rochester',
        'postalCode': '3561',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [143.2447467, -36.609397]
      },
      'properties': {
        'building': 'East Wimmera Health Service (St Arnaud)',
        'address': '52 N Western Rd',
        'suburb': 'St Arnaud',
        'postalCode': '3478',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [143.5545627, -35.3399003]
      },
      'properties': {
        'building': 'Swan Hill District Health',
        'address': '48 Splatt St',
        'suburb': 'Swan Hill',
        'postalCode': '3585',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [143.5805975, -38.3412725]
      },
      'properties': {
        'building': 'Colac Area Health',
        'address': '2-28 Connor St',
        'suburb': 'Colac',
        'postalCode': '3250',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [143.2318128, -36.0792442]
      },
      'properties': {
        'building': 'East Wimmera Health Service (Wycheproof)',
        'address': '19 Grandview St',
        'suburb': 'Wycheproof',
        'postalCode': '3527',
        'state': 'VIC'
      }
    },
    // North East
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [145.7150585, -37.1940775]
      },
      'properties': {
        'building': 'Alexandra District Health',
        'address': '12 Cooper St',
        'suburb': 'Alexandra',
        'postalCode': '3714',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [145.9924968, -36.5553853]
      },
      'properties': {
        'building': 'Benalla Health',
        'address': '45/63 Coster St',
        'suburb': 'Benalla',
        'postalCode': '3672',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [145.6502803, -35.9160333]
      },
      'properties': {
        'building': 'Cobram District Health',
        'address': '24-32 Broadway St',
        'suburb': 'Cobram',
        'postalCode': '3644',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [147.9020542, -36.1989592]
      },
      'properties': {
        'building': 'Corryong Health',
        'address': 'Kiell St',
        'suburb': 'Corryong',
        'postalCode': '3707',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [145.5260142, -37.6475474]
      },
      'properties': {
        'building': 'Yarra Valley Community Health (Healsville)',
        'address': 'White St',
        'suburb': 'Healsville',
        'postalCode': '3777',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [145.0397787, -36.3148783]
      },
      'properties': {
        'building': 'Kybram and District Health Services',
        'address': '88 Fenaughty St',
        'suburb': 'Kybram',
        'postalCode': '3620',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [146.0837952, -37.0575182]
      },
      'properties': {
        'building': 'Mansfield District Hospital',
        'address': '53 Highett St',
        'suburb': 'Mansfield',
        'postalCode': '3722',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [145.4412984, -36.0957207]
      },
      'properties': {
        'building': 'Numurkah District Health Service',
        'address': '2 Katamatite-Nathalia Rd',
        'suburb': 'Numurkah',
        'postalCode': '3636',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [145.137657, -37.0186704]
      },
      'properties': {
        'building': 'Seymour District Memorial Hospital',
        'address': '1 Bretonneux St',
        'suburb': 'Seymour',
        'postalCode': '3717',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [145.4023369, -36.3636969]
      },
      'properties': {
        'building': 'Goulburn Valley Health (Shepparton)',
        'address': '2/2-48 Graham St',
        'suburb': 'Shepparton',
        'postalCode': '3630',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [146.3114747, -36.3541384]
      },
      'properties': {
        'building': 'Northeast Health Wangaratta',
        'address': '35-47 Green St',
        'suburb': 'Wangaratta',
        'postalCode': '3677',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [145.0125015, -37.6519481]
      },
      'properties': {
        'building': 'DPV Health Epping (Northern Hospital site)',
        'address': '187 Cooper St',
        'suburb': 'Epping',
        'postalCode': '3076',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [146.877673, -36.1319168]
      },
      'properties': {
        'building': 'Albury Wodonga Health, Wodonga Campus',
        'address': '53-81 Vermont St',
        'suburb': 'Wodonga',
        'postalCode': '3690',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [146.0044282, -36.0118724]
      },
      'properties': {
        'building': 'Yarrawonga District Health Service',
        'address': '33 Piper St',
        'suburb': 'Yarrawonga',
        'postalCode': '3730',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [145.4287922, -37.2135791]
      },
      'properties': {
        'building': 'Yea & District Memorial Hospital',
        'address': '45 Station St',
        'suburb': 'Yea',
        'postalCode': '3717',
        'state': 'VIC'
      }
    },
    // South West
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [143.5805975, -38.3412725]
      },
      'properties': {
        'building': 'Colac Area Health',
        'address': '2-28 Connor St',
        'suburb': 'Colac',
        'postalCode': '3250',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [142.0287405, -37.7366539]
      },
      'properties': {
        'building': 'Western District Health Service (Hamilton)',
        'address': '20 Foster St',
        'suburb': 'Hamilton',
        'postalCode': '3300',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [144.5199846, -38.266348]
      },
      'properties': {
        'building': 'Bellarine Community Health (Ocean Grove)',
        'address': 'Cnr Presidents Ave and The Avenue',
        'suburb': 'Ocean Grove',
        'postalCode': '3226',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [141.6030011, -38.3411991]
      },
      'properties': {
        'building': 'Portland District Health',
        'address': '141-151 Bentinck St',
        'suburb': 'Portland',
        'postalCode': '3305',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [142.4712453, -38.3801331]
      },
      'properties': {
        'building': 'Southwest Healthcare (Warrnambool)',
        'address': '25 Ryot St',
        'suburb': 'Warrnambool',
        'postalCode': '3280',
        'state': 'VIC'
      }
    },
    // South East
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [147.6055972, -37.8312043]
      },
      'properties': {
        'building': 'Bairnsdale Regional Health Service',
        'address': '122 Day St',
        'suburb': 'Bairnsdale',
        'postalCode': '3875',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [146.4191232, -38.3137787]
      },
      'properties': {
        'building': 'Latrobe Community Health Service (Churchill)',
        'address': '20/24 Philip Parade',
        'suburb': 'Churchill',
        'postalCode': '3842',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [146.2039416, -38.6587964]
      },
      'properties': {
        'building': 'South Gippsland Hospital (Foster)',
        'address': '83/87 Station Rd,',
        'suburb': 'Foster',
        'postalCode': '3960',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [148.4629377, -37.7019817]
      },
      'properties': {
        'building': 'Orbost Regional Health',
        'address': '104-107 Boundary Rd',
        'suburb': 'Orbost',
        'postalCode': '3888',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [147.0786006, -38.1087245]
      },
      'properties': {
        'building': 'Central Gippsland Health (Sale)',
        'address': '155 Guthridge Parade',
        'suburb': 'Sale',
        'postalCode': '3850',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [145.3691304, -38.5264718]
      },
      'properties': {
        'building': 'Bass Coast Community Health Service (San Remo)',
        'address': '1 Back Beach Rd',
        'suburb': 'San Remo',
        'postalCode': '3925',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [146.469526, -38.2185491]
      },
      'properties': {
        'building': 'Latrobe Regional Hospital (LRH)',
        'address': '10 Village Ave',
        'suburb': 'Traralgon',
        'postalCode': '3844',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [145.9333134, -38.1616714]
      },
      'properties': {
        'building': 'West Gippsland Healthcare Group (Warragul)',
        'address': '31/35 Gladstone St',
        'suburb': 'Warragul',
        'postalCode': '3820',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [145.5795195, -38.6074127]
      },
      'properties': {
        'building': 'Bass Coast Health (Wonthaggi)',
        'address': '235 Graham St',
        'suburb': 'Wonthaggi',
        'postalCode': '3995',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [146.6750993, -38.5598048]
      },
      'properties': {
        'building': 'Yarram & District Health Service',
        'address': '121 Commercial Rd',
        'suburb': 'Yarram',
        'postalCode': '3971',
        'state': 'VIC'
      }
    },
    //West, Wimmera
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [142.9296274, -37.2792871]
      },
      'properties': {
        'building': 'East Grampians Health Service',
        'address': '5 Girdlestone St',
        'suburb': 'Ararat',
        'postalCode': '3377',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [143.8450469, -37.5587477]
      },
      'properties': {
        'building': 'Ballarat Base Hospital (Ballarat Health Services)',
        'address': '1 Drummond St N',
        'suburb': 'Ballarat Central',
        'postalCode': '3350',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [141.2865751, -37.0352648]
      },
      'properties': {
        'building': 'Edenhope and District Memorial Hospital',
        'address': '128/124-134 Elizabeth St',
        'suburb': 'Edenhope',
        'postalCode': '3318',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [144.5825753, -37.4858077]
      },
      'properties': {
        'building': 'Macedon Ranges Health (Gisborne)',
        'address': '5 Neal St',
        'suburb': 'Gisborne',
        'postalCode': '3437',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [142.2066233, -36.712546]
      },
      'properties': {
        'building': 'Wimmera Base Hospital (Horsham)',
        'address': '83 Baillie St',
        'suburb': 'Horsham',
        'postalCode': '3400',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [144.5558756, -37.6869341]
      },
      'properties': {
        'building': 'Melton Health (Melton West)',
        'address': '195-209 Barries Rd',
        'suburb': 'Melton West',
        'postalCode': '3337',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [142.7791934, -37.0594011]
      },
      'properties': {
        'building': 'Stawell Regional Health',
        'address': '27/29 Sloane St',
        'suburb': 'Stawell',
        'postalCode': '3380',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [144.7303747, -37.5783875]
      },
      'properties': {
        'building': 'Sunbury Community Health Centre',
        'address': '12-28 Macedon St',
        'suburb': 'Sunbury',
        'postalCode': '3429',
        'state': 'VIC'
      }
    },
    // Metro
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [145.0600459, -37.9200798]
      },
      'properties': {
        'building': 'Connect Health & Community',
        'address': '2a Gardeners Rd',
        'suburb': 'Bentleigh East',
        'postalCode': '3165',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [145.1192523, -37.8204427]
      },
      'properties': {
        'building': 'Carrington Health',
        'address': '2/43 Carrington Rd',
        'suburb': 'Box Hill',
        'postalCode': '3128',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [144.8517796, -37.7862285]
      },
      'properties': {
        'building': 'Cohealth Braybrook Community Hub',
        'address': '107-139 Churchill Ave',
        'suburb': 'Braybrook',
        'postalCode': '3019',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [144.9348355, -37.5987564]
      },
      'properties': {
        'building': 'DPV Health Craigieburn',
        'address': '55 Craigieburn Rd',
        'suburb': 'Broadmeadows',
        'postalCode': '3064',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [145.0547043, -37.7013053]
      },
      'properties': {
        'building': 'Northern Health Bundoora',
        'address': '1231 Plenty Rd',
        'suburb': 'Bundoora',
        'postalCode': '3083',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [145.0764915, -37.9552187]
      },
      'properties': {
        'building': 'Kingston Centre',
        'address': '400 Warrigal Rd',
        'suburb': 'Cheltenham',
        'postalCode': '3192',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [145.1214165, -37.9207195]
      },
      'properties': {
        'building': 'Monash Medical Centre',
        'address': '246 Clayton Rd',
        'suburb': 'Clayton',
        'postalCode': '3168',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [144.9167621, -37.5962697]
      },
      'properties': {
        'building': 'Craigieburn Health Service',
        'address': '274-304 Craigieburn Rd',
        'suburb': 'Craigieburn',
        'postalCode': '3064',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [145.2790019, -38.1130921]
      },
      'properties': {
        'building': 'Cranbourne Integrated Care Centre',
        'address': '140 Sladen Street',
        'suburb': 'Cranbourne',
        'postalCode': '3177',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [145.211100, -37.9895408]
      },
      'properties': {
        'building': 'Greater Dandenong Community Health Service (Dandenong)',
        'address': '122 Thomas St',
        'suburb': 'Dandenong',
        'postalCode': '3175',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [145.1694524, -37.7899385]
      },
      'properties': {
        'building': 'Donvale Rehabilitation Hospital',
        'address': '1119 Doncaster Rd',
        'suburb': 'Donvale',
        'postalCode': '3175',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [145.145771, -37.7146887]
      },
      'properties': {
        'building': 'healthAbility (Eltham)',
        'address': '917 Main Rd',
        'suburb': 'Eltham',
        'postalCode': '3095',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [145.310103, -37.8988687]
      },
      'properties': {
        'building': 'Eastern Health (Ferntree Gully)',
        'address': '16-18 Albert St',
        'suburb': 'Upper Ferntree Gully',
        'postalCode': '3156',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [145.0934537, -38.1508127]
      },
      'properties': {
        'building': 'Peninsula Health (Frankston)',
        'address': '2 Hastings Rd',
        'suburb': 'Frankston',
        'postalCode': '3199',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [144.3631043, -38.1520878]
      },
      'properties': {
        'building': 'Barwon Health - University Hospital Geelong',
        'address': 'Bellerine St',
        'suburb': 'Geelong',
        'postalCode': '3220',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [144.6821061, -37.8807122]
      },
      'properties': {
        'building': 'IPC Health (Hoppers Crossing)',
        'address': '117/129 Warringa Cres',
        'suburb': 'Hoppers Crossing',
        'postalCode': '3029',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [145.349086, -37.7564967]
      },
      'properties': {
        'building': 'Eastern Health (Lilydale)',
        'address': '25 Market St',
        'suburb': 'Lilydale',
        'postalCode': '3140',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [145.0892083, -37.9004957]
      },
      'properties': {
        'building': 'Pronia (Oakleigh)',
        'address': '1/64 Portman St',
        'suburb': 'Oakleigh',
        'postalCode': '3166',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [145.4684464, -38.0732546]
      },
      'properties': {
        'building': 'Cardinia Casey Community Health Service (Pakenham)',
        'address': 'Henty Way',
        'suburb': 'Pakenham',
        'postalCode': '3810',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [145.1488416, -37.9528999]
      },
      'properties': {
        'building': 'Greater Dandenong Community Health Service (Springvale)',
        'address': '1/55 Buckingham Ave',
        'suburb': 'Springvale',
        'postalCode': '3171',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [144.814054, -37.7593911]
      },
      'properties': {
        'building': 'Sunshine Hospital (St Albans)',
        'address': 'Furlong Rd',
        'suburb': 'St Albans',
        'postalCode': '3021',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [145.223205, -37.8485962]
      },
      'properties': {
        'building': 'Wantirna Health',
        'address': '251 Mountain Hwy',
        'suburb': 'Wantirna South',
        'postalCode': '3152',
        'state': 'VIC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [144.889679, -37.8630749]
      },
      'properties': {
        'building': 'Williamstown Hospital',
        'address': '77B Railway Cres',
        'suburb': 'Williamstown',
        'postalCode': '3016',
        'state': 'VIC'
      }
    }
  ]
};

// Assigns property id to each rehab centre
rehabs.features.forEach(function(rehab, i) {
  rehab.properties.id = i;
});

// Waits until map loads before changes
map.on('load', function(e) {
  map.addSource('places', {
    'type': 'geojson',
    'data': rehabs
  });

  geocoder.on('result', function(ev) {
    var searchResult = ev.result.geometry;
    var options = { units: 'kilometres' };
    rehabs.features.forEach(function(rehab) {
      Object.defineProperty(rehab.properties, 'distance', {
        value: turf.distance(searchResult, rehab.geometry, options),
        writable: true,
        enumerable: true,
        configurable: true
      });
    });
    rehabs.features.sort(function(a, b) {
      if (a.properties.distance > b.properties.distance) {
        return 1;
      }
      if (a.properties.distance < b.properties.distance) {
        return -1;
      }
      return 0;
    });
    var listings = document.getElementById('listings');
    while (listings.firstChild) {
      listings.removeChild(listings.firstChild);
    }
    buildLocationList(rehabs);
    var bbox = getBbox(rehabs, 0, searchResult);
    map.fitBounds(bbox, {
      padding: 100
    });

    createPopUp(rehabs.features[0]);

    var activeListing = document.getElementById('listing-' + rehabs.features[0].properties.id);
    activeListing.classList.add('active');
  });
  // Add the markers and location list
  buildLocationList(rehabs);
  addMarkers();
});

// Add marker for each listing
function addMarkers() {
  rehabs.features.forEach(function(marker) {
    // Create a div for each
    var el = document.createElement('div');
    // Assign a unique `id` to the marker
    el.id = 'marker-' + marker.properties.id;
    // Assign the `marker` class to each marker for styling
    el.className = 'marker';

    // Creates marker and adds to map
    new mapboxgl.Marker(el, { offset: [0, -23] })
      .setLngLat(marker.geometry.coordinates)
      .addTo(map);

    // When clicked, does the following three things:
    el.addEventListener('click', function(e) {
      // Flies to point
      flyToRehab(marker);
      // Closes all other popups, displays popup for clicked rehab
      createPopUp(marker);
      // Highlights listing in sidebar (removing other highlights)
      var activeItem = document.getElementsByClassName('active');
      e.stopPropagation();
      if (activeItem[0]) {
        activeItem[0].classList.remove('active');
      }
      var listing = document.getElementById(
        'listing-' + marker.properties.id
      );
      listing.classList.add('active');
    });
  });
}

// Add a listing for each rehab to the sidebar
function buildLocationList(data) {
  data.features.forEach(function(rehab, i) {
    // Shortcut to rehab.properties
    var prop = rehab.properties;

    // Adds new listing to sidebar
    var listings = document.getElementById('listings');
    var listing = listings.appendChild(document.createElement('div'));
    // Assigns a unique id to listing
    listing.id = 'listing-' + prop.id;
    // Assigns 'item' class for styling
    listing.className = 'item';

    // Add link to individual listing
    var link = listing.appendChild(document.createElement('a'));
    link.href = '#';
    link.className = 'title';
    link.id = 'link-' + prop.id;
    link.innerHTML = prop.building;

    // Further details for individual listing
    var details = listing.appendChild(document.createElement('div'));
    details.innerHTML = prop.suburb;
    if (prop.distance) {
      var roundedDistance = Math.round(prop.distance * 100) / 100;
      details.innerHTML += '<p><strong>' + roundedDistance + ' km away</strong></p>';
    }
    // When clicked:
    // 1. Updates the `currentFeature` to selected rehab
    // 2. Flies to the point
    // 3. Closes all other popups and display popup for clicked rehab
    // 4. Highlight listing in sidebar (and remove highlight for all other listings)
    link.addEventListener('click', function(e) {
      for (var i = 0; i < data.features.length; i++) {
        if (this.id === 'link-' + data.features[i].properties.id) {
          var clickedListing = data.features[i];
          flyToRehab(clickedListing);
          createPopUp(clickedListing);
        }
      }
      var activeItem = document.getElementsByClassName('active');
      if (activeItem[0]) {
        activeItem[0].classList.remove('active');
      }
      this.parentNode.classList.add('active');
    });
  });
}

// Smoothly flyTo's a given center point
function flyToRehab(currentFeature) {
  map.flyTo({
    center: currentFeature.geometry.coordinates,
    zoom: 15
  });
}

// Mapbox GL JS Popup
function createPopUp(currentFeature) {
  var popUps = document.getElementsByClassName('mapboxgl-popup');
  if (popUps[0]) popUps[0].remove();
  var popup = new mapboxgl.Popup({ closeOnClick: false })
    .setLngLat(currentFeature.geometry.coordinates)
    .setHTML(
      '<h3>' + currentFeature.properties.building + '</h3>' +
      '<h4>' +
      currentFeature.properties.address + ', ' + currentFeature.properties.suburb + ', ' + currentFeature.properties.postalCode + ', ' + currentFeature.properties.state +
      '</h4>'
    )
    .addTo(map);
}

var geocoder = new MapboxGeocoder({
  accessToken: mapboxgl.accessToken,
  mapboxgl:mapboxgl,
  marker: true,
  bbox: [141.8456299, -38.4844251, 147.1965631, -33.8243128],
});

map.addControl(geocoder, 'top-left');

// Determines bounding box after finding closest rehab centre
function getBbox(sortedrehabs, rehabIdentifier, searchResult) {
  var lats = [
    sortedrehabs.features[rehabIdentifier].geometry.coordinates[1],
    searchResult.coordinates[1]
  ];
  var lons = [
    sortedrehabs.features[rehabIdentifier].geometry.coordinates[0],
    searchResult.coordinates[0]
  ];
  var sortedLons = lons.sort(function(a,b) {
      if (a > b) { return 1; }
      if (a.distance < b.distance) { return -1; }
      return 0;
    });
  var sortedLats = lats.sort(function(a,b) {
      if (a > b) { return 1; }
      if (a.distance < b.distance) { return -1; }
      return 0;
    });
  return [
    [sortedLons[0], sortedLats[0]],
    [sortedLons[1], sortedLats[1]]
  ];
}
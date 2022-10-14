(function() {
    "use strict";
    
    //clock

    document.addEventListener("DOMContentLoaded", function() {
        
        let c = document.getElementById("clock");
       
        //setTimeout(updateClock, 2000);
        setInterval(updateClock, 1000);
        
        function updateClock() {
            
            let date = new Date();
            let h = date.getHours() % 12 || 12;
            let m = date.getMinutes();
            let s = date.getSeconds();

            if (h < 10) {
                h = "0" + h;
            }

            if (m < 10) {
                m = "0" + m;
            }

            if (s < 10) {
                s = "0" + s;
            }

            c.innerHTML = h + ":" + m + ":" + s;
            
        };
        
    });
    
    // forms
    
    document.getElementById("form").addEventListener("submit", estimateDelivery);
    
    let e = document.getElementById("delivery");
    e.innerHTML = "0,00 &euro;";
    
    function estimateDelivery(event) {
        event.preventDefault();
		
		let enimi = document.getElementById("fname");
		
		if (enimi.value === "") {
			
			alert("Palun sisestage oma eesnimi");
			
			enimi.focus();
		}
		
		let pnimi = document.getElementById("lname");
		
		if (pnimi.value === "") {
			
			alert("Palun sisestage oma perekonnanimi");
			
			pnimi.focus();
		}
		
		let tarne = document.getElementById("radio-button");
		
		if (document.getElementById("r1").checked == false && document.getElementById("r2").checked == false && document.getElementById("r3").checked == false && document.getElementById("r4").checked == false) {
				
				alert("Palun valige tarneviis");
				
				tarne.focus()
		
        
        let linn = document.getElementById("linn");
        
        if (linn.value === "") {
            
            alert("Palun valige linn nimekirjast");
            
            linn.focus();
            
            return;
            
            
        } 
		if (linn.value === "tln") {
            
            e.innerHTML = "0,00 &euro;";
			
			if (document.getElementById("v1").checked) {
				
				e.innerHTML = "5,00 &euro;";
			}
			
			if (document.getElementById("v2").checked) {
				
				e.innerHTML = "1,00 &euro;";
			}
				
			if (document.getElementById("v1").checked && document.getElementById("v2").checked) {
				
				e.innerHTML = "6,00 &euro;";
			} 
			
        }
		if (linn.value === "trt") {
			
			e.innerHTML = "2,50 &euro;";
			
			if (document.getElementById("v1").checked) {
				
				e.innerHTML = "7,50 &euro;";
			}
			
			if (document.getElementById("v2").checked) {
				
				e.innerHTML = "3,50 &euro;";
			}
				
			if (document.getElementById("v1").checked && document.getElementById("v2").checked) {
				
				e.innerHTML = "8,50 &euro;";
			} 
			
		}
		if (linn.value === "nrv") {
			
			e.innerHTML = "2,50 &euro;";
			
			if (document.getElementById("v1").checked) {
				
				e.innerHTML = "7,50 &euro;";
			}
			
			if (document.getElementById("v2").checked) {
				
				e.innerHTML = "3,50 &euro;";
			}
				
			if (document.getElementById("v1").checked && document.getElementById("v2").checked) {
				
				e.innerHTML = "8,50 &euro;";
			}
			
		}
		if (linn.value === "prn") {
			
			e.innerHTML = "3,00 &euro;";
			
			if (document.getElementById("v1").checked) {
				
				e.innerHTML = "8,00 &euro;";
			}
			
			if (document.getElementById("v2").checked) {
				
				e.innerHTML = "4,00 &euro;";
			}
				
			if (document.getElementById("v1").checked && document.getElementById("v2").checked) {
				
				e.innerHTML = ",50 &euro;";
			}
			
		}
		}
        
        console.log("Tarne hind on arvutatud");
    }
    
})();

// map

let mapAPIKey = "AgzH-UvW2HOYKpgLtCe_P9vfr-nAzOlnMWczEWcarQOWtpmwQZ-dyIwYsTVzMUZS";

let map, infobox1, infobox2;

function GetMap() {
    
    "use strict";

    let tartu = new Microsoft.Maps.Location(
            58.38104, 
            26.71992
        );
	
	let tallinn = new Microsoft.Maps.Location(
			59.438904, 
			24.772630
		);
	
	let center = new Microsoft.Maps.Location(
			58.880531, 
			25.547966
		);
		
    map = new Microsoft.Maps.Map("#map", {
        credentials: mapAPIKey,
        center: center,
        zoom: 7,
        mapTypeId: Microsoft.Maps.MapTypeId.road,
        disablePanning: true
    });
    
    let pushpin1 = new Microsoft.Maps.Pushpin(tartu, {
        title: 'Tartu Ülikool',
        //subTitle: 'Hea koht',
        //text: 'UT'
    });
	
	infobox1 = new Microsoft.Maps.Infobox(tartu, { title: 'Tartu Ülikool',
		description: 'Vanim ja suurim ülikool Eestis.',
		visible: false
	});
	
	infobox1.setMap(map);
	
	Microsoft.Maps.Events.addHandler(pushpin1, 'click', function () {
    infobox1.setOptions({ visible: true, maxHeight: 100, maxWidth: 250, showPointer: false });
	});
	
	map.entities.push(pushpin1);
	
	let pushpin2 = new Microsoft.Maps.Pushpin(tallinn, {
        title: 'Tallinna Ülikool',
		//subTitle: 'Ülikool Tallinnas',
		//text: 'TLÜ'
    });
	
	infobox2 = new Microsoft.Maps.Infobox(tallinn, { title: 'Tallinna Ülikool',
		description: 'Tallinna Ülikool – targa eluviisi eestvedaja',
		visible: false
	});
	
	infobox2.setMap(map);
	
	Microsoft.Maps.Events.addHandler(pushpin2, 'click', function () {
    infobox2.setOptions({ visible: true, maxHeight: 100, maxWidth: 250, showPointer: false });
	});
	
	map.entities.push(pushpin2);	
	
}

// https://dev.virtualearth.net/REST/v1/Locations?q=1000 Vin Scully Ave, Los Angeles,CA&key=AgzH-UvW2HOYKpgLtCe_P9vfr-nAzOlnMWczEWcarQOWtpmwQZ-dyIwYsTVzMUZS


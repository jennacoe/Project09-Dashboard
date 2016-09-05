var line = $("#lineChart");
var chart1 = new Chart(line, {
    type: 'line',
    data: {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
            data: [0, 500, 1000, 750, 1250, 1750, 1250, 1500, 1000, 1500, 2000, 1500, 2000],
            backgroundColor: 'rgba(163,166,227,0.2)',
            borderColor: '#b6b8e9',
            borderWidth: 1,
            lineTension: 0,
            pointBorderColor: '#7d81c4',
            pointBackgroundColor: '#fbfbfb',
            pointRadius: 5

        }]
    },
    options: {
    	legend: {
    		display: false
    	}
    }
});

var bar = $("#barChart");
var chart2 = new Chart(bar, {
    type: 'bar',
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            data: [50, 75, 150, 100, 200, 175, 75],
            backgroundColor: '#7377bf',
        }]
    },
    options: {
    	legend: {
    		display: false
    	}
    }
});

var doughnut = $("#doughnutChart");
var chart3 = new Chart(doughnut, {
    type: 'doughnut',
    data: {
        labels: ["Phones", "Tablets", "Desktop"],
        datasets: [{
            label: '# of Votes',
            data: [500, 600, 3000],
            backgroundColor: ["#74b1bf","#81c98f","#7377bf"],
        }]
    }
});

$("aside svg").hover(
	function(){
		$(".svg-color", this).css("fill", "#fff");
		$(this).css("borderLeft", "4px solid #85db80");
	},
	function(){
		$(".svg-color", this).css("fill", "#9c9cb1");
		$(this).css("borderLeft", "4px solid #4d4c72");
	}
);


addAlertBox();

if ($("#alertbar").show()) {
	$("#dot").show();
} else {
	$("#dot").hide();
}

function addAlertBox() {
	$("#traffic-time").before('<div id="alertbar">Alert Lorem ipsum dolor sit amet, consectetur adipiscing elit.<span class="close">X</span></div>');
}

$(".close").click(function(){
	$("#alertbar").hide();
});

$("#send").click(function(e){
    if( $("#search").val().length === 0 || $("#message").val().length === 0 ) {
        alert("Make sure you select a user and write a message");
        e.preventDefault();
    } else  {
        alert("You had successfully submitted your message");
    }
});


















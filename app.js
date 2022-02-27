const url = `https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/`
	fetch(url, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
		"x-rapidapi-key": "YOUR_API_KEY_HERE"
	}
})
    .then(res => res.json())
    .then(data => showDefault(data))
	.catch(err => {
	console.error(err);
	});

const commonForInnerHTML = data => {
	//Deleting the first 2 object(World, All) from the array
	const newArray = data.map(e => {
		return e;
	})
	newArray.splice(0, 2);

	//Updating the table usng data
	const tableBody = document.getElementById('table-body');
	clear()
	for (const singleProp of newArray) {
		const tr = document.createElement('tr');
		tr.innerHTML = `
			<th scope="row">${singleProp.Country}</th>
			<td>${singleProp.rank}</td>
			<td>${singleProp.TotalTests}</td>
			<td>${singleProp.NewCases}</td>
			<td>${singleProp.NewDeaths}</td>
			<td>${singleProp.TotalCases}</td>
			<td>${singleProp.TotalDeaths}</td>
			<td>${singleProp.TotalRecovered}</td>
			<td>${singleProp.Population}</td>
		`
		hideLoading();
		tableBody.appendChild(tr);
	}
}
//Common function for API
function showDefault(data) {
	commonForInnerHTML(data)
}
//Common function for continent buttons
const commonForContinent = (btnId) => {
	const buttonField = document.getElementById(btnId);
	buttonField.addEventListener('click', () => {
		clear()
		displayLoading()
		const buttonText = buttonField.value;
		console.log(buttonText)
		if (buttonText == 'antarctica') {
			alert('এইখানেও মানুষ খুঁজো? এইখানে মানুষ থাকে? মারাত্মক ঠাণ্ডা।🥶🥶')
		} else {
			const url = `https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/${buttonText}`
		fetch(url, {
			"method": "GET",
			"headers": {
				"x-rapidapi-host": "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
				"x-rapidapi-key": "YOUR_API_KEY_HERE"
			}
		})
			.then(res => res.json())
			.then(data => updateByFilter(data))
		}
	})
};

const world = document.getElementById('world');
// For World button
world.addEventListener('click', () => {
	clear();
	displayLoading();
	const url = `https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/`
	fetch(url, {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
			"x-rapidapi-key": "YOUR_API_KEY_HERE"
		}
	})
		.then(res => res.json())
		.then(data => updateForWorld(data))
});
function updateForWorld(data) {
	commonForInnerHTML(data)
}
//For Asia button
commonForContinent('asia');
//For Africa button
commonForContinent('africa');
//For North America button
commonForContinent('north');
//For South America button
commonForContinent('south');
//For Antarctica button
commonForContinent('antarctica');
//For Europe button
commonForContinent('europe');
//For Australia button
commonForContinent('australia');
//Common function for updating continent based
function updateByFilter(data){
	//Updating the table usng data
	const tableBody = document.getElementById('table-body');
	clear()
	for (const singleProp of data) {
		// console.log(singleProp)
		const tr = document.createElement('tr');
		tr.innerHTML = `
			<th scope="row">${singleProp.Country}</th>
			<td>${singleProp.rank}</td>
			<td>${singleProp.TotalTests}</td>
			<td>${singleProp.NewCases}</td>
			<td>${singleProp.NewDeaths}</td>
			<td>${singleProp.TotalCases}</td>
			<td>${singleProp.TotalDeaths}</td>
			<td>${singleProp.TotalRecovered}</td>
			<td>${singleProp.Population}</td>
		`
		tableBody.appendChild(tr);
		hideLoading()
	}
}
//Clearing previous result
function clear() {
	const td = document.getElementById('table-body');
	td.innerHTML = '';
}


// Auto type animation
let typed = new Typed(".type-animation-header", {
	strings: ["Live Update of Covid-19 of all over the World"],
	typeSpeed: 150,
	backSpeed: 100,
	loop: true,
  });
let typed2 = new Typed(".type-animation-owner", {
	strings: ["By Ayon Jodder"],
	typeSpeed: 250,
	backSpeed: 200,
	loop: true,
});
  
//Preloader
const loader = document.getElementById('preloader')
function displayLoading() {
    loader.classList.remove("d-none");
    // to stop loading after some time
    setTimeout(() => {
        loader.classList.add("d-none");
    }, 5000);
}
function hideLoading() {
    loader.classList.add("d-none");
}
window.addEventListener('load', displayLoading())
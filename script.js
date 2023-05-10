'use strict'

const personalPlanPeter = {
	name: "Peter",
	age: "29",
	skills: {
		languages: ['ru', 'eng'],
		programmingLangs: {
			js: '20%',
			php: '10%'
		},
		exp: '1 month'
	},
	showAgeAndLangs: function (a){
		let listOfLang = ``
		for (let value of a.skills.languages){
			listOfLang += ` ${value.toUpperCase ()}`;
		}

		console.log(`Мне ${a.age} и я владею языками:${listOfLang}`);
		return `Мне ${a.age} и я владею языками:${listOfLang}`
	}
};


function showExperience(plan) {
const {exp} = plan.skills;
console.log(`${exp}`);
return exp
};

//showExperience(personalPlanPeter);



function showProgrammingLangs(plan) {

	let strLang = ``
	const {programmingLangs} = plan.skills;

	for (let key in programmingLangs) {
	strLang += `Язык ${key} изучен на ${programmingLangs[key]}\n`
	}
	
console.log(strLang);
return strLang
};

//showProgrammingLangs (personalPlanPeter);

//personalPlanPeter.showAgeAndLangs (personalPlanPeter);
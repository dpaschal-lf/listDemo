$(document).ready( initializeApp) ;

var staff = [
  {
    name: 'Larry',
    occupation: 'Salesman',
    avatar: 'https://c532f75abb9c1c021b8c-e46e473f8aadb72cf2a8ea564b4e6a76.ssl.cf5.rackcdn.com/2016/08/31/2gfb850rm6_Julie_Larsen_Maher_0100_California_Sea_Lion_Indy_close_up_SLP_BZ_03_08_12_hr.jpg'
  },
  {
    name: 'Goldie',
    occupation:'Carrot Farmer',
    avatar: 'http://www.dogtrouble.co.uk/wp-content/uploads/2017/07/Dog-Health-Products-500x500.jpg'
  },
  {
    name: 'Tony',
    occupation: 'Future Cereal Spokesperson',
    avatar:'https://www.vallartadaily.com/wp-content/uploads/2017/08/bengal-tiger-cub-35900.jpg'
  },
  {
    name: 'Albert',
    occupation: 'saving the world',
    avatar: 'https://images-na.ssl-images-amazon.com/images/I/5139%2Bw4F5iL._US500_.jpg'
  },
  {
    name: 'Newt',
    occupation: 'HR Supervisor',
    avatar: 'https://files.slack.com/files-pri/T1EHQUJ8J-F9GMJKN93/image.png'
  },
  {
    name: 'Finny',
    occupation: 'Professional Jumper',
    avatar: 'https://www.dolphindiscovery.com/imagesNuevo/imgsLocs/anguilla/anguilla-9.jpg?v=50'
  },
  {
    name: 'Jimmy',
    occupation: 'Cleaning Small Rocks',
    avatar: 'http://upload.wikimedia.org/wikipedia/commons/thumb/7/77/6_maja_06_r._ZOO_204.jpg/500px-6_maja_06_r._ZOO_204.jpg'
  },

  ]
//render all staff on page load
function initializeApp(){
	renderAllStaff(staff);
	showStaffDetails( staff[0] );
}
// go through each staff member and call renderOneStaff, passing in the staff member data
function renderAllStaff( allStaff ){
	for(var indexOfStaffMember=0; indexOfStaffMember<allStaff.length; indexOfStaffMember++){
		var staffMember = allStaff[ indexOfStaffMember ];
		renderOneStaff( staffMember );
	}
}
//create the dom elements for the staff member and put it in the #staffList.  use the existing html as your guide for how it should be formatted
// add a click handler to the parent element for each staff member that changes the details in the #staffDetails element, according to the example there
function renderOneStaff( member ){
	var staffContainer = $("<div>" , {
		'class': 'staffMember',
		on: {
			click: function(){
				console.log(member);
				showStaffDetails(member);
			}
		}
	})
	staffContainer[0].STAFFmemberSTAFF = member;
	var staffName = $("<div>",{
		'class': 'name',
		text: member.name
	})
	var staffOccupation = $("<div>",{
		'class': 'occupation',
		text: member.occupation
	})
	staffContainer.append(staffName, staffOccupation);
	$("#staffList").append( staffContainer );

}
/*
		<img class="avatar" src="http://upload.wikimedia.org/wikipedia/commons/thumb/7/77/6_maja_06_r._ZOO_204.jpg/500px-6_maja_06_r._ZOO_204.jpg"></img>
		<div class="name">Jimmy</div>
		<div class="occupation">Cleaning Small Rocks</div>
	  name: 'Jimmy',
    occupation: 'Cleaning Small Rocks',
    avatar: 'http://upload.wikimedia.org/wikipedia/commons/thumb/7/77/6_maja_06_r._ZOO_204.jpg/500px-6_maja_06_r._ZOO_204.jpg'

		*/
function showStaffDetails( member) {
	$("#staffDetails > .detailStaff").empty();
	var staffName = $("<div>",{
		'class': 'name',
		text: member.name
	})
	var staffOccupation = $("<div>",{
		'class': 'occupation',
		text: member.occupation
	})	
	var staffAvatar = $("<img>",{
		'class': 'avatar',
		src: member.avatar,
	});
	$("#staffDetails > .detailStaff").append(staffAvatar, staffName, staffOccupation);
}





























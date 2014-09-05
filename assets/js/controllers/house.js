var angular = require('angular'),
	sl = require('saintelague'),
	controllers = angular.module('sl.controllers', []),
	parties;

parties =[
	{"name":"Green Party","logo":"http://www.elections.org.nz/sites/default/files/styles/party_logo/public/images/GP_1.jpg?itok=goytjgtF", hex: '#098137' },
	{"name":"Internet MANA","logo":"http://www.elections.org.nz/sites/default/files/styles/party_logo/public/parties/logos/internet_mana_logo_rgb_350dpi.jpg?itok=uJpEwh_e", hex: '#662C92'},
	{"name":"Labour Party","logo":"http://www.elections.org.nz/sites/default/files/styles/party_logo/public/images/Labour_logo-_NZ_0.jpg?itok=H__bjmI4", hex: '#FF0000'},
	{"name":"National Party","logo":"http://www.elections.org.nz/sites/default/files/styles/party_logo/public/images/NAT_0.jpg?itok=VrBBcMC_", hex: '#00529F'},
	{"name":"NZ First","logo":"http://www.elections.org.nz/sites/default/files/styles/party_logo/public/images/NZFirst_0.jpg?itok=ozcbeu3U", hex: '#000000'},
	{"name":"The ACT Party","logo":"http://www.elections.org.nz/sites/default/files/styles/party_logo/public/images/act_logo_29_april_2014.jpg?itok=hz9AQTcu", hex: '#FFE401'},
	{"name":"United Future","logo":"http://www.elections.org.nz/sites/default/files/styles/party_logo/public/images/UFNZ.jpg?itok=V-k_nYD2", hex: '#501557'},
	{"name":"Alliance","logo":"http://www.elections.org.nz/sites/default/files/styles/party_logo/public/images/ALL_0.jpg?itok=ntLfnIi1", minor: true},
	{"name":"Democrats for Social Credit","logo":"http://www.elections.org.nz/sites/default/files/styles/party_logo/public/images/Democrats-for-Social-Credit.jpg?itok=wbiUOtlX", minor: true},
	{"name":"ALCP","logo":"http://www.elections.org.nz/sites/default/files/styles/party_logo/public/images/ALCP.jpg?itok=phD3jmVe", minor: true},
	{"name":"Māori Party","logo":"http://www.elections.org.nz/sites/default/files/styles/party_logo/public/images/Maori.jpg?itok=bOr7mhAx", hex: '#EF4A42'},
	{"name":"Conservative","logo":"http://www.elections.org.nz/sites/default/files/styles/party_logo/public/images/conservative.jpg?itok=MKCQvZ_M", minor: true, hex: '#00AEEF'},
	{"name":"Focus NZ","logo":"http://www.elections.org.nz/sites/default/files/styles/party_logo/public/parties/logos/focus_nz_jan_2014.jpg?itok=_SCH53D_", minor: true},
	{"name":"1Law4All","logo":"http://www.elections.org.nz/sites/default/files/styles/party_logo/public/parties/logos/onelaw4all_high_res.jpg?itok=fBVNgXbc", minor: true},
	{"name":"NZ Independent Coalition","logo":"http://www.elections.org.nz/sites/default/files/styles/party_logo/public/parties/logos/nzic_logo_5cm_350dpi_rgb_hi_res.jpg?itok=2r6JG92u", minor: true},
	{"name":"Ban1080","logo":"http://www.elections.org.nz/sites/default/files/styles/party_logo/public/images/ban_1080_logo_july_2014.jpg?itok=Y-jKyvUZ", minor: true},
	{"name":"The Civilian Party","logo":"http://www.elections.org.nz/sites/default/files/styles/party_logo/public/images/civilian_party_july_2014.jpg?itok=EY-Cihid", minor: true}];

controllers.controller('HouseCtrl', [
	'$scope',
	function($scope) {
		$scope.parties = parties;

		$scope.recalculate = function() {
			var seats = sl($scope.parties, { seats: 120 });

			$scope.calculated = true;

			seats.forEach(function(s, i) {
				$scope.parties[i].allocated = s.allocated;
			});
		};

		$scope.load = function() {
			var p = $scope.parties;

			// green
			p[0].votes = 247372;
			p[0].electorates = 0;

			// labour
			p[2].votes = 614937;
			p[2].electorates = 22;

			// national
			p[3].votes = 1058636;
			p[3].electorates = 42;

			// nz first
			p[4].votes = 147544;
			p[4].electorates = 0;

			// act
			p[5].votes = 23889;
			p[5].electorates = 1;

			// uf
			p[6].votes = 13443;
			p[6].electorates = 1;

			// maori
			p[10].votes = 31982;
			p[10].electorates = 3;

			// mana
			p[1].votes = 24168;
			p[1].electorates = 1;

			$scope.recalculate();
		};

		$scope.predicate = "-allocated";
	}
]);

module.exports = {};

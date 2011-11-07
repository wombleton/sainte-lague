(function() {
  $('#parties input').live('keyup', function(e) {
    var electorates, parties, party, prties, seats, votes;
    votes = 0;
    electorates = 0;
    parties = {};
    _.each($('#parties tbody tr'), function(el) {
      var title, v;
      el = $(el);
      v = Number(el.find('.votes input').val());
      e = Number(el.find('.electorates input').val());
      title = el.find('.party').html();
      parties[title] = {
        title: title,
        votes: v,
        electorates: e,
        seats: 0
      };
      votes += v;
      return electorates += e;
    });
    seats = 0;
    _.each(parties, function(party, title) {
      if (party.electorates > 0 || party.votes / votes >= 0.05) {
        return party.quotient = party.votes;
      }
    });
    while (seats < 120) {
      prties = _.values(parties);
      party = _.max(prties, function(p) {
        return p.quotient;
      });
      party.seats++;
      party.quotient = party.votes / ((2 * party.seats) + 1);
      seats++;
    }
    return _.each(_.values(parties), function(party, i) {
      var s;
      s = party.seats - party.electorates;
      if (s < 0) {
        s = 0;
      }
      return $("#parties tbody tr:eq(" + i + ") .listseats").html(s);
    });
  });
}).call(this);

$('#parties input').live('keyup', (e) ->
  votes = 0
  electorates = 0
  parties = {}
  _.each($('#parties tbody tr'), (el) ->
    el = $(el)
    v = Number(el.find('.votes input').val())
    e = Number(el.find('.electorates input').val())
    title = el.find('.party').html()

    parties[title] =
      title: title
      votes: v
      electorates: e
      seats: 0
    votes += v
    electorates += e
  )
  seats = 0
  _.each(parties, (party, title) ->
    if party.electorates > 0 or party.votes / votes >= 0.05
      party.quotient = party.votes
  )
  while seats < 120
    prties = _.values(parties)
    party = _.max(prties, (p) ->
      p.quotient
    )
    party.seats++
    party.quotient = party.votes / ((2 * party.seats) + 1)
    seats++
  _.each(_.values(parties), (party, i) ->
    s = party.seats - party.electorates
    s = 0 if s < 0
    $("#parties tbody tr:eq(#{i}) .listseats").html(s)
  )

)

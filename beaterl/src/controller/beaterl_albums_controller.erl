-module(beaterl_albums_controller, [Req]).
-compile(export_all).

index('GET', []) ->
    Albums = boss_db:find(album,[]),
    {json, Albums}.

show('GET', [_Id]) ->
    {json,
     [{artist, 'placebo'}, {title, 'Battle for the Sun'}]
    }.

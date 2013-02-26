-module(beaterl_albums_controller, [Req]).
-compile(export_all).

index('GET', []) ->
    Albums = boss_db:find(album,[]),
    {json, Albums}.
    %% {json, [{albums, [[{artist, 'Placebo'}, {title, 'Battle for the Sun'}],
    %%                   [{artist, 'Placebo'}, {title, 'Placebo'}]]}
    %%        ]
    %% }.

show('GET', [_Id]) ->
    {json,
     [{artist, 'placebo'}, {title, 'Battle for the Sun'}]
    }.

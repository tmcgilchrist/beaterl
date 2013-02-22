-module(beaterl_home_controller, [Req]).
-compile(export_all).

index('GET', []) ->
    %% Read file in and return it
    {ok, Contents} = file:read_file("./priv/static/index.html"),
    {output, Contents}.

-module(beaterl_home_controller, [Req]).
-compile(export_all).

index('GET', []) ->
    {ok, [{greeting, "Hello, world!"}]}.

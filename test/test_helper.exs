ExUnit.start

Mix.Task.run "ecto.create", ~w(-r ElixirChat.Repo --quiet)
Mix.Task.run "ecto.migrate", ~w(-r ElixirChat.Repo --quiet)
Ecto.Adapters.SQL.begin_test_transaction(ElixirChat.Repo)


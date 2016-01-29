defmodule ElixirChat.Repo.Migrations.CreateBatch do
  use Ecto.Migration

  def change do
    create table(:batches) do
      add :iteration, :string

      timestamps
    end

  end
end

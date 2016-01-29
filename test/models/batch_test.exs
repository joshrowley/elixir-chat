defmodule ElixirChat.BatchTest do
  use ElixirChat.ModelCase

  alias ElixirChat.Batch

  @valid_attrs %{iteration: "some content"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = Batch.changeset(%Batch{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = Batch.changeset(%Batch{}, @invalid_attrs)
    refute changeset.valid?
  end
end

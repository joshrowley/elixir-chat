defmodule ElixirChat.BatchChannel do
  use Phoenix.Channel

  def join("batches:lobby", message, socket) do
    {:ok, socket}
  end
end

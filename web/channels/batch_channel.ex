defmodule ElixirChat.BatchChannel do
  use Phoenix.Channel

  def join("batches:lobby", message, socket) do
    {:ok, socket}
  end

  def handle_in("new:message", message, socket) do
    broadcast! socket, "new:message", %{body: message["body"]}
    {:noreply, socket}
  end
end

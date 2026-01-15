export default function InstagramInbox() {
  return (
    <div style={{ display: "flex", height: "100%" }}>
      {/* LEFT: Conversations */}
      <div style={{ width: "300px", borderRight: "1px solid #ddd" }}>
        <h3>Conversations</h3>
        {/* conversation list here */}
      </div>

      {/* RIGHT: Messages */}
      <div style={{ flex: 1, padding: "16px" }}>
        <h3>Messages</h3>
        {/* messages + reply box */}
      </div>
    </div>
  );
}

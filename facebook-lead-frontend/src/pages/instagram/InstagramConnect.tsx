export default function InstagramConnect() {
  const connectInstagram = () => {
    window.location.href = `${import.meta.env.VITE_API_URL}/auth/instagram`;
  };

  return (
    <div>
      <h2>Connect Instagram</h2>
      <p>Connect your Instagram Business account to start receiving messages.</p>

      <button onClick={connectInstagram}>
        Connect Instagram
      </button>
    </div>
  );
}

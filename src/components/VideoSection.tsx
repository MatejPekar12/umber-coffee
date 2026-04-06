export function VideoSection() {
  return (
    <section className="w-full bg-white">
      <video autoPlay loop muted playsInline style={{ width: '100%', display: 'block' }}>
        <source src="/coffee-beans.mp4.mp4" type="video/mp4" />
      </video>
    </section>
  );
}

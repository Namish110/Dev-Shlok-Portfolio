export default function SectionPage({
  children,
}) {
  return (
    <main id="main-content" className="route-page pt-28 sm:pt-32">
      {children}
    </main>
  );
}

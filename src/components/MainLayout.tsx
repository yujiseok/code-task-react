const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="grid min-h-screen place-items-center px-4 py-6 text-code-black">
      {children}
    </main>
  );
};
export default MainLayout;

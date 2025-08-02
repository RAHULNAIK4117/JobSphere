const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 border-t py-3 text-center text-sm text-gray-500">
      <p>
        © {new Date().getFullYear()} <span className="font-semibold">JobSphere Admin</span> | Made with ❤️ by Rahul
      </p>
    </footer>
  );
};

export default Footer;


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 md:px-40 border-t-2 border-white mt-5">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <h1 className='font-bold text-3xl text-center md:text-left'>Food</h1>
        {/* Company Section */}
        <div>
          <h2 className="font-bold text-lg mb-4">Company</h2>
          <ul>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#careers" className="hover:underline">Careers</a></li>
            <li><a href="#team" className="hover:underline">Team</a></li>
            <li><a href="#food-one" className="hover:underline">Food One</a></li>
            <li><a href="#food-instance" className="hover:underline">Food Instance</a></li>
            <li><a href="#food-genie" className="hover:underline">Food Genie</a></li>
          </ul>
        </div>
        {/* Contact Us Section */}
        <div>
          <h2 className="font-bold text-lg mb-4">Contact Us</h2>
          <ul>
            <li><a href="#support" className="hover:underline">Help & Support</a></li>
            <li><a href="#partner" className="hover:underline">Partner with us</a></li>
            <li><a href="#ride" className="hover:underline">Ride with us</a></li>
          </ul>
        
        {/* Legal Section */}
        <div>
          <h2 className="font-bold text-lg my-4">Legal</h2>
          <ul>
            <li><a href="#terms" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="#cookie-policy" className="hover:underline">Cookie Policy</a></li>
            <li><a href="#privacy-policy" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#investor" className="hover:underline">Investor Relations</a></li>
          </ul>
        </div></div>
        {/* Delivery Locations Section */}
        <div>
          <h2 className="font-bold text-lg mb-4">We deliver to:</h2>
          <ul>
            <li><a href="#bangalore" className="hover:underline">Bangalore</a></li>
            <li><a href="#gurgaon" className="hover:underline">Gurgaon</a></li>
            <li><a href="#hyderabad" className="hover:underline">Hyderabad</a></li>
            <li><a href="#delhi" className="hover:underline">Delhi</a></li>
            <li><a href="#mumbai" className="hover:underline">Mumbai</a></li>
            <li><a href="#pune" className="hover:underline">Pune</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

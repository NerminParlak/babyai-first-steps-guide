
import React from "react";
import { Link } from "react-router-dom";
import { Home, User, Settings } from "lucide-react";

const MobileNavbar = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center h-16 px-4 z-50">
      <Link to="/home" className="flex flex-col items-center justify-center text-baby-blue">
        <Home size={24} />
        <span className="text-xs mt-1">Ana Sayfa</span>
      </Link>
      <Link to="/profile" className="flex flex-col items-center justify-center text-gray-500">
        <User size={24} />
        <span className="text-xs mt-1">Profil</span>
      </Link>
      <Link to="/settings" className="flex flex-col items-center justify-center text-gray-500">
        <Settings size={24} />
        <span className="text-xs mt-1">Ayarlar</span>
      </Link>
    </nav>
  );
};

export default MobileNavbar;

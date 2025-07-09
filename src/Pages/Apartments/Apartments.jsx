import React, { useEffect, useState } from "react";
import ApartmentCard from "../../components/Apartments/ApartmentCard";
import Pagination from "../../components/Apartments/Pagination";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const Apartments = () => {
  const [apartments, setApartments] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      `https://b11a12-server-side-mdp-arvezsarkar.vercel.app/apartments?page=${page}&limit=6`
    )
      .then((res) => res.json())
      .then((data) => {
        setApartments(data.apartments);
        setTotalPages(data.totalPages);
      });
  }, [page]);

  const handleAgreement = (apartment) => {
    if (!user) {
      toast.warn("Please login first!");
      navigate("/login");
      return;
    }

    const agreementData = {
      userName: user.displayName,
      userEmail: user.email,
      floor: apartment.floor,
      block: apartment.block,
      apartmentNo: apartment.apartmentNo,
      rent: apartment.rent,
      status: "pending",
    };

    fetch("https://b11a12-server-side-mdp-arvezsarkar.vercel.app/agreements", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(agreementData),
    })
      .then(async (res) => {
        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.message || "Something went wrong");
        }
        return res.json();
      })
      .then(() => {
        toast.success("Agreement sent!");
      })
      .catch((err) => {
        toast.error(err.message || "Something went wrong");
        console.error(err);
      });
    
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Available Apartments</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {apartments.map((apt) => (
          <ApartmentCard
            key={apt._id}
            apartment={apt}
            onAgree={handleAgreement}
          />
        ))}
      </div>
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </div>
  );
};

export default Apartments;

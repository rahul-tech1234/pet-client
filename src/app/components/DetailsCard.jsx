"use client";
import Image from "next/image";
import {
  Card,
  Chip,
  Button,
} from "@heroui/react";

import {
  FaDog,
  FaBirthdayCake,
  FaMapMarkerAlt,
  FaEnvelope,
  FaHeart,
  FaShieldAlt,
  FaSyringe,
} from "react-icons/fa";
import { DetailsModal } from "./DetailsModal";
import { useSession } from "@/lib/auth-client";
export default function DetailsCard({ pet }) {
  const {
    image,
    petName,
    species,
    breed,
    age,
    gender,
    health,
    vaccination,
    location,
    fee,
    description
  } = pet;
  //console.log(pet?._id)
  const {data}=useSession();
        const user=data?.user;
//console.log(user?.email,'details')
  return (
    <Card className=" mx-auto rounded-3xl shadow-2xl border border-default-200">
      <div className="flex flex-col md:flex-row gap-2">
        {/* Image Section */}
        <div className="w-full flex-1">
            <Image src={image} alt={petName} width={200} height={200} className="object-cover w-full rounded-md"/>

          <div className="absolute top-5 left-5 flex gap-3">
            <Chip color="warning" variant="shadow">
              {species}
            </Chip>

            <Chip color="success" variant="shadow">
              {gender}
            </Chip>
          </div>

             {/* Owner */}
          <div className="flex items-center gap-4 bg-default-100 p-5 rounded-2xl">
            <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-white">
              <FaEnvelope />
            </div>

            <div>
              <p className="text-sm text-default-500">
                Owner Email
              </p>

              <h3 className="font-semibold break-all">
                {user?.email}
              </h3>
            </div>
          </div>

        </div>

        {/* Details */}
        <Card.Content className="">

          {/* Heading */}
          <div>
            <h1 className="text-4xl font-extrabold">
              {petName}
            </h1>

            <p className="text-default-500 text-lg mt-1">
              {breed}
            </p>
          </div>

          <div className="border-t border-default-200" />

          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div className="flex items-center gap-3 p-4 rounded-2xl bg-default-100">
              <FaDog className="text-2xl text-primary" />
              <div>
                <p className="text-sm text-default-500">
                  Species
                </p>
                <h3 className="font-semibold">
                  {species}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-2xl bg-default-100">
              <FaBirthdayCake className="text-2xl text-warning" />
              <div>
                <p className="text-sm text-default-500">
                  Age
                </p>
                <h3 className="font-semibold">
                  {age}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-2xl bg-default-100">
              <FaHeart className="text-2xl text-danger" />
              <div>
                <p className="text-sm text-default-500">
                  Health
                </p>
                <h3 className="font-semibold">
                  {health}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-2xl bg-default-100">
              <FaSyringe className="text-2xl text-success" />
              <div>
                <p className="text-sm text-default-500">
                  Vaccination
                </p>
                <h3 className="font-semibold">
                  {vaccination}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-2xl bg-default-100">
              <FaMapMarkerAlt className="text-2xl text-secondary" />
              <div>
                <p className="text-sm text-default-500">
                  Location
                </p>
                <h3 className="font-semibold">
                  {location}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-2xl bg-linear-to-r from-orange-500 to-emerald-500 text-white">
              <FaShieldAlt className="text-2xl" />
              <div>
                <p className="text-sm opacity-80">
                  Adoption Fee
                </p>
                <h3 className="font-bold text-xl">
                  ${fee}
                </h3>
              </div>
            </div>
          </div>

          <div className="border-t border-default-200" />

       
          {/* Description */}
          <div className="bg-default-100 rounded-2xl p-6">
            <h3 className="font-bold text-xl mb-3">
              About {petName}
            </h3>

            <p className="leading-8 text-default-600">
              {description}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <DetailsModal  pet={pet}></DetailsModal>

          </div>

        </Card.Content>
      </div>
    </Card>
  );
}
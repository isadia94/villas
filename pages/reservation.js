import Calendar from "@/components/Calendar";
import ClientLayout from "@/components/ClientLayout";

import HorizontalAccordion from "@/components/HorizontalAccordion";

const Reservation = () => {
  return (
    <ClientLayout>
      <div className="bg-gray-100  h-fit py-12">
        <Calendar />

        <div className="w-[1000px] mx-auto my-8">
          <p className="text-[12px] text-black">Showing available accomodations</p>
          <HorizontalAccordion title="2 bedroom Executive Villa " description="This luxury accommodation features excellent finishes, including toilets and amenities. It boasts two fully ensuite bedrooms, each with its own toilet. The villa also includes an expansive lounge with an additional cloakroom, a coffee table, and a television." price={8000} guests={6} rooms={2} image="/images/img12.webp" />
          <HorizontalAccordion title="2 bedroom Standard Villa " description="This luxurious studio apartment boasts an open-plan living room featuring a cozy lounge area, an open kitchen, and a dining area in a compact and stylish design. The open-plan concept creates a spacious and airy feel, perfect for those who prefer a more modern and minimalistic living space." guests={5} price={8000} rooms={2} image='/images/2bed1.webp'  />
          <HorizontalAccordion title="1 bedroom Villa " description="This villa comprises of elegant finishes with the following amenities, executive lounge with a coffee table and a TV, WIFI with high-speed internet connection. There is also an open plan kitchen fully equipped with kitchen amenities that include a cooker with gas, fridge, microwave and coffee maker and a wooden dining that accommodates 4 pax." guests={4} price={5000} rooms={1} image="/images/1bed.webp"  />
        </div>
      </div>
    </ClientLayout>
  );
};

export default Reservation;

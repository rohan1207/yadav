import { motion } from "framer-motion";
import { HiArrowNarrowRight } from "react-icons/hi";

const services = [
  {
    title: "Full Mouth Rehabilitation",
    description:
      "Full mouth rehabilitation, also known as full mouth reconstruction, is a comprehensive dental treatment plan that aims to restore the health, function, and appearance of all teeth in the mouth",
    image: "/Full_Mouth_Rehabilitation.jpg",
  },
  {
    title: "Root Canal Treatment",
    description:
      "A root canal is a dental procedure that treats an infected or damaged tooth by removing the infected pulp and replacing it with a filling",
    image: "/Root_Canal_Treatment.jpg",
  },
  {
    title: "Implants",
    description:
      "A dental implant is a structure that replaces a missing tooth. With screw-like devices, the surgeon inserts an implant into the jawbone, and it acts as an anchor for an artificial tooth, called a crown.",
    image: "/Implants.jpg",
  },
  {
    title: "Crown & Bridge",
    description:
      "A crown, or a 'cap,' fits over an existing tooth. It requires restoration due to deep decay, a fracture, or a crack. At least three units make up a bridge: two crowns (abutments) fused to a pontic, or fake tooth, that replaces a missing tooth.",
    image: "/Crown_&_Bridge.jpg",
  },
  {
    title: "Oral & Maxillofacial Surgeries",
    description:
      "Maxillofacial surgery is an operation performed by a highly trained dental surgeon. These procedures can treat diseases or fix injuries of your face, jaw, neck or mouth.",
    image: "/Oral_&_Maxillofacial_Surgeries_&_Treatments_for_Jaw_fractures.jpg",
  },
  {
    title: "Flap Surgery with Bone Grafting",
    description:
      "Flap surgery with bone grafting is a dental procedure that repairs periodontal tissue and bone damage caused by advanced gum disease, also known as periodontitis",
    image: "/Flap_Surgery_with_Bone_Grafting.jpg",
  },
  {
    title: "Surgeries for Impacted Teeth",
    description:
      "Specialized surgical procedures for impacted teeth, cysts, and acute/chronic abscess conditions to restore oral health and prevent complications",
    image: "/Surgeries_for_Impacted_teeths_Cysts_Acute_Chronic_Abscess.jpg",
  },
  {
    title: "Orthodontic Treatment",
    description:
      "Orthodontic treatment is a branch of dentistry that improves the alignment of teeth and jaws using devices like braces, clear aligners, and retainers",
    image: "/Orthodontic_Treatment.jpg",
  },
  {
    title: "Cosmetic Dentistry",
    description:
      "Cosmetic dentistry is a type of oral care that improves the appearance of your teeth, gums, and smile. It's different from regular dentistry, which focuses on keeping your teeth healthy and functional.",
    image: "/Cosmetic_Dentistry.jpg",
  },
  {
    title: "Flexible Dentures",
    description:
      "Flexible dentures are a type of partial denture made from a soft, flexible material, such as nylon or other thermoplastics. They are different from traditional dentures, which are made from thicker, harder acrylic.",
    image: "/Flexible_Dentures.jpg",
  },
  {
    title: "Complete & Partial Denture",
    description:
      "Complete dentures are used when all the teeth are missing, while partial dentures are used when some natural teeth remain",
    image: "/Complete_&_Partial_Denture.jpg",
  },
  {
    title: "Post & Core Prosthesis",
    description:
      "A post and core crown is a prosthodontics solution proposed for patients who do not have enough sound tooth tissue to insert a conventional dental crown. First, the dentist prepares the root canal and cements a post in it.",
    image: "/Post_&_Core_Prosthesis_for_Crown.jpg",
  },
  {
    title: "Oral Prophylaxis",
    description:
      "Oral prophylaxis, also known as dental scaling and polishing, is a routine dental procedure that removes plaque and tartar from your teeth to prevent decay and other oral health issues",
    image: "/Scaling_Polishing_&_Bleaching_(Oral Prophylaxis).jpg",
  },
  {
    title: "OPG & RVG X-Ray",
    description:
      "An OPG is a panoramic or wide view x-ray of the lower face, which displays all the teeth of the upper and lower jaw on a single film. It demonstrates the number, position and growth of all the teeth.",
    image: "/O.P.G R.V.G X-Ray.jpg",
  },
  {
    title: "Pediatric Dental Care",
    description:
      "Specialized dental care for children from birth through adolescence, ensuring proper oral health development and maintenance",
    image: "/All_Paedodontic_Treatments_for_Childrens.jpg",
  },
];

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-t-xl">
        <img
          src={service.image}
          alt={service.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-[#0d3b66] mb-2">
          {service.title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-2 mb-4">
          {service.description}
        </p>
        <button className="inline-flex items-center gap-2 text-[#64c4ed] hover:text-[#0d3b66] transition-colors">
          <span>Learn More</span>
          <HiArrowNarrowRight className="w-5 h-5" />
        </button>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0d3b66] mb-4">
            Our Expert Services
          </h2>
          <p className="text-gray-600">
            At Ujwal Multispeciality Dental Clinic, we pride ourselves on
            providing a wide range of high-quality dental services to meet all
            your oral health needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

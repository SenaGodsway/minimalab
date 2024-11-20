import team1 from '../../assets/images/1.jpg' 
import team2 from '../../assets/images/2.jpg' 
import team3 from '../../assets/images/3.jpg' 
import team4 from '../../assets/images/4.jpg' 
import ImageComponent from '../../components/ImageCompnent';

interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Jane Doe',
    role: 'Designer',
    imageUrl: team1,
  },
  {
    name: 'John Smith',
    role: 'Developer',
    imageUrl: team2,
  },
  {
    name: 'Emily Johnson',
    role: 'Manager',
    imageUrl: team3,
  },
  {
    name: 'Michael Brown',
    role: 'Marketing',
    imageUrl: team4,
  },
];

const TeamSection: React.FC = () => {
  return (
    <section className="py-12">
      <div className="mx-auto px-4 container">
        <h2 className="mb-8 font-semibold text-[30px] text-center md:text-[48px]">Team</h2>
        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 mx-auto max-w-4xl">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div className="h-92">
                {/* <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full transition-transform duration-300 object-cover hover:scale-105"
                /> */}
                <ImageComponent
                  src={member.imageUrl}
                  alt={member.name} 
                  isGray={true}
                  className='w-full h-full transition-transform duration-600 object-cover hover:scale-105'
                 />
              </div>
              <div className="right-6 bottom-2 left-6 absolute bg-gray-950 bg-opacity-90 mx-auto p-4 rounded-xl w-4/5 text-white">
                <h3 className="font-semibold text-[20px]">{member.name}</h3>
                <p className="text-[16px]">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
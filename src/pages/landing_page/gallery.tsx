import { Sparkles } from 'lucide-react'
import galOne from '../../assets/images/01.jpg'
import galTwo from '../../assets/images/02.jpg'
import galThree from '../../assets/images/03.jpg'
import galFour from '../../assets/images/04.jpg'
import galFive from '../../assets/images/05.jpg'
import galSix from '../../assets/images/06.jpg'

const   Gallery: React.FC = () => {
  const images = [
    'https://cdn.dribbble.com/userupload/16161034/file/original-c116fc45335f98838eb21cf1e5fec598.jpg?resize=1024x768&vertical=center',
    'https://cdn.dribbble.com/userupload/16467701/file/original-f86488178894e1b7c7293d65ca27c28d.png?resize=1024x768&vertical=center',
    galOne,
    galTwo,
    galThree,
    galFour,
    galFive,
    galSix
  ];

  return (
    <div className="flex justify-center items-center">
      <div className="w-9/12">
    
        {/* <div> */}
          <div className="gap-8 grid grid-cols-1 md:grid-cols-2">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index}`}
                className="rounded-2xl w-full h-auto object-cover"
              />
            ))}
          </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Gallery;
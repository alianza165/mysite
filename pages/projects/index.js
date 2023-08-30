import { ClipboardDocumentCheckIcon, LockClosedIcon, ServerIcon, ArrowTrendingDownIcon } from '@heroicons/react/20/solid'
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '../../utils/breadcrumb';
import { useRouter } from 'next/router';

const projects = [
  {
    name: 'Dashboard',
    description: 'Streamline your asset and inventory management with our dynamic dashboards. Seamlessly integrate teams, empower managers, and assess inventory at a glance. Plan for the future with data-backed insights, optimizing orders and operations for increased efficiency.',
    image: 'https://ducaqjqbmh7lv.cloudfront.net/mysite/dashboard_mobile.png',
    link: 'dashboard',
    github: '',
  },
  {
    name: 'Data Visualization',
    description: 'Unlock operational excellence through data visualization. Leverage AWS QuickSight to gain comprehensive insights instantly. Dive into data points, detect anomalies, and steer performance with precision. Elevate decision-making and efficiency, all from a single, intuitive interface.',
    image: 'https://ducaqjqbmh7lv.cloudfront.net/mysite/datavisualization_mobile.png',
    link: 'visualization',
    github: '',
  },
  {
    name: 'E-Commerce',
    description: 'Experience the epitome of ecommerce brilliance with our Next.js, Tailwind, and Django API powered template. Seamlessly integrate your business, relishing stunning design and effortless functionality. Elevate your online presence today with easy integration and captivating aesthetics.',
    image: 'https://ducaqjqbmh7lv.cloudfront.net/mysite/ecommerce_mobile.png',
    link: 'ecommerce',
    github: '',
  },
  {
    name: 'Workflow Management',
    description: 'Elevate productivity and transparency with our management tools. Streamline employee workflows, ensuring seamless processes and resource visibility. Empower teams to collaborate efficiently, optimizing operations and fostering growth in a well-organized ecosystem.',
    image: 'https://ducaqjqbmh7lv.cloudfront.net/mysite/django_mobile.png',
    link: 'management_tool',
    github: '',
  },
];

  


export default function Projects({ theme }) {

  const router = useRouter();
  const { name } = router.query;
  const query = router.route;
  const queryParts = query.split('/');
  const lastQueryPart = queryParts[queryParts.length - 1];

  const themeClass = theme === 'dark' ? 'text-white bg-black' : 'text-black bg-white';
  const themeFont1 = theme === 'dark' ? 'text-gray-200' : 'text-gray-900';
  const themeFont2 = theme === 'dark' ? 'text-gray-400' : 'text-gray-600';
  const imageClass = theme === 'dark' ? 'brightness-90' : '';
  const logoClass = theme === 'dark' ? 'https://ducaqjqbmh7lv.cloudfront.net/mysite/github_dark.png' : 'https://ducaqjqbmh7lv.cloudfront.net/mysite/github.svg';
  const bgImage = theme ==='dark' ? 'https://ducaqjqbmh7lv.cloudfront.net/mysite/dark_blur.jpg' : 'https://ducaqjqbmh7lv.cloudfront.net/mysite/tech1.png';
  const bgClass = `url(${bgImage})`;
  // console.log(themeClass)


  return (
    <div className={`overflow-hidden pt-6 md:pt-10 pb-20 ${themeClass}`}>
      <Breadcrumb crumb={{ lastQueryPart }} />
      <div className='text-center flex justify-center'>
        <div className='mx-8 my-8 md:mb-14 w-full md:w-1/2'>
          <p className='pb-4 text-blue-500'>Showcase</p>
          <p className='pb-8 text-5xl font-sans font-bold'>Start building from these templates</p>
          <p className='pb-4 font-sans font-thin'>Choose from this list of ever growing web tools</p>
        </div>      
      </div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mx-4 md:mx-8 mt-8">
        {projects.map((project) => (
          <div>
          <div className='hover:drop-shadow-2xl hover:scale-105 transition-all'>
            <Link key={project.id} href={{ pathname: '/projects/detail', query: { name: project.link} }} passHref>
              <div 
              className="shadow aspect-h-1 aspect-w-1 overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7"
              style={{ backgroundImage: bgClass }}
              >
                <Image
                  src={project.image}
                  width={300} height={200}
                  className={`object-contain object-center group-hover:opacity-75 p-2 md:p-3 ${imageClass}`}
                />
              </div>
            </Link>
            </div>
            <h3 className={`mt-4 font-light line-clamp-2 leading-5 text-base font-sans md:font-sans ${themeFont2}`}>{project.description}</h3>
            <div class="flex items-center">
              <div>
                <p className={`mt-1 text-lg font-normal font-['Open_Sans'] ${themeFont1}`}>{project.name}</p>
              </div>
              <Image src={logoClass} width={60} height={60} className='pl-4' />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

